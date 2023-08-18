import { FC } from "react";
import Head from "next/head";
import { LayoutQuery } from "@/graphql/generated/graphql";
import LayoutBlocks from "@/components/LayoutBlocks";
import ThemeColors from "@/styles/ThemeColors";

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
      <ThemeColors siteLibrary={layout.siteLibrary} />
      <form
        name="contact"
        action="#?success=true"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="w-full">
          <label htmlFor="yourname">Your Name:</label>
          <input type="text" name="name" id="yourname" />
        </div>
        <div className="w-full">
          <label htmlFor="youremail">Your Email: </label>{" "}
          <input type="email" name="email" id="youremail" />
        </div>
        <div className="w-full">
          <label htmlFor="yourmessage">Message: </label>
          <textarea name="message" id="yourmessage"></textarea>
        </div>
        <div className="w-full">
          <button type="submit">Send</button>
        </div>
      </form>
      <LayoutBlocks layout={layout} />
    </>
  );
};

export default PageComponent;
