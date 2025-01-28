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
import CircleNavigation from "@/components/navigation/CircleNavigation";
import UniversalNavigation from "@/components/navigation/UniversalNavigation";
import ProgressNavigation from "@/components/navigation/ProgressNavigation";
import HorizonNavigation from "@/components/navigation/HorizonNavigation";
import BlogNavigation from "@/components/navigation/BlogNavigation";
import DimensionNavigation from "@/components/navigation/DimensionNavigation";
import BorderNavigation from "@/components/navigation/BorderNavigation";
import BetweenNavigation from "@/components/navigation/BetweenNavigation";
import FixedSideNavigation from "@/components/navigation/FixedSideNavigation";
import LuxuryNavigation from "@/components/navigation/LuxuryNavigation";

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

  // ** Navigation Layout Style
  // vertical √
  // universal √
  // horizon √
  // circle √
  // dimension √
  // between
  // center
  // dashboard
  // dual
  // mega
  // minimal
  // progress
  // reverse
  // space
  // start
  // transparent
  // vertical
  // border
  // verticalTwo
  // blog
  // luxury
  // fixedSide

  if (navigation.navigationLayoutStyle === "border")
    return (
      <BorderNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

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
  if (navigation.navigationLayoutStyle === "fixedSide")
    return (
      <FixedSideNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );
  if (navigation.navigationLayoutStyle === "progress")
    return (
      <ProgressNavigation
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
      <BetweenNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "universal")
    return (
      <UniversalNavigation
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

  if (navigation.navigationLayoutStyle === "circle")
    return (
      <CircleNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "blog")
    return (
      <BlogNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "luxury")
    return (
      <LuxuryNavigation
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

  if (navigation.navigationLayoutStyle === "vertical")
    return (
      <VerticalNavigation
        navigations={navigations}
        siteLibrary={siteLibrary}
        hideNav={hideNav}
        pageNavigationSelection={pageNavigationSelection}
      />
    );

  if (navigation.navigationLayoutStyle === "horizon")
    return (
      <HorizonNavigation
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

  if (navigation.navigationLayoutStyle === "dimension")
    return (
      <DimensionNavigation
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
