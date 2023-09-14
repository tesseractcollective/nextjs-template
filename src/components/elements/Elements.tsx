import type { PageFieldsFragment } from "@/graphql/generated/graphql";
import Parallax from "@/components/Parallax";
import StandOutText from "@/components/StandOutText";
import IframeBox from "@/components/IframeBox";
import { StripePricingTable } from "@/components/StripePricingTable";
import InstagramSection from "@/components/InstagramSection";
import GallerySection from "@/components/GallerySection";
import HTMLText from "@/components/elements/HTMLText";
import ElementImage from "@/components/elements/ElementImage";
import ScrollDigits from "@/components/elements/ScrollDigits";

type ElementsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["elements"];

interface ElementsProps {
  elements: ElementsType;
}

export default function LayoutBlocks({ elements }: ElementsProps) {
  if (!elements) return <></>;

  const {
    iFrameCode,
    iFrameTitle,
    parallaxImage,
    standOutText,
    gallery,
    stripePricingTableId,
    stripePublishableKey,
    displayInstagramSectionUsername,
    image,
    imageCssClass,
    htmlText,
    htmlTextCssClass,
    elementJson,
  } = elements;
  console.log("iFrameCode", iFrameCode);
  return (
    <>
      {!!iFrameCode && (
        <IframeBox code={iFrameCode} title={iFrameTitle || undefined} />
      )}
      {!!parallaxImage?.url && <Parallax parallaxImage={parallaxImage.url} />}

      {!!standOutText && <StandOutText standOutText={standOutText} />}
      {!!htmlText && (
        <HTMLText
          htmlText={htmlText}
          htmlTextCssClass={htmlTextCssClass || undefined}
        />
      )}
      {!!image?.url && (
        <ElementImage
          image={image.url}
          imageCssClass={imageCssClass || undefined}
        />
      )}
      {!!gallery && <GallerySection elements={elements} />}
      {!!stripePricingTableId && stripePublishableKey && (
        <StripePricingTable
          pricingTableId={stripePricingTableId}
          publishableKey={stripePublishableKey}
        />
      )}
      {!!displayInstagramSectionUsername && (
        <InstagramSection IGUsername={displayInstagramSectionUsername} />
      )}
      {!!elementJson?.scrollDigitsData && (
        <ScrollDigits scrollDigitData={elementJson.scrollDigitsData} />
      )}
    </>
  );
}
