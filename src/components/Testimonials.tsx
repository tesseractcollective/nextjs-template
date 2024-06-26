import React from "react";
import parse from "html-react-parser";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { TestimonialFieldsFragment } from "@/graphql/generated/graphql";
import Image from "next/image";
import StarCount from "./StarCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import TripAdvisor from "../../public/svg/tripadvisor.svg";
import { faGoogle, faYelp } from "@fortawesome/free-brands-svg-icons";
interface TestimonialProps {
  query: string;
  testimonials: TestimonialFieldsFragment[];
}

export default function Testimonials({
  testimonials,
  query,
}: TestimonialProps) {
  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.testimonialType === query
  );
  return (
    <div className="w-full">
      {!!filteredTestimonials && filteredTestimonials.length >= 1 && (
        <div className="testimonial-slider-wrapper w-full mx-auto my-16">
          <Swiper
            grabCursor
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={30}
            className="w-full"
          >
            {filteredTestimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <section
                  key={index}
                  className="isolate overflow-hidden px-6 lg:px-8 py-8 mx-auto"
                >
                  <div className="relative mx-auto max-w-2xl lg:max-w-4xl">
                    <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 opacity-20 lg:left-36" />
                    <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                      <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                        <svg
                          viewBox="0 0 162 128"
                          fill="none"
                          aria-hidden="true"
                          className="absolute -top-8 -left-8 -z-10 h-32 stroke-primary opacity-40"
                        >
                          <path
                            id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                            d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                          />
                          <use
                            href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                            x={86}
                          />
                        </svg>
                        {testimonial?.starCount && (
                          <StarCount number={testimonial?.starCount} />
                        )}
                        {testimonial.testimonialText?.html && (
                          <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 line-clamp-6">
                            {parse(testimonial.testimonialText?.html)}
                          </blockquote>
                        )}
                      </div>
                      {!!testimonial.testimonialAvatar?.url && (
                        <div className="col-end-1 w-full md:w-12 md:row-span-2 lg:row-span-4 lg:w-72">
                          <Image
                            className="rounded-xl bg-primary-50 lg:rounded-3xl object-cover w-12 md:w-72 h-12 md:h-72 animate-fade-in-up"
                            src={testimonial.testimonialAvatar?.url}
                            alt={testimonial.testimonialName || ""}
                            width={266}
                            height={266}
                          />
                        </div>
                      )}
                      <figcaption className="text-base lg:col-start-1 lg:row-start-3 relative">
                        <div className="font-semibold text-text-color opacity-90 animate-fade-in-up">
                          {testimonial.testimonialName}
                        </div>
                        <div className="mt-1 text-text-color opacity-80 animate-fade-in-up">
                          {testimonial.testimonialJobTitle}
                        </div>
                        {testimonial.testimonialSourceLink && (
                          <div className="mt-2">
                            {(testimonial.testimonialSourceLink.includes(
                              "goo"
                            ) ||
                              testimonial.testimonialSourceLink.includes(
                                "g.co"
                              )) && (
                              <a
                                href={testimonial.testimonialSourceLink}
                                target="_blank"
                                className="max-w-max mx-auto text-text-color text-center !text-link transition-all cursor-pointer hover:text-[#4285f4] focus-within:text-[#4285f4]"
                                title="Google"
                                rel="noreferrer"
                              >
                                <FontAwesomeIcon
                                  icon={faGoogle as IconProp}
                                  className="fa-fw h-4 w-4"
                                />
                                <span className="sr-only">Google Review</span>
                              </a>
                            )}
                            {/* YELP */}
                            {testimonial.testimonialSourceLink.includes(
                              "yelp"
                            ) && (
                              <a
                                href={testimonial.testimonialSourceLink}
                                target="_blank"
                                className="max-w-max mx-auto text-text-color text-center !text-link transition-all cursor-pointer hover:text-[#E00708] focus-within:text-[#E00708]"
                                title="Google"
                                rel="noreferrer"
                              >
                                <FontAwesomeIcon
                                  icon={faYelp as IconProp}
                                  className="fa-fw h-4 w-4"
                                />
                                <span className="sr-only">Yelp Review</span>
                              </a>
                            )}
                            {/* TRIP ADVISOR */}
                            {testimonial.testimonialSourceLink.includes(
                              "trip"
                            ) && (
                              <a
                                href={testimonial.testimonialSourceLink}
                                target="_blank"
                                className="max-w-max mx-auto  text-center !text-link transition-all cursor-pointer"
                                title="TripAdvisor"
                                rel="noreferrer"
                              >
                                <svg
                                  id="Layer_2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512.2 320.2"
                                  width="2500"
                                  height="1563"
                                  className="svg-inline--fa fa-fw h-4 w-4"
                                  fill="currentColor"
                                >
                                  <path
                                    className="st0"
                                    d="M128.2 127.9C92.7 127.9 64 156.6 64 192c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1.1-35.4-28.6-64.1-64-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S174 166.7 174 192s-20.5 45.9-45.8 45.9z"
                                  />
                                  <circle
                                    className="st0"
                                    cx="128.4"
                                    cy="191.9"
                                    r="31.9"
                                  />
                                  <path
                                    className="st0"
                                    d="M384.2 127.9c-35.4 0-64.1 28.7-64.1 64.1 0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1 0-35.4-28.7-64.1-64.1-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S430 166.7 430 192s-20.5 45.9-45.8 45.9z"
                                  />
                                  <circle
                                    className="st0"
                                    cx="384.4"
                                    cy="191.9"
                                    r="31.9"
                                  />
                                  <path
                                    className="st0"
                                    d="M474.4 101.2l37.7-37.4h-76.4C392.9 29 321.8 0 255.9 0c-66 0-136.5 29-179.3 63.8H0l37.7 37.4C14.4 124.4 0 156.5 0 192c0 70.8 57.4 128.2 128.2 128.2 32.5 0 62.2-12.1 84.8-32.1l43.4 31.9 42.9-31.2-.5-1.2c22.7 20.2 52.5 32.5 85.3 32.5 70.8 0 128.2-57.4 128.2-128.2-.1-35.4-14.6-67.5-37.9-90.7zM368 64.8c-60.7 7.6-108.3 57.6-111.9 119.5-3.7-62-51.4-112.1-112.3-119.5 30.6-22 69.6-32.8 112.1-32.8S337.4 42.8 368 64.8zM128.2 288.2C75 288.2 32 245.1 32 192s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2zm256 0c-53.1 0-96.2-43.1-96.2-96.2s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2z"
                                  />
                                </svg>
                                <span className="sr-only">
                                  trip advisor Review
                                </span>
                              </a>
                            )}
                          </div>
                        )}
                      </figcaption>
                    </figure>
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute -bottom-8 -right-8 -z-10 h-32 stroke-primary opacity-40 rotate-180"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
