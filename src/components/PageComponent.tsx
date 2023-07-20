import type { LayoutQuery } from "@/graphql/generated/graphql";
import LayoutBlocks from "@/components/LayoutBlocks";
import ThemeColors from "@/styles/ThemeColors";

interface HomeProps {
  layout: LayoutQuery;
}

export default function PageComponent({ layout }: HomeProps) {
  if (!layout.siteLibrary) return <div />;

  return (
    <>
      <ThemeColors siteLibrary={layout.siteLibrary} />
      <LayoutBlocks layout={layout} />
    </>
  );
}
