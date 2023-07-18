// import { Fade } from "react-awesome-reveal";
import type { LayoutQuery } from "@/graphql/generated/graphql";
// import Nav from "../nav/Nav";
import Footer from "./navigation/Footer";
import Nav from "./navigation/Nav";
// import type { LayoutSectionComponentType } from '~/types/types';
// import Mailchimp from '~/components/mailchimp/Mailchimp';
// import MagicGrid from 'magic-grid';

// layoutSectionBlocksData?: LayoutSectionComponentType[];

interface PageProps {
  layout: LayoutQuery;
}

export default function LayoutBlocks({ layout }: PageProps) {
  if (!layout) return <></>;
  const {
    siteLibrary,
    events,
    testimonials,
    page,
    profiles,
    navigations,
    logoTables,
    albums,
    blogs,
  } = layout;

  console.log("Layout", layout);
  // console.log("Layout/siteLibrary", siteLibrary);
  // console.log("Layout/events", events);
  // console.log("Layout/testimonials", testimonials);
  // console.log("Layout/profiles", profiles);
  // console.log("Layout/contentPage", contentPage);
  // console.log("Layout/navigations", navigations);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  // const { sliderGallery } = layoutSectionContent as LayoutSectionComponentType;
  // const finalImages = layoutSectionContent.map(LayoutBlockColumn =>
  //   LayoutBlockColumn?.sliderGallery?.map(
  //     (image: { url: any }) => image.url,
  //   ),
  // );
  // layoutBlocks => layoutBlock => layoutBlockContent
  // let totalColumns = 0;
  // totalColumns += page.layoutBlocks.forEach(LayoutBlock) => {
  //   layoutBlock.lenght
  // };
  // totalColumns += page.layoutBlocks.forEach(layoutBlock) = {
  //   layoutBlock.length
  // page.layoutBlocks.forEach((layoutBlock) => (
  //   layoutBlock
  //   )
  // });

  // console.log("TotalColumn", totalColumns);

  return (
    <>
      {navigations[0] && siteLibrary && (
        <Nav
          siteLibrary={siteLibrary}
          navigation={navigations[0]}
          hideNav={page?.hideNav || undefined}
        />
      )}
      {navigations[0] && siteLibrary && blogs && (
        <Footer
          siteLibrary={siteLibrary}
          navigation={navigations[0]}
          blogs={blogs}
          hideFooter={page?.hideFooter || undefined}
        />
      )}
      <div className="hidden h-screen h-240 h-256 opacity-0 h-0 bg-white xl:w-6/12 xl:w-3/12 xl:w-12/12"></div>
    </>
  );
}
