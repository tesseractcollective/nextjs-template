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

  return (
    <div>
      <section
        className={`contentPage-body dark-section my-32 ${
          pageWidthStyle === 'Full'
            ? 'w-full py-4'
            : 'container my-8 md:mt-6 md:mb-8 mx-auto w-10/12 lg:w-10/12 xl:w-10/12'
        }`}>
        <section
          className={`hero-container ${pageWidthStyle === 'Full' ? 'overlay-inner' : ''} ${
            !!pageHeaderWrapperCssClassProp && pageHeaderWrapperCssClassProp
          }`}
          style={{
            backgroundImage: `url(${
              !!pageHeaderImageProp && pageHeaderImageProp
            })`
          }}>
          <div className="hero-text-content-page flex flex-col items-center justify-center py-4 text-center">
            {!!pageHeaderTitleProp && (
              <h1 className="text-3xl md:text-5xl xl:text-8xl text-shadow my-0 py-0">
                {pageHeaderTitleProp}
              </h1>
            )}
            {!!pageHeaderSubtitleProp && (
              <h2 className="text-shadow my-0 py-0 text-center">
                {pageHeaderSubtitleProp}
              </h2>
            )}
          </div>
        </section>
      </section>
    </div>
  );
}
