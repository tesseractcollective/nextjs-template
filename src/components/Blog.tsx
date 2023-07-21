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
    <div className="texture-background overflow-hidden relative">
      <div className="w-10/12 md:w-8/12 mx-auto block my-2 p-2 text-center">
        <Link
          href="/blogs"
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
            layout="fill"
            objectFit="cover"
            className="object-center mx-auto"
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
        )}
        {!!title && <h1 className="uppercase mb-2 gradient-text">{title}</h1>}
        {!!content?.html && (
          <div className="body-parsed-text">{parse(content.html)}</div>
        )}
        {!!blogCallToActionText && blogCallToActionLink && (
          <div>
            {blogCallToActionLink?.includes("https") ? (
              <a
                href={blogCallToActionLink}
                target="_blank"
                className="border-dark border px-4 md:px-8 py-3 theme-button mx-auto max-w-max block no-underline my-4 font-bold w-full"
                rel="noreferrer"
              >
                {blogCallToActionText}
              </a>
            ) : (
              <Link
                href={blogCallToActionLink}
                className="bg-white border-dark border px-4 md:px-8 py-3 theme-button mx-auto max-w-max block no-underline my-4 font-bold w-full"
              >
                {blogCallToActionText}
              </Link>
            )}
          </div>
        )}
        {!!videoBox && (
          <div>
            {videoBox?.map((video) => (
              <VideoBox
                videoTitle={video?.videoTitle || undefined}
                vimeoVideoId={video?.vimeoVideoId || undefined}
                youtubeVideoId={video?.youtubeVideoId || undefined}
                youtubePlaylistId={video?.youtubePlaylistId || undefined}
                youtubeApiKey={siteLibrary.youtubeApiKey}
                key={Math.random()}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
