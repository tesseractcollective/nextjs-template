import { AppProps } from "next/app";
import Head from "next/head";
import "@/app/tailwind.css";
import "@/styles/global.scss";
import "@/styles/layoutBlocks.scss";
import type { SiteLibraryQuery } from "@/graphql/generated/graphql";
import { sdkClient } from "@/lib/graphql-client";
import { GetServerSideProps } from "next";
import Script from "next/script";

export const getServerSideProps: GetServerSideProps = async () => {
  const siteLibraryData: SiteLibraryQuery = await sdkClient.siteLibrary();
  return {
    props: {
      siteLibraryData,
    },
  };
};

export default function App(
  { Component, pageProps }: AppProps,
  siteLibraryData: SiteLibraryQuery
) {
  const { siteLibrary } = siteLibraryData;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {!!siteLibrary?.favicon && (
          <link rel="shortcut icon" href={siteLibrary.favicon.url} />
        )}
        {!!siteLibrary?.metaOgImage && (
          <meta property="og:image" content={siteLibrary.metaOgImage.url} />
        )}
        {!!siteLibrary?.metaOgImage && (
          <meta name="twitter:image" content={siteLibrary.metaOgImage.url} />
        )}
        {!!siteLibrary?.metaDescription && (
          <meta name="description" content={siteLibrary.metaDescription} />
        )}
        {!!siteLibrary?.title && <title>{siteLibrary.title}</title>}
        {!!siteLibrary?.metaAppleTouchIcon && (
          <link
            rel="apple-touch-icon"
            href={siteLibrary.metaAppleTouchIcon?.url}
          />
        )}
        {!!siteLibrary?.metaGoogleConsoleVerification && (
          <meta
            name="google-site-verification"
            content={siteLibrary.metaGoogleConsoleVerification}
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
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Script src="//widget-app.songkick.com/injector"></Script>
      <Component {...pageProps} />
    </>
  );
}
