/* eslint-disable @next/next/no-script-component-in-head */
import { FC } from "react";
import Head from "next/head";
import { LayoutQuery } from "@/graphql/generated/graphql";
import LayoutBlocks from "@/components/LayoutBlocks";
import ThemeColors from "@/styles/ThemeColors";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Event } from "@/components/Calendar/calendarHelpers";

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
        {facebookPixelId && (
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${facebookPixelId}');
              fbq('track', 'PageView');
            `,
            }}
          />
        )}
      </Head>
      {!!analyticsId && <GoogleAnalytics analyticsId={analyticsId} />}
      <ThemeColors siteLibrary={layout.siteLibrary} />
      <LayoutBlocks layout={layout} events={events} />
    </>
  );
};

export default PageComponent;
