import type {
  BlogFieldsFragment,
  SiteLibraryFieldsFragment,
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

export interface BlogProps {
  blog: BlogFieldsFragment;
  blogs: BlogFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function Blog({ blog, siteLibrary, blogs }: BlogProps) {
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
      <div className="texture-background overflow-hidden relative">
        <div className="w-10/12 md:w-8/12 mx-auto block my-2 p-2 text-center">
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
        <section className="max-w-5xl mx-auto block my-4 p-4">
          <div>
            {!!image?.url && (
              <div className="relative h-[500px] block">
                <Image
                  src={image.url}
                  alt=""
                  priority
                  className="object-center mx-auto h-full w-full object-cover"
                  width={0}
                  height={0}
                  sizes="100%"
                />
              </div>
            )}
          </div>
          {!!title && (
            <h1 className="uppercase mb-2 gradient-text block">{title}</h1>
          )}
          {!!content?.html && (
            <div className="body-parsed-text block">{parse(content.html)}</div>
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
      {filteredBlogs && blog.blogCategory && (
        <div className="relative">
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
