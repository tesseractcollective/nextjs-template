import React from "react";
import type {
  NavigationFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import CenterNavigation from "@/components/navigation/CenterNavigation";
import DefaultNavigation from "@/components/navigation/DefaultNavigation";
import MegaNavigation from "@/components/navigation/MegaNavigation";
import MinimalNavigation from "@/components/navigation/MinimalNavigation";
import VerticalNavigation from "@/components/navigation/VerticalNavigation";
import ReverseNavigation from "@/components/navigation/ReverseNavigation";
import DualNavigation from "@/components/navigation/DualNavigation";
import DashboardNavigation from "@/components/navigation/DashboardNavigation";
import SpaceNavigation from "@/components/navigation/SpaceNavigation";

export interface NavProps {
  siteLibrary: SiteLibraryFieldsFragment;
  navigations: NavigationFieldsFragment[];
  hideNav?: boolean;
  pageNavigationSelection?: string;
}

export default function Nav({
  navigations,
  siteLibrary,
  hideNav,
  pageNavigationSelection,
}: NavProps) {
  if (!navigations && !siteLibrary) return <></>;
  if (hideNav === true) return <></>;

  const navigation =
    navigations?.find(
      (navigationTemp) =>
        navigationTemp?.pageNavigationSelection &&
        pageNavigationSelection &&
        navigationTemp?.pageNavigationSelection.includes(
          pageNavigationSelection
        )
    ) || navigations[0];

  if (navigation.navigationLayoutStyle === "dual")
    return (
      <DualNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );
  if (navigation.navigationLayoutStyle === "dashboard")
    return (
      <DashboardNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );
  if (navigation.navigationLayoutStyle === "progress")
    return (
      <CenterNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "space")
    return (
      <SpaceNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "between")
    return (
      <DefaultNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "universal")
    return (
      <CenterNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "center")
    return (
      <CenterNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "mega")
    return (
      <MegaNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "minimal")
    return (
      <MinimalNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "vertical")
    return (
      <VerticalNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );
  if (navigation.navigationLayoutStyle === "reverse")
    return (
      <ReverseNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  return (
    <DefaultNavigation
      navigations={navigations}
      siteLibrary={siteLibrary}
      hideNav={hideNav}
      pageNavigationSelection={pageNavigationSelection}
    />
  );
}
