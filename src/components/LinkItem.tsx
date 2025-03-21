import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ReactGA from "react-ga4";
import LinkItemFillout from "./LinkItemFillout";

interface LinkItemProps {
  link?: string | null;
  label?: string | null;
  cssClass?: string | null;
  parentCssClass?: string | null;
  sameTab?: boolean | null;
  children?: string | JSX.Element | JSX.Element[] | string[];
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  activeClassName?: string;
}

export default function LinkItem({
  link,
  label,
  cssClass,
  sameTab,
  children,
  parentCssClass,
  onClick,
  activeClassName,
}: LinkItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  if (!link) return null;

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path) ?? false;
  };

  const target =
    sameTab || link?.includes("#") || link?.includes("tel:")
      ? "_self"
      : "_blank";

  const handleEvent = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    ReactGA.event({
      category: "Link",
      action: link || "",
      label: label || "",
    });

    if (onClick) onClick();

    setIsLoading(false);
  };

  const finalClassName = `${cssClass || ""} ${
    isActive(link) ? activeClassName : ""
  }`.trim();

  if (link.includes("fillout:") && label)
    return <LinkItemFillout link={link} label={label} cssClass={cssClass} />;

  return (
    <div className={`relative ${parentCssClass}`}>
      {link?.includes("http") ||
      link?.includes("#") ||
      link?.includes("mailto:") ||
      link?.includes("tel:") ? (
        <a
          target={target}
          href={link}
          className={finalClassName}
          onClick={handleEvent}
        >
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
        </a>
      ) : (
        <Link href={link} className={finalClassName} onClick={handleEvent}>
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
