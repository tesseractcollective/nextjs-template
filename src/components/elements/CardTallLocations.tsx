import parse from "html-react-parser";
import Image from "next/image";
// Import only the necessary component from react-awesome-reveal
import { Fade } from "react-awesome-reveal";
import { MapPinIcon, MapIcon } from "@heroicons/react/24/outline";
import LinkItem from "../LinkItem";

interface Location {
  label?: string;
  address?: string;
  latitude: number;
  longitude: number;
  state?: string;
  city?: string;
  image: string;
  googleMapLink: string;
  yelpLink?: string;
  orderLink?: string;
  detailsText?: string;
  detailsLink?: string;
  footerText?: string;
  tel?: string;
}

interface CardLocationsDataProps {
  cardLocationsData: Location[];
}

export default function CardTallLocations({
  cardLocationsData,
}: CardLocationsDataProps) {
  if (!cardLocationsData) return null;

  return (
    <div className={`element-card-tall-location px-4`}>
      {cardLocationsData?.length >= 1 && (
        <div className="py-6 flex flex-col justify-center sm:py-12">
          <div className="py-4 max-w-8xl sm:mx-auto w-full px-2 sm:px-0">
            <div className="grid grid-cols-1 gap-4  md:grid-cols-2">
              {cardLocationsData.map((cardLocationsItem, index) => {
                function getDomain(orderUrl: string) {
                  return orderUrl.match(/\/\/(?:www\.)?([^\.]+)/i)?.[1] || null;
                }
                const orderDomain =
                  cardLocationsItem?.orderLink &&
                  getDomain(cardLocationsItem.orderLink);
                const cardButtonCSS =
                  "flex items-center justify-center transition-all cursor-pointer text-sm text-text-color font-bold hover:cursor-pointer focus:outline-none group-hover:text-primary hover:text-primary text-center bg-bg flex-col rounded-2xl p-2 uppercase font-bold border-2 border-bg-secondary hover:border-primary hover:bg-bg-secondary hover:shadow-lg transform-all outline-bg-secondary hover:outline-2 hover:outline-offset-2 hover:outline-primary";
                return (
                  <div
                    key={index}
                    className="relative isolate flex flex-col justify-start rounded-2xl bg-bg-secondary p-4 transition-all w-full h-full gap-y-2 shadow-none hover:shadow-lg transform-all outline-bg-secondary hover:outline-2 hover:outline-offset-2 hover:outline-primary"
                  >
                    <p className="text-2xl text-dark font-bold group-hover:text-primary text-center">
                      {cardLocationsItem.label}
                    </p>
                    <div className="relative w-full pb-[56.25%] overflow-hidden">
                      <Image
                        src={cardLocationsItem.image}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-full h-auto p-0 rounded-lg object-cover absolute inset-0"
                      />
                    </div>
                    <div className="flex gap-y-2 flex-col h-full">
                      {!!cardLocationsItem.googleMapLink && (
                        <a
                          href={cardLocationsItem.googleMapLink}
                          target="_blank"
                          rel="noreferrer"
                          className={cardButtonCSS}
                        >
                          <span className="truncate text-xs lg:text-sm font-bold uppercase group-hover:text-primary">
                            {cardLocationsItem.address}
                          </span>
                          <span className="truncate text-xs lg:text-sm font-medium uppercase group-hover:text-primary">
                            {`${cardLocationsItem.city}, ${cardLocationsItem.state}`}
                          </span>
                        </a>
                      )}
                      {!!cardLocationsItem?.tel && (
                        <LinkItem
                          link={cardLocationsItem.tel}
                          cssClass={cardButtonCSS}
                        >
                          {cardLocationsItem.tel}
                        </LinkItem>
                      )}
                      {!!cardLocationsItem?.yelpLink && (
                        <a
                          href={cardLocationsItem.yelpLink}
                          target="_blank"
                          rel="noreferrer"
                          className={cardButtonCSS}
                        >
                          YELP
                        </a>
                      )}
                      {!!cardLocationsItem?.orderLink && (
                        <a
                          href={cardLocationsItem.orderLink}
                          target="_blank"
                          rel="noreferrer"
                          className={cardButtonCSS}
                        >
                          {orderDomain}
                        </a>
                      )}
                      {!!cardLocationsItem?.detailsLink &&
                        cardLocationsItem?.detailsText && (
                          <LinkItem
                            link={cardLocationsItem.detailsLink}
                            cssClass={cardButtonCSS}
                          >
                            {cardLocationsItem?.detailsText}
                          </LinkItem>
                        )}
                      {cardLocationsItem?.footerText && (
                        <p className="flex text-center justify-center items-center mt-auto h-auto text-dark font-medium">
                          {parse(cardLocationsItem.footerText)}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
