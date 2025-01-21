import Script from "next/script";

interface GoogleAnalyticsProps {
  analyticsId: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ analyticsId }) => {
  if (!analyticsId) return null;

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
            gtag('config', '${analyticsId}', {
              'anonymize_ip': true, // Optional: Anonymize user IPs
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
