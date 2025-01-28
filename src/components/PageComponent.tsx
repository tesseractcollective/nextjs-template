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

  const pageUrl = scrubbedDomain;
  const twitterHandle = twitterLink
    ?.replace("https://twitter.com/", "")
    ?.replace("https://x.com/", "");

  const safeTitle = title || ""; // Ensure title is never undefined
  const safeDescription = layout.page?.seoDescription || metaDescription || "";

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={safeDescription} />
        {safeTitle && <title>{safeTitle}</title>}

        {/* Favicon and Apple Touch Icon */}
        {favicon?.url && <link rel="shortcut icon" href={favicon.url} />}
        {metaAppleTouchIcon?.url && (
          <link rel="apple-touch-icon" href={metaAppleTouchIcon.url} />
        )}

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        {safeTitle && <meta property="og:title" content={safeTitle} />}
        <meta property="og:description" content={safeDescription} />
        <meta property="og:url" content={pageUrl} />
        {metaOgImage?.url && (
          <meta property="og:image" content={metaOgImage.url} />
        )}
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {safeTitle && <meta name="twitter:title" content={safeTitle} />}
        <meta name="twitter:description" content={safeDescription} />
        {metaOgImage?.url && (
          <meta name="twitter:image" content={metaOgImage.url} />
        )}
        {twitterLink && <meta name="twitter:site" content={twitterLink} />}
        {twitterHandle && (
          <meta name="twitter:creator" content={`@${twitterHandle}`} />
        )}

        {/* Google Verification */}
        {metaGoogleConsoleVerification && (
          <meta
            name="google-site-verification"
            content={metaGoogleConsoleVerification}
          />
        )}

        {/* Robots Meta Tag */}
        {layout.page?.noIndex && (
          <meta name="robots" content="noindex,nofollow" />
        )}

        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: safeTitle,
            description: safeDescription,
            url: pageUrl,
            image: metaOgImage?.url,
          })}
        </script>

        {/* Facebook Pixel */}
        {facebookPixelId && <FacebookPixel facebookPixelId={facebookPixelId} />}
      </Head>

      {analyticsId && <GoogleAnalytics analyticsId={analyticsId} />}
      <ThemeColors siteLibrary={layout.siteLibrary} />
      <LayoutBlocks layout={layout} events={events} />
    </>
  );
};

export default PageComponent;
