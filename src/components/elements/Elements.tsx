import type { PageFieldsFragment } from "@/graphql/generated/graphql";
import Parallax from "@/components/Parallax";
import StandOutText from "@/components/StandOutText";
import IframeBox from "@/components/IframeBox";
import { StripePricingTable } from "@/components/StripePricingTable";
import InstagramSection from "@/components/InstagramSection";
import Gallery from "../Gallery";

type ElementsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["elements"];

interface ElementsProps {
  elements: ElementsType;
}

export default function LayoutBlocks({ elements }: ElementsProps) {
  if (!elements) return <></>;

  return (
    <>
      {!!elements?.iFrameCode && elements?.iFrameTitle && (
        <IframeBox code={elements?.iFrameCode} title={elements?.iFrameTitle} />
      )}
      {elements?.parallaxImage?.url && (
        <Parallax parallaxImage={elements?.parallaxImage?.url} />
      )}

      {!!elements?.standOutText && (
        <StandOutText standOutText={elements.standOutText} />
      )}
      {!!elements.gallery && elements?.galleryLayout && (
        <Gallery elements={elements} />
      )}
      {!!elements?.stripePricingTableId && elements?.stripePublishableKey && (
        <StripePricingTable
          pricingTableId={elements.stripePricingTableId}
          publishableKey={elements.stripePublishableKey}
        />
      )}
      {elements?.displayInstagramSectionUsername && (
        <InstagramSection
          IGUsername={elements.displayInstagramSectionUsername}
        />
      )}
    </>
  );
}
