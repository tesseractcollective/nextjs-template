import Image from "next/image";
import type {
  CallToActionFieldsFragment,
  TextContentFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";
import ReactGA from "react-ga4";

interface TextContentProps {
  textContentData: TextContentFieldsFragment[];
  callToActionData: CallToActionFieldsFragment[];
}

export default function TextContentSection({
  textContentData,
  callToActionData,
}: TextContentProps) {
  return (
    <>
      {!!textContentData && textContentData.length >= 1 && (
        <>
          <div className="grid w-full mx-auto">
            {textContentData
              ?.filter((textContent) => textContent.contentAlign === "card")
              .map((textContentItem) => (
                <div key={Math.random()} className="col-12 md:col-5 md:mx-auto">
                  {textContentItem?.link ? (
                    <div>
                      {textContentItem.link.includes("http") ? (
                        <a
                          href={textContentItem?.link}
                          target="_blank"
                          className="flex flex-row p-2 align-items-start no-underline border-0 hover:border"
                          rel="noreferrer"
                        >
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
                        </a>
                      ) : (
                        <Link
                          href={textContentItem?.link}
                          className="flex flex-row p-2 align-items-start no-underline border-0 hover:border"
                        >
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
                              <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 w-10/12">
                                {parse(textContentItem.content.html)}
                              </div>
                            )}
                          </div>
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-row p-2 align-items-start">
                      {textContentItem?.contentImage && (
                        <Image
                          className="block m-0 p-0 border-round"
                          height={70}
                          width={70}
                          style={{
                            objectFit: "cover",
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
                          <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 w-10/12">
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
            {textContentData
              ?.filter((textContent) => textContent.contentAlign !== "card")
              .map((textContentItem) => (
                <div
                  key={Math.random()}
                  className={`relative h-full z-20 ${
                    textContentItem?.textContentWidth
                  } ${
                    (textContentItem?.contentAlign === "center" && "mx-auto") ||
                    (textContentItem?.contentAlign === "left" && "mr-auto") ||
                    (textContentItem?.contentAlign === "right" && "ml-auto") ||
                    (textContentItem?.contentAlign === "justify" && "mx-auto")
                  } ${
                    (textContentItem?.textContentWidth === "Content" &&
                      "w-full md:w-6/12") ||
                    (textContentItem?.textContentWidth === "Full" &&
                      "w-full md:w-10/12")
                  }`}
                >
                  <div
                    className={`h-full p-4 text-${
                      textContentItem?.contentAlign &&
                      textContentItem?.contentAlign?.toLocaleLowerCase()
                    }`}
                  >
                    <div>
                      {textContentItem?.contentImage && (
                        <Fade direction="up" triggerOnce>
                          <>
                            {textContentItem.linkImage ? (
                              <LinkItem
                                link={textContentItem.link}
                                cssClass="max-w-max inline-block mx-auto"
                              >
                                <Image
                                  className={`block mb-4 ${
                                    (textContentItem?.contentAlign ===
                                      "center" &&
                                      "mx-auto") ||
                                    (textContentItem?.contentAlign === "left" &&
                                      "mr-auto") ||
                                    (textContentItem?.contentAlign ===
                                      "right" &&
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
                            )}
                          </>
                        </Fade>
                      )}
                    </div>
                    <Fade direction="up" triggerOnce>
                      {textContentItem?.header && (
                        <div className="body-parsed-text">
                          {parse(textContentItem.header.html)}
                        </div>
                      )}
                    </Fade>
                    <Fade direction="up" triggerOnce>
                      {textContentItem?.subHeader && (
                        <div className="body-parsed-text">
                          {parse(textContentItem.subHeader.html)}
                        </div>
                      )}
                    </Fade>
                    <Fade direction="up" triggerOnce>
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
      {!!callToActionData && callToActionData.length >= 1 && (
        <div className="flex flex-row flex-wrap items-center mx-auto relative z-20">
          {callToActionData?.map((callToActionItem) => (
            <div key={callToActionItem?.ctaLink}>
              {callToActionItem?.ctaLink && (
                <div
                  className={`flex ${
                    (callToActionItem?.contentAlign === "center" &&
                      "mx-auto") ||
                    (callToActionItem?.contentAlign === "left" && "mr-auto") ||
                    (callToActionItem?.contentAlign === "right" && "ml-auto") ||
                    (callToActionItem?.contentAlign === "justify" && "mx-auto")
                  }`}
                >
                  <LinkItem
                    link={callToActionItem?.ctaLink}
                    label={callToActionItem.ctaLabel}
                    cssClass={`${callToActionItem.ctaClass} ${
                      callToActionItem?.ctaPrimary
                        ? "border-white text-white border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl"
                        : "text-white border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl"
                    } mr-2 max-w-max`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
