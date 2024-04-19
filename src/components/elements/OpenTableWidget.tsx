import { useEffect } from "react";

interface OpenTableProps {
  opentableID: string;
  theme: string;
  targetID: string;
}

export default function OpenTableWidget({
  opentableID,
  theme,
  targetID,
}: OpenTableProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//www.opentable.com/widget/reservation/loader?rid=${opentableID}&type=standard&theme=${theme}&color=1&dark=false&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website&cfe=true`;
    script.async = true;

    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      // Clear previous content
      targetElement.innerHTML = "";
      // Append the new script
      targetElement.appendChild(script);
    }

    return () => {
      if (targetElement) {
        targetElement.removeChild(script);
      }
    };
  }, [opentableID, theme, targetID]);

  return null;
}
