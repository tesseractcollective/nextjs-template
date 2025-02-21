import { useState, useEffect } from "react";
import Image from "next/image";
import Map, {
  Marker,
  Popup,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import * as turf from "@turf/turf";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

type MapBoxMapRadiusType = {
  latitude: number;
  longitude: number;
  mapLink: string;
  address: string;
  distance: number;
};

interface MapBoxMapProps {
  mapBoxRadiusData: MapBoxMapRadiusType;
  mapKey: string;
  icon: string;
  siteName: string;
}

function MapBoxRadius({
  mapBoxRadiusData,
  mapKey,
  icon,
  siteName,
}: MapBoxMapProps) {
  const [popupInfo, setPopupInfo] = useState<boolean>(false);
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const { latitude, longitude, mapLink, address, distance } = mapBoxRadiusData;

  useEffect(() => {
    if (!mapInstance || !isMapLoaded || !distance || distance <= 0) return;

    const sourceId = "radius-source";
    const layerId = "radius-layer";

    // Clean up existing layers and sources
    if (mapInstance.getLayer(layerId)) {
      mapInstance.removeLayer(layerId);
    }
    if (mapInstance.getSource(sourceId)) {
      mapInstance.removeSource(sourceId);
    }

    // Create circle using Turf
    const center = [longitude, latitude];
    const circle = turf.circle(center, distance, { steps: 64, units: "miles" });

    // Add GeoJSON source
    mapInstance.addSource(sourceId, {
      type: "geojson",
      data: circle,
    });

    // Add fill layer
    mapInstance.addLayer({
      id: layerId,
      type: "fill",
      source: sourceId,
      paint: {
        "fill-color": "#3b82f6",
        "fill-opacity": 0.3,
        "fill-outline-color": "#3b82f6",
      },
    });

    return () => {
      if (mapInstance && !isMapLoaded) return;
      if (mapInstance?.getLayer(layerId)) {
        mapInstance.removeLayer(layerId);
      }
      if (mapInstance?.getSource(sourceId)) {
        mapInstance.removeSource(sourceId);
      }
    };
  }, [mapInstance, isMapLoaded, latitude, longitude, distance]);

  if (!mapKey || !latitude || !longitude || !distance) {
    return null;
  }

  return (
    <Map
      mapboxAccessToken={mapKey}
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: Math.max(9, 12 - Math.log2(distance)),
      }}
      scrollZoom={false}
      style={{
        height: "400px",
        width: "100%",
        display: "block",
        borderRadius: "16px",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      onLoad={(event) => {
        setMapInstance(event.target);
        setIsMapLoaded(true);
      }}
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" showCompass={false} />
      <ScaleControl />
      <Marker
        longitude={longitude}
        latitude={latitude}
        anchor="bottom"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopupInfo(true);
        }}
        aria-label={`Marker for ${siteName}`}
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
          longitude={Number(longitude)}
          latitude={Number(latitude)}
          onClose={() => setPopupInfo(false)}
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

export default MapBoxRadius;
