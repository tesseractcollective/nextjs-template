"use client";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
import type { LayoutQuery } from "@/graphql/generated/graphql";
// import Nav from "../nav/Nav";
import Footer from "./navigation/Footer";
import Nav from "./navigation/Nav";
// import type { LayoutSectionComponentType } from '~/types/types';
// import Mailchimp from '~/components/mailchimp/Mailchimp';
// import MagicGrid from "magic-grid";
// layoutSectionBlocksData?: LayoutSectionComponentType[];
// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import VideoBox from "@/components/VideoBox";
import GridBox from "@/components/GridBox";
import ContactFormSection from "@/components/ContactFormSection";
import Slider from "react-slick";
import LogoTable from "@/components/LogoTable";
import Blogs from "@/components/Blogs";
import Events from "@/components/Events";
import Whatsapp from "@/components/Whatsapp";
import FeatureAlbum from "@/components/FeatureAlbum";
import PageHeader from "@/components/PageHeader";
import HeroMediaSliderSection from "@/components/HeroMediaSliderSection";
import Parallax from "@/components/Parallax";
import StandOutText from "@/components/StandOutText";
import Testimonials from "@/components/Testimonials";
import IframeBox from "@/components/IframeBox";
import Profiles from "@/components/Profiles";
import VideoPlaylistBox from "./VideoPlaylistBox";
import { Fade } from "react-awesome-reveal";
import { StripePricingTable } from "./StripePricingTable";
import InstagramSection from "./InstagramSection";
import Products from "./Products";

interface PageProps {
  layout: LayoutQuery;
}

export default function LayoutBlocks({ layout }: PageProps) {
  if (!layout) return <></>;
  const {
    siteLibrary,
    events,
    testimonials,
    page,
    profiles,
    navigations,
    logoTables,
    albums,
    blogs,
    products
  } = layout;
  if (!siteLibrary) return <></>;
  // console.log("Layout", layout);
  // console.log("Layout/siteLibrary", siteLibrary);
  // console.log("Layout/events", events);
  // console.log("Layout/testimonials", testimonials);
  // console.log("Layout/profiles", profiles);
  // console.log("Layout/contentPage", contentPage);
  // console.log("Layout/navigations", navigations);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  // const { gallery } = layoutSectionContent as LayoutSectionComponentType;
  // const finalImages = layoutSectionContent.map(layoutBlockColumn =>
  //   layoutBlockColumn?.gallery?.map(
  //     (image: { url: any }) => image.url,
  //   ),
  // );

  return (
    <>
      {navigations[0] && siteLibrary && (
        <Nav
          siteLibrary={siteLibrary}
          navigation={navigations[0]}
          hideNav={page?.hideNav || undefined}
        />
      )}
      {!!page && (
        <PageHeader
          pageHeaderImageProp={page?.heroImage?.url || undefined}
          pageHeaderTitleProp={page?.title || undefined}
          pageHeaderSubtitleProp={page?.subtitle || undefined}
          pageWidthStyle={page?.pageWidthStyle || undefined}
          hideHeader={page?.hideHeader || undefined}
        />
      )}
      {page?.layoutBlocks && (
        <>
          {page.layoutBlocks.map((layoutBlock, parentIndex) => {
            const totalColumns = layoutBlock.layoutBlockColumns.length;
            const styleBlockBGImage = layoutBlock?.backgroundImage?.url
              ? { backgroundImage: `url(${layoutBlock.backgroundImage.url})` }
              : {};
            return (
              <div
                key={`layout-block-row-${parentIndex++}`}
                id={`layout-block-row-${parentIndex++ + 1}`}
                className={`w-full flex flex-wrap ${layoutBlock.cssClass} ${
                  layoutBlock?.backgroundImage?.url
                    ? "background-image-featured"
                    : ""
                }`}
                style={{ backgroundColor: layoutBlock.backgroundColor?.hex }}
              >
                {layoutBlock.layoutBlockColumns.map(
                  (layoutBlockColumn, index) => {
                    const styleBGImage = layoutBlockColumn?.backgroundImage?.url
                      ? {
                          backgroundImage: `url(${layoutBlockColumn.backgroundImage.url})`,
                        }
                      : {};
                    return (
                      <div
                        id={
                          layoutBlockColumn?.htmlId ||
                          `layout-block-${parentIndex}-column-${index + 1}`
                        }
                        key={Math.random()}
                        className={`${
                          layoutBlockColumn?.hideBlockColumn ? "hidden" : ""
                        } flex justify-center mx-0 px-0 w-full flex-auto  dynamic-feature-section flex-col xl:w-${
                          12 / totalColumns
                        }/12 ${
                          layoutBlockColumn?.cssClass
                            ? layoutBlockColumn?.cssClass
                            : ""
                        } ${
                          layoutBlockColumn?.backgroundImage?.url
                            ? "background-image-featured"
                            : ""
                        } `}
                        style={styleBGImage}
                      >
                        {!!layoutBlockColumn?.textContent &&
                          layoutBlockColumn?.textContent.length >= 1 && (
                            <>
                              <div className="grid w-full mx-auto">
                                {layoutBlockColumn?.textContent
                                  ?.filter(
                                    (textContent) =>
                                      textContent.contentAlign === "card"
                                  )
                                  .map((textContentItem) => (
                                    <div
                                      key={Math.random()}
                                      className="col-12 md:col-5 md:mx-auto"
                                    >
                                      {textContentItem?.link ? (
                                        <div>
                                          {textContentItem.link.includes(
                                            "http"
                                          ) ? (
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
                                                  src={
                                                    textContentItem.contentImage
                                                      .url
                                                  }
                                                  alt={
                                                    textContentItem?.header
                                                      ?.html || ""
                                                  }
                                                />
                                              )}
                                              <div className="flex flex-col ml-3">
                                                {textContentItem?.header && (
                                                  <div className="text-sm font-bold my-0 py-0 parsed-mb-0">
                                                    {parse(
                                                      textContentItem.header
                                                        .html
                                                    )}
                                                  </div>
                                                )}
                                                {textContentItem?.subHeader && (
                                                  <div className="text-sm my-0 font-light opacity-90 py-0 parsed-mb-0">
                                                    {parse(
                                                      textContentItem.subHeader
                                                        .html
                                                    )}
                                                  </div>
                                                )}
                                                {textContentItem?.content && (
                                                  <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 w-10">
                                                    {parse(
                                                      textContentItem.content
                                                        .html
                                                    )}
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
                                                  src={
                                                    textContentItem.contentImage
                                                      .url
                                                  }
                                                  alt={
                                                    textContentItem?.header
                                                      ?.html || ""
                                                  }
                                                />
                                              )}
                                              <div className="flex flex-col ml-3">
                                                {textContentItem?.header && (
                                                  <div className="text-sm font-bold my-0 py-0 parsed-mb-0">
                                                    {parse(
                                                      textContentItem.header
                                                        .html
                                                    )}
                                                  </div>
                                                )}
                                                {textContentItem?.subHeader && (
                                                  <div className="text-sm my-0 font-light opacity-90 py-0 parsed-mb-0">
                                                    {parse(
                                                      textContentItem.subHeader
                                                        .html
                                                    )}
                                                  </div>
                                                )}
                                                {textContentItem?.content && (
                                                  <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 w-10/12">
                                                    {parse(
                                                      textContentItem.content
                                                        .html
                                                    )}
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
                                              src={
                                                textContentItem.contentImage.url
                                              }
                                              alt={
                                                textContentItem?.header?.html ||
                                                ""
                                              }
                                            />
                                          )}
                                          <div className="flex flex-col ml-3">
                                            {textContentItem?.header && (
                                              <div className="text-sm font-bold my-0 py-0 parsed-mb-0">
                                                {parse(
                                                  textContentItem.header.html
                                                )}
                                              </div>
                                            )}
                                            {textContentItem?.subHeader && (
                                              <div className="text-sm my-0 font-light opacity-90 py-0 parsed-mb-0">
                                                {parse(
                                                  textContentItem.subHeader.html
                                                )}
                                              </div>
                                            )}
                                            {textContentItem?.content && (
                                              <div className="body-parsed-text text-xs my-0 opacity-70 py-0 parsed-mb-0 w-10/12">
                                                {parse(
                                                  textContentItem.content.html
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                              </div>
                              <div>
                                {layoutBlockColumn?.textContent
                                  ?.filter(
                                    (textContent) =>
                                      textContent.contentAlign !== "card"
                                  )
                                  .map((textContentItem) => (
                                    <div
                                      key={Math.random()}
                                      className={`relative h-full z-20 ${
                                        textContentItem?.textContentWidth
                                      } ${
                                        (textContentItem?.contentAlign ===
                                          "center" &&
                                          "mx-auto") ||
                                        (textContentItem?.contentAlign ===
                                          "left" &&
                                          "mr-auto") ||
                                        (textContentItem?.contentAlign ===
                                          "right" &&
                                          "ml-auto") ||
                                        (textContentItem?.contentAlign ===
                                          "justify" &&
                                          "mx-auto")
                                      } ${
                                        (textContentItem?.textContentWidth ===
                                          "Content" &&
                                          "w-full md:w-6/12") ||
                                        (textContentItem?.textContentWidth ===
                                          "Full" &&
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
                                              <Image
                                                className={`block mb-4 ${
                                                  (textContentItem?.contentAlign ===
                                                    "center" &&
                                                    "mx-auto") ||
                                                  (textContentItem?.contentAlign ===
                                                    "left" &&
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
                                                src={
                                                  textContentItem.contentImage
                                                    .url
                                                }
                                                alt={
                                                  textContentItem?.header
                                                    ?.html || ""
                                                }
                                                width={0}
                                                height={0}
                                                sizes="100%"
                                              />
                                            </Fade>
                                          )}
                                        </div>
                                        <Fade direction="up" triggerOnce>
                                          {textContentItem?.header && (
                                            <div className="body-parsed-text">
                                              {parse(
                                                textContentItem.header.html
                                              )}
                                            </div>
                                          )}
                                        </Fade>
                                        <Fade direction="up" triggerOnce>
                                          {textContentItem?.subHeader && (
                                            <div className="body-parsed-text">
                                              {parse(
                                                textContentItem.subHeader.html
                                              )}
                                            </div>
                                          )}
                                        </Fade>
                                        <Fade direction="up" triggerOnce>
                                          {textContentItem?.content && (
                                            <div className="body-parsed-text">
                                              {parse(
                                                textContentItem.content.html
                                              )}
                                            </div>
                                          )}
                                        </Fade>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </>
                          )}
                        {!!layoutBlockColumn?.callToAction &&
                          layoutBlockColumn?.callToAction.length >= 1 && (
                            <div className="flex flex-row flex-wrap items-center mx-auto relative z-20">
                              {layoutBlockColumn?.callToAction?.map(
                                (callToActionItem) => (
                                  <div key={Math.random()}>
                                    {callToActionItem?.ctaLink && (
                                      <div
                                        className={`flex ${
                                          (callToActionItem?.contentAlign ===
                                            "center" &&
                                            "mx-auto") ||
                                          (callToActionItem?.contentAlign ===
                                            "left" &&
                                            "mr-auto") ||
                                          (callToActionItem?.contentAlign ===
                                            "right" &&
                                            "ml-auto") ||
                                          (callToActionItem?.contentAlign ===
                                            "justify" &&
                                            "mx-auto")
                                        }`}
                                      >
                                        {callToActionItem?.ctaLink.includes(
                                          "http"
                                        ) ? (
                                          <a
                                            href={callToActionItem?.ctaLink}
                                            target="_blank"
                                            className={`${
                                              callToActionItem.ctaClass
                                            } ${
                                              callToActionItem?.ctaPrimary
                                                ? "border-white text-white border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl"
                                                : "text-white border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl"
                                            } mr-2 max-w-max`}
                                            rel="noreferrer"
                                          >
                                            {callToActionItem.ctaLabel}
                                          </a>
                                        ) : (
                                          <Link
                                            href={callToActionItem?.ctaLink}
                                            className={`${
                                              callToActionItem.ctaClass
                                            } ${
                                              callToActionItem?.ctaPrimary
                                                ? "border-white text-white border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 font-bold w-full text-2xl"
                                                : "text-white border px-4 md:px-6 py-2 theme-button max-w-max block no-underline my-4 w-full text-2xl"
                                            } mr-2 max-w-max`}
                                          >
                                            {callToActionItem.ctaLabel}
                                          </Link>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        {!!testimonials &&
                          layoutBlockColumn?.testimonialsQuery && (
                            <section
                              className="container mx-auto z-20 w-10/12"
                              id={`testimonial-${index}`}
                            >
                              <Testimonials
                                testimonials={testimonials}
                                query={layoutBlockColumn?.testimonialsQuery}
                              />
                            </section>
                        )}
                        {!!products && layoutBlockColumn?.productQuery && (
                          <section className="container mx-auto z-20 w-10/12"
                          id={`product-${index}`}>
                            <Products 
                             products={products}
                             query={layoutBlockColumn?.productQuery}
                            />
                          </section>
                        )}
                        {/* <YouTubePlaylist
                        apiKey="AIzaSyDRSCldWgk_sVE5qDnziqlGlB5Inq_Ljc8"
                        playlistId="PLPZMiBBzqLb0MrkNOy93YQmoQ1Nb2mkZO"
                        uniqueName="THIS_PLAYLIST_INSTANCE_NAME"
                      /> */}
                        {!!siteLibrary.youtubeApiKey && (
                          <>
                            {!!layoutBlockColumn?.videoBox &&
                              layoutBlockColumn?.videoBox.length >= 1 && (
                                <section
                                  className="container mx-auto z-20 w-10/12"
                                  id={`videoBox-${index}`}
                                >
                                  {layoutBlockColumn.videoBox?.map((video) => (
                                    <div key={Math.random()}>
                                      {video?.youtubePlaylistId ? (
                                        <VideoPlaylistBox
                                          videoTitle={
                                            video?.videoTitle || undefined
                                          }
                                          youtubePlaylistId={
                                            video.youtubePlaylistId
                                          }
                                          youtubeApiKey={
                                            siteLibrary.youtubeApiKey
                                          }
                                        />
                                      ) : (
                                        <VideoBox
                                          videoTitle={
                                            video?.videoTitle || undefined
                                          }
                                          vimeoVideoId={
                                            video?.vimeoVideoId || undefined
                                          }
                                          youtubeVideoId={
                                            video?.youtubeVideoId || undefined
                                          }
                                          youtubePlaylistId={
                                            video?.youtubePlaylistId!
                                          }
                                          youtubeApiKey={
                                            siteLibrary.youtubeApiKey
                                          }
                                        />
                                      )}
                                    </div>
                                  ))}
                                </section>
                              )}
                          </>
                        )}
                        {!!layoutBlockColumn?.gridBox &&
                          layoutBlockColumn?.gridBox?.length >= 1 && (
                            <section
                              className="container mx-auto z-20 w-10/12"
                              id={`gridBox-${index}`}
                            >
                              <GridBox
                                gridBoxData={layoutBlockColumn.gridBox}
                              />
                            </section>
                          )}
                        {!!layoutBlockColumn?.iFrameCode &&
                          layoutBlockColumn?.iFrameTitle && (
                            <IframeBox
                              code={layoutBlockColumn?.iFrameCode}
                              title={layoutBlockColumn?.iFrameTitle}
                            />
                          )}
                        {!!layoutBlockColumn?.heroMediaSlider &&
                          siteLibrary && (
                            <HeroMediaSliderSection
                              heroMediaSlider={
                                layoutBlockColumn.heroMediaSlider
                              }
                              siteLibrary={siteLibrary}
                            />
                          )}
                        {layoutBlockColumn?.parallaxImage?.url && (
                          <Parallax
                            parallaxImage={
                              layoutBlockColumn?.parallaxImage?.url
                            }
                          />
                        )}
                        {!!layoutBlockColumn?.logoTableQuery &&
                          logoTables.length >= 1 && (
                            <div>
                              {logoTables &&
                                layoutBlockColumn.logoTableQuery && (
                                  <LogoTable
                                    query={layoutBlockColumn.logoTableQuery}
                                    logoTables={logoTables}
                                  />
                                )}
                            </div>
                          )}
                        {!!blogs && layoutBlockColumn?.blogCategory && (
                          <div className="relative texture-background texture-right overflow-hidden">
                            <section className="container my-8 px-4 dark-section mx-auto">
                              <Blogs
                                fromHomePage={page.setHomePage || false}
                                blogs={blogs}
                                blogCategory={layoutBlockColumn.blogCategory}
                                blogHeader={
                                  layoutBlockColumn?.blogSectionTitle || "Blogs"
                                }
                              />
                            </section>
                          </div>
                        )}
                        {!!layoutBlockColumn?.standOutText && (
                          <StandOutText
                            standOutText={layoutBlockColumn.standOutText}
                          />
                        )}
                        {layoutBlockColumn?.galleryLayout === "grid" ? (
                          <div className="my-8">
                            {!!layoutBlockColumn?.gallery &&
                              layoutBlockColumn?.gallery.length >= 1 && (
                                <>
                                  {/* <MagicGrid items={layoutBlockColumn.gallery}>
                                    {layoutBlockColumn.gallery.map((image) => (
                                      <Image
                                        src={image.url}
                                        alt=""
                                        className=""
                                        style={{ maxWidth: "300px" }}
                                        key={image.url}
                                      />
                                    ))}
                                  </MagicGrid> */}
                                </>
                              )}
                          </div>
                        ) : (
                          <>
                            {!!layoutBlockColumn?.gallery &&
                              layoutBlockColumn?.gallery.length >= 1 && (
                                <Slider {...settings} className="">
                                  {layoutBlockColumn?.gallery.map((image) => (
                                    <div
                                      className="relative h-70vh md:h-screen max-h-[80vh]"
                                      key={image.url}
                                    >
                                      <Image
                                        src={image.url}
                                        alt={image.url}
                                        fill
                                        sizes="100vw"
                                        style={{
                                          objectFit: "cover",
                                        }}
                                      />
                                    </div>
                                  ))}
                                </Slider>
                              )}
                          </>
                        )}
                        {!!albums &&
                          layoutBlockColumn?.displayFeaturedMusic && (
                            <FeatureAlbum
                              displayFeaturedMusic={
                                layoutBlockColumn?.displayFeaturedMusic
                              }
                              albums={albums}
                              siteLibrary={siteLibrary}
                            />
                          )}
                        {!!albums && layoutBlockColumn?.displayAllMusic && (
                          <FeatureAlbum
                            displayAllMusic={layoutBlockColumn.displayAllMusic}
                            albums={albums}
                            siteLibrary={siteLibrary}
                          />
                        )}
                        {!!events &&
                          !!layoutBlockColumn?.eventDisplayLayout && (
                            <section className="container my-4 mx-auto">
                              <Events
                                displayEventsStyleGridOrSlider={
                                  layoutBlockColumn.eventDisplayLayout || "grid"
                                }
                                events={events}
                              />
                            </section>
                          )}
                        {!!profiles &&
                          layoutBlockColumn?.profilesQuery &&
                          layoutBlockColumn?.profileSectionTitle &&
                          layoutBlockColumn.profileLayoutStyle && (
                            <Profiles
                              profiles={profiles}
                              profileLayoutStyle={
                                layoutBlockColumn.profileLayoutStyle
                              }
                              profileSectionTitle={
                                layoutBlockColumn.profileSectionTitle
                              }
                              profilesQuery={layoutBlockColumn.profilesQuery}
                            />
                          )}
                        {!!layoutBlockColumn?.contactForm && siteLibrary && (
                          <ContactFormSection
                            contactFormData={layoutBlockColumn.contactForm}
                            siteLibrary={siteLibrary}
                          />
                        )}
                        {!!layoutBlockColumn?.stripePricingTableId &&
                          layoutBlockColumn?.stripePublishableKey && (
                            <StripePricingTable
                              pricingTableId={
                                layoutBlockColumn.stripePricingTableId
                              }
                              publishableKey={
                                layoutBlockColumn.stripePublishableKey
                              }
                            />
                          )}
                        {/* {layoutBlockColumn?.mailchimpLink && (
                        <div className="gradient-bkg m-0 p-0">
                          <section className="container py-8 flex align-items center jutsify-content-center">
                            <div className="flex flex-col items-center text-center w-full md:w-6 mx-auto">
                              <Fade triggerOnce direction="up" className="w-full">
                                <Mailchimp
                                  float={false}
                                  title={layoutBlockColumn?.mailchimpTitle}
                                  subtitle={layoutBlockColumn?.mailchimpSubtitle}
                                />
                              </Fade>
                            </div>
                          </section>
                        </div>
                      )} */}
                        {layoutBlockColumn?.displayInstagramSectionUsername && (
                          <InstagramSection
                            IGUsername={
                              layoutBlockColumn.displayInstagramSectionUsername
                            }
                          />
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            );
          })}
        </>
      )}
      {page?.whatsAppContactNumberFloatingButton && (
        <Whatsapp contactNumber={page.whatsAppContactNumberFloatingButton} />
      )}
      {navigations[0] && siteLibrary && (
        <Footer
          siteLibrary={siteLibrary}
          navigation={navigations[0]}
          blogs={blogs}
          hideFooter={page?.hideFooter || undefined}
        />
      )}
      <div className="hidden h-screen h-240 h-256 opacity-0 h-0 bg-white xl:w-6/12 xl:w-3/12 xl:w-12/12"></div>
    </>
  );
}
