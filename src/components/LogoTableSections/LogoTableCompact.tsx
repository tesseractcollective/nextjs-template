import React from "react";
import Image from "next/image";
import type { LogoTableFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";

interface LogoTableProps {
  logoTableItems: LogoTableFieldsFragment[];
}
export default function LogoTableCompact({ logoTableItems }: LogoTableProps) {
  return (
    <div>
      <section className="container mx-auto px-4">
        <div className="py-12">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl">
              {logoTableItems.map((logoTableItem) => (
                <div
                  className="logo-grid-item bg-bg p-8 sm:p-10"
                  key={logoTableItem.logoName}
                >
                  {!!logoTableItem.logoImage?.url &&
                    !!logoTableItem?.logoName && (
                      <Fade triggerOnce cascade direction="up">
                        {logoTableItem?.logoLink ? (
                          <LinkItem
                            link={`${logoTableItem.logoLink}`}
                            cssClass="no-underline"
                          >
                            <>
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
                            </>
                          </LinkItem>
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
    </div>
  );
}
