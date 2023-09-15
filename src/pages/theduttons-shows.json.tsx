import { GetServerSideProps } from "next";
import { getDuttonEventsServer } from "../data/theDuttonsShowData";

export default function None() {
  return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const res = context.res;
  let timeoutSeconds = 0.1;
  if (context.query.timeout && typeof context.query.timeout === "string") {
    try {
      timeoutSeconds = parseFloat(context.query.timeout);
    } catch {}
  }
  const events = await getDuttonEventsServer({ timeoutSeconds });
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(events, null, 2));
  res.end();
  return {
    props: {
      events,
    },
  };
};
