import Head from "next/head";

interface GoogleAnalyticsProps {
  analyticsId: string;
}

function GoogleAnalytics({ analyticsId }: GoogleAnalyticsProps) {
  if (!analyticsId) return <></>;
  return (
    <Head>
      {analyticsId && (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
        />
      )}
      {analyticsId && (
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "${analyticsId}");
          `}
        </script>
      )}
    </Head>
  );
}

export default GoogleAnalytics;
