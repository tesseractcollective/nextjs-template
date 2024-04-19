import { useEffect, useState } from "react";
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
import Moment from "react-moment";

type Event = {
  id: string;
  url: string;
  artist: {
    name: string;
    image_url: string;
  };
  lineup: string[];
  datetime: string;
  venue: {
    name: string;
    location: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    postal_code: string;
    region: string;
    street_address: string;
  };
  offers: [
    {
      type: string;
      url: string;
      status: string;
    }
  ];
};

interface BandsInTownMapBoxProps {
  eventMapData: Event[];
  icon: string;
  mapKey: string;
}

function BandsInTownEventsMapBox({
  mapKey,
  icon,
  eventMapData,
}: BandsInTownMapBoxProps) {
  const [popupInfo, setPopupInfo] = useState<Event | null>(null);

  return (
    <>
      {Array.isArray(eventMapData) && eventMapData.length > 0 ? (
        <div className="bandsintownmapbox max-w-8xl mx-auto flex h-full w-full relative z-10 p-4 rounded-md max-h-[70vh] overflow-hidden">
          <Map
            mapboxAccessToken={mapKey}
            initialViewState={{
              longitude: eventMapData[0].venue.longitude,
              latitude: eventMapData[0].venue.latitude,
              zoom: 3,
            }}
            scrollZoom={false}
            style={{
              height: "60vh",
              width: "100%",
              display: "block",
              borderRadius: "8px",
            }}
            mapStyle="mapbox://styles/mapbox/dark-v9"
          >
            <GeolocateControl position="top-left" />
            <FullscreenControl position="top-left" />
            <NavigationControl position="top-left" showCompass={false} />
            <ScaleControl />
            {eventMapData.map((event, index) => {
              const { longitude, latitude } = event.venue;
              return (
                <Marker
                  key={`marker-${index}`}
                  longitude={longitude}
                  latitude={latitude}
                  anchor="bottom"
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setPopupInfo(event);
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
                    <p className="absolute z-20 flex flex-row items-center justify-center bg-[white] text-[black] px-6 mx-auto text-center rounded w-full right-0 left-0 scale-75z font-bold outline-[black] tracking-wider upppercase text-[9px]">
                      <Moment format="MMM/DD" className="uppercase">
                        {event.datetime}
                      </Moment>
                    </p>
                  </div>
                </Marker>
              );
            })}
            {popupInfo && (
              <Popup
                anchor="top"
                longitude={Number(popupInfo.venue.longitude)}
                latitude={Number(popupInfo.venue.latitude)}
                onClose={() => setPopupInfo(null)}
                className="shadow-md"
              >
                <div className="flex flex-col p-2 relative">
                  {/* <div className="date-format-badge bg-text-color text-bg group-hover:text-secondary rounded-full -top-11 -left-9 min-w-[60px] min-h-[60px] flex flex-col items-center justify-center absolute cursor-pointer">
                  <span className="date-format-badge-month">
                    <Moment format="MMM">{popupInfo.datetime}</Moment>
                  </span>
                  <span className="date-format-badge-date">
                    <Moment format="DD">{popupInfo.datetime}</Moment>
                  </span>
                </div> */}

                  <ul>
                    {popupInfo.lineup.map((artist) => (
                      <li key={artist}>
                        <span className="line-clamp-1 m-0 p-0 max-w-[34ch] font-bold">
                          {artist}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className="font-bold text-lg">
                    {popupInfo.venue.name}
                  </span>
                  <Moment
                    format="MMM/DD"
                    className="font-bold text-xs text-dark uppercase tracking-wide"
                  >
                    {popupInfo.datetime}
                  </Moment>
                  <span className="">{popupInfo.venue.location}</span>

                  <a
                    target="_blank"
                    href={popupInfo.offers[0]?.url}
                    className="bg-primary p-1 mt-2 text-center rounded-md"
                  >
                    Tickets
                  </a>
                </div>
              </Popup>
            )}
          </Map>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default BandsInTownEventsMapBox;
