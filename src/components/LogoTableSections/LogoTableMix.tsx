import React from "react";
import Image from "next/image";
import type { LogoTableFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";

interface LogoTableProps {
  logoTableItems: LogoTableFieldsFragment[];
}

export default function LogoTableMix({ logoTableItems }: LogoTableProps) {
  return (
    <section className="logo-table-mix">
      <div className="grid grid-cols-4 gap-1 overflow-hidden md:grid-cols-6 max-w-6xl mx-auto">
        {logoTableItems.map((logoTableItem) => (
          <div className="logo-mix-item p-1" key={logoTableItem.logoName}>
            {!!logoTableItem.logoImage?.url && !!logoTableItem?.logoName && (
              <Fade triggerOnce cascade direction="up">
                {logoTableItem?.logoLink ? (
                  <LinkItem
                    link={`${logoTableItem.logoLink}`}
                    cssClass="no-underline"
                  >
                    <Image
                      className="max-h-20 w-full object-contain"
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
                  </LinkItem>
                ) : (
                  <Image
                    className="max-h-20 w-full object-contain"
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
    </section>
  );
}
