import React, { useEffect, useState } from "react";
import BandsInTownLayoutWide from "./BandsInTownLayoutsSections/BandsInTownLayoutWide";
import BandsInTownLayoutDefault from "./BandsInTownLayoutsSections/BandsInTownLayoutDefault";

interface bandsInTownDataProps {
  bandsInTownData: {
    layout: string;
    key: string;
    artistName: string;
  };
}

type Event = {
  id: string;
  url: string;
  datetime: string;
  venue: {
    name: string;
    location: string;
    city: string;
    country: string;
  };
  offers: [
    {
      type: string;
      url: string;
      status: string;
    }
  ];
};

const BandsInTownLayouts: React.FC<bandsInTownDataProps> = ({
  bandsInTownData,
}: bandsInTownDataProps) => {
  const { artistName, layout, key } = bandsInTownData;
  const removeAccents = (artistName: string) =>
    artistName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const scrubbedArtistName = removeAccents(artistName);
  const [events, setEvents] = useState<Event[]>([]);
  console.log(
    `https://rest.bandsintown.com/artists/${encodeURIComponent(
      scrubbedArtistName
    )}/events?app_id=${key}`
  );
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${encodeURIComponent(
            artistName
          )}/events?app_id=${key}`
        );
        const data: Event[] = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [key, artistName]);

  if (layout === "wide") {
    return <BandsInTownLayoutWide events={events} />;
  }

  return <BandsInTownLayoutDefault events={events} />;
};

export default BandsInTownLayouts;
