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
  mapKey: string;
  icon: string;
  apiKey: string;
  artistName: string;
  isSpanish?: boolean;
}

function BandsInTownMapBox({
  mapKey,
  icon,
  isSpanish,
  artistName,
  apiKey,
}: BandsInTownMapBoxProps) {
  const [popupInfo, setPopupInfo] = useState<Event | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  const removeAccents = (artistName: string) =>
    artistName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  useEffect(() => {
    if (!apiKey || !artistName) return;

    const fetchEvents = async () => {
      try {
        const scrubbedArtistName = removeAccents(artistName);
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${encodeURIComponent(
            scrubbedArtistName
          )}/events?app_id=${apiKey}`
        );
        const data: Event[] = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [apiKey, artistName]);

  return (
    <>
      {Array.isArray(events) && events.length > 0 ? (
        <Map
          mapboxAccessToken={mapKey}
          initialViewState={{
            longitude: events[0].venue.longitude,
            latitude: events[0].venue.latitude,
            zoom: 3,
          }}
          scrollZoom={false}
          style={{ height: "700px", width: "100%", display: "block" }}
          mapStyle="mapbox://styles/mapbox/dark-v9"
        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" showCompass={false} />
          <ScaleControl />
          {events.map((event, index) => {
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
                    className="text-5xl text-primary stroke-[#000000a7] stroke-[15]"
                  />
                  {!!icon && (
                    <Image
                      src={icon}
                      height={0}
                      width={0}
                      alt=""
                      sizes="100%"
                      className="absolute z-20 w-8 h-8 left-[0.10rem] top-[0.15rem] object-contain rounded-full !p-0 !m-0"
                    />
                  )}
                  <p className="absolute z-20 flex flex-row items-center justify-center bg-[white] text-[black] px-4 rounded -left-[55%] scale-75 font-bold outline-[black] tracking-wider upppercase">
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
      ) : (
        <p className="text-center">
          {isSpanish ? "No hay eventos próximos" : "No upcoming events"}
        </p>
      )}
    </>
  );
}

export default BandsInTownMapBox;
