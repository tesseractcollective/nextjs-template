/* eslint-disable @next/next/no-script-component-in-head */
import { FC } from "react";
import Head from "next/head";
import { LayoutQuery } from "@/graphql/generated/graphql";
import LayoutBlocks from "@/components/LayoutBlocks";
import ThemeColors from "@/styles/ThemeColors";
import Script from "next/script";
import GoogleAnalytics from "./GoogleAnalytics";

interface Props {
  layout: LayoutQuery;
}

const PageComponent: FC<Props> = ({ layout }) => {
  if (!layout.siteLibrary) return <div />;

  const {
    title,
    metaDescription,
    metaOgImage,
    favicon,
    metaAppleTouchIcon,
    metaGoogleConsoleVerification,
    analyticsId,
  } = layout.siteLibrary;

  return (
    <>
      <Head>
        {!!favicon && <link rel="shortcut icon" href={favicon.url} />}
        {!!metaOgImage && (
          <meta property="og:image" content={metaOgImage.url} />
        )}
        {!!metaOgImage && (
          <meta name="twitter:image" content={metaOgImage.url} />
        )}
        {!!metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
        {!!title && <title>{title}</title>}
        {!!metaAppleTouchIcon && (
          <link rel="apple-touch-icon" href={metaAppleTouchIcon.url} />
        )}
        {!!metaGoogleConsoleVerification && (
          <meta
            name="google-site-verification"
            content={metaGoogleConsoleVerification}
          />
        )}
        {layout.page?.noIndex && (
          <meta name="robots" content="noindex,nofollow" />
        )}
      </Head>
      {!!analyticsId && <GoogleAnalytics analyticsId={analyticsId} />}
      <ThemeColors siteLibrary={layout.siteLibrary} />
      <LayoutBlocks layout={layout} />
    </>
  );
};

export default PageComponent;
