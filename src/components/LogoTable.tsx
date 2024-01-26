import React from "react";
import Image from "next/image";
import type { LogoTableFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface LogoTableProps {
  type: string;
  logoTables: LogoTableFieldsFragment[];
  logoTableLayout: string;
}

export default function LogoTable({
  type,
  logoTables,
  logoTableLayout,
}: LogoTableProps) {
  const filteredTable = logoTables.filter(
    (logoTableItem) => logoTableItem.logoType === type
  );

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

  if (logoTableLayout === "grid")
    return (
      <div>
        {!!filteredTable && filteredTable?.length >= 1 && (
          <section className="container mx-auto px-4 my-16">
            <div className="py-12">
              <div className="mx-auto max-w-8xl px-6 lg:px-8">
                <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                  {filteredTable.map((logoTableItem) => (
                    <div
                      className="logo-grid-item bg-bg-secondary p-8 sm:p-10"
                      key={logoTableItem.logoName}
                    >
                      {!!logoTableItem.logoImage?.url &&
                        !!logoTableItem?.logoName && (
                          <Fade>
                            {logoTableItem?.logoLink ? (
                              <a
                                target="_blank"
                                title={logoTableItem?.logoName || ""}
                                href={`${logoTableItem.logoLink}`}
                                rel="noreferrer"
                                className="no-underline"
                              >
                                <Image
                                  className="max-h-24 w-full object-contain"
                                  src={logoTableItem.logoImage.url}
                                  alt={logoTableItem?.logoName}
                                  width={0}
                                  height={0}
                                  sizes="100%"
                                  style={{
                                    width: "auto",
                                    height: "auto",
                                    margin: "0 auto",
                                  }}
                                />
                                <span className="sr-only">
                                  {logoTableItem?.logoName}
                                </span>
                              </a>
                            ) : (
                              <Image
                                className="max-h-24 w-full object-contain"
                                src={logoTableItem.logoImage.url}
                                alt={logoTableItem?.logoName}
                                title={logoTableItem?.logoName || ""}
                                width={0}
                                height={0}
                                sizes="100%"
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  margin: "0 auto",
                                }}
                              />
                            )}
                          </Fade>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );

  return (
    <div>
      {!!filteredTable && filteredTable?.length >= 1 && (
        <section className="container mx-auto px-4 my-8">
          <div className="py-12">
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
              <>
                {filteredTable && (
                  <section id="vendor-logos" className="mx-auto">
                    <div className="container px-4 md:px-0 py-4">
                      <Slider {...settings}>
                        {filteredTable.map((item) => (
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
