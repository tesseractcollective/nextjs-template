import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

// import Script from 'next/script'

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* <Script src="//www.instagram.com/embed.js"></Script>
        <Script src="https://widget.bandsintown.com/main.min.js"></Script>
        <Script src="//widget-app.songkick.com/injector"></Script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <form
            name="contact_document"
            netlify-honeypot="bot-field"
            hidden
            className="sr-only"
          >
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="phone" name="phone" />
            <textarea name="message"></textarea>
          </form>
        </body>
      </Html>
    );
  }
}

export default Document;
