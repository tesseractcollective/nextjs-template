import type {
  PageFieldsFragment,
  GridBoxFieldsFragment,
  SiteLibraryFieldsFragment,
  HeroMediaSliderFieldsFragment,
  VideoBoxFieldsFragment,
  ContactFormFieldsFragment,
  AccordionFieldsFragment,
  TextContentFieldsFragment,
  CallToActionFieldsFragment
} from "@/graphql/generated/graphql";
import VideoBox from "@/components/VideoBox";
import VideoPlaylistBox from "@/components/VideoPlaylistBox";
import GridBox from "@/components/sections/GridBox";
import ContactFormSection from "@/components/sections/ContactFormSection";
import HeroMediaSliderSection from "@/components/sections/HeroMediaSliderSection";
import TextContentSection from "./TextContent";

type SectionsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["sections"];

interface SectionsProps {
  sectionData: SectionsType;
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function Sections({ sectionData, siteLibrary }: SectionsProps) {
  const section = sectionData.map((section) => section);
  const textContentData = section.filter(
    (section) => section.__typename === "TextContent"
  ) as TextContentFieldsFragment[];
  const callToActionData = section.filter(
    (section) => section.__typename === "CallToAction"
  ) as CallToActionFieldsFragment[];
  const gridBoxData = section.filter(
    (section) => section.__typename === "GridBox"
  ) as GridBoxFieldsFragment[];
  const heroMediaSlider = section.filter(
    (section) => section.__typename === "HeroMediaSlider"
  ) as HeroMediaSliderFieldsFragment[];
  const videos = section.filter(
    (section) => section.__typename === "VideoBox"
  ) as VideoBoxFieldsFragment[];
  const contactFormData = section.filter(
    (section) => section.__typename === "ContactForm"
  ) as ContactFormFieldsFragment[];
  const accordionData = section.filter(
    (section) => section.__typename === "Accordion"
  ) as AccordionFieldsFragment[];
  console.log(accordionData)
  return (
    <>
      {!!gridBoxData && gridBoxData?.length >= 1 && (
        <section className="container mx-auto z-20 w-10/12">
          <GridBox gridBoxData={gridBoxData} />
        </section>
      )}
       {!!siteLibrary.youtubeApiKey && (
        <>
          {!!videos &&
            videos.length >= 1 && (
              <section
                className="container mx-auto z-20 w-10/12"
              >
                {videos?.map((video) => (
                  <div key={Math.random()}>
                    {video?.youtubePlaylistId ? (
                      <VideoPlaylistBox
                        videoTitle={video?.videoTitle || undefined}
                        youtubePlaylistId={video.youtubePlaylistId}
                        youtubeApiKey={siteLibrary.youtubeApiKey}
                      />
                    ) : (
                      <VideoBox
                        videoTitle={video?.videoTitle || undefined}
                        vimeoVideoId={video?.vimeoVideoId || undefined}
                        youtubeVideoId={video?.youtubeVideoId || undefined}
                      />
                    )}
                  </div>
                ))}
              </section>
            )}
        </>
      )}
      {!!heroMediaSlider && siteLibrary && (
        <HeroMediaSliderSection
          heroMediaSlider={heroMediaSlider}
          siteLibrary={siteLibrary}
        />
      )}
      {!!contactFormData && siteLibrary && (
        <ContactFormSection
          contactFormData={contactFormData}
          siteLibrary={siteLibrary}
        />
      )}
      {!!textContentData && (
        <TextContentSection textContentData={textContentData} callToActionData={callToActionData}
        />
      )}
    </>
  );
}
