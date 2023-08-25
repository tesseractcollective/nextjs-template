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
import ReactGA from "react-ga4";

export interface BlogProps {
  blog: BlogFieldsFragment;
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function Blog({ blog, siteLibrary }: BlogProps) {
  const {
    title,
    content,
    image,
    blogCallToActionText,
    blogCallToActionLink,
    videoBox,
  } = blog;
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
            href="/blogs"
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
            <span>Blogs</span>
          </Link>
        </div>
        <section className="w-10/12 md:w-8/12 mx-auto block my-4 p-4">
          {!!image?.url && (
            <div className="relative h-[600px]">
              <Image
                src={image.url}
                alt=""
                priority
                className="object-center mx-auto"
                width={0}
                height={0}
                sizes="100%"
                style={{
                  width: "auto",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
          )}
          {!!title && <h1 className="uppercase mb-2 gradient-text">{title}</h1>}
          {!!content?.html && (
            <div className="body-parsed-text">{parse(content.html)}</div>
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
    </>
  );
}
