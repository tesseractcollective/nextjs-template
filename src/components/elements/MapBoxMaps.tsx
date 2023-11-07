import { useState, useMemo } from "react";
import { createRoot } from "react-dom/client";
import Image from "next/image";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
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

interface MapBoxMapsProps {
  mapKey: string;
  icon: string;
  locations: Location[];
}

function MapBoxMaps({ mapKey, locations, icon }: MapBoxMapsProps) {
  const [popupInfo, setPopupInfo] = useState<Location>() || null;
  if (!mapKey || !locations || locations.length === 0) return null;
  return (
    <Map
      mapboxAccessToken={mapKey}
      initialViewState={{
        longitude: locations[0].longitude,
        latitude: locations[0].latitude,
        zoom: 6,
      }}
      scrollZoom={true}
      style={{ height: "800px", width: "100%", display: "block" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      {/* <NavigationControl position="top-left" /> */}
      {/* <ScaleControl /> */}
      {locations.map((location, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={location.longitude}
          latitude={location.latitude}
          anchor="bottom"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(location);
          }}
        >
          <div className="relative">
            <FontAwesomeIcon
              icon={faLocationDot as IconProp}
              className="fa-fw h-12 w-12  scale-[2.5] text-primary stroke-[#000000a7] stroke-[15"
            />
            {/* {!!icon && (
              <Image
                src={icon}
                height={0}
                width={0}
                alt=""
                sizes="100%"
                className="absolute z-10 w-5 h-5 top-2 object-cover rounded-[100%]"
              />
            )} */}
          </div>
        </Marker>
      ))}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            {popupInfo.city}, {popupInfo.state} |{" "}
            <a target="_blank" href={popupInfo.googleMapLink}>
              {popupInfo.label}
            </a>
          </div>
          {popupInfo?.image && (
            <Image
              alt={popupInfo.label || ""}
              width={0}
              src={popupInfo.image}
              height={0}
              className="h-36 w-full object-cover"
            />
          )}
        </Popup>
      )}
    </Map>
  );
}

export default MapBoxMaps;
