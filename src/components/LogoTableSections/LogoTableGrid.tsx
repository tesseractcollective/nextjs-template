import React from "react";
import Image from "next/image";
import type { LogoTableFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";

interface LogoTableProps {
  logoTableItems: LogoTableFieldsFragment[];
}

export default function LogoTableGrid({ logoTableItems }: LogoTableProps) {
  const LogoImage = ({
    logoImage,
    logoName,
  }: {
    logoImage?: string;
    logoName: string;
  }) => {
    if (!logoImage)
      return (
        <h3 className="text-center uppercase text-sm tracking-wide">
          {logoName}
        </h3>
      );
    return (
      <Image
        className="max-h-24 w-full object-contain"
        src={logoImage}
        alt={logoName}
        title={logoName || ""}
        width={0}
        height={0}
        sizes="100%"
        style={{
          width: "auto",
          height: "auto",
          margin: "0 auto",
        }}
      />
    );
  };
  return (
    <div className="logo-table-grid">
      <section className="container mx-auto px-4">
        <div className="py-12">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
              {logoTableItems.map((logoTableItem) => (
                <div
                  className="logo-grid-item bg-bg-secondary p-8 sm:p-10"
                  key={logoTableItem.logoName}
                >
                  {!!logoTableItem?.logoName && (
                    <Fade triggerOnce cascade direction="up">
                      {logoTableItem?.logoLink ? (
                        <LinkItem
                          link={`${logoTableItem.logoLink}`}
                          cssClass="no-underline"
                        >
                          <>
                            <LogoImage
                              logoImage={logoTableItem?.logoImage?.url}
                              logoName={logoTableItem?.logoName}
                            />
                          </>
                        </LinkItem>
                      ) : (
                        <LogoImage
                          logoImage={logoTableItem?.logoImage?.url}
                          logoName={logoTableItem?.logoName}
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
