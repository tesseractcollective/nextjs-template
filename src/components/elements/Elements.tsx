import type {
  PageFieldsFragment,
  SiteLibraryFieldsFragment,
} from "@/graphql/generated/graphql";
import Parallax from "@/components/Parallax";
import StandOutText from "@/components/StandOutText";
import IframeBox from "@/components/IframeBox";
import { StripePricingTable } from "@/components/StripePricingTable";
import InstagramSection from "@/components/InstagramSection";
import GallerySection from "@/components/GallerySection";
import HTMLText from "@/components/elements/HTMLText";
import ElementImage from "@/components/elements/ElementImage";
import ScrollDigits from "@/components/elements/ScrollDigits";
import Timeline from "@/components/elements/Timeline";
import DistanceCheckMap from "@/components/elements/DistanceCheckMap";
import MapBoxMap from "@/components/elements/MapBoxMap";
import MapBoxesMap from "@/components/elements/MapBoxesMap";
import BandsInTownMapBox from "@/components/elements/BandsInTownMapBox";
import CardLocations from "@/components/elements/CardLocations";
import LocationsMedia from "@/components/elements/LocationsMedia";
import DrumPadComponent from "./DrumPadComponent";
import BandsInTownApi from "@/components/BandsInTownApi";
import MaskCursor from "./MaskCursor";
import AnimateParagraph from "./AnimateParagraph";
import OpenTableWidget from "./OpenTableWidget";
import PixelCursorTrailing from "./PixelCursorTrailing";
import MaskCursorColored from "./MaskCursorColored";
import SpotifyArtistAlbums from "./SpotifyAPI/SpotifyArtistAlbums";
import SpotifyUserPlaylists from "./SpotifyAPI/SpotifyUserPlaylists";
import RegisterForm from "./RegisterForm";
import DimensionText from "./DimensionText";
import RotateTextAnimation from "./RotateTextAnimation";
// import AgeVerification from "./AgeVerification";

type ElementsType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["elements"];

interface ElementsProps {
  elements: ElementsType;
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function LayoutBlocks({ elements, siteLibrary }: ElementsProps) {
  if (!elements) return <></>;

  const {
    iFrameCode,
    iFrameTitle,
    parallaxImage,
    standOutText,
    gallery,
    galleryLayout,
    stripePricingTableId,
    stripePublishableKey,
    displayInstagramSectionUsername,
    image,
    imageCssClass,
    htmlText,
    htmlTextCssClass,
    elementJson,
    mapLatLong,
    bandsInTownKey,
    mapAddress,
    mapLink,
  } = elements;
  return (
    <>
      {!!iFrameCode && (
        <IframeBox code={iFrameCode} title={iFrameTitle || undefined} />
      )}
      {!!parallaxImage?.url && <Parallax parallaxImage={parallaxImage.url} />}

      {!!standOutText && <StandOutText standOutText={standOutText} />}
      {!!htmlText && (
        <HTMLText
          htmlText={htmlText}
          htmlTextCssClass={htmlTextCssClass || undefined}
        />
      )}
      {!!image?.url && (
        <ElementImage
          image={image.url}
          imageCssClass={imageCssClass || undefined}
        />
      )}
      {!!gallery && (
        <GallerySection
          galleryData={gallery}
          galleryLayoutData={galleryLayout || undefined}
        />
      )}
      {!!stripePricingTableId && stripePublishableKey && (
        <StripePricingTable
          pricingTableId={stripePricingTableId}
          publishableKey={stripePublishableKey}
        />
      )}
      {!!displayInstagramSectionUsername && (
        <InstagramSection
          userToken={displayInstagramSectionUsername}
          // userToken="IGQWRPLThGQThMTWhGTDY5em1fYkZAyZADdmZAUpOcE5QMTh0RTlnQjdYVlhVZAWh4TDYwSlpUV2V1U0pfeVQ4MFlzTkZAZAQm1wSXZAzb3hEOW5wZAlJwVzJFenNMSF9sVTA4RFBBZAlItWFdlcWNSQ2Y3WDdiZA1BOS1ZAmWTQZD"
          // instagramUsername="rickyhaswifi"
          instagramLink={siteLibrary?.instagramLink || ""}
        />
      )}
      {!!elementJson?.scrollDigitsData && (
        <ScrollDigits scrollDigitData={elementJson.scrollDigitsData} />
      )}
      {!!elementJson?.timelineData && (
        <Timeline timelineData={elementJson.timelineData} />
      )}
      {!!elementJson?.cardLocationsData && (
        <CardLocations cardLocationsData={elementJson.cardLocationsData} />
      )}
      {!!elementJson?.displayDrumPad && <DrumPadComponent />}
      {!!mapLatLong &&
        !!siteLibrary?.mapKey &&
        !!mapLatLong?.longitude &&
        !!mapLatLong?.longitude &&
        !!siteLibrary?.metaAppleTouchIcon &&
        !!siteLibrary?.title &&
        !!mapAddress &&
        !!mapLink && (
          <MapBoxMap
            lat={mapLatLong.latitude}
            long={mapLatLong.longitude}
            mapKey={siteLibrary.mapKey}
            icon={siteLibrary?.metaAppleTouchIcon.url}
            mapLink={mapLink}
            address={mapAddress}
            siteName={siteLibrary?.title}
          />
        )}
      {!!elementJson?.dimensionText && (
        <DimensionText text={elementJson.dimensionText} />
      )}
      {!!siteLibrary?.mapKey &&
        !!elementJson?.distanceCheck?.lat &&
        !!elementJson?.distanceCheck?.long &&
        !!siteLibrary?.metaAppleTouchIcon &&
        !!siteLibrary?.title &&
        !!elementJson?.distanceCheck?.mapAddress &&
        !!elementJson?.distanceCheck?.mapLink && (
          <DistanceCheckMap
            lat={elementJson?.distanceCheck.lat}
            long={elementJson?.distanceCheck.long}
            mapKey={siteLibrary.mapKey}
            icon={siteLibrary?.metaAppleTouchIcon.url}
            mapLink={elementJson?.distanceCheck?.mapLink}
            address={elementJson?.distanceCheck?.mapAddress}
            siteName={siteLibrary?.title}
          />
        )}
      {!!siteLibrary?.mapKey &&
        !!elementJson?.locations &&
        !!siteLibrary?.metaAppleTouchIcon && (
          <div className="max-w-8xl mx-auto flex h-full w-full px-8 md:p-4 rounded-md">
            <MapBoxesMap
              locations={elementJson.locations}
              mapKey={siteLibrary.mapKey}
              icon={siteLibrary?.metaAppleTouchIcon.url}
            />
          </div>
        )}
      {!!siteLibrary?.mapKey &&
        !!elementJson?.locationsMedia &&
        !!siteLibrary?.metaAppleTouchIcon && (
          <div className="max-w-8xl mx-auto flex h-full w-full px-8 md:p-4 rounded-md">
            <LocationsMedia
              locations={elementJson.locationsMedia}
              mapKey={siteLibrary.mapKey}
              icon={siteLibrary?.metaAppleTouchIcon.url}
            />
          </div>
        )}
      {!!siteLibrary.title && !!bandsInTownKey && (
        <BandsInTownApi
          apiKey={bandsInTownKey}
          artistName={siteLibrary.title}
          isSpanish={siteLibrary?.isSpanish || false}
        />
      )}
      {!!siteLibrary?.mapKey &&
        !!siteLibrary.title &&
        !!bandsInTownKey &&
        !!siteLibrary?.metaAppleTouchIcon && (
          <BandsInTownMapBox
            apiKey={bandsInTownKey}
            artistName={siteLibrary.title}
            mapKey={siteLibrary.mapKey}
            icon={siteLibrary?.metaAppleTouchIcon.url}
            isSpanish={siteLibrary?.isSpanish || false}
          />
        )}
      {!!elementJson?.maskCursorText && (
        <MaskCursor maskCursorText={elementJson.maskCursorText} />
      )}
      {!!elementJson?.maskCursorTextColored && (
        <MaskCursorColored maskCursorText={elementJson.maskCursorTextColored} />
      )}

      {!!elementJson?.animateParagraph && (
        <AnimateParagraph animateParagraph={elementJson.animateParagraph} />
      )}
      {!!elementJson?.rotateTextAnimation && (
        <RotateTextAnimation text={elementJson.rotateTextAnimation} />
      )}
      {!!elementJson?.opentableID && !!elementJson.opentableTheme && (
        <div
          className="relative mx-auto flex items-center justify-center h-full"
          id="element-opentable"
        >
          <OpenTableWidget
            targetID="element-opentable"
            theme={elementJson.opentableTheme}
            opentableID={elementJson.opentableID}
          />
        </div>
      )}
      {elementJson?.pixelCursorTrailing?.text &&
        elementJson?.pixelCursorTrailing?.theme &&
        elementJson?.pixelCursorTrailing?.background && (
          <PixelCursorTrailing
            text={elementJson?.pixelCursorTrailing.text}
            theme={elementJson?.pixelCursorTrailing.theme}
            background={elementJson?.pixelCursorTrailing.background}
          />
        )}
      {!!elements?.spotifyArtistName &&
        !!elements?.spotifyAlbumDisplay &&
        siteLibrary?.spotifyClientSecret &&
        siteLibrary?.spotifyClientId && (
          <SpotifyArtistAlbums
            artistName={elements.spotifyArtistName}
            spotifyAlbumDisplay={elements.spotifyAlbumDisplay}
            spotifyClientId={siteLibrary.spotifyClientId}
            spotifyClientSecret={siteLibrary.spotifyClientSecret}
          />
        )}
      {!!elements?.elementJson?.spotifyUserId &&
        siteLibrary?.spotifyClientSecret &&
        siteLibrary?.spotifyClientId && (
          <SpotifyUserPlaylists
            spotifyUserId={elements.elementJson.spotifyUserId}
            spotifyClientId={siteLibrary.spotifyClientId}
            spotifyClientSecret={siteLibrary.spotifyClientSecret}
          />
        )}
      {!!elements?.elementJson?.registerFormData && siteLibrary && (
        <RegisterForm
          registerFormData={elements.elementJson.registerFormData}
          siteLibrary={siteLibrary}
        />
      )}
      {/* {!!elements?.elementJson?.ageVerification && <AgeVerification />} */}
    </>
  );
}
