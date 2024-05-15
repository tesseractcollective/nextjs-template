import fs from "fs";
import { getDuttonEvents } from "@/data/theDuttonsShowData";

console.log("fetching events");
(async () => {
  const events = await getDuttonEvents({ timeoutSeconds: 30 });
  if (events.length) {
    fs.writeFileSync(
      "./src/data/duttonEvents.json",
      JSON.stringify(events, null, 2)
    );
  }
  console.log("done");
})();
