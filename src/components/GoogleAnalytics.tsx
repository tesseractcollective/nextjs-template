import Script from "next/script";

interface GoogleAnalyticsProps {
  analyticsId: string;
}

function GoogleAnalytics({ analyticsId }: GoogleAnalyticsProps) {
  if (!analyticsId) return null; // Return null instead of an empty fragment

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        id={`gtag-${analyticsId}`}
      />
      <Script
        strategy="lazyOnload"
        id={`gtag-inline-${analyticsId}`}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticsId}');
          `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
