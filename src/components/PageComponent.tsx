/* eslint-disable @next/next/no-script-component-in-head */
import React, { FC } from "react";
import Head from "next/head";
import { LayoutQuery } from "@/graphql/generated/graphql";
import LayoutBlocks from "@/components/LayoutBlocks";
import ThemeColors from "@/styles/ThemeColors";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Event } from "@/components/Calendar/calendarHelpers";
import FacebookPixel from "@/components/FacebookPixel";

interface Props {
  layout: LayoutQuery;
  events?: Event[];
}

const PageComponent: FC<Props> = ({ layout, events }) => {
  if (!layout.siteLibrary) return <div />;

  const {
    title,
    metaDescription,
    metaOgImage,
    favicon,
    metaAppleTouchIcon,
    metaGoogleConsoleVerification,
    analyticsId,
    facebookPixelId,
    metaDomain,
    twitterLink,
  } = layout.siteLibrary;

  // Scrub metaDomain to avoid duplicating "https://" or "http://"
  const scrubbedDomain =
    metaDomain?.startsWith("http://") || metaDomain?.startsWith("https://")
      ? metaDomain
      : `https://${metaDomain}`;

  // Construct the page URL dynamically using the scrubbed domain
  const pageUrl = scrubbedDomain; // Add the current path if needed
  const twitterHandle = twitterLink
    ?.replace("https://twitter.com/", "")
    ?.replace("https://x.com/", "");
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

        <meta
          name="description"
          content={layout.page?.seoDescription ?? metaDescription ?? ""}
        />

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

        {/* Open Graph Tags */}
        {!!title && <meta property="og:title" content={title} />}
        <meta
          property="og:description"
          content={layout.page?.seoDescription ?? metaDescription ?? ""}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {!!title && <meta name="twitter:title" content={title} />}
        <meta
          name="twitter:description"
          content={layout.page?.seoDescription ?? metaDescription ?? ""}
        />
        {!!twitterLink && <meta name="twitter:site" content={twitterLink} />}
        {!!twitterHandle && (
          <meta name="twitter:creator" content={`@${twitterHandle}`} />
        )}

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Language and Locale */}
        <meta http-equiv="content-language" content="en" />
        <meta property="og:locale" content="en_US" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description: layout.page?.seoDescription ?? metaDescription ?? "",
            url: pageUrl,
            image: metaOgImage?.url,
          })}
        </script>
        {facebookPixelId && <FacebookPixel facebookPixelId={facebookPixelId} />}
      </Head>
      {!!analyticsId && <GoogleAnalytics analyticsId={analyticsId} />}
      <ThemeColors siteLibrary={layout.siteLibrary} />
      <LayoutBlocks layout={layout} events={events} />
    </>
  );
};

export default PageComponent;
