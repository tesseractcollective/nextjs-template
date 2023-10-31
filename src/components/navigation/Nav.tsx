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
