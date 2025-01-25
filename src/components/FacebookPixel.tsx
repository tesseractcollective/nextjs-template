import Script from "next/script";

interface FacebookPixelProps {
  facebookPixelId: string;
  events?: { event: string; parameters?: Record<string, any> }[];
}

const FacebookPixel: React.FC<FacebookPixelProps> = ({
  facebookPixelId,
  events,
}) => {
  if (!facebookPixelId) return null;

  return (
    <Script id="fb-pixel" strategy="afterInteractive">
      {`
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
        ${events
          ?.map(
            (event) =>
              `fbq('track', '${event.event}', ${JSON.stringify(
                event.parameters || {}
              )});`
          )
          .join("\n")}
      `}
    </Script>
  );
};

export default FacebookPixel;
