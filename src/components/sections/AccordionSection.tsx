import { Disclosure, Transition } from "@headlessui/react";
// import { SiteData } from "@/types";
import parse from "html-react-parser";
import { MinusIcon } from "@heroicons/react/20/solid";
// import Image from "next/image";
import type { AccordionFieldsFragment } from "@/graphql/generated/graphql";
// import LinkItem from "@/components/LinkItem";

interface AccordionProps {
  accordionData: AccordionFieldsFragment[];
}

export default function Accordion({ accordionData }: AccordionProps) {
  if (accordionData?.length === 0) return <></>;
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full rounded-2xl max-w-[800px] p-2">
        {accordionData.map((item) => (
          <Disclosure key={item.contentHeader?.html}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-start items-center rounded-lg px-4 py-2 text-left text-xs md:text-sm font-medium text-indigo-500 hover:text-white focus-visible:text-white hover:bg-indigo-800 focus:outline-none focus-visible:ring focus-visible:ring-indigo-900 focus-visible:ring-opacity-75 transition-all duration-600">
                  <div className="bg-gradient-to-tr from-primary to-primary-hover relative text-white h-6 w-6 rounded-md">
                    <MinusIcon className="absolute w-6 h-6" />
                    <MinusIcon
                      className={`absolute w-6 h-6 transition-all duration-600 ${
                        open ? "" : "rotate-90 transform"
                      }`}
                    />
                  </div>
                  <span className="ml-2">{item.contentHeader?.html}</span>
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-600 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-600 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  {!!item.contentDescription?.html && (
                    <Disclosure.Panel
                      static
                      className="px-6 pt-4 pb-2 text-sm text-white opacity-80"
                    >
                      {parse(item.contentDescription?.html)}
                    </Disclosure.Panel>
                  )}
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}