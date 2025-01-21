import React from "react";
import type { LogoTableFieldsFragment } from "@/graphql/generated/graphql";
import LogoTableGrid from "./LogoTableSections/LogoTableGrid";
import LogoTableStack from "./LogoTableSections/LogoTableStack";
import LogoTableCompact from "./LogoTableSections/LogoTableCompact";
import LogoTableDefault from "./LogoTableSections/LogoTableDefault";
import LogoTableShelf from "./LogoTableSections/LogoTableShelf";

// card
// chevron
// circle
// compact
// fullScreen
// grid
// infinite
// lightbox
// mason
// mix
// polaroid
// rotate
// shelf
// slider
// stack
// twohundredvh

interface LogoTableProps {
  type: string;
  logoTables: LogoTableFieldsFragment[];
  logoTableLayout: string;
}

export default function LogoTable({
  type,
  logoTables,
  logoTableLayout,
}: LogoTableProps) {
  const logoTableItems = logoTables.filter(
    (logoTableItem) => logoTableItem.logoType === type
  );

  if (logoTableLayout === "grid" && logoTableItems.length >= 1)
    return <LogoTableGrid logoTableItems={logoTableItems} />;

  if (logoTableLayout === "stack" && logoTableItems.length >= 1)
    return <LogoTableStack logoTableItems={logoTableItems} />;

  if (logoTableLayout === "compact" && logoTableItems.length >= 1)
    return <LogoTableCompact logoTableItems={logoTableItems} />;

  if (logoTableLayout === "shelf" && logoTableItems.length >= 1)
    return <LogoTableShelf logoTableItems={logoTableItems} />;

  return <LogoTableDefault logoTableItems={logoTableItems} />;
}
