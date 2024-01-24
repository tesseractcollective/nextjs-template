import LinkItem from "@/components/LinkItem";
import parse from "html-react-parser";

interface AccouncementBarProps {
  accouncementText: string;
  accouncementLink?: string;
  cssClassWrapper?: string;
}

export default function AccouncementBar({
  accouncementText,
  accouncementLink,
  cssClassWrapper,
}: AccouncementBarProps) {
  if (accouncementLink !== "")
    return (
      <LinkItem
        cssClass={`bg-primary w-full nav-announcement-bar p-2 text-sm uppercase  ${cssClassWrapper}`}
        link={accouncementLink}
      >
        <div className="max-w-8xl mx-auto">{parse(accouncementText)}</div>
      </LinkItem>
    );
  return (
    <div
      className={`bg-primary w-full nav-announcement-bar p-2  ${cssClassWrapper}`}
    >
      <p className="max-w-8xl mx-auto  text-sm uppercase text-bg">
        {parse(accouncementText)}
      </p>
    </div>
  );
}
