import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import ReactGA from "react-ga4";

interface LinkItemProps {
  link?: string | null;
  label?: string | null;
  cssClass?: string | null;
  sameTab?: boolean | null;
  children?: string | JSX.Element | JSX.Element[] | string[];
  onClick?: () => void;
}

export default function LinkItem({
  link,
  label,
  cssClass,
  sameTab,
  children,
  onClick,
}: LinkItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  if (!link) return <></>;

  const target =
    sameTab || link?.includes("#") || link?.includes("tel:")
      ? "_self"
      : "_blank";

  const handleEvent = async () => {
    setIsLoading(true);

    // Simulate asynchronous action, replace this with your actual data fetching logic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    ReactGA.event({
      category: "Link",
      action: link || "",
      label: label || "",
    });

    if (onClick) onClick();

    setIsLoading(false);
  };

  return (
    <div className="relative">
      {link?.includes("http") ||
      link?.includes("#") ||
      link?.includes("tel:") ? (
        <a
          target={target}
          href={link}
          className={cssClass || ""}
          onClick={handleEvent}
        >
          {isLoading && (
            <div className="relative text-primary z-10">
              <FontAwesomeIcon
                icon={faSpinner as IconProp}
                className="fa-fw h-3 w-3 flex aspect-1 -top-4 -left-2 animate-spin absolute"
              />
            </div>
          )}
          {children}
          {!!label && <>{label}</>}
        </a>
      ) : (
        <Link href={link} className={cssClass || ""} onClick={handleEvent}>
          {isLoading && (
            <div className="fixed text-primary z-[9999] top-0 right-0">
              <FontAwesomeIcon
                icon={faSpinner as IconProp}
                className="fa-fw h-6 w-6 flex aspect-1 animate-spin absolute"
              />
            </div>
          )}
          {children}
          {!!label && <>{label}</>}
        </Link>
      )}
    </div>
  );
}
