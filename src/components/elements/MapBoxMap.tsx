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

interface MapBoxMapProps {
  lat: number;
  long: number;
  mapKey: string;
  icon?: string;
  mapLink?: string;
  address?: string;
  siteName?: string;
}

function MapBoxMap({
  lat,
  long,
  mapKey,
  icon,
  mapLink,
  address,
  siteName,
}: MapBoxMapProps) {
  const [popupInfo, setPopupInfo] = useState<Location | null>();
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(
    null
  );

  if (!mapKey || !lat || !long) {
    return null;
  }

  console.log("lat", lat);
  console.log("long", long);

  return (
    <Map
      mapboxAccessToken={mapKey}
      initialViewState={{
        longitude: long,
        latitude: lat,
        zoom: 14,
      }}
      scrollZoom={false}
      style={{
        height: "400px",
        width: "100%",
        display: "block",
        borderRadius: "16px",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" showCompass={false} />
      <ScaleControl />
      <Marker
        longitude={long}
        latitude={lat}
        anchor="bottom"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopupInfo(location);
          setSelectedMarkerIndex(0);
        }}
      >
        <div className="relative">
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
        </div>
      </Marker>
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(long)}
          latitude={Number(lat)}
          onClose={() => setPopupInfo(null)}
        >
          <div className="flex flex-col p-2">
            {!!siteName && (
              <span className="font-bold text-md">{siteName}</span>
            )}
            {!!address && <span>{address}</span>}
            {!!mapLink && (
              <a
                target="_blank"
                href={mapLink}
                className="bg-primary p-1 mt-2 text-center rounded-md font-bold uppercase text-text-color"
              >
                Directions
              </a>
            )}
          </div>
        </Popup>
      )}
    </Map>
  );
}
export default MapBoxMap;
