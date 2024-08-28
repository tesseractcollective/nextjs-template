import { useState } from "react";
import Image from "next/image";
import Map, {
  Marker,
  Popup,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./LocationsMedia.scss";

interface Location {
  label?: string;
  address?: string;
  latitude: number;
  longitude: number;
  state?: string;
  city?: string;
  video?: string;
  image: string;
  googleMapLink: string;
}

interface LocationsMediaProps {
  mapKey: string;
  icon: string;
  locations: Location[];
}

function LocationsMedia({ mapKey, locations, icon }: LocationsMediaProps) {
  const [popupInfo, setPopupInfo] = useState<Location | null>();
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(
    null
  );

  if (!mapKey || !locations || locations.length === 0) {
    return null;
  }

  return (
    <div className="sepia-map w-full h-full relative block py-16">
      <Map
        mapboxAccessToken={mapKey}
        initialViewState={{
          longitude: locations[0].longitude,
          latitude: locations[0].latitude,
          zoom: 4,
        }}
        scrollZoom={false}
        style={{
          height: "800px",
          width: "100%",
          display: "block",
          borderRadius: "16px",
        }}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" showCompass={false} />
        <ScaleControl />
        {locations.map((location, index) => {
          const { longitude, latitude, label } = location;
          return (
            <Marker
              key={`marker-${index}`}
              longitude={longitude}
              latitude={latitude}
              anchor="bottom"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupInfo(location);
                setSelectedMarkerIndex(index);
              }}
            >
              <div className="relative w-full">
                <FontAwesomeIcon
                  icon={faLocationDot as IconProp}
                  className="h-12 w-12 mx-auto text-primary stroke-[#000000a7] stroke-[15]"
                />
                {!!icon && (
                  <Image
                    src={icon}
                    height={0}
                    width={0}
                    alt=""
                    sizes="100%"
                    className="absolute z-20 w-8 h-8 left-[0.50rem] top-[0.15rem] object-contain rounded-full !p-0 !m-0"
                  />
                )}
                <p className="absolute z-20 flex flex-row items-center justify-center bg-[white] text-[black] px-6 mx-auto text-center rounded w-full right-0 left-0 scale-75 font-bold outline-[black] tracking-wider upppercase text-[12px]">
                  {label}
                </p>
              </div>
            </Marker>
          );
        })}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div className="flex flex-col p-2">
              {/* {popupInfo.image && (
                <Image
                  width={0}
                  height={0}
                  sizes="100%"
                  alt={popupInfo.label || ""}
                  src={popupInfo.image}
                  className="h-36 w-full object-cover"
                />
              )} */}
              <p className="font-bold uppercase text-bg">{popupInfo.label}</p>
              <span>{popupInfo.address}</span>
              <span>{popupInfo.city}</span>
              {/* <a
                target="_blank"
                href={popupInfo.googleMapLink}
                className="bg-primary p-1 mt-2 text-center rounded-md font-bold uppercase text-text-color"
              >
                Info
              </a> */}
              <div className="w-full gap-y-4 flex flex-col items-center justify-center">
                <div className="mx-auto relative pb-[56.25%] pt-[30px] mb-[20px] h-full w-full">
                  {popupInfo?.video && (
                    <iframe
                      src={`https://www.youtube.com/embed/${popupInfo.video}?rel=0&modestbranding=1&vq=hd1080`}
                      width="560"
                      height="315"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="video"
                      className="absolute top-0 left-0 w-full h-full z-10  overflow-hidden rounded-2xl"
                    />
                  )}
                </div>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default LocationsMedia;
