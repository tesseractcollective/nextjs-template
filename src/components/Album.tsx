import type {
  AlbumFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga4";
import Link from "next/link";
import Image from "next/image";
import VideoBox from "@/components/VideoBox";
import VideoPlaylistBox from "@/components/VideoPlaylistBox";
import FeatureAlbum from "@/components/FeatureAlbum";
import Head from "next/head";

export interface AlbumProps {
  album: AlbumFieldsFragment;
  albums: AlbumFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function Album({ album, siteLibrary, albums }: AlbumProps) {
  const {
    albumCover,
    iFramePlayer,
    title,
    releaseDate,
    albumBuyLink,
    albumJsonData,
    videoBox,
    description,
  } = album;
  if (!siteLibrary) return <></>;
  const { isSpanish, youtubeApiKey } = siteLibrary;
  const filteredAlbums = albums?.filter(
    (tempAlbum) => album.albumSlug !== tempAlbum.albumSlug
  );
  console.log(albumJsonData);
  return (
    <>
      <Head>
        {!!title && <title>{title}</title>}
        {!!albumCover?.url && (
          <meta property="og:image" content={albumCover?.url} />
        )}
        {!!siteLibrary?.title && (
          <meta name="description" content={siteLibrary.title} />
        )}
        {!!siteLibrary?.favicon && (
          <link rel="shortcut icon" href={siteLibrary.favicon.url} />
        )}
      </Head>
      <div className="bg-dark mt-16">
        <div className="w-10/12 md:w-8/12 mx-auto block my-2 p-2 text-center">
          <Link
            href="/music"
            className="text-link uppercase no-underline max-w-max my-0 py-0 flex flex-row items-center mx-auto"
            onClick={() =>
              ReactGA.event({
                category: "Link",
                action: "Music Page",
                label: "Music Page",
              })
            }
          >
            <FontAwesomeIcon
              icon={faArrowLeft as IconProp}
              className="fa-fw text-sm h-4 w-4 mr-2"
            />
            <span>{isSpanish ? "Toda La Música" : "All Music"}</span>
          </Link>
        </div>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-12 lg:grid lg:max-w-8xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 relative">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                <li>
                  <div className="flex items-center text-sm">
                    <p className="flex-none text-xs text-text-color opacity-60">
                      <time dateTime={releaseDate}>{releaseDate}</time>
                    </p>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-text-color sm:text-4xl">
                {title}
              </h1>
            </div>
          </div>

          {!!albumCover?.url && title && (
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-start relative lg:sticky right-0 top-3">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <Image
                  src={albumCover?.url}
                  alt={title}
                  className="h-full w-full object-cover object-center"
                  width={0}
                  height={0}
                  sizes="100%"
                  priority
                  placeholder="blur"
                  blurDataURL="https://images.unsplash.com/photo-1550134464-4c07c5b02073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=985&q=80"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          )}

          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            {!!albumBuyLink && (
              <div className="my-10">
                <a
                  href={albumBuyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base text-text-color hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-50 transition-all font-bold uppercase"
                  onClick={() =>
                    ReactGA.event({
                      category: "Link",
                      action: albumBuyLink,
                      label: albumBuyLink,
                    })
                  }
                >
                  <span>{isSpanish ? "Escucha" : "Listen"}</span>
                </a>
              </div>
            )}
            <section
              aria-labelledby="information-heading"
              className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 pt-2 lg:max-w-8xl lg:px-8"
            >
              {!!description?.html && (
                <div className="mt-4 space-y-6">
                  <div className="text-base text-text-color body-parsed-text opacity-90">
                    {parse(description.html)}
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>

        {(iFramePlayer || videoBox) && (
          <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 pt-2 lg:max-w-8xl lg:px-8">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-white opacity-40 mb-4" />
              </div>
            </div>
            {!!iFramePlayer && (
              <div className="my-8">{parse(iFramePlayer)}</div>
            )}
            {!!videoBox && (
              <div>
                {videoBox?.map((video) => (
                  <div key={Math.random()}>
                    {video?.youtubePlaylistId ? (
                      <VideoPlaylistBox
                        videoTitle={video?.videoTitle || undefined}
                        youtubePlaylistId={video.youtubePlaylistId}
                        youtubeApiKey={youtubeApiKey}
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
          </div>
        )}
        {!!albums && (
          <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 pt-2 lg:max-w-8xl lg:px-8">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-white opacity-40 mb-4" />
              </div>
            </div>
            <FeatureAlbum
              albumDisplayType="all"
              albums={filteredAlbums}
              siteLibrary={siteLibrary}
            />
          </div>
        )}
      </div>
    </>
  );
}
