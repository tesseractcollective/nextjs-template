import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import type { SiteLibraryQuery } from "@/graphql/generated/graphql";
import { sdkClient } from "@/lib/graphql-client";
import { GetServerSideProps } from "next";

type Props = {
  siteLibraryData: SiteLibraryQuery
}

export const getServerSideProps: GetServerSideProps = async () => {
  const siteLibraryData: SiteLibraryQuery = await sdkClient.siteLibrary();
  return {
    props: {
      siteLibraryData,
    },
  };
};

class Document extends NextDocument<Props> {
  render() {
    const siteLibraryData = this.props?.siteLibraryData
    // const { siteLibrary } = siteLibraryData
    return (
      <Html>
        <Head>
        {!!siteLibraryData?.siteLibrary?.favicon && (
          <link rel="shortcut icon" href={siteLibraryData?.siteLibrary.favicon.url} />
        )}
        {!!siteLibraryData?.siteLibrary?.metaOgImage && (
          <meta property="og:image" content={siteLibraryData?.siteLibrary.metaOgImage.url} />
        )}
        {!!siteLibraryData?.siteLibrary?.metaOgImage && (
          <meta name="twitter:image" content={siteLibraryData?.siteLibrary.metaOgImage.url} />
        )}
        {!!siteLibraryData?.siteLibrary?.metaDescription && (
          <meta name="description" content={siteLibraryData?.siteLibrary.metaDescription} />
        )}
        {!!siteLibraryData?.siteLibrary?.title && <title>{siteLibraryData?.siteLibrary.title}</title>}
        {!!siteLibraryData?.siteLibrary?.metaAppleTouchIcon && (
          <link
            rel="apple-touch-icon"
            href={siteLibraryData?.siteLibrary.metaAppleTouchIcon?.url}
          />
        )}
        {!!siteLibraryData?.siteLibrary?.metaGoogleConsoleVerification && (
          <meta
            name="google-site-verification"
            content={siteLibraryData?.siteLibrary.metaGoogleConsoleVerification}
          />
        )}
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document