import type {
  PageFieldsFragment,
  GridBoxFieldsFragment,
  SiteLibraryFieldsFragment,
  HeroMediaSliderFieldsFragment,
  VideoBoxFieldsFragment,
  ContactFormFieldsFragment,
  AccordionFieldsFragment,
  TextContentFieldsFragment,
  CallToActionFieldsFragment,
  LoopTextFieldsFragment,
} from "@/graphql/generated/graphql";
import VideoBox from "@/components/VideoBox";
import VideoPlaylistBox from "@/components/VideoPlaylistBox";
import GridBox from "@/components/sections/GridBox";
import ContactFormSection from "@/components/sections/ContactFormSection";
import HeroMediaSliderSection from "@/components/sections/HeroMediaSliderSection";
import TextContentSection from "./TextContent";
import AccordionSection from "@/components/sections/AccordionSection";
import LoopTextSection from "@/components/sections/LoopTextSection";

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
  const textContentData: TextContentFieldsFragment[] = filterSections(
    sections,
    "TextContent"
  );
  const callToActionData: CallToActionFieldsFragment[] = filterSections(
    sections,
    "CallToAction"
  );
  const gridBoxData: GridBoxFieldsFragment[] = filterSections(
    sections,
    "GridBox"
  );
  const heroMediaSliderData: HeroMediaSliderFieldsFragment[] = filterSections(
    sections,
    "HeroMediaSlider"
  );
  const videoData: VideoBoxFieldsFragment[] = filterSections(
    sections,
    "VideoBox"
  );
  const contactFormData: ContactFormFieldsFragment[] = filterSections(
    sections,
    "ContactForm"
  );
  const accordionData: AccordionFieldsFragment[] = filterSections(
    sections,
    "Accordion"
  );
  const loopTextData: LoopTextFieldsFragment[] = filterSections(
    sections,
    "LoopText"
  );
  return (
    <>
      {!!loopTextData && <LoopTextSection loopTextData={loopTextData} />}
      {!!textContentData && (
        <TextContentSection
          textContentData={textContentData}
          callToActionData={callToActionData}
        />
      )}
      {!!gridBoxData && gridBoxData?.length >= 1 && (
        <section className="container mx-auto z-20 w-10/12">
          <GridBox gridBoxData={gridBoxData} />
        </section>
      )}
      {!!siteLibrary.youtubeApiKey && (
        <>
          {!!videoData && videoData.length >= 1 && (
            <section className="container mx-auto z-20 w-10/12">
              {videoData?.map((video) => (
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
      {!!heroMediaSliderData && siteLibrary && (
        <HeroMediaSliderSection
          heroMediaSliderData={heroMediaSliderData}
          siteLibrary={siteLibrary}
        />
      )}
      {!!contactFormData && siteLibrary && (
        <ContactFormSection
          contactFormData={contactFormData}
          siteLibrary={siteLibrary}
        />
      )}
      {!!accordionData && (
        <AccordionSection
          accordionData={accordionData}
          siteLibrary={siteLibrary}
        />
      )}
    </>
  );
}
