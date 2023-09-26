import { Event } from "../components/Calendar/calendarHelpers";

export async function getDuttonEventsClient({ timeoutSeconds }: { timeoutSeconds: number }): Promise<Event[]> {
  const response = await fetch(
    `/theduttons-shows.json?timeout=${timeoutSeconds}`
  );
  return response.json();
}

export async function getDuttonEventsServer(
  { timeoutSeconds }: { timeoutSeconds: number }
): Promise<Event[]> {
  let showData = showDataBackup;

  const abortController = new AbortController();
  try {
    setTimeout(() => abortController.abort(), timeoutSeconds * 1000);
    const response = await fetch(
      "https://duttons.completeticketing.co/foxisapi.dll/ctapi.xo.getinfo",
      { signal: abortController.signal }
    );
    showData = await response.json();
  } catch (error: any) {
    console.log("unable to fetch show data, using backupData instead");
  }

  const events: Event[] = [];

  showData.showinfo.forEach((showInfo) => {
    showInfo.dates.forEach((date) => {
      events.push({
        kind: showInfo.showid,
        name: showInfo.showname,
        date: date.showdate,
        time: showInfo.showtime,
        location: showInfo.showname.includes("AZ") ? "Mesa, AZ" : "Branson, MO",
        link: `https://duttons.completeticketing.co/foxisapi.dll/gs2.xo.gsj?showdate=${date.showdate}&showid=${showInfo.showid}`,
      });
    });
  });

  events.sort((a, b) => a.date.localeCompare(b.date));

  return events;
}

export const showDataBackup = {
  showinfo: [
    {
      showname: "The Duttons",
      showtime: "2:00 PM",
      showid: "TheDutto01",
      dates: [
        {
          showdate: "2023-09-20",
        },
        {
          showdate: "2023-09-27",
        },
        {
          showdate: "2023-10-04",
        },
        {
          showdate: "2023-10-11",
        },
        {
          showdate: "2023-10-18",
        },
        {
          showdate: "2023-10-20",
        },
        {
          showdate: "2023-10-25",
        },
        {
          showdate: "2023-10-27",
        },
        {
          showdate: "2023-11-03",
        },
        {
          showdate: "2023-11-07",
        },
        {
          showdate: "2023-11-08",
        },
        {
          showdate: "2023-11-14",
        },
        {
          showdate: "2023-11-15",
        },
        {
          showdate: "2023-11-22",
        },
        {
          showdate: "2023-11-29",
        },
        {
          showdate: "2023-12-06",
        },
        {
          showdate: "2023-12-08",
        },
        {
          showdate: "2023-12-13",
        },
        {
          showdate: "2024-03-20",
        },
        {
          showdate: "2024-03-27",
        },
        {
          showdate: "2024-04-10",
        },
        {
          showdate: "2024-04-17",
        },
        {
          showdate: "2024-04-24",
        },
        {
          showdate: "2024-05-01",
        },
        {
          showdate: "2024-05-08",
        },
        {
          showdate: "2024-05-15",
        },
        {
          showdate: "2024-05-22",
        },
        {
          showdate: "2024-05-29",
        },
        {
          showdate: "2024-06-05",
        },
        {
          showdate: "2024-06-12",
        },
        {
          showdate: "2024-06-19",
        },
        {
          showdate: "2024-06-26",
        },
        {
          showdate: "2024-07-17",
        },
        {
          showdate: "2024-07-24",
        },
        {
          showdate: "2024-07-31",
        },
        {
          showdate: "2024-08-07",
        },
        {
          showdate: "2024-08-14",
        },
        {
          showdate: "2024-08-21",
        },
        {
          showdate: "2024-08-28",
        },
        {
          showdate: "2024-09-04",
        },
        {
          showdate: "2024-09-11",
        },
        {
          showdate: "2024-09-18",
        },
        {
          showdate: "2024-09-25",
        },
        {
          showdate: "2024-10-02",
        },
        {
          showdate: "2024-10-09",
        },
        {
          showdate: "2024-10-16",
        },
        {
          showdate: "2024-10-23",
        },
        {
          showdate: "2024-10-30",
        },
        {
          showdate: "2024-11-05",
        },
        {
          showdate: "2024-11-06",
        },
        {
          showdate: "2024-11-12",
        },
        {
          showdate: "2024-11-13",
        },
        {
          showdate: "2024-11-19",
        },
        {
          showdate: "2024-11-20",
        },
        {
          showdate: "2024-11-27",
        },
        {
          showdate: "2024-12-04",
        },
        {
          showdate: "2024-12-11",
        },
        {
          showdate: "2024-12-18",
        },
      ],
    },
    {
      showname: "The Duttons",
      showtime: "8:00 PM",
      showid: "TheDutto02",
      dates: [
        {
          showdate: "2023-09-14",
        },
        {
          showdate: "2023-09-16",
        },
        {
          showdate: "2023-09-18",
        },
        {
          showdate: "2023-09-21",
        },
        {
          showdate: "2023-09-23",
        },
        {
          showdate: "2023-09-25",
        },
        {
          showdate: "2023-09-28",
        },
        {
          showdate: "2023-09-30",
        },
        {
          showdate: "2023-10-02",
        },
        {
          showdate: "2023-10-05",
        },
        {
          showdate: "2023-10-07",
        },
        {
          showdate: "2023-10-09",
        },
        {
          showdate: "2023-10-12",
        },
        {
          showdate: "2023-10-14",
        },
        {
          showdate: "2023-10-16",
        },
        {
          showdate: "2023-10-19",
        },
        {
          showdate: "2023-10-21",
        },
        {
          showdate: "2023-10-23",
        },
        {
          showdate: "2023-10-26",
        },
        {
          showdate: "2023-10-28",
        },
        {
          showdate: "2023-10-30",
        },
        {
          showdate: "2023-11-01",
        },
        {
          showdate: "2023-11-02",
        },
        {
          showdate: "2023-11-03",
        },
        {
          showdate: "2023-11-04",
        },
        {
          showdate: "2023-11-06",
        },
        {
          showdate: "2023-11-07",
        },
        {
          showdate: "2023-11-08",
        },
        {
          showdate: "2023-11-09",
        },
        {
          showdate: "2023-11-10",
        },
        {
          showdate: "2023-11-11",
        },
        {
          showdate: "2023-11-13",
        },
        {
          showdate: "2023-11-14",
        },
        {
          showdate: "2023-11-15",
        },
        {
          showdate: "2023-11-16",
        },
        {
          showdate: "2023-11-17",
        },
        {
          showdate: "2023-11-18",
        },
        {
          showdate: "2023-11-20",
        },
        {
          showdate: "2023-11-25",
        },
        {
          showdate: "2023-11-27",
        },
        {
          showdate: "2023-11-28",
        },
        {
          showdate: "2023-11-29",
        },
        {
          showdate: "2023-11-30",
        },
        {
          showdate: "2023-12-01",
        },
        {
          showdate: "2023-12-02",
        },
        {
          showdate: "2023-12-04",
        },
        {
          showdate: "2023-12-06",
        },
        {
          showdate: "2023-12-07",
        },
        {
          showdate: "2023-12-11",
        },
      ],
    },
    {
      showname: "Duttons AZ at EVHS",
      showtime: "2:00 PM",
      showid: "DuttonsA04",
      dates: [
        {
          showdate: "2024-01-27",
        },
        {
          showdate: "2024-02-03",
        },
        {
          showdate: "2024-02-10",
        },
        {
          showdate: "2024-02-17",
        },
        {
          showdate: "2024-02-24",
        },
      ],
    },
    {
      showname: "Duttons AZ at EVHS",
      showtime: "7:00 PM",
      showid: "DuttonsA03",
      dates: [
        {
          showdate: "2024-01-25",
        },
        {
          showdate: "2024-01-26",
        },
        {
          showdate: "2024-01-27",
        },
        {
          showdate: "2024-02-01",
        },
        {
          showdate: "2024-02-02",
        },
        {
          showdate: "2024-02-03",
        },
        {
          showdate: "2024-02-08",
        },
        {
          showdate: "2024-02-09",
        },
        {
          showdate: "2024-02-10",
        },
        {
          showdate: "2024-02-15",
        },
        {
          showdate: "2024-02-16",
        },
        {
          showdate: "2024-02-17",
        },
        {
          showdate: "2024-02-22",
        },
        {
          showdate: "2024-02-23",
        },
        {
          showdate: "2024-02-24",
        },
        {
          showdate: "2024-02-29",
        },
      ],
    },
    {
      showname: "The Duttons",
      showtime: "7:30 PM",
      showid: "TheDutto04",
      dates: [
        {
          showdate: "2024-03-14",
        },
        {
          showdate: "2024-03-15",
        },
        {
          showdate: "2024-03-18",
        },
        {
          showdate: "2024-03-21",
        },
        {
          showdate: "2024-03-22",
        },
        {
          showdate: "2024-03-25",
        },
        {
          showdate: "2024-03-28",
        },
        {
          showdate: "2024-03-29",
        },
        {
          showdate: "2024-04-04",
        },
        {
          showdate: "2024-04-05",
        },
        {
          showdate: "2024-04-08",
        },
        {
          showdate: "2024-04-11",
        },
        {
          showdate: "2024-04-12",
        },
        {
          showdate: "2024-04-15",
        },
        {
          showdate: "2024-04-18",
        },
        {
          showdate: "2024-04-19",
        },
        {
          showdate: "2024-04-22",
        },
        {
          showdate: "2024-04-25",
        },
        {
          showdate: "2024-04-26",
        },
        {
          showdate: "2024-04-29",
        },
        {
          showdate: "2024-05-02",
        },
        {
          showdate: "2024-05-03",
        },
        {
          showdate: "2024-05-06",
        },
        {
          showdate: "2024-05-09",
        },
        {
          showdate: "2024-05-10",
        },
        {
          showdate: "2024-05-13",
        },
        {
          showdate: "2024-05-16",
        },
        {
          showdate: "2024-05-20",
        },
        {
          showdate: "2024-05-23",
        },
        {
          showdate: "2024-05-24",
        },
        {
          showdate: "2024-05-27",
        },
        {
          showdate: "2024-05-30",
        },
        {
          showdate: "2024-05-31",
        },
        {
          showdate: "2024-06-03",
        },
        {
          showdate: "2024-06-06",
        },
        {
          showdate: "2024-06-07",
        },
        {
          showdate: "2024-06-10",
        },
        {
          showdate: "2024-06-13",
        },
        {
          showdate: "2024-06-14",
        },
        {
          showdate: "2024-06-17",
        },
        {
          showdate: "2024-06-20",
        },
        {
          showdate: "2024-06-21",
        },
        {
          showdate: "2024-06-24",
        },
        {
          showdate: "2024-07-11",
        },
        {
          showdate: "2024-07-12",
        },
        {
          showdate: "2024-07-15",
        },
        {
          showdate: "2024-07-18",
        },
        {
          showdate: "2024-07-19",
        },
        {
          showdate: "2024-07-22",
        },
        {
          showdate: "2024-07-25",
        },
        {
          showdate: "2024-07-26",
        },
        {
          showdate: "2024-07-29",
        },
        {
          showdate: "2024-08-01",
        },
        {
          showdate: "2024-08-02",
        },
        {
          showdate: "2024-08-05",
        },
        {
          showdate: "2024-08-08",
        },
        {
          showdate: "2024-08-09",
        },
        {
          showdate: "2024-08-12",
        },
        {
          showdate: "2024-08-15",
        },
        {
          showdate: "2024-08-16",
        },
        {
          showdate: "2024-08-19",
        },
        {
          showdate: "2024-08-22",
        },
        {
          showdate: "2024-08-23",
        },
        {
          showdate: "2024-08-26",
        },
        {
          showdate: "2024-08-29",
        },
        {
          showdate: "2024-08-30",
        },
        {
          showdate: "2024-09-02",
        },
        {
          showdate: "2024-09-05",
        },
        {
          showdate: "2024-09-06",
        },
        {
          showdate: "2024-09-09",
        },
        {
          showdate: "2024-09-12",
        },
        {
          showdate: "2024-09-13",
        },
        {
          showdate: "2024-09-16",
        },
        {
          showdate: "2024-09-19",
        },
        {
          showdate: "2024-09-20",
        },
        {
          showdate: "2024-09-23",
        },
        {
          showdate: "2024-09-26",
        },
        {
          showdate: "2024-09-27",
        },
        {
          showdate: "2024-09-30",
        },
        {
          showdate: "2024-10-03",
        },
        {
          showdate: "2024-10-04",
        },
        {
          showdate: "2024-10-07",
        },
        {
          showdate: "2024-10-10",
        },
        {
          showdate: "2024-10-11",
        },
        {
          showdate: "2024-10-14",
        },
        {
          showdate: "2024-10-17",
        },
        {
          showdate: "2024-10-18",
        },
        {
          showdate: "2024-10-21",
        },
        {
          showdate: "2024-10-24",
        },
        {
          showdate: "2024-10-25",
        },
        {
          showdate: "2024-10-28",
        },
        {
          showdate: "2024-10-31",
        },
        {
          showdate: "2024-11-01",
        },
        {
          showdate: "2024-11-04",
        },
        {
          showdate: "2024-11-05",
        },
        {
          showdate: "2024-11-06",
        },
        {
          showdate: "2024-11-07",
        },
        {
          showdate: "2024-11-08",
        },
        {
          showdate: "2024-11-11",
        },
        {
          showdate: "2024-11-12",
        },
        {
          showdate: "2024-11-13",
        },
        {
          showdate: "2024-11-14",
        },
        {
          showdate: "2024-11-15",
        },
        {
          showdate: "2024-11-18",
        },
        {
          showdate: "2024-11-19",
        },
        {
          showdate: "2024-11-20",
        },
        {
          showdate: "2024-11-21",
        },
        {
          showdate: "2024-11-22",
        },
        {
          showdate: "2024-11-25",
        },
        {
          showdate: "2024-11-29",
        },
        {
          showdate: "2024-12-02",
        },
        {
          showdate: "2024-12-04",
        },
        {
          showdate: "2024-12-05",
        },
        {
          showdate: "2024-12-06",
        },
        {
          showdate: "2024-12-09",
        },
        {
          showdate: "2024-12-11",
        },
        {
          showdate: "2024-12-12",
        },
        {
          showdate: "2024-12-13",
        },
        {
          showdate: "2024-12-16",
        },
      ],
    },
    {
      showname: "Where Jesus Walked",
      showtime: "10:00 AM",
      showid: "WhereJes01",
      dates: [
        {
          showdate: "2023-11-01",
        },
        {
          showdate: "2023-11-03",
        },
        {
          showdate: "2023-11-07",
        },
        {
          showdate: "2023-11-08",
        },
        {
          showdate: "2023-11-14",
        },
        {
          showdate: "2023-11-15",
        },
        {
          showdate: "2023-11-29",
        },
        {
          showdate: "2023-12-02",
        },
        {
          showdate: "2023-12-06",
        },
        {
          showdate: "2024-06-11",
        },
      ],
    },
    {
      showname: "Where Jesus Walked",
      showtime: "2:00 PM",
      showid: "WhereJes02",
      dates: [
        {
          showdate: "2023-10-16",
        },
        {
          showdate: "2023-10-23",
        },
        {
          showdate: "2023-10-30",
        },
        {
          showdate: "2023-11-20",
        },
        {
          showdate: "2023-11-27",
        },
        {
          showdate: "2023-11-28",
        },
        {
          showdate: "2023-11-30",
        },
        {
          showdate: "2023-12-01",
        },
        {
          showdate: "2023-12-04",
        },
        {
          showdate: "2023-12-07",
        },
        {
          showdate: "2023-12-11",
        },
      ],
    },
    {
      showname: "Where Jesus Walked",
      showtime: "7:30 PM",
      showid: "WhereJes03",
      dates: [
        {
          showdate: "2023-10-17",
        },
        {
          showdate: "2023-10-18",
        },
        {
          showdate: "2023-10-20",
        },
        {
          showdate: "2023-10-24",
        },
        {
          showdate: "2023-10-25",
        },
        {
          showdate: "2023-10-27",
        },
        {
          showdate: "2023-10-31",
        },
        {
          showdate: "2023-11-21",
        },
        {
          showdate: "2023-11-22",
        },
        {
          showdate: "2023-11-23",
        },
        {
          showdate: "2023-11-24",
        },
        {
          showdate: "2023-12-05",
        },
        {
          showdate: "2023-12-08",
        },
        {
          showdate: "2023-12-09",
        },
        {
          showdate: "2023-12-12",
        },
        {
          showdate: "2023-12-13",
        },
        {
          showdate: "2023-12-14",
        },
        {
          showdate: "2023-12-15",
        },
        {
          showdate: "2023-12-16",
        },
        {
          showdate: "2023-12-18",
        },
        {
          showdate: "2023-12-19",
        },
        {
          showdate: "2023-12-20",
        },
        {
          showdate: "2023-12-21",
        },
        {
          showdate: "2023-12-22",
        },
        {
          showdate: "2023-12-23",
        },
        {
          showdate: "2023-12-26",
        },
        {
          showdate: "2023-12-27",
        },
        {
          showdate: "2023-12-28",
        },
        {
          showdate: "2023-12-29",
        },
        {
          showdate: "2023-12-30",
        },
      ],
    },
  ],
};
