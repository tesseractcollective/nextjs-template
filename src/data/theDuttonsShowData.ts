import { Event } from "../components/Calendar/calendarHelpers";

type ShowDate = {
  showdate: string;
};

type ShowInfo = {
  showid: string;
  showname: string;
  showtime: string;
  dates: ShowDate[];
};

type ShowData = {
  showinfo: ShowInfo[];
};

export async function getDuttonEvents({
  timeoutSeconds,
}: {
  timeoutSeconds: number;
}): Promise<Event[]> {
  const abortController = new AbortController();
  try {
    setTimeout(() => abortController.abort(), timeoutSeconds * 1000);
    const response = await fetch(
      "https://duttons.completeticketing.co/foxisapi.dll/ctapi.xo.getinfo",
      { signal: abortController.signal }
    );
    const showData: ShowData = await response.json();
    const events: Event[] = [];

    showData.showinfo.forEach((showInfo) => {
      showInfo.dates.forEach((date) => {
        events.push({
          kind: showInfo.showid,
          name: showInfo.showname,
          date: date.showdate,
          time: showInfo.showtime,
          location: showInfo.showname.includes("AZ")
            ? "Mesa, AZ"
            : "Branson, MO",
          link: `https://duttons.completeticketing.co/foxisapi.dll/gs2.xo.gsj?showdate=${date.showdate}&showid=${showInfo.showid}`,
        });
      });
    });

    events.sort((a, b) => a.date.localeCompare(b.date));

    return events;
  } catch (error: any) {
    console.log("unable to fetch show data");
    return [];
  }
}
