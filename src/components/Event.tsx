import type {
  EventFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import ReactGA from "react-ga4";
import Moment from "react-moment";
import Link from "next/link";
import Image from "next/image";
import VideoBox from "@/components/VideoBox";
import VideoSection from "@/components/VideoSection";
import VideoPlaylistBox from "@/components/VideoPlaylistBox";
import Head from "next/head";
import Events from "@/components/Events";
import GallerySection from "@/components/GallerySection";
import {
  ArrowTopRightOnSquareIcon,
  MapPinIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export interface EventProps {
  event: EventFieldsFragment;
  events: EventFieldsFragment[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function Event({ event, siteLibrary, events }: EventProps) {
  if (!event) return <></>;
  const {
    eventAddress,
    eventAddressGoogleMapLink,
    eventCityState,
    eventEndDateTime,
    eventDescription,
    eventFeatured,
    eventFlyer,
    eventLinkButtonText,
    eventTicketLinkDestination,
    eventShortDescription,
    eventSlug,
    eventIFrame,
    eventStartDateTime,
    eventTitle,
    eventVenueName,
    eventGallery,
    videoBox,
  } = event;
  if (!siteLibrary) return <></>;
  const { isSpanish, youtubeApiKey } = siteLibrary;
  const filteredEvents = events?.filter(
    (tempEvent) => eventSlug !== tempEvent.eventSlug
  );
  return (
    <>
      <Head>
        {!!eventTitle && (
          <title>{`${eventTitle} - ${siteLibrary?.title}`}</title>
        )}
        {!!eventFlyer?.url && (
          <meta property="og:image" content={eventFlyer?.url} />
        )}
        {!!eventShortDescription && (
          <meta name="description" content={eventShortDescription} />
        )}
        {!!siteLibrary?.favicon && (
          <link rel="shortcut icon" href={siteLibrary.favicon.url} />
        )}
      </Head>
      <section className="container  mx-auto">
        <div className="relative w-10/12 mx-auto mt-2 mb-4 md:my-8">
          <div className="w-10/12 md:w-8/12 mx-auto block my-2 p-2 text-center">
            <Link
              href="/events"
              className="text-link uppercase no-underline max-w-max my-0 py-0 flex flex-row items-center mx-auto"
            >
              <ArrowLeftIcon
                className="h-6 w-6 text-text-color mr-2"
                aria-hidden="true"
              />
              <span>{isSpanish ? "Toda Los Eventos" : "All Events"}</span>
            </Link>
          </div>
          <div className="gradient-bkg">
            <div className="outline-text-wrapper py-6 px-4 w-full">
              <h1 className="outline-text text-center text-2xl md:text-4xl pb-0 my-0 flex flex-col">
                {!!eventFeatured && (
                  <span className="text-2xl">
                    {isSpanish ? "Exclusivo" : "Exclusive"}
                  </span>
                )}
                {!!eventTitle && <span>{eventTitle}</span>}
                {!!eventCityState && (
                  <span className="text-2xl">{eventCityState}</span>
                )}
              </h1>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-12 lg:grid lg:max-w-8xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:max-w-lg lg:self-end">
            <div className="event-content-wrapper mb-4">
              {!!eventVenueName && (
                <h2 className="mb-0 text-3xl font-extrabold">
                  {eventVenueName}
                </h2>
              )}
              {!!eventStartDateTime && (
                <h3 className="flex flex-row text-2xl text-text-color opacity-100 font-bold mb-4">
                  <span className="flex flex-row">
                    <Moment format="MMM/DD">{eventStartDateTime}</Moment>
                  </span>
                  {!!eventEndDateTime && (
                    <span className="ml-2">
                      {"•"}
                      <Moment format="MMM/DD" className="ml-2">
                        {eventEndDateTime}
                      </Moment>
                    </span>
                  )}
                </h3>
              )}
              {!!eventAddress && (
                <p className="flex items-center">
                  {eventAddress}

                  {!!eventAddressGoogleMapLink && (
                    <a
                      href={eventAddressGoogleMapLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MapPinIcon
                        className="h-6 w-6 text-text-color ml-2"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </p>
              )}
              <section aria-labelledby="information-heading" className="mt-4">
                {!!eventDescription?.html && (
                  <div className="mt-4 space-y-6">
                    <div className="text-base text-text-color body-parsed-text opacity-90">
                      {parse(eventDescription.html)}
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
          {!!eventFlyer?.url && eventTitle && (
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <Image
                  src={eventFlyer?.url}
                  alt={eventTitle}
                  className="h-full w-full object-cover object-center"
                  width={0}
                  height={0}
                  sizes="100%"
                  placeholder="blur"
                  blurDataURL="https://images.unsplash.com/photo-1550134464-4c07c5b02073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=985&q=80"
                />
              </div>
            </div>
          )}
        </div>
        <div className="w-full">
          {!!eventTicketLinkDestination && (
            <div className="my-10">
              <a
                href={eventTicketLinkDestination}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-16 py-3 text-base font-medium text-text-color hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-50 transition max-w-max mx-auto flex-row"
                onClick={() => {
                  ReactGA.event({
                    category: "Link",
                    action: eventTicketLinkDestination,
                    label: eventTicketLinkDestination,
                  });
                }}
              >
                <span>{eventLinkButtonText}</span>
                <ArrowTopRightOnSquareIcon
                  className="h-6 w-6 text-text-color ml-2"
                  aria-hidden="true"
                />
              </a>
            </div>
          )}
        </div>
        {(eventIFrame || videoBox) && (
          <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-16 pt-2 lg:max-w-8xl lg:px-8">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-white opacity-40 mb-4" />
              </div>
            </div>
            {!!eventIFrame && <div className="my-8">{parse(eventIFrame)}</div>}
            {!!siteLibrary?.youtubeApiKey &&
              !!videoBox &&
              videoBox.length >= 1 && (
                <VideoSection
                  videoData={videoBox}
                  youtubeApiKey={siteLibrary.youtubeApiKey}
                />
              )}
            {!!eventGallery && (
              <GallerySection
                galleryData={eventGallery}
                galleryLayoutData="lightbox"
              />
            )}
          </div>
        )}
        {!!filteredEvents && (
          <section className="container my-4 mx-auto">
            <Events eventDisplayLayout={"grid"} events={filteredEvents} />
          </section>
        )}
      </section>
    </>
  );
}
