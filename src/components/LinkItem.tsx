import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, ReactNode } from "react";
import ReactGA from "react-ga4";
import LinkItemFillout from "./LinkItemFillout";

interface LinkItemProps {
  link?: string | null;
  label?: string | null;
  cssClass?: string | null;
  parentCssClass?: string | null;
  sameTab?: boolean | null;
  children?: ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  activeClassName?: string;
  style?: React.CSSProperties;
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
  style,
}: LinkItemProps) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  if (!link) return null;

  if (link.includes("fillout:") && label) {
    return <LinkItemFillout link={link} label={label} cssClass={cssClass} />;
  }

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

  return (
    <div className={`relative ${parentCssClass}`} style={style}>
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
