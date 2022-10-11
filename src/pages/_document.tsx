import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Marvel:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@400;700&family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700;900&display=swap'
            rel='stylesheet'
          />

          <link rel='shortucut icon' href='/favicon.png' type='image/png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
