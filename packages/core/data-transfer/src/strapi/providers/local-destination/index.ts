import { Writable } from 'stream';
import path from 'path';
import * as fse from 'fs-extra';
import { isFunction } from 'lodash/fp';
import type {
  IAsset,
  IDestinationProvider,
  IMetadata,
  ProviderType,
  Transaction,
  IFile,
} from '../../../../types';

import { restore } from './strategies';
import * as utils from '../../../utils';
import { ProviderTransferError, ProviderValidationError } from '../../../errors/providers';
import { assertValidStrapi } from '../../../utils/providers';

export const VALID_CONFLICT_STRATEGIES = ['restore', 'merge'];
export const DEFAULT_CONFLICT_STRATEGY = 'restore';

export interface ILocalStrapiDestinationProviderOptions {
  getStrapi(): Strapi.Strapi | Promise<Strapi.Strapi>;
  autoDestroy?: boolean;
  restore?: restore.IRestoreOptions;
  strategy: 'restore' | 'merge';
}

const streamToBuffer = (stream: any): Promise<Buffer> =>
  new Promise((resolve, reject) => {
    const chunks: any[] = [];
    stream.on('data', (chunk: any) => {
      chunks.push(chunk);
    });
    stream.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    stream.on('error', reject);
  });

class LocalStrapiDestinationProvider implements IDestinationProvider {
  name = 'destination::local-strapi';

  type: ProviderType = 'destination';

  options: ILocalStrapiDestinationProviderOptions;

  strapi?: Strapi.Strapi;

  transaction?: Transaction;

  /**
   * The entities mapper is used to map old entities to their new IDs
   */
  #entitiesMapper: { [type: string]: { [id: number]: number } };

  constructor(options: ILocalStrapiDestinationProviderOptions) {
    this.options = options;
    this.#entitiesMapper = {};
  }

  async bootstrap(): Promise<void> {
    this.#validateOptions();
    this.strapi = await this.options.getStrapi();

    this.transaction = utils.transaction.createTransaction(this.strapi);
  }

  async close(): Promise<void> {
    const { autoDestroy } = this.options;
    this.transaction?.end();

    // Basically `!== false` but more deterministic
    if (autoDestroy === undefined || autoDestroy === true) {
      await this.strapi?.destroy();
    }
  }

  #validateOptions() {
    if (!VALID_CONFLICT_STRATEGIES.includes(this.options.strategy)) {
      throw new ProviderValidationError(`Invalid strategy ${this.options.strategy}`, {
        check: 'strategy',
        strategy: this.options.strategy,
        validStrategies: VALID_CONFLICT_STRATEGIES,
      });
    }
  }

  async #deleteAll() {
    assertValidStrapi(this.strapi);
    return restore.deleteRecords(this.strapi, this.options.restore);
  }

  async rollback() {
    await this.transaction?.rollback();
  }

  async beforeTransfer() {
    if (!this.strapi) {
      throw new Error('Strapi instance not found');
    }

    await this.transaction?.attach(async () => {
      try {
        if (this.options.strategy === 'restore') {
          await this.#deleteAll();
        }
      } catch (error) {
        throw new Error(`restore failed ${error}`);
      }
    });
  }

  getMetadata(): IMetadata {
    const strapiVersion = strapi.config.get('info.strapi');
    const createdAt = new Date().toISOString();

    return {
      createdAt,
      strapi: {
        version: strapiVersion,
      },
    };
  }

  getSchemas() {
    assertValidStrapi(this.strapi, 'Not able to get Schemas');
    const schemas = {
      ...this.strapi.contentTypes,
      ...this.strapi.components,
    };

    return utils.schema.mapSchemasValues(schemas);
  }

  createEntitiesWriteStream(): Writable {
    assertValidStrapi(this.strapi, 'Not able to import entities');
    const { strategy } = this.options;

    const updateMappingTable = (type: string, oldID: number, newID: number) => {
      if (!this.#entitiesMapper[type]) {
        this.#entitiesMapper[type] = {};
      }

      Object.assign(this.#entitiesMapper[type], { [oldID]: newID });
    };

    if (strategy === 'restore') {
      return restore.createEntitiesWriteStream({
        strapi: this.strapi,
        updateMappingTable,
        transaction: this.transaction,
      });
    }

    throw new ProviderValidationError(`Invalid strategy ${this.options.strategy}`, {
      check: 'strategy',
      strategy: this.options.strategy,
      validStrategies: VALID_CONFLICT_STRATEGIES,
    });
  }

  // TODO: Move this logic to the restore strategy
  async createAssetsWriteStream(): Promise<Writable> {
    assertValidStrapi(this.strapi, 'Not able to stream Assets');

    // const assetsDirectory = path.join(this.strapi.dirs.static.public, 'uploads');
    // const backupDirectory = path.join(
    //   this.strapi.dirs.static.public,
    //   `uploads_backup_${Date.now()}`
    // );

    // try {
    //   await fse.move(assetsDirectory, backupDirectory);
    //   await fse.mkdir(assetsDirectory);
    //   // Create a .gitkeep file to ensure the directory is not empty
    //   await fse.outputFile(path.join(assetsDirectory, '.gitkeep'), '');
    // } catch (err) {
    //   throw new ProviderTransferError(
    //     'The backup folder for the assets could not be created inside the public folder. Please ensure Strapi has write permissions on the public directory'
    //   );
    // }
    const strapi = this.strapi;
    const transaction = this.transaction;
    return new Writable({
      objectMode: true,
      async final(next) {
        next();
      },
      async write(chunk: IAsset, _encoding, callback) {
        await transaction?.attach(async () => {
          const uploadData = {
            ...chunk.metadata,
            stream: chunk.stream,
            buffer: chunk?.buffer,
          };

          try {
            if (isFunction(strapi.plugin('upload').provider.uploadStream)) {
              console.log('uploading stream');
              await strapi.plugin('upload').provider.uploadStream(uploadData);
              console.log('uploaded stream');
            } else {
              uploadData.buffer = await streamToBuffer(uploadData.stream);
              console.log('uploading buffer');
              await strapi.plugin('upload').provider.upload(uploadData);
              console.log('uploaded buffer');
            }
            // uploadData.buffer = await streamToBuffer(uploadData.stream);
            // uploadData.size = uploadData.buffer.length;
            // console.log('uploading buffer', uploadData.url);
            // // plugin::upload.file
            // await strapi.plugin('upload').provider.upload(uploadData);
            // console.log('uploaded buffer', uploadData.url);
            // if (uploadData?.type) {
            //   const [entry]: IFile[] = await strapi.db.query('plugin::upload.file').findMany({
            //     where: { hash: uploadData.mainHash },
            //   });
            //   const specificFormat = entry?.formats?.[uploadData.type];
            //   if (specificFormat) {
            //     specificFormat.url = uploadData.url;
            //   }
            // }
            // const entries = await strapi.db.query('plugin::upload.file').findMany({
            //   where: { hash: uploadData.hash },
            // });
            // console.log('entries', JSON.stringify(entries, null, 2));
            callback();
          } catch (error) {
            console.log(error);
            callback(new Error(`Error while uploading asset ${chunk.filename}`));
          }
        });
      },
    });
  }

  async createConfigurationWriteStream(): Promise<Writable> {
    assertValidStrapi(this.strapi, 'Not able to stream Configurations');

    const { strategy } = this.options;

    if (strategy === 'restore') {
      return restore.createConfigurationWriteStream(this.strapi, this.transaction);
    }

    throw new ProviderValidationError(`Invalid strategy ${strategy}`, {
      check: 'strategy',
      strategy,
      validStrategies: VALID_CONFLICT_STRATEGIES,
    });
  }

  async createLinksWriteStream(): Promise<Writable> {
    if (!this.strapi) {
      throw new Error('Not able to stream links. Strapi instance not found');
    }

    const { strategy } = this.options;
    const mapID = (uid: string, id: number): number | undefined => this.#entitiesMapper[uid]?.[id];

    if (strategy === 'restore') {
      return restore.createLinksWriteStream(mapID, this.strapi, this.transaction);
    }

    throw new ProviderValidationError(`Invalid strategy ${strategy}`, {
      check: 'strategy',
      strategy,
      validStrategies: VALID_CONFLICT_STRATEGIES,
    });
  }
}

export const createLocalStrapiDestinationProvider = (
  options: ILocalStrapiDestinationProviderOptions
) => {
  return new LocalStrapiDestinationProvider(options);
};
