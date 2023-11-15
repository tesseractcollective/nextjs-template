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

interface MapBoxesMapProps {
  mapKey: string;
  icon: string;
  locations: Location[];
}

function MapBoxesMap({ mapKey, locations, icon }: MapBoxesMapProps) {
  const [popupInfo, setPopupInfo] = useState<Location | null>();

  if (!mapKey || !locations || locations.length === 0) {
    return null;
  }

  return (
    <Map
      mapboxAccessToken={mapKey}
      initialViewState={{
        longitude: locations[0].longitude,
        latitude: locations[0].latitude,
        zoom: 6,
      }}
      scrollZoom={false}
      style={{ height: "800px", width: "100%", display: "block" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" showCompass={false} />
      <ScaleControl />
      {locations.map((location, index) => {
        const { longitude, latitude } = location;
        return (
          <Marker
            key={`marker-${index}`}
            longitude={longitude}
            latitude={latitude}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo(location);
            }}
          >
            <div className="relative shadow-md">
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
            <span className="font-bold text-lg">{popupInfo.label}</span>
            <span>{popupInfo.address}</span>
            <span>
              {popupInfo.city}, {popupInfo.state}
            </span>
            <a
              target="_blank"
              href={popupInfo.googleMapLink}
              className="bg-primary p-1 mt-2 text-center rounded-md"
            >
              Info
            </a>
          </div>
          {popupInfo.image && (
            <Image
              width={0}
              height={0}
              alt={popupInfo.label || ""}
              src={popupInfo.image}
              className="h-36 w-full object-cover"
            />
          )}
        </Popup>
      )}
    </Map>
  );
}

export default MapBoxesMap;
