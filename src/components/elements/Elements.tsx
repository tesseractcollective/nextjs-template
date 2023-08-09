"use client";
import type { PageFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import Slider from "react-slick";
import Parallax from "@/components/Parallax";
import StandOutText from "@/components/StandOutText";
import IframeBox from "@/components/IframeBox";
import { StripePricingTable } from "@/components/StripePricingTable";
import InstagramSection from "@/components/InstagramSection";
import MagicGrid from "react-magic-grid"

type ElementsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["elements"];

interface ElementsProps {
  elements: ElementsType;
}

export default function LayoutBlocks({ elements }: ElementsProps) {
  if (!elements) return <></>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const finalImages = elements.gallery.map((image) => image.url);
  console.log(elements.galleryLayout)

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
      {!!elements?.galleryLayout && elements.galleryLayout === "grid" ? (
        <div className="my-8">
          {!!elements?.gallery && elements?.gallery.length >= 1 && (
            <>
              <MagicGrid items={finalImages.length}>
                {finalImages.map((finalImage) => (
                  <Image
                    src={finalImage}
                    alt=""
                    className="max-w-[300px object-cover"
                    sizes="100%"
                    key={finalImage}
                    width={0}
                    height={0}
                  />
                ))}
              </MagicGrid>
            </>
          )}
        </div>
      ) : (
        <>
          {!!elements?.gallery && elements?.gallery.length >= 1 && (
            <Slider {...settings} className="">
              {elements?.gallery.map((image) => (
                <div
                  className="relative h-70vh md:h-screen max-h-[80vh]"
                  key={image.url}
                >
                  <Image
                    src={image.url}
                    alt={image.url}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </Slider>
          )}
        </>
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
