import React from "react";
import Image from "next/image";
import type { LogoTableFieldsFragment } from "@/graphql/generated/graphql";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface LogoTableProps {
  logoTableItems: LogoTableFieldsFragment[];
}

export default function LogoTableDefault({ logoTableItems }: LogoTableProps) {
  const settings = {
    arrow: false,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    nextArrow: (
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function PrevArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        role="button"
        aria-label="Press enter to view previous item"
        tabIndex={0}
        onClick={onClick}
        onKeyPress={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  }

  function NextArrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        role="button"
        aria-label="Press enter to view next item"
        tabIndex={0}
        onClick={onClick}
        onKeyPress={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  }

  return (
    <div>
      {!!logoTableItems && logoTableItems?.length >= 1 && (
        <section className="container mx-auto px-4 my-8">
          <div className="py-12">
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
              <>
                {logoTableItems && (
                  <section id="vendor-logos" className="mx-auto">
                    <div className="container px-4 md:px-0 py-4">
                      <Slider {...settings}>
                        {logoTableItems.map((item) => (
                          <div key={item.logoImage?.url}>
                            <>
                              {item?.logoName && item.logoImage?.url && (
                                <>
                                  {item?.logoLink ? (
                                    <a
                                      href={item.logoLink}
                                      title={item.logoName || ""}
                                      target="_blank"
                                      className="partner flex bg-primary-color max-w-max mx-auto cursor-pointer"
                                      rel="noreferrer"
                                    >
                                      <Image
                                        sizes="100%"
                                        src={item.logoImage.url}
                                        alt={item.logoName}
                                        className="my-auto block mx-auto max-w-max w-full"
                                        height={0}
                                        width={0}
                                        style={{ transform: "scale(0.75)" }}
                                      />
                                    </a>
                                  ) : (
                                    <Image
                                      sizes="100%"
                                      src={item.logoImage.url}
                                      alt={item.logoName}
                                      className="my-auto block mx-auto max-w-max w-full"
                                      height={0}
                                      width={0}
                                      style={{ transform: "scale(0.75)" }}
                                    />
                                  )}
                                </>
                              )}
                            </>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </section>
                )}
              </>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
