import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useViewport from "@/app/hooks/useViewport";
import type { BlogFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";

export interface BlogsProps {
  fromHomePage?: boolean;
  blogHeader?: string;
  blogs: BlogFieldsFragment[];
  blogCategory: string;
  listSummary?: boolean;
}

export default function Blogs({
  blogs,
  fromHomePage,
  blogHeader,
  blogCategory,
  listSummary,
}: BlogsProps) {
  const { isMobile } = useViewport();
  const swiperRef = useRef<SwiperType>();
  const FilteredBlogs = blogs.filter(
    (blog) => blog?.blogCategory === blogCategory
  );

  if (listSummary === true && !!blogs)
    return (
      <>
        <ul className="mt-6 space-y-6 max-w-max">
          {FilteredBlogs.splice(0, 4).map((blogItem) => (
            <li key={blogItem.blogSlug} className="">
              <Link
                href={`/blog/${blogItem.blogSlug}` || "#"}
                className="no-underline flex gap-x-2 items-center"
              >
                {!!blogItem.image?.url && (
                  <Image
                    className="h-4 w-4 flex-none rounded-full bg-gray-50 object-cover"
                    src={blogItem.image?.url}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ width: "16px" }}
                  />
                )}
                <div className="flex-auto">
                  <div className="flex items-center justify-between gap-x-4">
                    <p className="text-xs text-white opacity-80 line-clamp-1 max-w-[180px]">
                      {blogItem.title}
                    </p>
                    {/* <p className="flex-none text-xs text-white opacity-40">
                      <time dateTime={blogItem.date}>{blogItem.date}</time>
                    </p> */}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );

  if (fromHomePage === true && !!blogs)
    return (
      <>
        <div className="flex flex-row w-full items-center justify-between px-2">
          <h3 className="text-2xl md:text-4xl opacity-80 uppercase text-left">
            {(!!blogHeader && blogHeader) || "Blogs"}
          </h3>
          <div className="flex flex-row">
            <button
              type="button"
              className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-white mr-4"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FontAwesomeIcon
                icon={faArrowLeft as IconProp}
                className="fa-fw my-0 text-xl h-4 w-4"
              />
              <span className="sr-only">Move Blog Rotation Back</span>
            </button>
            <button
              type="button"
              className="flex bg-none border-none outline-none font-bold cursor-pointer transition-all opacity-70 hover:opacity-100 text-white"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FontAwesomeIcon
                icon={faArrowRight as IconProp}
                className="fa-fw my-0 text-xl h-4 w-4"
              />
              <span className="sr-only">Move Blog Rotation Next</span>
            </button>
          </div>
        </div>
        <div className="container py-5 blog-slider-wrapper mx-auto">
          <Swiper
            className="!pb-10"
            grabCursor
            loop
            modules={[Navigation, Pagination]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={30}
          >
            {FilteredBlogs.map((blogItem) => (
              <SwiperSlide className="mr-4 group" key={blogItem.blogSlug}>
                <article
                  key={blogItem.id}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 h-full group"
                >
                  {!!blogItem.image?.url && (
                    <Image
                      src={blogItem.image.url}
                      alt=""
                      fill
                      sizes="100%"
                      className="absolute inset-0 -z-10 h-full w-full object-cover vignette object-center"
                    />
                  )}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dark/50 via-white/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-primary ring-inset ring-dark/10 overflow-hidden vignette transition group-hover:ring-primary-hover" />

                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 !text-white">
                    <Link
                      href={`/blog/${blogItem.blogSlug || "/blogs"}`}
                      className="!text-white"
                    >
                      <span className="absolute inset-0" />
                      {blogItem.title}
                    </Link>
                  </h3>
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-hover transition opacity-0 group-hover:opacity-30 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark transition opacity-0 group-hover:opacity-30 z-10" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full text-center">
          <Link
            href="/blogs"
            className="text-link flex flex-row my-1 items-center max-w-max justify-center text-sm text-center mx-auto mb-8"
          >
            <span>All {(!!blogHeader && blogHeader) || "Blogs"}</span>
            <FontAwesomeIcon
              icon={faArrowRight as IconProp}
              className="fa-fw ml-2 my-0 h-4 w-4"
            />
          </Link>
        </div>
      </>
    );

  return (
    <div>
      {!!blogs && (
        <div className="blog-wrapper">
          <h2 className="text-center">
            {(!!blogHeader && blogHeader) || "Blogs"}
          </h2>
          <div className="mx-auto flex flex-wrap flex-row gap-8 animate-col-width items-stretch w-full my-8">
            <Fade direction="up" triggerOnce cascade damping={0.1} className="w-full md:w=[50%] lg:w-[40%] xl:w-[31.5%] mx-auto">
              {FilteredBlogs?.map((blogItem) => (
                <article
                  key={blogItem.id}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 lg:pt-80 group transition w-full h-full"
                >
                  {!!blogItem.image?.url && (
                    <Image
                      src={blogItem.image.url}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100%"
                      style={{ width: "100%" }}
                      className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-dark via-gray-900/40 group-hover:from-primary-hover transition-all" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 transition ring-primary group-hover:ring-primary-hover ring-inset" />

                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 !text-white">
                    <Link href={`/blog/${blogItem.blogSlug}`}>
                      <span className="absolute inset-0 z-30" />
                      {blogItem.title}
                    </Link>
                  </h3>
                </article>
              ))}
            </Fade>
          </div>
        </div>
      )}
    </div>
  );
}
