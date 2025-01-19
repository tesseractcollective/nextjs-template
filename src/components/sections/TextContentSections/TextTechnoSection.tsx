import Image from "next/image";
import type {
  TextContentFieldsFragment,
  CallToActionFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";
import "./TextTechnoSection.scss";

interface TextCardsProps {
  textContentData: TextContentFieldsFragment[];
  callToActionData: CallToActionFieldsFragment[];
}

export default function TextTechnoSection({
  textContentData,
  callToActionData,
}: TextCardsProps) {
  if (!textContentData) return null;
  const getPrimaryImage = (textContentData: TextContentFieldsFragment[]) => {
    if (textContentData[0]) {
      return textContentData[0];
    }
  };
  const primaryImage = getPrimaryImage(textContentData);
  return (
    <>
      {!!textContentData && (
        <div className="mx-auto max-w-6xl my-8 w-full px-4 text-techno-section py-8">
          <Fade direction="up" triggerOnce>
            <div className="flex flex-wrap flex-row items-center mx-auto w-full justify-center">
              {textContentData.map((textContentItem) => (
                <div
                  key={textContentItem?.header?.html}
                  className="mx-auto w-full"
                >
                  <div className="flex flex-col p-4 rounded items-center gap-x-4 justify-center text-center">
                    {textContentItem?.htmlText && (
                      <Fade triggerOnce>
                        <div className="text-content-item-html">
                          {parse(textContentItem?.htmlText)}
                        </div>
                      </Fade>
                    )}
                    <div className="flex flex-col items-center justify-center relative z-2">
                      {textContentItem?.header && (
                        <div className="my-0 py-0 parsed-mb-0 mx-auto w-full">
                          {parse(textContentItem.header.html)}
                        </div>
                      )}
                      {textContentItem?.subHeader && (
                        <div className="text-lg my-0 font-light py-0 parsed-mb-0 uppercase tracking-widest all-text-primary mx-auto w-full">
                          {parse(textContentItem.subHeader.html)}
                        </div>
                      )}
                      {textContentItem?.content && (
                        <div className="body-parsed-text text-lg my-0 py-2 parsed-mb-0 text-center opacity-80 mx-auto w-full">
                          {parse(textContentItem.content.html)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {!!callToActionData && callToActionData?.length > 0 && (
                <div className="text-center mx-auto md:mx-0 flex flex-row">
                  {callToActionData.map(
                    (callToActionItem) =>
                      callToActionItem?.ctaLink && (
                        <div
                          key={callToActionItem.ctaLink}
                          className="text-center mx-auto flex flex-row flex-wrap gap-4"
                        >
                          <LinkItem
                            link={callToActionItem.ctaLink}
                            label={callToActionItem.ctaLabel}
                            cssClass={
                              callToActionItem?.ctaClass
                                ? callToActionItem.ctaClass
                                : `${
                                    callToActionItem.ctaPrimary
                                      ? "border-primary text-text-color border px-4 md:px-6 py-2 fill-primary-theme  max-w-max block no-underline font-bold w-full text-2xl !rounded-full bg-primary saturate-100 hover:saturate-150 transition-all"
                                      : "border-secondary text-secondary border px-4 md:px-6 py-2  max-w-max block no-underline w-full font-bold text-2xl !rounded-full saturate-100 hover:saturate-150 transition-all"
                                  } mr-2 max-w-max`
                            }
                          />
                        </div>
                      )
                  )}
                </div>
              )}
              {primaryImage?.contentImage && (
                <Image
                  className="w-full object-cover max-w-2xl mx-auto py-16"
                  width={0}
                  height={0}
                  sizes="100%"
                  quality={100}
                  src={primaryImage.contentImage.url}
                  alt={primaryImage?.header?.html || ""}
                />
              )}
            </div>
          </Fade>
        </div>
      )}
    </>
  );
}
