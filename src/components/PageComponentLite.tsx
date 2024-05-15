import { FC } from "react";
import { LayoutQuery } from "@/graphql/generated/graphql";
import { Event } from "@/components/Calendar/calendarHelpers";

interface Props {
  layout: LayoutQuery;
  eventsData?: Event[];
}

const PageComponentLite: FC<Props> = ({ layout, eventsData }) => {
  if (!layout?.siteLibrary) return <div />;

  return <pre>{JSON.stringify(layout, null ,2)}</pre>
};

export default PageComponentLite;
