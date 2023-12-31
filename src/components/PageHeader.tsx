import Image from "next/image";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import parse from "html-react-parser";
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
    <>
      {pageWidthStyle === "Full" && (
        <section className={`relative "w-full pb-4 h-[30rem] ${cssClass}`}>
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
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark section-fade-invert" />
          </div>
          <div className="absolute bottom-1/3 left-0 right-0 w-full mx-auto max-w-8xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
            <Fade direction="up" triggerOnce>
              {!!pageHeaderTitleProp && (
                <h1 className="text-3xl md:text-5xl xl:text-6xl text-shadow-large mt-0 mb-1 py-0 text-center text-text-overlay font-bold uppercase">
                  {pageHeaderTitleProp}
                </h1>
              )}
              {!!pageHeaderSubtitleProp && (
                <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-lg opacity-80 text-tertiary">
                  {pageHeaderSubtitleProp}
                </h2>
              )}
            </Fade>
          </div>
        </section>
      )}
      {pageWidthStyle === "wavy" && (
        <Zoom triggerOnce>
          <section className="pt-44 pb-44 relative bg-[#000]">
            <div
              className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed"
              style={{
                backgroundImage: `url(${pageHeaderImageProp})`,
              }}
            ></div>
            <Fade direction="up" triggerOnce>
              {!!pageHeaderTitleProp && (
                <h1 className="text-3xl md:text-5xl xl:text-6xl text-shadow-large mt-0 mb-1 py-0 text-center text-text-overlay font-bold uppercase">
                  {pageHeaderTitleProp}
                </h1>
              )}
              {!!pageHeaderSubtitleProp && (
                <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-lg opacity-80 text-tertiary">
                  {pageHeaderSubtitleProp}
                </h2>
              )}
            </Fade>
          </section>
        </Zoom>
      )}
      {pageWidthStyle === "split" && (
        <div className="relative overflow-hidden">
          <Slide triggerOnce direction="left" className="relative">
            <section className="mb-20 md:mb-0 pt-44 pb-44 relative z-0 bg-primary all-text-white h-50vh md:h-70vh w-full md:w-[90vw] lg:w-[70vw]">
              <Fade
                direction="up"
                triggerOnce
                className="absolute z-30 -bottom-30 md:bottom-[-5px] md:h-full right-[25%] md:right-[-6%]"
              >
                {!!pageHeaderImageProp && (
                  <Image
                    src={pageHeaderImageProp}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-full w-full object-contain object-center"
                  />
                )}
              </Fade>
              <div className="flex flex-col items-center md:items-start justify-start md:justify-start md:w-full px-4 relative z-20 mx-auto md:mr-16 xl:ml-[17rem] text-center md:text-left -top-[7rem] md:top-0">
                {!!pageHeaderTitleProp && (
                  <Fade
                    direction="left"
                    triggerOnce
                    className="text-center mx-auto md:text-left md:mx-0"
                  >
                    <h1 className="text-3xl md:text-7xl xl:text-14xl my-0 py-0 text-center sm:text-left text-white font-bold w-full mx-auto">
                      {pageHeaderTitleProp}
                    </h1>
                  </Fade>
                )}
                {!!pageHeaderSubtitleProp && (
                  <Fade
                    direction="left"
                    triggerOnce
                    className="text-center mx-auto md:text-left md:mx-0"
                  >
                    <h2 className="my-0 py-0 text-center uppercase tracking-widest font-bold text-sm opacity-80 md:text-left mx-auto md:ml-4 md:mr-0 w-full text-text-overlay">
                      {pageHeaderSubtitleProp}
                    </h2>
                  </Fade>
                )}
              </div>
            </section>
          </Slide>
        </div>
      )}
      {pageWidthStyle === "video" && (
        <Zoom triggerOnce>
          <section className="pt-44 pb-44 relative bg-[#000]">
            <div
              className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed"
              style={{
                backgroundImage: `url(${pageHeaderImageProp})`,
              }}
            ></div>
            <Fade direction="up" triggerOnce>
              {!!pageHeaderTitleProp && (
                <h1 className="text-3xl md:text-5xl xl:text-6xl text-shadow-large mt-0 mb-1 py-0 text-center text-text-overlay font-bold uppercase">
                  {pageHeaderTitleProp}
                </h1>
              )}
              {!!pageHeaderSubtitleProp && (
                <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-lg opacity-80 text-tertiary">
                  {pageHeaderSubtitleProp}
                </h2>
              )}
            </Fade>
          </section>
        </Zoom>
      )}
      {pageWidthStyle === "sharp" && (
        <Zoom triggerOnce>
          <section className="pt-44 pb-44 relative bg-[#000]">
            <div
              className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed"
              style={{
                backgroundImage: `url(${pageHeaderImageProp})`,
              }}
            ></div>
            <Fade direction="up" triggerOnce>
              {!!pageHeaderTitleProp && (
                <h1 className="text-3xl md:text-5xl xl:text-6xl text-shadow-large mt-0 mb-1 py-0 text-center text-text-overlay font-bold uppercase">
                  {pageHeaderTitleProp}
                </h1>
              )}
              {!!pageHeaderSubtitleProp && (
                <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-lg opacity-80 text-tertiary">
                  {pageHeaderSubtitleProp}
                </h2>
              )}
            </Fade>
          </section>
        </Zoom>
      )}
      {pageWidthStyle === "diagonal" && (
        <Zoom triggerOnce>
          <section className="pt-44 pb-44 relative bg-[#000]">
            <div
              className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed"
              style={{
                backgroundImage: `url(${pageHeaderImageProp})`,
              }}
            ></div>
            <Fade direction="up" triggerOnce>
              {!!pageHeaderTitleProp && (
                <h1 className="text-3xl md:text-5xl xl:text-6xl text-shadow-large mt-0 mb-1 py-0 text-center text-text-overlay font-bold uppercase">
                  {pageHeaderTitleProp}
                </h1>
              )}
              {!!pageHeaderSubtitleProp && (
                <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-lg opacity-80 text-tertiary">
                  {pageHeaderSubtitleProp}
                </h2>
              )}
            </Fade>
          </section>
        </Zoom>
      )}
      {pageWidthStyle === "parallax" && (
        <Zoom triggerOnce>
          <section className="pt-44 pb-44 relative bg-[#000]">
            <div
              className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-80 bg-fixed"
              style={{
                backgroundImage: `url(${pageHeaderImageProp})`,
              }}
            ></div>
            <Fade direction="up" triggerOnce>
              {!!pageHeaderTitleProp && (
                <h1 className="text-3xl md:text-5xl xl:text-6xl text-shadow-large mt-0 mb-1 py-0 text-center text-text-overlay font-bold uppercase">
                  {pageHeaderTitleProp}
                </h1>
              )}
              {!!pageHeaderSubtitleProp && (
                <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-lg opacity-80 text-tertiary">
                  {pageHeaderSubtitleProp}
                </h2>
              )}
            </Fade>
          </section>
        </Zoom>
      )}
      {pageWidthStyle === "angled" && (
        <div className={`bg-bg relative ${cssClass}`}>
          <div className="relative">
            <div className="mx-auto max-w-7xl bg-bg">
              <div className="relative z-10 pt-14 w-full lg:max-w-4xl xl:max-w-2xl">
                <svg
                  className="block absolute bottom-0 h-72 w-full transform fill-bg lg:hidden"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="100 15, 100 100,0 100,0 39" />
                </svg>
                <svg
                  className="hidden lg:absolute inset-y-0 lg:-left-[50%] xl:left-0 h-full w-full translate-x-1/2 transform fill-bg lg:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg>

                <div className="relative px-8 py-56 pr-0">
                  <Fade triggerOnce direction="down">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                      {!!pageHeaderTitleProp && (
                        <h1 className="text-4xl font-bold tracking-tight text-text-color sm:text-6xl">
                          {pageHeaderTitleProp}
                        </h1>
                      )}
                      {!!pageHeaderSubtitleProp && (
                        <p className="mt-6 text-lg leading-8 text-text-color">
                          {parse(pageHeaderSubtitleProp)}
                        </p>
                      )}
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
            {!!pageHeaderImageProp && (
              <Fade
                triggerOnce
                direction="right"
                className="absolute inset-y-0 right-0 w-full lg:w-2/3 xl:w-1/2 z-0"
              >
                <Image
                  className="aspect-[3/2] object-cover aspect-auto h-full w-full"
                  src={pageHeaderImageProp}
                  alt=""
                  sizes="100%"
                  width={0}
                  height={0}
                />
              </Fade>
            )}
          </div>
        </div>
      )}
      {pageWidthStyle === "modern" && (
        <div className="bg">
          <div className="relative isolate pt-14">
            <Zoom triggerOnce>
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </Zoom>
            <div className="py-24 sm:py-32 lg:pb-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Zoom triggerOnce>
                  <div className="mx-auto max-w-2xl text-center">
                    {!!pageHeaderTitleProp && (
                      <h1 className="text-4xl font-bold tracking-tight text-text-color sm:text-6xl">
                        {pageHeaderTitleProp}
                      </h1>
                    )}
                    {!!pageHeaderSubtitleProp && (
                      <p className="mt-6 text-lg leading-8 text-text-color">
                        {pageHeaderSubtitleProp}
                      </p>
                    )}
                  </div>
                </Zoom>

                {!!pageHeaderImageProp && (
                  <Fade triggerOnce direction="up">
                    <div className="mt-16 flow-root sm:mt-24">
                      <div className="-m-2 rounded-xl bg p-2 ring-1 ring-inset ring-primary lg:-m-4 lg:rounded-2xl lg:p-4">
                        <Image
                          src={pageHeaderImageProp}
                          alt={pageHeaderTitleProp || ""}
                          width={2432}
                          height={1442}
                          className="rounded-md shadow-2xl ring-1 ring-secondary"
                        />
                      </div>
                    </div>
                  </Fade>
                )}
              </div>
            </div>
            <Zoom triggerOnce>
              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </Zoom>
          </div>
        </div>
      )}
      {pageWidthStyle === "Content" && (
        <section
          className={`relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8' ${cssClass}`}
        >
          {(pageHeaderTitleProp || pageHeaderSubtitleProp) && (
            <div className="relative w-full mx-auto p-4 my-8">
              <div className="flex flex-col md:flex-col items-center md:items-start justify-center md:justify-start w-full">
                {!!pageHeaderTitleProp && (
                  <Fade direction="left" triggerOnce>
                    <h1 className="text-3xl md:text-7xl xl:text-8xl text-shadow my-0 py-0 text-center md:text-left text-primary font-bold w-full mx-auto">
                      {pageHeaderTitleProp}
                    </h1>
                  </Fade>
                )}
                {!!pageHeaderSubtitleProp && (
                  <Fade direction="right" triggerOnce>
                    <h2 className="text-shadow my-0 py-0 text-center uppercase tracking-widest font-bold text-sm opacity-80 md:text-left md:ml-4 w-full">
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
                  className="h-[26rem] w-full object-cover object-center mb-8"
                />
              )}
            </div>
          </Fade>
        </section>
      )}
    </>
  );
}
