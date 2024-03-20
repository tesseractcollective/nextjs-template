import type {
  EventFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import parse from "html-react-parser";
import ReactGA from "react-ga4";
import Moment from "react-moment";
import Link from "next/link";
import Image from "next/image";
import VideoSection from "@/components/VideoSection";
import Head from "next/head";
import MapBoxMap from "@/components/elements/MapBoxMap";
import Events from "@/components/Events";
import GallerySection from "@/components/GallerySection";
import {
  ArrowTopRightOnSquareIcon,
  MapPinIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import SpotifyArtistAlbums from "@/components/elements/SpotifyAPI/SpotifyArtistAlbums";

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
    eventLocation,
    eventPerformer,
    eventPerformerSpotifyAlbumDisplay,
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: eventTitle,
              startDate: eventStartDateTime,
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: eventVenueName,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: eventAddress,
                  addressLocality: eventCityState,
                },
              },
              image: [event.eventFlyer?.url],
              description: eventShortDescription,
              offers: {
                "@type": "Offer",
                url: event.eventTicketLinkDestination,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                validFrom: new Date(),
              },
              performer: {
                "@type": "PerformingGroup",
                name: eventPerformer,
              },
              organizer: {
                "@type": "Organization",
                name: siteLibrary.title,
                url: siteLibrary.metaDomain,
              },
            }),
          }}
        />
      </Head>
      <section className="container  mx-auto">
        {/* HEADER */}
        <div className="relative max-w-8xl mx-auto py-8">
          <div className="mx-auto block my-2 p-2 text-center">
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
                {!!eventTitle && <span>{eventTitle}</span>}
                {!!eventCityState && (
                  <span className="text-2xl">{eventCityState}</span>
                )}
              </h1>
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div className="mx-auto max-w-8xl px-4 pt-16 sm:px-6 sm:pt-12 lg:grid lg:max-w-8xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:max-w-lg lg:self-end">
            <div className="event-content-wrapper mb-4">
              {/* {!!eventVenueName && (
                <h2 className="mb-0 text-3xl font-extrabold">
                  {eventVenueName}
                </h2>
              )} */}
              {!!eventStartDateTime && (
                <div className="artist-filter-text-wrapper text-text-color flex flex-row items-center justify-center py-4 my-4 px-4 gap-x-4 border-y border-primary w-full">
                  <div className="flex flex-col border-r border-text-color pr-4">
                    <span className="date-format-month text-center uppercase my-0 py-0 font-semibold opacity-80 text-xs">
                      <Moment format="ddd">{event.eventStartDateTime}</Moment>
                    </span>
                    <span className="date-format-month text-center uppercase my-0 py-0 font-semibold opacity-80 text-xs">
                      <Moment format="MMM">{event.eventStartDateTime}</Moment>
                    </span>
                    <span className="date-format-date text-center text-2xl my-0 py-0 font-bold">
                      <Moment format="DD">{event.eventStartDateTime}</Moment>
                    </span>
                  </div>
                  {!!eventAddress && (
                    <div className="flex items-start flex-col justify-center w-full">
                      {!!eventVenueName && (
                        <p className="text-2xl font-extrabold ml-0">
                          {eventVenueName}
                        </p>
                      )}
                      <p className="flex flex-row items-center w-full">
                        <span className="max-w-[240px] text-xl opacity-80">
                          {eventAddress}
                        </span>

                        {!!eventAddress && (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              eventAddress
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <MapPinIcon
                              className="h-6 w-6 text-text-color ml-2 transition-all opacity-80 hover:opacity-100 focus:opacity-10"
                              aria-hidden="true"
                            />
                          </a>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {!!eventTicketLinkDestination && (
                <div className="my-10">
                  <a
                    href={eventTicketLinkDestination}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-16 py-3 text-base font-medium text-text-color hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-50 transition max-w-max mx-auto flex-row uppercase"
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
                      className="h-4 w-4 text-text-color ml-2"
                      aria-hidden="true"
                    />
                  </a>
                </div>
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
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-start">
              <div className="] overflow-hidden rounded-lg">
                <Image
                  src={eventFlyer?.url}
                  alt={eventTitle}
                  className="h-full w-full object-contain object-center"
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
        {/* ONE COL */}
        <div className="w-full">
          {!!eventTicketLinkDestination && (
            <div className="my-32">
              <h4 className="outline-text text-center text-2xl md:text-4xl pb-0 my-0 flex flex-col mb-4">
                {!!eventTitle && <span>{eventTitle}</span>}
                {!!eventCityState && (
                  <span className="text-2xl">{eventCityState}</span>
                )}
              </h4>
              <a
                href={eventTicketLinkDestination}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-16 py-3 text-base font-medium text-text-color hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-50 transition max-w-max mx-auto flex-row uppercase"
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
                  className="h-4 w-4 text-text-color ml-2"
                  aria-hidden="true"
                />
              </a>
            </div>
          )}
        </div>
      </section>
      <section className="bg-bg-secondary py-16">
        {/* Event Content */}
        {(eventIFrame || videoBox) && (
          <div className="mx-auto px-4 py-16 max-w-8xl lg:px-4">
            {!!eventIFrame && <div className="py-8">{parse(eventIFrame)}</div>}
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
      </section>
      {!!eventLocation &&
        !!siteLibrary?.mapKey &&
        !!eventLocation?.longitude &&
        !!eventLocation?.longitude &&
        !!siteLibrary?.metaAppleTouchIcon &&
        !!siteLibrary?.title &&
        !!eventAddress && (
          <section className="bg-fade-bg">
            <MapBoxMap
              lat={eventLocation.latitude}
              long={eventLocation.longitude}
              mapKey={siteLibrary.mapKey}
              icon={siteLibrary?.metaAppleTouchIcon.url}
              mapLink={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                eventAddress
              )}`}
              address={eventAddress}
              siteName={siteLibrary?.title}
            />
          </section>
        )}
      {!!eventPerformer &&
        !!eventPerformerSpotifyAlbumDisplay &&
        siteLibrary?.spotifyClientSecret &&
        siteLibrary?.spotifyClientId && (
          <SpotifyArtistAlbums
            artistName={eventPerformer}
            spotifyAlbumDisplay="slider"
            spotifyClientId={siteLibrary.spotifyClientId}
            spotifyClientSecret={siteLibrary.spotifyClientSecret}
          />
        )}
      {/* Other Events */}
      {!!filteredEvents && (
        <section className="bg-bg-secondary py-16">
          <div className="max-w-8xl mx-auto w-full">
            <h3 className="mx-auto uppercase font-bold mb-8 text-4xl text-center">
              Events
            </h3>
            <Events events={filteredEvents} />
          </div>
        </section>
      )}
    </>
  );
}
