import Link from "next/link";
import ReactGA from "react-ga4";
interface LinkItemProps {
  link?: string | null;
  label?: string | null;
  cssClass?: string | null;
  sameTab?: boolean | null;
  children?: string | JSX.Element;
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
          onClick={() => {
            ReactGA.event({
              category: "Link",
              action: link || "",
              label: label || "",
            });
            if (onClick) onClick();
          }}
        >
          {children}
          {!!label && <>{label}</>}
        </a>
      ) : (
        <Link
          key={label}
          href={link}
          className={cssClass || ""}
          onClick={() => {
            ReactGA.event({
              category: "Link",
              action: link || "",
              label: label || "",
            });
            if (onClick) onClick();
          }}
        >
          {children}
          {!!label && <>{label}</>}
        </Link>
      )}
    </>
  );
}
