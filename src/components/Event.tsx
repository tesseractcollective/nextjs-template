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
  const { isSpanish, favicon, metaAppleTouchIcon } = siteLibrary;
  const filteredEvents = events?.filter(
    (tempEvent) => eventSlug !== tempEvent.eventSlug
  );
  const getMapLink = () => {
    if (eventAddressGoogleMapLink) {
      return eventAddressGoogleMapLink;
    }
    if (siteLibrary?.googleMapLink) {
      return siteLibrary.googleMapLink;
    }
    if (eventAddress) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        eventAddress
      )}`;
    }
    return null;
  };
  const mapLink = getMapLink();
  const eventBreadcrumbRoute = siteLibrary?.siteLibraryJson
    ?.eventBreadcrumbRoute
    ? siteLibrary?.siteLibraryJson?.eventBreadcrumbRoute
    : "/events";
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
        {!!favicon && <link rel="shortcut icon" href={favicon.url} />}
        {metaAppleTouchIcon?.url && (
          <link rel="apple-touch-icon" href={metaAppleTouchIcon.url} />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: eventTitle,
              startDate: eventStartDateTime,
              endDate: eventEndDateTime || eventStartDateTime,
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: eventVenueName,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: eventAddress || siteLibrary?.address,
                  addressLocality: eventCityState?.split(",")[0]?.trim(),
                  addressRegion: eventCityState?.split(",")[1]?.trim(),
                  ...(siteLibrary?.address?.match(/\d{5}/)?.[0] && {
                    postalCode: siteLibrary.address.match(/\d{5}/)?.[0],
                  }),
                },
                ...(event?.eventLocation && {
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: event.eventLocation.latitude,
                    longitude: event.eventLocation.longitude,
                  },
                }),
              },
              image: [event.eventFlyer?.url],
              description: eventShortDescription,
              offers: {
                "@type": "Offer",
                url: eventTicketLinkDestination?.startsWith("http")
                  ? eventTicketLinkDestination
                  : `https://${eventTicketLinkDestination}`,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                validFrom: new Date().toISOString(),
              },
              ...(eventPerformer
                ? {
                    performer: {
                      "@type": "PerformingGroup",
                      name: eventPerformer,
                    },
                  }
                : {}),
              organizer: {
                "@type": "Organization",
                name: siteLibrary.title,
                url: siteLibrary.metaDomain,
              },
            }),
          }}
        />
      </Head>
      <section className="event-page-content">
        {/* HEADER */}
        <div className="relative mx-auto">
          <div className="gradient-bkg py-16 md:py-40 relative overflow-hidden z-10">
            <div className="mx-auto block my-2 p-2 text-center absolute top-0 z-10 inset-x-0">
              <Link
                href={eventBreadcrumbRoute}
                className="text-link uppercase no-underline max-w-max my-0 py-0 flex flex-row items-center mx-auto"
              >
                <ArrowLeftIcon
                  className="h-6 w-6 text-text-color mr-2"
                  aria-hidden="true"
                />
                <span>{isSpanish ? "Todos Los Eventos" : "All Events"}</span>
              </Link>
            </div>
            <div className="py-6 px-4 w-full max-w-8xl mx-auto relative z-10">
              {!!eventTitle && (
                <h1 className="text-2xl md:text-4xl pb-0 my-0 flex flex-col">
                  {eventTitle}
                </h1>
              )}
              <h2 className="text-2xl pb-0 my-0 opacity-80">
                {!!eventVenueName && <span>{eventVenueName}</span>}
              </h2>
              {!!eventCityState && (
                <h3 className="text-xl opacity-70">
                  <span>{eventCityState}</span>
                  <span className="">
                    <Moment format=" - MMM/DD/YYYY">
                      {event.eventStartDateTime}
                    </Moment>
                  </span>
                </h3>
              )}
              {!!eventTicketLinkDestination && (
                <div className="my-10">
                  <a
                    href={eventTicketLinkDestination}
                    target="_blank"
                    rel="noreferrer"
                    className="flex max-w-max items-center justify-center rounded-md border border-transparent bg- px-16 py-3 text-xl text-text-color hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-50 transition font-bold flex-row uppercase"
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
            <div className="artist-filter-flyer-wrapper min-h-[10vh] z-0">
              {/* <div className="absolute bg-gradient-to-t from-text-color group-hover:from-primary z-20 h-24 bottom-0 left-0 right-0 w-full" /> */}
              <div className="h-full w-full inset-0 absolute z-0 bg-[#000000] opacity-50"></div>
              {!!event?.eventFlyer?.url && (
                <Image
                  src={event?.eventFlyer?.url}
                  alt={event?.eventTitle || "Event"}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="block w-full border-t-round opacity-20 transition-all absolute inset-0 blur-md"
                />
              )}
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div className="bg-invert all-text-dark">
          <div className="max-w-8xl py-16 px-4 mx-auto w-full">
            {!!eventTitle && (
              <h1 className="text-4xl md:text-6xl px-4 font-bold text-center my-16 uppercase">
                {eventTitle}
              </h1>
            )}
            <div className="grid lg:grid-cols-2 lg:gap-x-8">
              <div className="lg:max-w-lg lg:self-end">
                <div className="event-content-wrapper mb-4">
                  {/* {!!eventVenueName && (
                    <h2 className="mb-0 text-3xl font-extrabold">
                      {eventVenueName}
                    </h2>
                  )} */}
                  {!!eventStartDateTime && (
                    <div className="artist-filter-text-wrapper text-text-color flex flex-row items-center justify-start py-4 my-4 px-4 gap-x-4 border-y border-primary w-full">
                      <div className="flex flex-col border-r border-text-color pr-4">
                        <span className="date-format-month text-center uppercase my-0 py-0 font-semibold opacity-80 text-xs">
                          <Moment format="ddd">
                            {event.eventStartDateTime}
                          </Moment>
                        </span>
                        <span className="date-format-month text-center uppercase my-0 py-0 font-semibold opacity-80 text-xs">
                          <Moment format="MMM">
                            {event.eventStartDateTime}
                          </Moment>
                        </span>
                        <span className="date-format-date text-center text-2xl my-0 py-0 font-bold">
                          <Moment format="DD">
                            {event.eventStartDateTime}
                          </Moment>
                        </span>
                      </div>
                      {(eventAddress || siteLibrary?.address) && (
                        <div className="flex items-start flex-col justify-center w-full max-w-max">
                          {!!eventVenueName && (
                            <p className="text-2xl font-extrabold">
                              {eventVenueName}
                            </p>
                          )}
                          <p className="flex flex-row items-center w-full max-w-max">
                            <span className="max-w-[240px] text-xl opacity-80">
                              {eventAddress || siteLibrary?.address}
                            </span>

                            {mapLink && (
                              <a
                                href={mapLink}
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
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-16 py-3 text-xl text-text-color hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-50 transition font-bold mx-auto flex-row uppercase"
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

                  <section
                    aria-labelledby="information-heading"
                    className="mt-4"
                  >
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
                <div className="my-4 row-start-1 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-start">
                  <div className="overflow-hidden rounded-lg">
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
          </div>
        </div>
        {/* ONE COL */}
        <div className="w-full">
          {!!eventTicketLinkDestination && (
            <div className="py-32 text-center flex flex-col items-center justify-center">
              {!!eventTitle && (
                <h1 className="text-2xl md:text-4xl pb-0 my-0 flex flex-col">
                  {eventTitle}
                </h1>
              )}
              <h2 className="text-2xl pb-0 my-0 opacity-80">
                {!!eventVenueName && <span>{eventVenueName}</span>}
              </h2>
              {!!eventCityState && (
                <h3 className="text-2xl opacity-80">
                  <span>{eventCityState}</span>
                  <span className="">
                    <Moment format=" - MMM/DD/YYYY">
                      {event.eventStartDateTime}
                    </Moment>
                  </span>
                </h3>
              )}
              <a
                href={eventTicketLinkDestination}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary my-4 px-16 py-3 text-base font-medium text-text-color hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-50 transition max-w-max mx-auto flex-row uppercase"
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
      {/* Event Content */}
      {((eventIFrame && eventIFrame.length > 0) ||
        (videoBox && videoBox.length > 0) ||
        (eventGallery && eventGallery.length > 0)) && (
        <section className="bg-bg-secondary py-16">
          <div className="mx-auto px-4 py-16 max-w-8xl lg:px-4">
            {eventIFrame && eventIFrame.length > 0 && (
              <div className="py-8">{parse(eventIFrame)}</div>
            )}
            {siteLibrary?.youtubeApiKey && videoBox && videoBox.length > 0 && (
              <VideoSection
                videoData={videoBox}
                youtubeApiKey={siteLibrary.youtubeApiKey}
              />
            )}
            {eventGallery && eventGallery.length > 0 && (
              <GallerySection
                galleryData={eventGallery}
                galleryLayoutData="lightbox"
              />
            )}
          </div>
        </section>
      )}
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
            spotifyAlbumDisplay="featured"
            spotifyClientId={siteLibrary.spotifyClientId}
            spotifyClientSecret={siteLibrary.spotifyClientSecret}
          />
        )}
      {/* Other Events */}
      {!!filteredEvents && filteredEvents.length >= 1 && (
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
