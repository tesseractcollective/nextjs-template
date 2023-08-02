import Image from "next/image";
import { Fade } from "react-awesome-reveal";
interface PageHeaderProps {
  pageHeaderTitleProp?: string;
  pageHeaderSubtitleProp?: string;
  pageHeaderWrapperCssClassProp?: string;
  pageHeaderImageProp?: string;
  pageWidthStyle?: string | null | undefined;
  hideHeader?: boolean;
}

export default function PageHeader({
  pageHeaderTitleProp,
  pageHeaderSubtitleProp,
  pageHeaderWrapperCssClassProp,
  pageHeaderImageProp,
  pageWidthStyle,
  hideHeader,
}: PageHeaderProps) {
  if (hideHeader === true) return null;

  const cssClass = pageHeaderWrapperCssClassProp || "";

  return (
    <div>
      {pageWidthStyle === "Full" && (
        <section
          className={`relative ${
            pageWidthStyle === "Full"
              ? "w-full py-4"
              : "container mx-auto w-10/12 lg:w-10/12 xl:w-10/12"
          } ${cssClass}`}
        >
          <div aria-hidden="true" className="relative overflow-hidden">
            {!!pageHeaderImageProp && (
              <Fade direction="up" triggerOnce>
                  <Image
                    src={pageHeaderImageProp}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-[30rem] w-full object-cover object-center"
                  />
              </Fade>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-dark" />
          </div>
          <div className="absolute bottom-1/3 left-0 right-0 w-full mx-auto max-w-8xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
            <Fade direction="up" triggerOnce>
              {!!pageHeaderTitleProp && (
                <h1 className="text-3xl md:text-5xl xl:text-6xl text-shadow mt-0 mb-1 py-0 text-center">
                  {pageHeaderTitleProp}
                </h1>
              )}
              {!!pageHeaderSubtitleProp && (
                <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-sm opacity-80">
                  {pageHeaderSubtitleProp}
                </h2>
              )}
            </Fade>
          </div>
        </section>
      )}
      {pageWidthStyle === "Content" && (
        <section className={`relative mx-auto max-w-8xl my-32' ${cssClass}`}>
          {(pageHeaderTitleProp || pageHeaderSubtitleProp) && (
            <div className="relative w-full mx-auto max-w-8xl p-4 my-8">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
                {!!pageHeaderTitleProp && (
                  <Fade direction="left" triggerOnce>
                    <h1 className="text-3xl md:text-7xl xl:text-8xl text-shadow my-0 py-0 text-center">
                      {pageHeaderTitleProp}
                    </h1>
                  </Fade>
                )}
                {!!pageHeaderSubtitleProp && (
                  <Fade direction="right" triggerOnce>
                    <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-sm opacity-80 mx-auto md:mr-0 md:ml-auto md:text-right">
                      {pageHeaderSubtitleProp}
                    </h2>
                  </Fade>
                )}
              </div>
            </div>
          )}
          <Fade direction="up" triggerOnce>
            <div aria-hidden="true" className="relative">
              {!!pageHeaderImageProp && (
                <Image
                  src={pageHeaderImageProp}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  className="h-[30rem] w-full object-cover object-center"
                />
              )}
            </div>
          </Fade>
        </section>
      )}
    </div>
  );
}
