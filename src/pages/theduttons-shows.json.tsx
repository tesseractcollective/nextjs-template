import { GetServerSideProps } from "next";
import showDataBackup from "../data/theDuttonsShowData";

interface Show {
  name: string;
  location: string;
  time: string;
  date: string;
}

export default function None() {
  return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async ({ res }) => {
  // const response = await fetch(
  //   "https://duttons.completeticketing.co/foxisapi.dll/ctapi.xo.getinfo"
  // );
  
  // let showData: Record<string, any> = {};
  // let jsonError = ""
  // try {
  //   showData = await response.json();
  // } catch(error: any) {
  //   showData = showDataBackup;
  // }

  let shows: { [key: string]: Show[] } = {};

  showDataBackup.showinfo.forEach(showInfo => {
    showInfo.dates.forEach(date => {
      if (!shows[showInfo.showname]) {
        shows[showInfo.showname] = [];
      }
      shows[showInfo.showname].push({
        name: showInfo.showname,
        location: showInfo.showname.includes("AZ") ? "Mesa, AZ" : "Branson, MO",
        time: showInfo.showtime,
        date: date.showdate,
      });
    });
  });

  Object.keys(shows).forEach(key => {
    shows[key] = shows[key].toSorted((a, b) => a.date.localeCompare(b.date));
  });

  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(shows, null, 2));
  res.end();
  return {
    props: {
      shows,
    },
  };
};
