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
type SectionType = SectionsType[number];

interface SectionsProps {
  sectionData: SectionsType;
  siteLibrary: SiteLibraryFieldsFragment;
}

function filterSections<T>(sections: SectionType[], typename: string): T[] {
  return sections.filter((section) => section.__typename === typename) as T[];
}

export default function Sections({ sectionData, siteLibrary }: SectionsProps) {
  const sections = sectionData.map((section) => section);

  const textContentData: TextContentFieldsFragment[] = filterSections(sections, "TextContent");

  const callToActionData = sections.filter(
    (section) => section.__typename === "CallToAction"
  ) as CallToActionFieldsFragment[];
  const gridBoxData = sections.filter(
    (section) => section.__typename === "GridBox"
  ) as GridBoxFieldsFragment[];
  const heroMediaSliders = sections.filter(
    (section) => section.__typename === "HeroMediaSlider"
  ) as HeroMediaSliderFieldsFragment[];
  const videos = sections.filter(
    (section) => section.__typename === "VideoBox"
  ) as VideoBoxFieldsFragment[];
  const contactFormData = sections.filter(
    (section) => section.__typename === "ContactForm"
  ) as ContactFormFieldsFragment[];
  const accordionData = sections.filter(
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
      {!!heroMediaSliders && siteLibrary && (
        <HeroMediaSliderSection
          heroMediaSliders={heroMediaSliders}
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
