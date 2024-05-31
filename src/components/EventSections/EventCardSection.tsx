import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import type { EventFieldsFragment } from "@/graphql/generated/graphql";
import LinkItem from "@/components/LinkItem";

interface EventsProps {
  events: EventFieldsFragment[];
}

export default function EventCardSection({ events }: EventsProps) {
  return (
    <section className="mx-auto px-4 max-w-9xl py-8 w-full">
      <Fade triggerOnce direction="up">
        <div className="flex flex-wrap justify-center items-stretch gap-8 h-full w-full">
          {events.map((event) => (
            <div
              key={event.eventSlug}
              className="h-full w-full md:max-w-md transition-all duration-[400ms]"
            >
              <LinkItem
                parentCssClass="h-full w-full"
                link={
                  event?.newTabEventDestination
                    ? event.newTabEventDestination
                    : `/event/${event.eventSlug}`
                }
                cssClass="relative isolate flex flex-col overflow-hidden rounded-2xl bg-background group hover:cursor-pointer mx-auto w-full self-stretch mx-auto  h-full block aspect-[3/4] outline-none hover:outline-primary focus-within:outline-primary transition-all"
              >
                <div className="w-full h-full">
                  {!!event.eventFlyer?.url && (
                    <Image
                      src={event.eventFlyer.url}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100%"
                      style={{ width: "100%" }}
                      className="relative block inset-0 -z-10 h-full w-full object-cover"
                    />
                  )}
                </div>
              </LinkItem>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}
