import type {
  PageFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import Parallax from "@/components/Parallax";
import StandOutText from "@/components/StandOutText";
import IframeBox from "@/components/IframeBox";
import { StripePricingTable } from "@/components/StripePricingTable";
import InstagramSection from "@/components/InstagramSection";
import GallerySection from "@/components/GallerySection";
import HTMLText from "@/components/elements/HTMLText";
import ElementImage from "@/components/elements/ElementImage";
import ScrollDigits from "@/components/elements/ScrollDigits";
import Timeline from "@/components/elements/Timeline";
import MapBoxMap from "@/components/elements/MapBoxMap";
import DrumPadComponent from "./DrumPadComponent";

type ElementsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["elements"];

interface ElementsProps {
  elements: ElementsType;
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function LayoutBlocks({ elements, siteLibrary }: ElementsProps) {
  if (!elements) return <></>;

  const {
    iFrameCode,
    iFrameTitle,
    parallaxImage,
    standOutText,
    gallery,
    galleryLayout,
    stripePricingTableId,
    stripePublishableKey,
    displayInstagramSectionUsername,
    image,
    imageCssClass,
    htmlText,
    htmlTextCssClass,
    elementJson,
    mapLatLong,
  } = elements;
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
      {!!gallery && (
        <GallerySection
          galleryData={gallery}
          galleryLayoutData={galleryLayout || undefined}
        />
      )}
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
      {!!elementJson?.timelineData && (
        <Timeline timelineData={elementJson.timelineData} />
      )}
      {!!elementJson?.displayDrumPad && <DrumPadComponent />}
      {!!mapLatLong &&
        !!siteLibrary?.mapKey &&
        !!mapLatLong?.longitude &&
        !!mapLatLong?.longitude && (
          <MapBoxMap
            lat={mapLatLong.latitude}
            long={mapLatLong.longitude}
            mapKey={siteLibrary.mapKey}
          />
        )}
    </>
  );
}
