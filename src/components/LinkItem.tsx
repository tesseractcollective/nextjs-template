import Link from "next/link";
import ReactGA from "react-ga4";
interface LinkItemProps {
  link?: string | null;
  label?: string | null;
  cssClass?: string | null;
  sameTab?: boolean | null;
  children?: string | JSX.Element;
}

export default function LinkItem({
  link,
  label,
  cssClass,
  sameTab,
  children,
}: LinkItemProps) {
  if (!link) return <></>;
  return (
    <>
      {link?.includes("http") ||
      link?.includes("#") ||
      link?.includes("tel") ? (
        <a
          target={sameTab || link?.includes("#") ? "_self" : "_blank"}
          key={label}
          href={link}
          className={cssClass || ""}
          onClick={() =>
            ReactGA.event({
              category: "Link",
              action: link || "",
              label: label || "",
            })
          }
        >
          {children}
          {!!label && <>{label}</>}
        </a>
      ) : (
        <Link
          key={label}
          href={link}
          className={cssClass || ""}
          onClick={() =>
            ReactGA.event({
              category: "Link",
              action: link || "",
              label: label || "",
            })
          }
        >
          {children}
          {!!label && <>{label}</>}
        </Link>
      )}
    </>
  );
}
