import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Map, {
  Marker,
  Popup,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
  MapRef,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./BentoMap.scss";

interface Location {
  label?: string;
  address?: string;
  latitude: number;
  longitude: number;
  state?: string;
  city?: string;
  image: string;
  googleMapLink: string;
  zoomLocation?: number;
}

interface MapBoxesMapProps {
  mapKey: string;
  icon: string;
  locations: Location[];
}

function BentoMap({ mapKey, locations, icon }: MapBoxesMapProps) {
  const [popupInfo, setPopupInfo] = useState<Location | null>();
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(
    null
  );

  // Refs for map and location items
  const mapRef = useRef<MapRef>(null);
  const locationRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to zoom map to specific location
  const zoomToLocation = useCallback((location: Location, index: number) => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [location.longitude, location.latitude],
        zoom: location.zoomLocation || 14,
        duration: 1000, // Animation duration in milliseconds
      });
    }
    setPopupInfo(location);
    setSelectedMarkerIndex(index);
  }, []);

  // Function to scroll location item into view
  const scrollToLocationItem = useCallback((index: number) => {
    const locationElement = locationRefs.current[index];
    if (locationElement) {
      locationElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  if (!mapKey || !locations || locations.length === 0) {
    return null;
  }

  return (
    <div className="px-2 pt-1 pb-2 bento-map-wrapper grid grid-cols-1 lg:grid-cols-4 gap-2">
      <div className="grid-area-map lg:col-span-3 w-full">
        <Map
          ref={mapRef}
          mapboxAccessToken={mapKey}
          initialViewState={{
            longitude: locations[0].longitude,
            latitude: locations[0].latitude,
            zoom: locations[0]?.zoomLocation || 6,
          }}
          scrollZoom={false}
          style={{
            height: "800px",
            width: "100%",
            display: "block",
            borderRadius: "0.5rem",
          }}
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
                  setSelectedMarkerIndex(index);
                  // Scroll to corresponding location item in the sidebar
                  scrollToLocationItem(index);
                }}
              >
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faLocationDot as IconProp}
                    className={`h-12 w-12 mx-auto stroke-[#000000a7] stroke-[15] ${
                      selectedMarkerIndex === index
                        ? "text-red-600"
                        : "text-primary"
                    }`}
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
                {popupInfo.image && (
                  <Image
                    width={0}
                    height={0}
                    sizes="100%"
                    alt={popupInfo.label || ""}
                    src={popupInfo.image}
                    className="h-36 w-full object-cover"
                  />
                )}
                <span className="font-bold text-md">{popupInfo.label}</span>
                <span>{popupInfo.address}</span>
                <span>
                  {popupInfo.city}, {popupInfo.state}
                </span>
                <a
                  target="_blank"
                  href={popupInfo.googleMapLink}
                  className="bg-primary p-1 mt-2 text-center rounded-md font-bold uppercase text-text-color"
                >
                  Info
                </a>
              </div>
            </Popup>
          )}
        </Map>
      </div>
      <div className="grid-area-location-list col-span-1 border-text-color border rounded-lg overflow-hidden lg:max-h-[800px] p-4">
        <div className="flex lg:flex-col gap-y-4 overflow-x-scroll lg:overflow-y-scroll w-full h-full">
          {locations.map((location, index) => {
            return (
              <div
                key={`location-${index}`}
                ref={(el) => {
                  locationRefs.current[index] = el;
                }}
                className={`flex flex-row items-center gap-4 border-b border-bg-secondary px-2 lg:py-2 cursor-pointer hover:bg-[#ffffff82] min-w-[240px] lg:min-w-full ${
                  selectedMarkerIndex === index
                    ? "bg-primary border-primary"
                    : ""
                }`}
                onClick={(e) => {
                  zoomToLocation(location, index);
                }}
              >
                <FontAwesomeIcon
                  icon={faLocationDot as IconProp}
                  className={`h-6 w-6 stroke-[#000000a7] stroke-[15] ${
                    selectedMarkerIndex === index
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                />
                <div>
                  <p className="!font-bold uppercase text-xl">
                    {location.label}
                  </p>
                  <p>{location.address}</p>
                  <p>
                    {location.city}, {location.state}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BentoMap;
