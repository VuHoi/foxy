import { NoJavascript } from './NoJavascript';

/**
 * TODO: add favicons.........
 */

const globalStyles = `
  html,
  body,
  #strapi {
    height: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
`;

interface DefaultDocumentProps {
  entryPath?: string;
}

/**
 * @internal
 */
const DefaultDocument = ({ entryPath }: DefaultDocumentProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex" />
        <meta name="referrer" content="same-origin" />
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height"
        />

        <title>Strapi Admin</title>
        <style>{globalStyles}</style>
      </head>
      <body>
        <div id="strapi" />
        <NoJavascript />
        {entryPath ? <script type="module" src={entryPath} /> : null}
      </body>
    </html>
  );
};

export { DefaultDocument };
