"use client";
import type {
  BlogFieldsFragment,
  SiteLibraryFieldsFragment,
  ContactFieldsFragment,
  EventFieldsFragment,
  ProductFieldsFragment,
  AlbumFieldsFragment,
  ProfileFieldsFragment,
  TestimonialFieldsFragment,
  LogoTableFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import LinkItem from "@/components/LinkItem";
import Blogs from "@/components/Blogs";
import ReactGA from "react-ga4";
import SocialMediaIcons from "./SocialMediaIcons";
import Moment from "react-moment";
import {
  faDiamondTurnRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import SocialShare from "@/components/elements/SocialShare";
import GallerySection from "@/components/GallerySection";
import VideoSection from "./VideoSection";
import Sections from "@/components/sections/Sections";
import ContentComponents from "@/components/ContentComponents";
import Elements from "@/components/elements/Elements";
import AudioPlayer from "./AudioPlayer";

export interface BlogProps {
  blog: BlogFieldsFragment;
  blogs: BlogFieldsFragment[];
  siteLibrary?: SiteLibraryFieldsFragment;
  contacts: ContactFieldsFragment[];
  events: EventFieldsFragment[];
  products: ProductFieldsFragment[];
  profiles: ProfileFieldsFragment[];
  albums: AlbumFieldsFragment[];
  testimonials: TestimonialFieldsFragment[];
  logoTables: LogoTableFieldsFragment[];
}

export default function Blog({
  blog,
  siteLibrary,
  blogs,
  contacts,
  events,
  profiles,
  albums,
  products,
  testimonials,
  logoTables,
}: BlogProps) {
  const {
    title,
    content,
    image,
    blogCallToActionText,
    blogCallToActionLink,
    videoBox,
    blogGallery,
    blogHtml,
    layoutBlocks,
    date,
    audioBlog,
  } = blog;
  const filteredBlogs = blogs?.filter(
    (tempBlog) => blog.blogSlug !== tempBlog.blogSlug
  );
  const filteredContacts = contacts?.filter((contact) =>
    blog?.authorQuery.includes(contact.contactQuery)
  );
  return (
    <>
      <Head>
        {!!title && <title>{title}</title>}
        {!!image?.url && <meta property="og:image" content={image?.url} />}
        {!!siteLibrary?.title && (
          <meta name="description" content={siteLibrary.title} />
        )}
        {!!siteLibrary?.favicon && (
          <link rel="shortcut icon" href={siteLibrary.favicon.url} />
        )}
      </Head>
      <div className="texture-background texture-faded overflow-hidden relative">
        {blog.blogCategory && (
          <div className="mx-auto block mt-8 px-4 text-center">
            <Link
              href={`/${blog.blogCategory}`}
              onClick={() =>
                ReactGA.event({
                  category: "Link",
                  action: "Visit Blogs",
                  label: "Visit Blogs",
                })
              }
              className="text-link uppercase no-underline max-w-max my-0 py-0 flex flex-row items-center mx-auto"
            >
              <FontAwesomeIcon
                icon={faArrowLeft as IconProp}
                className="fa-fw h-4 w-4 mr-2"
              />
              <span>{blog.blogCategory}</span>
            </Link>
          </div>
        )}

        <section className="max-w-5xl mx-auto block my-4">
          <div className="flex flex-col blog-meta gap-y-8 mb-12">
            <div>
              {!!image?.url && (
                <div className="relative h-80 aspect-video md:h-[500px] block px-0 md:px-4 transition-all">
                  <Image
                    src={image.url}
                    alt=""
                    className="object-center mx-auto h-full w-full object-cover block rounded-t-xl aspect-video"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                </div>
              )}
            </div>
            {!!title && (
              <h1 className="uppercase !m-0 text-3xl md:!text-5xl gradient-text block !font-bold !text-left !no-underline !border-b-0 px-4">
                {title}
              </h1>
            )}
            {!!date && (
              <h3 className="text-xl opacity-70 px-4">
                <span className="">
                  <Moment format="MMM/DD/YYYY">{date}</Moment>
                </span>
              </h3>
            )}
            {!!filteredContacts && (
              <div className="mx-auto px-4 flex flex-row flex-wrap w-full">
                <div className="lg:col-start-2 text-center lg:text-left">
                  <ul className="flex flex-col items-center justify-center lg:flex-row gap-y-8 gap-x-24">
                    {filteredContacts?.map((contact) => (
                      <li key={contact.contactName}>
                        <div className="flex items-center gap-x-4 lg:gap-x-6  justify-center lg:justify-start text-center lg:text-left lg:flex-row">
                          {contact?.contactAvatar?.url && (
                            <Image
                              className="h-14 lg:h-16 w-14 lg:w-16 rounded-full object-cover"
                              src={contact.contactAvatar.url}
                              alt=""
                              width={64}
                              height={64}
                              sizes="100%"
                            />
                          )}
                          <div>
                            {contact.contactName && (
                              <h3 className="text-sm lg:text-base font-bold leading-6 lg:leading-7 tracking-tight text-text-color">
                                {contact.contactName}
                              </h3>
                            )}
                            {contact.contactTitle && (
                              <p className="text-xs lg:text-sm font-semibold leading-6 !text-primary">
                                {contact.contactTitle}
                              </p>
                            )}
                            <div className="flex flex-row items-center justify-start">
                              <SocialMediaIcons
                                fadeDirection="up"
                                cssClass="text-sm my-0 text-text-color opacity-80 flex flex-row items-center justify-center lg:justify-start gap-x-2"
                                linkedinLinkProp={
                                  contact?.contactLinkedin || ""
                                }
                                calendlyLinkProp={
                                  contact.contactCalendly || undefined
                                }
                                instagramLinkProp={
                                  contact.contactInstagram || undefined
                                }
                                whatsappLinkProp={
                                  contact.contactWhatsapp || undefined
                                }
                                displayVcf={true}
                                avatar={contact.contactAvatar?.url || undefined}
                                name={contact.contactName || undefined}
                                emailLinkProp={contact?.contactEmail || ""}
                                phoneLinkProp={contact?.contactPhone || ""}
                              />
                            </div>
                            {!!contact.contactAddress && (
                              <p className="text-xs md:text-sm my-0 text-text-color opacity-80 flex flex-row items-center">
                                <FontAwesomeIcon
                                  icon={faLocationDot as IconProp}
                                  className="fa-fw mr-2 h-4 w-4"
                                />
                                <span>{contact.contactAddress}</span>
                                {contact?.contactGoogleAddressLink && (
                                  <a
                                    href={contact.contactGoogleAddressLink}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <FontAwesomeIcon
                                      icon={faDiamondTurnRight as IconProp}
                                      className="fa-fw ml-2 h-4 w-4"
                                    />
                                  </a>
                                )}
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          {!!audioBlog?.url && (
            <div className="audio-player block px-4 my-8">
              <AudioPlayer
                audioURL={audioBlog.url}
                title="Listen to this page"
              />
            </div>
          )}
          {!!content?.html && (
            <div className="body-parsed-text block px-4 content-large">
              {parse(content.html)}
            </div>
          )}
          {!!blogHtml && (
            <div className="body-parsed-text block px-4">{parse(blogHtml)}</div>
          )}
          {!!blogCallToActionText && blogCallToActionLink && (
            <LinkItem
              link={blogCallToActionLink}
              label={blogCallToActionText}
              cssClass="flex items-center justify-center font-bold text-text-overlay opacity-90  hover:text-text-color hover:opacity-100 border-1 border-primary cursor-pointer bg-primary px-4 md:px-6 rounded transition-all text-2xl py-2 md:py-3 uppercase text-center max-w-max mx-auto"
            />
          )}
          {!!siteLibrary?.youtubeApiKey &&
            !!videoBox &&
            videoBox.length >= 1 && (
              <VideoSection
                videoData={videoBox}
                youtubeApiKey={siteLibrary.youtubeApiKey}
              />
            )}
          {!!blogGallery && (
            <GallerySection
              galleryData={blogGallery}
              galleryLayoutData="lightbox"
            />
          )}
        </section>
      </div>
      {layoutBlocks && layoutBlocks.length >= 1 && (
        <>
          {layoutBlocks.map((layoutBlock, parentIndex) => {
            const totalColumns = layoutBlock.layoutBlockColumns.length;
            const styleBlockBGImage = layoutBlock?.backgroundImage?.url
              ? { backgroundImage: `url(${layoutBlock.backgroundImage.url})` }
              : {};
            const styleBlockBGColor = layoutBlock?.backgroundColor?.hex
              ? { background: layoutBlock.backgroundColor?.hex }
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
                style={styleBlockBGColor || styleBlockBGImage}
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
                        {!!siteLibrary && (
                          <>
                            <Sections
                              sectionData={layoutBlockColumn.sections}
                              siteLibrary={siteLibrary}
                            />
                            <ContentComponents
                              contentTags={layoutBlockColumn.contentTags}
                              events={events}
                              contacts={contacts}
                              testimonials={testimonials}
                              profiles={profiles}
                              logoTables={logoTables}
                              products={products}
                              blogs={blogs}
                              albums={albums}
                              elements={layoutBlockColumn.elements}
                              siteLibrary={siteLibrary}
                            />
                            <Elements
                              elements={layoutBlockColumn.elements}
                              siteLibrary={siteLibrary}
                            />
                          </>
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
      <SocialShare />
      {filteredBlogs && blog.blogCategory && (
        <div className="relative bg-bg-secondary py-6">
          <section className="max-w-8xl my-8 px-4  mx-auto mb-16">
            <Blogs
              fromHomePage={true}
              blogs={filteredBlogs}
              blogCategory={blog.blogCategory}
              blogHeader={blog.blogCategory || "Blogs"}
              blogLayoutStyle="slider"
            />
          </section>
        </div>
      )}
    </>
  );
}
