import Map, {
  Marker,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface MapBoxMapProps {
  lat: number;
  long: number;
  mapKey: string;
  icon?: string;
}

function MapBoxMap({ lat, long, mapKey, icon }: MapBoxMapProps) {
  if (!mapKey) return null;
  return (
    <Map
      mapboxAccessToken={mapKey}
      initialViewState={{
        longitude: long,
        latitude: lat,
        zoom: 15,
      }}
      scrollZoom={false}
      style={{ height: "400px" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" showCompass={false} />
      <ScaleControl />
      <Marker longitude={long} latitude={lat} anchor="bottom">
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
    </Map>
  );
}
export default MapBoxMap;
