import type {
  BlogFieldsFragment,
  SiteLibraryFieldsFragment,
  ContactFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import VideoBox from "@/components/VideoBox";
import VideoPlaylistBox from "@/components/VideoPlaylistBox";
import Head from "next/head";
import LinkItem from "@/components/LinkItem";
import Blogs from "@/components/Blogs";
import ReactGA from "react-ga4";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import SocialMediaIcons from "./SocialMediaIcons";
import {
  faDiamondTurnRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import SocialShare from "@/components/elements/SocialShare";

export interface BlogProps {
  blog: BlogFieldsFragment;
  blogs: BlogFieldsFragment[];
  contacts: ContactFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function Blog({
  blog,
  siteLibrary,
  blogs,
  contacts,
}: BlogProps) {
  const {
    title,
    content,
    image,
    blogCallToActionText,
    blogCallToActionLink,
    videoBox,
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
          <div className="mx-auto block mt-2 px-4 text-center">
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
                <div className="relative h-80 md:h-[500px] block px-0 md:px-4 transition-all">
                  <Image
                    src={image.url}
                    alt=""
                    priority
                    className="object-center mx-auto h-full w-full object-cover block rounded-t-xl"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                </div>
              )}
            </div>
            {!!title && (
              <h1 className="uppercase !my-0 text-3xl md:!text-5xl gradient-text block !font-bold !text-left !no-underline !border-b-0 px-4">
                {title}
              </h1>
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
                                fade={false}
                                cssClass="text-sm my-0 text-text-color opacity-80 flex flex-row items-center justify-center lg:justify-start gap-x-2"
                                phoneLinkProp={
                                  contact?.contactPhone || undefined
                                }
                                whatsappLinkProp={
                                  contact?.contactWhatsapp || undefined
                                }
                                emailLinkProp={
                                  contact?.contactEmail || undefined
                                }
                                displayVcf={true}
                                name={contact.contactName || undefined}
                                avatar={contact.contactAvatar?.url || undefined}
                                calendlyLinkProp={
                                  contact?.contactCalendly || undefined
                                }
                                linkedinLinkProp={
                                  contact?.contactLinkedin || undefined
                                }
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
          {!!content?.html && (
            <div className="body-parsed-text block px-4">
              {parse(content.html)}
            </div>
          )}
          {!!blogCallToActionText && blogCallToActionLink && (
            <LinkItem
              label={blogCallToActionText}
              cssClass={blogCallToActionLink}
              link="border-dark border px-4 md:px-8 py-3 theme-button mx-auto max-w-max block no-underline my-4 font-bold w-full"
            />
          )}
          {!!videoBox && (
            <div>
              {videoBox?.map((video) => (
                <div key={Math.random()}>
                  {video?.youtubePlaylistId ? (
                    <VideoPlaylistBox
                      videoTitle={video?.videoTitle || undefined}
                      youtubePlaylistId={video.youtubePlaylistId}
                      youtubeApiKey={siteLibrary.youtubeApiKey}
                    />
                  ) : (
                    <VideoBox
                      videoTitle={video?.videoTitle || undefined}
                      vimeoVideoId={video?.vimeoVideoId || undefined}
                      youtubeVideoId={video?.youtubeVideoId || undefined}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <SocialShare />
      {filteredBlogs && blog.blogCategory && (
        <div className="relative bg-bg-secondary py-6">
          <section className="max-w-8xl my-8 px-4 dark-section mx-auto mb-16">
            <Blogs
              fromHomePage={true}
              blogs={filteredBlogs}
              blogCategory={blog.blogCategory}
              blogHeader={blog.blogCategory || "Blogs"}
            />
          </section>
        </div>
      )}
    </>
  );
}
