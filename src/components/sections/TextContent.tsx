import Image from "next/image";
import type {
  CallToActionFieldsFragment,
  TextContentFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";
import TextContentPins from "./TextContentPins";

interface TextContentProps {
  textContentData: TextContentFieldsFragment[];
  callToActionData: CallToActionFieldsFragment[];
}

export default function TextContentSection({
  textContentData,
  callToActionData,
}: TextContentProps) {
  const textCards = textContentData?.filter(
    (textContent) => textContent.contentAlign === "card"
  );
  const textBlocks = textContentData?.filter(
    (textContent) => textContent.contentAlign !== "card"
  );
  const textPins = textContentData?.filter(
    (textContent) => textContent.textContentWidth === "parallax"
  );
  const firstBlockAlign = textBlocks[0]?.contentAlign ?? "left";
  const firstBlockWidth = textBlocks[0]?.textContentWidth ?? "Content";
  const firstBlockCSSClass = textBlocks[0]?.cssClass ?? "";

  if (textPins && textPins.length >= 1) return <TextContentPins />;

  return (
    <>
      {!!textContentData && textContentData.length >= 1 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 translate-all">
            {textCards.map((textContentItem) => (
              <div key={textContentItem?.header?.html} className="mx-auto">
                {textContentItem?.link ? (
                  <LinkItem
                    link={textContentItem?.link}
                    cssClass="flex flex-row p-2 align-items-start no-underline border-0 hover:border"
                  >
                    <>
                      {textContentItem?.contentImage && (
                        <Image
                          className="block m-0 p-0 border-round"
                          style={{
                            objectFit: "cover",
                            height: "70px",
                            width: "70px",
                            minHeight: "70px",
                            minWidth: "70px",
                          }}
                          src={textContentItem.contentImage.url}
                          alt={textContentItem?.header?.html || ""}
                        />
                      )}
                      <div className="flex flex-col ml-3">
                        {textContentItem?.header && (
                          <div className="text-sm font-bold my-0 py-0 parsed-mb-0">
                            {parse(textContentItem.header.html)}
                          </div>
                        )}
                        {textContentItem?.subHeader && (
                          <div className="text-sm my-0 font-light opacity-90 py-0 parsed-mb-0">
                            {parse(textContentItem.subHeader.html)}
                          </div>
                        )}
                        {textContentItem?.content && (
                          <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 w-10">
                            {parse(textContentItem.content.html)}
                          </div>
                        )}
                      </div>
                    </>
                  </LinkItem>
                ) : (
                  <div className="flex flex-col bg-text-color all-text-dark p-8">
                    {textContentItem?.contentImage && (
                      <div className="max-w-[70px] max-h-[70px]">
                        <Image
                          className="block m-0 p-0 border-round object-cover h-full w-full"
                          height={0}
                          width={0}
                          sizes="100%"
                          src={textContentItem.contentImage.url}
                          alt={textContentItem?.header?.html || ""}
                        />
                      </div>
                    )}
                    {textContentItem?.htmlText && (
                      <div className="text-content-item-html">
                        {parse(textContentItem?.htmlText)}
                      </div>
                    )}
                    <div className="flex flex-col">
                      {textContentItem?.header && (
                        <div className="text-sm font-bold my-0 py-0 parsed-mb-0">
                          {parse(textContentItem.header.html)}
                        </div>
                      )}
                      {textContentItem?.subHeader && (
                        <div className="text-sm my-0 font-light opacity-90 py-0 parsed-mb-0 max-w-[200px]">
                          {parse(textContentItem.subHeader.html)}
                        </div>
                      )}
                      {textContentItem?.content && (
                        <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 max-w-[200px]">
                          {parse(textContentItem.content.html)}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            {textBlocks.map((textContentItem) => (
              <div
                key={Math.random()}
                className={`relative h-full z-20 ${
                  textContentItem?.cssClass
                    ? textContentItem?.cssClass
                    : `${textContentItem?.textContentWidth} ${
                        (textContentItem?.contentAlign === "center" &&
                          "mx-auto") ||
                        (textContentItem?.contentAlign === "left" &&
                          "mr-auto") ||
                        (textContentItem?.contentAlign === "right" &&
                          "ml-auto") ||
                        (textContentItem?.contentAlign === "justify" &&
                          "mx-auto")
                      } ${
                        (textContentItem?.textContentWidth === "Content" &&
                          "w-full md:w-6/12") ||
                        (textContentItem?.textContentWidth === "Full" &&
                          "w-full md:w-10/12")
                      }`
                }`}
              >
                <div
                  className={
                    textContentItem?.cssClass
                      ? ""
                      : `h-full p-4 text-${
                          textContentItem?.contentAlign &&
                          textContentItem?.contentAlign?.toLocaleLowerCase()
                        }`
                  }
                >
                  {textContentItem?.htmlText && (
                    <div className="text-content-item-html">
                      {parse(textContentItem?.htmlText)}
                    </div>
                  )}
                  <div>
                    {textContentItem?.contentImage && (
                      <Fade triggerOnce>
                        <>
                          {textContentItem.linkImage ? (
                            <LinkItem
                              link={textContentItem.link}
                              cssClass="max-w-max inline-block mx-auto"
                            >
                              <Image
                                className={`block mb-4 ${
                                  (textContentItem?.contentAlign === "center" &&
                                    "mx-auto") ||
                                  (textContentItem?.contentAlign === "left" &&
                                    "mr-auto") ||
                                  (textContentItem?.contentAlign === "right" &&
                                    "ml-auto") ||
                                  (textContentItem?.contentAlign ===
                                    "justify" &&
                                    "mx-auto")
                                } ${textContentItem?.imageStyle?.map(
                                  (imageStyleItem) =>
                                    ` dynamic-image-class dynamic-${imageStyleItem} `
                                )}`}
                                style={{ objectFit: "contain" }}
                                src={textContentItem.contentImage.url}
                                alt={textContentItem?.header?.html || ""}
                                width={0}
                                height={0}
                                sizes="100%"
                              />
                            </LinkItem>
                          ) : (
                            <Image
                              className={`block mb-4 ${
                                (textContentItem?.contentAlign === "center" &&
                                  "mx-auto") ||
                                (textContentItem?.contentAlign === "left" &&
                                  "mr-auto") ||
                                (textContentItem?.contentAlign === "right" &&
                                  "ml-auto") ||
                                (textContentItem?.contentAlign === "justify" &&
                                  "mx-auto")
                              } ${textContentItem?.imageStyle?.map(
                                (imageStyleItem) =>
                                  ` dynamic-image-class dynamic-${imageStyleItem} `
                              )}`}
                              style={{ objectFit: "contain" }}
                              src={textContentItem.contentImage.url}
                              alt={textContentItem?.header?.html || ""}
                              width={0}
                              height={0}
                              sizes="100%"
                            />
                          )}
                        </>
                      </Fade>
                    )}
                  </div>
                  <Fade triggerOnce>
                    {textContentItem?.header && (
                      <div className="body-parsed-text mb-0">
                        {parse(textContentItem.header.html)}
                      </div>
                    )}
                  </Fade>
                  <Fade triggerOnce>
                    {textContentItem?.subHeader && (
                      <div className="body-parsed-text mb-0">
                        {parse(textContentItem.subHeader.html)}
                      </div>
                    )}
                  </Fade>
                  <Fade triggerOnce>
                    {textContentItem?.content && (
                      <div className="body-parsed-text">
                        {parse(textContentItem.content.html)}
                      </div>
                    )}
                  </Fade>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {!!callToActionData && callToActionData?.length > 0 && (
        <div>
          <div
            className={
              firstBlockCSSClass
                ? firstBlockCSSClass
                : `relative h-full z-20 ${firstBlockWidth} ${
                    (firstBlockAlign === "center" && "mx-auto") ||
                    (firstBlockAlign === "left" && "mr-auto") ||
                    (firstBlockAlign === "right" && "ml-auto") ||
                    (firstBlockAlign === "justify" && "mx-auto")
                  } ${
                    (firstBlockWidth === "Content" && "w-full md:w-6/12") ||
                    (firstBlockWidth === "Full" && "w-full md:w-10/12")
                  }`
            }
          >
            {callToActionData.map(
              (callToActionItem) =>
                callToActionItem?.ctaLink && (
                  <div
                    key={callToActionItem.ctaLink}
                    className={
                      firstBlockCSSClass
                        ? "call-to-action-items "
                        : `call-to-action-items p-4 gap-x-4 flex ${
                            (callToActionItem.contentAlign === "center" &&
                              "mx-auto") ||
                            (callToActionItem.contentAlign === "left" &&
                              "mr-auto") ||
                            (callToActionItem.contentAlign === "right" &&
                              "ml-auto") ||
                            (callToActionItem.contentAlign === "justify" &&
                              "mx-auto")
                          }`
                    }
                  >
                    <LinkItem
                      link={callToActionItem.ctaLink}
                      label={callToActionItem.ctaLabel}
                      cssClass={
                        callToActionItem?.ctaClass
                          ? callToActionItem.ctaClass
                          : `${
                              callToActionItem.ctaPrimary
                                ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl"
                                : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl"
                            } mr-2 max-w-max`
                      }
                    />
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </>
  );
}
