import Head from "next/head";

interface GoogleAnalyticsProps {
  analyticsId: string;
}

function GoogleAnalytics({ analyticsId }: GoogleAnalyticsProps) {
  if (!analyticsId) return null; // Return null instead of an empty fragment

  return (
    <Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "${analyticsId}");
          `,
        }}
      />
    </Head>
  );
}

export default GoogleAnalytics;
