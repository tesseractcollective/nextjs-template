import parse from "html-react-parser";
import Image from "next/image";
// Import only the necessary component from react-awesome-reveal
import { Fade } from "react-awesome-reveal";
import { MapPinIcon, MapIcon } from "@heroicons/react/24/outline";

interface Location {
  label?: string;
  address?: string;
  latitude: number;
  longitude: number;
  state?: string;
  city?: string;
  image: string;
  googleMapLink: string;
}

// Use consistent naming conventions for interfaces
interface CardLocationsDataProps {
  cardLocationsData: Location[];
}

// Destructure the prop directly in the function parameters
export default function CardLocations({
  cardLocationsData,
}: CardLocationsDataProps) {
  if (!cardLocationsData) return null;

  return (
    <div className={`element-card-location px-4`}>
      {cardLocationsData?.length >= 1 && (
        <div className="py-6 flex flex-col justify-center sm:py-12">
          <div className="py-4 max-w-8xl sm:mx-auto w-full px-2 sm:px-0">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {cardLocationsData.map((cardLocationsItem, index) => (
                <div
                  // Use a more concise key for mapping
                  key={index}
                  className="relative flex flex-col lg:flex-row items-center space-x-3 rounded-lg border border-bg-secondary bg-text-color px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-bg-secondary focus-within:ring-offset-2 hover:border-primary group"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="h-16 w-16 rounded-full aspect-1 object-cover"
                      src={cardLocationsItem.image}
                      alt=""
                      sizes="100%"
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    {/* Replace anchor tag with a div or appropriate HTML element */}
                    <div className="">
                      {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                      <p className="text-xs md:text-sm text-dark font-bold group-hover:text-primary text-center lg:text-left">
                        {cardLocationsItem.label}
                      </p>
                      {!!cardLocationsItem.googleMapLink && (
                        <a
                          href={cardLocationsItem.googleMapLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-row items-center justify-center lg:justify-start transition-all cursor-pointer text-sm text-dark opacity-90 font-medium hover:cursor-pointer focus:outline-none group-hover:text-primary hover:text-primary"
                        >
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          <MapPinIcon
                            className="h-4 lg:h-6 w-4 lg:w-6 text-dark mr-1 ml-0 px-0 group-hover:text-primary"
                            aria-hidden="true"
                          />
                          <p className="flex flex-col">
                            <span className="truncate text-xs lg:text-sm text-dark opacity-90 font-medium uppercase group-hover:text-primary">
                              {cardLocationsItem.address}
                            </span>
                            <span className="truncate text-xs lg:text-sm text-dark opacity-90 font-medium uppercase group-hover:text-primary">
                              {`${cardLocationsItem.city}, ${cardLocationsItem.state}`}
                            </span>
                          </p>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
