import type {
  ProductFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga4";
import Link from "next/link";
import Image from "next/image";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import VideoBox from "@/components/VideoBox";
import VideoPlaylistBox from "@/components/VideoPlaylistBox";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import Head from "next/head";
import Products from "./Products";

export interface ProductProps {
  product: ProductFieldsFragment;
  products: ProductFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function Product({
  product,
  siteLibrary,
  products,
}: ProductProps) {
  const {
    name,
    id,
    productSlug,
    vendor,
    gallery,
    price,
    sku,
    purchaseLink,
    purchaseLabel,
    enableProduct,
    productType,
    description,
    iFrame,
    videoBox,
    productJson,
  } = product;
  if (!siteLibrary) return <></>;
  const { isSpanish, youtubeApiKey } = siteLibrary;
  const filteredProducts = products?.filter(
    (tempProduct) => product.productSlug !== tempProduct.productSlug
  );
  return (
    <>
      <Head>
        {!!name && <title>{name}</title>}
        {!!gallery[0]?.url && (
          <meta property="og:image" content={gallery[0]?.url} />
        )}
        {!!siteLibrary?.title && (
          <meta name="description" content={siteLibrary.title} />
        )}
        {!!siteLibrary?.favicon && (
          <link rel="shortcut icon" href={siteLibrary.favicon.url} />
        )}
      </Head>
      <div className="bg-dark">
        <div className="w-10/12 md:w-8/12 mx-auto block my-2 p-2 text-center">
          <Link
            href="/products"
            className="text-link uppercase no-underline max-w-max my-0 py-0 flex flex-row items-center mx-auto"
            onClick={() =>
              ReactGA.event({
                category: "Link",
                action: "Product Page",
                label: "Product Page",
              })
            }
          >
            <FontAwesomeIcon
              icon={faArrowLeft as IconProp}
              className="fa-fw text-sm h-4 w-4 mr-2"
            />
            <span>{isSpanish ? "Todos Productos" : "All Products"}</span>
          </Link>
        </div>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-12 lg:grid lg:max-w-8xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-text-color sm:text-4xl">
                {name}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              {!!description?.html && (
                <div className="mt-4 space-y-6">
                  <div className="text-base text-text-color body-parsed-text opacity-90">
                    {parse(description.html)}
                  </div>
                </div>
              )}
            </section>
          </div>

          {!!gallery?.length && name && (
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="my-16 magic-grid block h-full">
                <div className="flex px-4 max-w-5xl mx-auto">
                  <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames="flex flex-wrap flex-row w-full gap-4 mx-auto items-center justify-center"
                  >
                    {gallery.map((finalImage, index) => (
                      <a
                        href={finalImage.url}
                        key={finalImage.url}
                        className="flex flex-wrap"
                      >
                        <Image
                          src={finalImage.url}
                          alt={`Gallery Image: ${index + 1}`}
                          sizes="100%"
                          width={300}
                          height={300}
                        />
                      </a>
                    ))}
                  </LightGallery>
                </div>
              </div>
            </div>
          )}

          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            {!!purchaseLink && (
              <div className="mt-10">
                <a
                  href={purchaseLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-text-color hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-50 transition"
                  onClick={() =>
                    ReactGA.event({
                      category: "Link",
                      action: purchaseLink || "",
                      label: purchaseLink || "",
                    })
                  }
                >
                  <span>{purchaseLabel}</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {(iFrame || videoBox) && (
          <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 pt-2 lg:max-w-8xl lg:px-8">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-white opacity-40 mb-4" />
              </div>
            </div>
            {!!iFrame && <div className="my-8">{parse(iFrame)}</div>}
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

        {!!filteredProducts && (
          <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 pt-2 lg:max-w-8xl lg:px-8">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-white opacity-40 mb-4" />
              </div>
            </div>
            <Products products={filteredProducts} />
          </div>
        )}
      </div>
    </>
  );
}
