import React, { useState } from "react";
import Image from "next/image";
import type {
  TextContentFieldsFragment,
  CallToActionFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import LinkItem from "@/components/LinkItem";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

interface TextCardsProps {
  textContentData: TextContentFieldsFragment[];
  callToActionData: CallToActionFieldsFragment[];
}

export default function TextSplitSection({
  textContentData,
  callToActionData,
}: TextCardsProps) {
  const [expanded, setExpanded] = useState<false | number>(false);
  const textContentItemNLink = textContentData.filter(
    (textContentItem) => textContentItem?.link === null
  );
  const textContentItemWLink = textContentData.filter(
    (textContentItem) => textContentItem?.link !== ""
  );
  return (
    <>
      {!!textContentData && (
        <div className="text-content-full border-b border-text-color">
          {textContentItemNLink.map((textContentItem, index) => {
            const isOpen = index === expanded;
            return (
              <div
                key={textContentItem?.header?.html}
                className="mx-auto w-full"
              >
                <div className="border-t border-text-color">
                  {textContentItem?.contentImage && (
                    <Image
                      className="w-full object-cover"
                      width={72}
                      height={72}
                      sizes="100%"
                      src={textContentItem.contentImage.url}
                      alt={textContentItem?.header?.html || ""}
                    />
                  )}
                  <motion.header
                    className={`flex flex-row items-center justify-between relative z-2 p-4 transition-all hover:!bg-tertiary ${isOpen ? "!bg-secondary" : "bg-bg"}`}
                    initial={false}
                    onClick={() => setExpanded(isOpen ? false : index)}
                  >
                    <div className="flex flex-col items-center justify-between">
                      {textContentItem?.htmlText && (
                        <Fade triggerOnce>
                          <div className="text-content-item-html">
                            {parse(textContentItem?.htmlText)}
                          </div>
                        </Fade>
                      )}
                      {textContentItem?.header && (
                        <div className="text-[12px] my-0 font-light py-0 parsed-mb-0 uppercase tracking-widest all-text-primary mx-auto w-full">
                          {parse(textContentItem.header.html)}
                        </div>
                      )}
                      {textContentItem?.subHeader && (
                        <div className="text-4xl lg:text-6xl font-bold my-0 py-0 parsed-mb-0 mx-auto w-full uppercase">
                          {parse(textContentItem.subHeader.html)}
                        </div>
                      )}
                    </div>
                    <ChevronUpIcon
                      className={`h-16 w-16 text-text-color transform transition-transform duration-300 ${
                        isOpen ? "rotate-0" : "rotate-180"
                      }`}
                    />
                  </motion.header>
                  {isOpen && (
                    <AnimatePresence initial={false}>
                      <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        {textContentItem?.content && (
                          <div className="body-parsed-text text-lg my-0 parsed-mb-0 opacity-80 mx-auto w-full p-4">
                            {parse(textContentItem.content.html)}
                          </div>
                        )}
                      </motion.section>
                    </AnimatePresence>
                  )}
                </div>
              </div>
            );
          })}
          {textContentItemWLink.map((textContentItem) => (
            <LinkItem
              key={textContentItem?.header?.html}
              link={textContentItem.link}
              cssClass="mx-auto w-full block"
            >
              <div className="border-t border-text-color p-4">
                {textContentItem?.contentImage && (
                  <Image
                    className="w-full object-cover"
                    width={72}
                    height={72}
                    sizes="100%"
                    src={textContentItem.contentImage.url}
                    alt={textContentItem?.header?.html || ""}
                  />
                )}
                {textContentItem?.htmlText && (
                  <Fade triggerOnce>
                    <div className="text-content-item-html">
                      {parse(textContentItem?.htmlText)}
                    </div>
                  </Fade>
                )}
                <div className="flex flex-col items-center justify-center relative z-2">
                  {textContentItem?.header && (
                    <div className="text-[12px] my-0 font-light py-0 parsed-mb-0 uppercase tracking-widest all-text-primary mx-auto w-full">
                      {parse(textContentItem.header.html)}
                    </div>
                  )}
                  {textContentItem?.subHeader && (
                    <div className="text-4xl lg:text-6xl font-bold my-0 py-0 parsed-mb-0 mx-auto w-full uppercase">
                      {parse(textContentItem.subHeader.html)}
                    </div>
                  )}
                  {textContentItem?.content && (
                    <div className="body-parsed-text text-lg my-0 parsed-mb-0 opacity-80 mx-auto w-full">
                      {parse(textContentItem.content.html)}
                    </div>
                  )}
                </div>
              </div>
            </LinkItem>
          ))}
          {!!callToActionData && callToActionData?.length > 0 && (
            <div className="text-center mx-auto md:mx-0 flex flex-row">
              {callToActionData.map(
                (callToActionItem) =>
                  callToActionItem?.ctaLink && (
                    <div
                      key={callToActionItem.ctaLink}
                      className="text-center mx-auto flex flex-row flex-wrap gap-4"
                    >
                      <LinkItem
                        link={callToActionItem.ctaLink}
                        label={callToActionItem.ctaLabel}
                        cssClass={
                          callToActionItem?.ctaClass
                            ? callToActionItem.ctaClass
                            : `${
                                callToActionItem.ctaPrimary
                                  ? "border-white text-text-color border px-4 md:px-6 py-2 theme-button max-w-max block no-underline font-bold w-full text-2xl !rounded-full"
                                  : "text-text-color border-0 px-4 md:px-6 py-2 theme-button max-w-max block no-underline w-full text-2xl !rounded-full"
                              } mr-2 max-w-max`
                        }
                      />
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
