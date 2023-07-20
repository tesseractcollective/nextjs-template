import React from "react";
import type { LogoTableFieldsFragment } from "@/graphql/generated/graphql";

interface LogoTableProps {
  title: string;
  query: string;
  logoTables: LogoTableFieldsFragment[];
}

export default function LogoTable({
  title,
  query,
  logoTables,
}: LogoTableProps) {
  const filteredTable = logoTables
  .filter((logoTableItem) => logoTableItem.logoType === query)
  return (
    <div>
      {!!filteredTable && filteredTable?.length >= 1 && (
        <section className="container mx-auto px-4 my-16">
          {!!title && (
            <h3 className="text-2xl md:text-4xl col-12 opacity-80 uppercase text-center">
              {title}
            </h3>
          )}
          <div className="grid animate-col-width gap-x-8 gap-y-8 grid-cols-2 md:grid-cols:4 lg:grid-cols-4 xl:grid-cols-6">
            {filteredTable
              .map((logoTableItem) => (
                <div
                  className="mx-auto flex items-center justify-center"
                  key={`${logoTableItem.logoName}-${Math.random()}`}
                >
                  {logoTableItem?.logoLink ? (
                    <a
                      target="_blank"
                      title={logoTableItem?.logoName || ""}
                      href={`${logoTableItem.logoLink}`}
                      className="w-full no-underline animate-col-width inline hover-reveal-color mx-auto"
                      rel="noreferrer"
                    >
                      <img
                        src={logoTableItem.logoImage?.url}
                        alt={
                          (logoTableItem?.logoName &&
                            logoTableItem?.logoName) ||
                          "client Logo"
                        }
                        className="block mx-auto"
                        style={{ objectFit: "contain", maxWidth: "140px" }}
                      />
                    </a>
                  ) : (
                    <div className="w-full no-underline animate-col-width mx-auto inline-block">
                      <img
                        src={logoTableItem.logoImage?.url}
                        alt={
                          (logoTableItem?.logoName &&
                            logoTableItem?.logoName) ||
                          "client Logo"
                        }
                        className="block mx-auto hover-reveal-color"
                        style={{ objectFit: "contain", maxWidth: "140px" }}
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
