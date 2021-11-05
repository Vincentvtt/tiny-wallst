import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <title>Tiny Wall Street</title>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
