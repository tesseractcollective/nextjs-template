import type { PageFieldsFragment } from "@/graphql/generated/graphql";
import Parallax from "@/components/Parallax";
import StandOutText from "@/components/StandOutText";
import IframeBox from "@/components/IframeBox";
import { StripePricingTable } from "@/components/StripePricingTable";
import InstagramSection from "@/components/InstagramSection";
import GallerySection from "@/components/GallerySection";

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
  } = elements;

  return (
    <>
      {!!iFrameCode && (
        <IframeBox code={iFrameCode} title={iFrameTitle || undefined} />
      )}
      {!!parallaxImage?.url && <Parallax parallaxImage={parallaxImage.url} />}

      {!!standOutText && <StandOutText standOutText={standOutText} />}
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
    </>
  );
}
