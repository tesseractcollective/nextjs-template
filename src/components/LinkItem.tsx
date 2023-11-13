import Link from "next/link";
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
  if (!link) return <></>;

  const target =
    sameTab || link?.includes("#") || link?.includes("tel:")
      ? "_self"
      : "_blank";

  const handleEvent = () => {
    ReactGA.event({
      category: "Link",
      action: link || "",
      label: label || "",
    });
    if (onClick) onClick();
  };

  return (
    <>
      {link?.includes("http") ||
      link?.includes("#") ||
      link?.includes("tel:") ? (
        <a
          target={target}
          href={link}
          className={cssClass || ""}
          onClick={handleEvent}
        >
          {children}
          {!!label && <>{label}</>}
        </a>
      ) : (
        <Link href={link} className={cssClass || ""} onClick={handleEvent}>
          {children}
          {!!label && <>{label}</>}
        </Link>
      )}
    </>
  );
}
