import parse from "html-react-parser";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export interface TimelineType {
  cssClass: string;
  timelineItems: TimelineItem[];
}

export interface TimelineItem {
  year: string;
  image: string;
  header: string;
  subheader: string;
  content: string;
  cssClass: string;
}

interface TimelineProps {
  timelineData?: TimelineType;
}

export default function Timeline({ timelineData }: TimelineProps) {
  if (!timelineData) return null;

  const { cssClass, timelineItems } = timelineData;

  return (
    <div className={`element-timeline ${cssClass || ""}`}>
      {timelineItems?.length >= 1 && (
        <>
          <div className="py-6 flex flex-col justify-center sm:py-12">
            <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
              <div className="relative text-text-color antialiased text-sm">
                {/* <!-- Vertical bar running through middle --> */}
                <div className="hidden sm:block w-1 bg-secondary absolute h-full left-1/2 transform -translate-x-1/2"></div>
                {timelineItems.map((timelineItem, index) => (
                  <div
                    className="mt-6 sm:mt-0 sm:mb-12"
                    key={`timline-${index}`}
                  >
                    <div className="flex flex-col sm:flex-row items-center">
                      <div
                        className={`flex ${
                          index % 2 == 0 ? "justify-start" : "justify-end"
                        } w-full mx-auto items-center`}
                      >
                        <div
                          className={`w-full sm:w-1/2 ${
                            index % 2 == 0 ? "sm:pr-8" : "sm:pl-8"
                          }`}
                        >
                          <Fade direction="up" triggerOnce>
                            <div className="p-4 bg-white rounded shadow">
                              {!!timelineItem.image && (
                                <div className=" aspect-1 block mx-auto overflow-hidden">
                                  <Image
                                    src={timelineItem.image}
                                    alt={timelineItem.header || ""}
                                    className="object-cover block mx-auto h-full w-full aspect-1"
                                    sizes="100%"
                                    width={0}
                                    height={0}
                                  />
                                </div>
                              )}
                              {!!timelineItem.header && (
                                <h2 className="font-bold">
                                  {parse(timelineItem.header)}
                                </h2>
                              )}
                              {!!timelineItem.subheader && (
                                <h3 className="font-bold">
                                  {parse(timelineItem.subheader)}
                                </h3>
                              )}
                              {!!timelineItem.content && (
                                <p>{parse(timelineItem.content)}</p>
                              )}
                            </div>
                          </Fade>
                        </div>
                      </div>
                      <div className="rounded-full bg-primary border-white border-2 w-12 h-12 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-text-color font-bold">
                        {timelineItem.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
