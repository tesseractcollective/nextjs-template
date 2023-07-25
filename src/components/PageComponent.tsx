"use client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import LayoutBlocks from "@/components/LayoutBlocks";
import ThemeColors from "@/styles/ThemeColors";
import Head from 'next/head';

interface HomeProps {
  layout: LayoutQuery;
}

export default function PageComponent({ layout }: HomeProps) {
  if (!layout.siteLibrary) return <div />;

  return (
    <>
    <Head>
    {!!layout?.siteLibrary?.favicon && (
          <link rel="shortcut icon" href={layout?.siteLibrary.favicon.url} />
        )}
        {!!layout?.siteLibrary?.metaOgImage && (
          <meta property="og:image" content={layout?.siteLibrary.metaOgImage.url} />
        )}
        {!!layout?.siteLibrary?.metaOgImage && (
          <meta name="twitter:image" content={layout?.siteLibrary.metaOgImage.url} />
        )}
        {!!layout?.siteLibrary?.metaDescription && (
          <meta name="description" content={layout?.siteLibrary.metaDescription} />
        )}
        {!!layout?.siteLibrary?.title && <title>{layout?.siteLibrary.title}</title>}
        {!!layout?.siteLibrary?.metaAppleTouchIcon && (
          <link
            rel="apple-touch-icon"
            href={layout?.siteLibrary.metaAppleTouchIcon?.url}
          />
        )}
        {!!layout?.siteLibrary?.metaGoogleConsoleVerification && (
          <meta
            name="google-site-verification"
            content={layout?.siteLibrary.metaGoogleConsoleVerification}
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
      <ThemeColors siteLibrary={layout.siteLibrary} />
      <LayoutBlocks layout={layout} />
    </>
  );
}
