import Link from "next/link";

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
  children
}: LinkItemProps) {
  if(!link) return <></>
  return (
    <>
      {link?.includes("http") ? (
        <a
          target={sameTab ? "_self" : "_blank"}
          key={label}
          href={link}
          className={cssClass || ''}
        >
          {children}
          {label}
        </a>
      ) : (
        <Link
          key={label}
          href={link}
          className={cssClass || ''}
        >
          {children}
          {label}
        </Link>
      )}
    </>
  );
}
