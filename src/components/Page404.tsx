import type { LayoutQuery } from "@/graphql/generated/graphql";
import Nav from "@/components/navigation/Nav";
import LinkItem from "./LinkItem";
import { NextResponse } from "next/server";

interface PageProps {
  layout: LayoutQuery;
}

export default function Page404({ layout }: PageProps) {
  return NextResponse.json(
    {
      status: 404,
      message: "Page Not Found",
      content: (
        <div className="relative">
          {layout.navigations && layout.siteLibrary && (
            <Nav
              siteLibrary={layout.siteLibrary}
              navigations={layout.navigations}
              hideNav={layout.page?.hideNav || undefined}
              pageNavigationSelection={
                layout.page?.pageNavigationSelection || undefined
              }
            />
          )}
          <div className="h-100vh flex items-center justify-center">
            <div className="body-parsed-text text-center items-center justify-center flex-col">
              <h1 className="text-text-color text-2xl">404</h1>
              <h2 className="text-text-color">Page Not Found</h2>
              <LinkItem
                link="/"
                cssClass="text-link !max-w-max mx-auto my-0"
                label="Return Home"
              />
            </div>
          </div>
        </div>
      ),
    },
    { status: 404 }
  );
}
