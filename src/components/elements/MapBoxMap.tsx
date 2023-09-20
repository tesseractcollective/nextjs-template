import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

interface MapBoxMapProps {
  lat: number;
  long: number;
  mapKey: string;
}

function MapBoxMap({ lat, long, mapKey }: MapBoxMapProps) {
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
      <Marker longitude={long} latitude={lat} anchor="bottom">
        <FontAwesomeIcon
          icon={faLocationDot as IconProp}
          className="fa-fw h-12 w-12  scale-[2.5] text-primary stroke-[#000000a7] stroke-[15]"
        />
      </Marker>
    </Map>
  );
}
export default MapBoxMap;
