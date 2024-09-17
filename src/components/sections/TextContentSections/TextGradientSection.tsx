import Image from "next/image";
import type {
  TextContentFieldsFragment,
  CallToActionFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";

interface TextCardsProps {
  textContentData: TextContentFieldsFragment[];
  callToActionData: CallToActionFieldsFragment[];
}

export default function TextGradientSection({
  textContentData,
  callToActionData,
}: TextCardsProps) {
  return (
    <>
      {!!textContentData && (
        <div className="mx-auto max-w-xl my-8 w-full px-4 bg-glass glass-primary py-8">
          <Fade direction="up" triggerOnce>
            <div className="flex flex-wrap flex-row items-center mx-auto w-full justify-center">
              {textContentData.map((textContentItem) => (
                <div
                  key={textContentItem?.header?.html}
                  className="mx-auto w-full"
                >
                  <div className="flex flex-col p-4 rounded items-center  justify-center text-center">
                    {textContentItem?.contentImage && (
                      <Image
                        className="w-full object-cover"
                        width={72}
                        height={72}
                        sizes="100%"
                        src={textContentItem.contentImage.url}
                        alt={textContentItem?.header?.html || ""}
                      />
                    )}
                    {textContentItem?.htmlText && (
                      <Fade triggerOnce>
                        <div className="text-content-item-html">
                          {parse(textContentItem?.htmlText)}
                        </div>
                      </Fade>
                    )}
                    <div className="flex flex-col items-center justify-center relative z-2 gap-2">
                      {textContentItem?.header && (
                        <div className="text-4xl font-bold my-0 py-0 parsed-mb-0 mx-auto w-full">
                          {parse(textContentItem.header.html)}
                        </div>
                      )}
                      {textContentItem?.subHeader && (
                        <div className="text-lg my-0 font-light py-0 parsed-mb-0 uppercase tracking-widest all-text-primary mx-auto w-full">
                          {parse(textContentItem.subHeader.html)}
                        </div>
                      )}
                      {textContentItem?.content && (
                        <div className="text-lg my-0 py-2 parsed-mb-0 text-center opacity-90 mx-auto w-full">
                          {parse(textContentItem.content.html)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {!!callToActionData && callToActionData?.length > 0 && (
                <div className="text-center mx-auto md:mx-0 my-2">
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
                                      ? "border-secondary text-tertiary border px-4 md:px-6 py-2 max-w-max block no-underline font-bold w-full text-2xl !rounded-full"
                                      : "text-tertiary border-0 px-4 md:px-6 py-2 max-w-max block no-underline w-full text-2xl !rounded-full"
                                  } max-w-max`
                            }
                          />
                        </div>
                      )
                  )}
                </div>
              )}
            </div>
          </Fade>
        </div>
      )}
    </>
  );
}
