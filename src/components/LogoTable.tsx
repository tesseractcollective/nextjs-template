import React from "react";
import Image from "next/image";
import type { LogoTableFieldsFragment } from "@/graphql/generated/graphql";

interface LogoTableProps {
  query: string;
  logoTables: LogoTableFieldsFragment[];
}

export default function LogoTable({
  query,
  logoTables,
}: LogoTableProps) {
  const filteredTable = logoTables.filter(
    (logoTableItem) => logoTableItem.logoType === query
  );
  return (
    <div>
      {!!filteredTable && filteredTable?.length >= 1 && (
        <section className="container mx-auto px-4 my-16">
          <div className="py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                {filteredTable.map((logoTableItem) => (
                  <div
                    className="bg-gray-dark/20 p-8 sm:p-10"
                    key={`${logoTableItem.logoName}-${Math.random()}`}
                  >
                    {!!logoTableItem.logoImage?.url &&
                      !!logoTableItem?.logoName && (
                        <>
                          {logoTableItem?.logoLink ? (
                            <a
                              target="_blank"
                              title={logoTableItem?.logoName || ""}
                              href={`${logoTableItem.logoLink}`}
                              rel="noreferrer"
                              className="no-underline"
                            >
                              <Image
                                className="max-h-12 w-full object-contain"
                                src={logoTableItem.logoImage.url}
                                alt={logoTableItem?.logoName}
                                width={0}
                                height={0}
                                sizes="100%"
                                style={{
                                  width: 'auto',
                                  height: 'auto',
                                  margin: '0 auto'
                                }}
                              />
                               <span className="sr-only">{logoTableItem?.logoName}</span>
                            </a>
                          ) : (
                            <Image
                              className="max-h-12 w-full object-contain"
                              src={logoTableItem.logoImage.url}
                              alt={logoTableItem?.logoName}
                              title={logoTableItem?.logoName || ""}
                              width={0}
                              height={0}
                              sizes="100%"
                              style={{
                                width: 'auto',
                                height: 'auto',
                                margin: '0 auto'
                              }}
                            />
                          )}
                        </>
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
