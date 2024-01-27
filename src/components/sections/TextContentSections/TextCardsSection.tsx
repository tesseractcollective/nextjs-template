import Image from "next/image";
import type { TextContentFieldsFragment } from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";

interface TextCardsProps {
  textContentData: TextContentFieldsFragment[];
}

export default function TextCardsSection({ textContentData }: TextCardsProps) {
  return (
    <>
      {!!textContentData && textContentData.length >= 1 && (
        <>
          {!!textContentData && (
            <div className="mx-auto max-w-8xl my-8 w-full px-8">
              <Fade direction="up" triggerOnce>
                <div
                  className={`flex flex-wrap flex-row items-center gap-x-4 gap-y-4 mx-auto w-full ${
                    textContentData.length <= 2
                      ? "justify-center"
                      : "justify-center"
                  }`}
                >
                  {textContentData.map((textContentItem) => (
                    <div
                      key={textContentItem?.header?.html}
                      className="mx-auto max-w-sm w-full"
                    >
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
                        <div className="flex flex-row bg-text-color all-text-dark p-4 rounded items-center gap-x-4">
                          {textContentItem?.contentImage && (
                            <Image
                              className="h-16 lg:h-20 w-16 lg:w-20 rounded-full object-cover"
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
              </Fade>
            </div>
          )}
        </>
      )}
    </>
  );
}
