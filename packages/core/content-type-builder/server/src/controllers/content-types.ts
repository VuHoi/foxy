import _ from 'lodash';
import type { Context } from 'koa';
import 'koa-bodyparser';

import { contentTypes } from '@strapi/utils';
import type { UID } from '@strapi/types';
import { getService } from '../utils';
import {
  validateContentTypeInput,
  validateUpdateContentTypeInput,
  validateKind,
} from './validation/content-type';

const { hasDraftAndPublish } = contentTypes;

export default {
  async getContentTypes(ctx: Context) {
    const { kind } = ctx.query;

    try {
      await validateKind(kind);
    } catch (error) {
      return ctx.send({ error }, 400);
    }

    const contentTypeService = getService('content-types');

    const contentTypes = Object.keys(strapi.contentTypes)
      .filter(
        (uid) =>
          !kind ||
          _.get(strapi.contentTypes[uid as UID.ContentType], 'kind', 'collectionType') === kind
      )
      .map((uid) =>
        contentTypeService.formatContentType(strapi.contentTypes[uid as UID.ContentType])
      );

    ctx.send({
      data: contentTypes,
    });
  },

  getContentType(ctx: Context) {
    const { uid } = ctx.params;

    const contentType = strapi.contentTypes[uid];

    if (!contentType) {
      return ctx.send({ error: 'contentType.notFound' }, 404);
    }

    const contentTypeService = getService('content-types');

    ctx.send({ data: contentTypeService.formatContentType(contentType) });
  },

  async createContentType(ctx: Context) {
    const { body } = ctx.request;

    try {
      await validateContentTypeInput(body);
    } catch (error) {
      return ctx.send({ error }, 400);
    }

    try {
      strapi.reload.isWatching = false;

      const contentTypeService = getService('content-types');

      const contentType = await contentTypeService.createContentType({
        contentType: body.contentType,
        components: body.components,
      });

      const metricsPayload = {
        eventProperties: {
          kind: contentType.kind,
          hasDraftAndPublish: hasDraftAndPublish(contentType.schema),
        },
      };
      console.log(metricsPayload);

      // if (_.isEmpty(strapi.api)) {
      //   await strapi.telemetry.send('didCreateFirstContentType', metricsPayload);
      // } else {
      //   await strapi.telemetry.send('didCreateContentType', metricsPayload);
      // }

      setImmediate(() => strapi.reload());

      ctx.send({ data: { uid: contentType.uid } }, 201);
    } catch (err) {
      strapi.log.error(err);
      await strapi.telemetry.send('didNotCreateContentType', {
        eventProperties: { error: (err as Error).message || err },
      });
      ctx.send({ error: (err as Error).message || 'Unknown error' }, 400);
    }
  },

  async updateContentType(ctx: Context) {
    const { uid } = ctx.params;
    const { body } = ctx.request;

    if (!_.has(strapi.contentTypes, uid)) {
      return ctx.send({ error: 'contentType.notFound' }, 404);
    }

    try {
      await validateUpdateContentTypeInput(body);
    } catch (error) {
      return ctx.send({ error }, 400);
    }

    try {
      strapi.reload.isWatching = false;

      const contentTypeService = getService('content-types');

      const component = await contentTypeService.editContentType(uid, {
        contentType: body.contentType,
        components: body.components,
      });

      setImmediate(() => strapi.reload());

      ctx.send({ data: { uid: component.uid } }, 201);
    } catch (error) {
      strapi.log.error(error);
      ctx.send({ error: (error as Error)?.message || 'Unknown error' }, 400);
    }
  },

  async deleteContentType(ctx: Context) {
    const { uid } = ctx.params;

    if (!_.has(strapi.contentTypes, uid)) {
      return ctx.send({ error: 'contentType.notFound' }, 404);
    }

    try {
      strapi.reload.isWatching = false;

      const contentTypeService = getService('content-types');

      const component = await contentTypeService.deleteContentType(uid);

      setImmediate(() => strapi.reload());

      ctx.send({ data: { uid: component.uid } });
    } catch (error) {
      strapi.log.error(error);
      ctx.send({ error: (error as Error)?.message || 'Unknown error' }, 400);
    }
  },
};
