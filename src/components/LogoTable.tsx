import React from "react";
import Image from "next/image";
import type { LogoTableFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";

interface LogoTableProps {
  type: string;
  logoTables: LogoTableFieldsFragment[];
}

export default function LogoTable({ type, logoTables }: LogoTableProps) {
  const filteredTable = logoTables.filter(
    (logoTableItem) => logoTableItem.logoType === type
  );
  return (
    <div>
      {!!filteredTable && filteredTable?.length >= 1 && (
        <section className="container mx-auto px-4 my-16">
          <div className="py-12">
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
              <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                {filteredTable.map((logoTableItem) => (
                  <div
                    className="bg-bg-secondary p-8 sm:p-10"
                    key={logoTableItem.logoName}
                  >
                    {!!logoTableItem.logoImage?.url &&
                      !!logoTableItem?.logoName && (
                        <Fade>
                          {logoTableItem?.logoLink ? (
                            <a
                              target="_blank"
                              title={logoTableItem?.logoName || ""}
                              href={`${logoTableItem.logoLink}`}
                              rel="noreferrer"
                              className="no-underline"
                            >
                              <Image
                                className="max-h-24 w-full object-contain"
                                src={logoTableItem.logoImage.url}
                                alt={logoTableItem?.logoName}
                                width={0}
                                height={0}
                                sizes="100%"
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  margin: "0 auto",
                                }}
                              />
                              <span className="sr-only">
                                {logoTableItem?.logoName}
                              </span>
                            </a>
                          ) : (
                            <Image
                              className="max-h-24 w-full object-contain"
                              src={logoTableItem.logoImage.url}
                              alt={logoTableItem?.logoName}
                              title={logoTableItem?.logoName || ""}
                              width={0}
                              height={0}
                              sizes="100%"
                              style={{
                                width: "auto",
                                height: "auto",
                                margin: "0 auto",
                              }}
                            />
                          )}
                        </Fade>
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
