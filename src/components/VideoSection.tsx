import React from "react";
import type { VideoBoxFieldsFragment } from "@/graphql/generated/graphql";
import VideoPlaylistBox from "@/components/VideoPlaylistBox";
import VideoGridSection from "@/components/VideoSections/VideoGridSection";
import VideoOffsetSection from "@/components/VideoSections/VideoOffsetSection";
import VideoFullScreenSection from "@/components/VideoSections/VideoFullScreenSection";
import VideoNetflixSection from "@/components/VideoSections/VideoNetflixSection";
import VideoAlternateSection from "@/components/VideoSections/VideoAlternateSection";
import VideoStandardSection from "@/components/VideoSections/VideoStandardSection";

interface VideoSectionProps {
  videoData: VideoBoxFieldsFragment[];
  youtubeApiKey: string;
}

export default function VideoSection({
  videoData,
  youtubeApiKey,
}: VideoSectionProps) {
  const videoGridData = videoData.filter(
    (videoDataItem) => videoDataItem.videoDisplayLayout === "grid"
  );
  const videoAlternateData = videoData.filter(
    (videoDataItem) => videoDataItem.videoDisplayLayout === "alternate"
  );
  const videoOffsetData = videoData.filter(
    (videoDataItem) => videoDataItem.videoDisplayLayout === "offset"
  );
  const videoFullScreenData = videoData.filter(
    (videoDataItem) => videoDataItem.videoDisplayLayout === "fullScreen"
  );
  const videoNetflixData = videoData.filter(
    (videoDataItem) => videoDataItem.videoDisplayLayout === "netflix"
  );
  const videoPlaylistData = videoData.filter(
    (videoDataItem) => typeof videoDataItem.youtubePlaylistId !== "undefined"
  );

  // Video Display Layout
  // fullScreen √
  // grid √
  // netflix √
  // offset √
  // alternate √
  // basic
  // blob
  // cardLink
  // cardModal
  // epk
  // mason
  // myspace
  // record
  // slider
  // team
  // universal
  // vertical
  // wavy
  // youtube

  if (videoGridData && videoGridData.length >= 1)
    return <VideoGridSection videoData={videoGridData} />;

  if (videoOffsetData && videoOffsetData.length >= 1)
    return <VideoOffsetSection videoData={videoOffsetData} />;

  if (videoFullScreenData && videoFullScreenData.length >= 1)
    return <VideoFullScreenSection videoData={videoFullScreenData} />;

  if (videoNetflixData && videoNetflixData.length >= 1)
    return <VideoNetflixSection videoData={videoNetflixData} />;

  if (videoAlternateData && videoAlternateData.length >= 1)
    return <VideoAlternateSection videoData={videoAlternateData} />;

  if (
    videoPlaylistData &&
    videoPlaylistData.length >= 1 &&
    videoPlaylistData[0].youtubePlaylistId &&
    youtubeApiKey
  )
    return (
      <div className="max-w-8xl mx-auto w-full px-4">
        <VideoPlaylistBox
          videoTitle={videoPlaylistData[0]?.videoTitle || ""}
          youtubePlaylistId={videoPlaylistData[0].youtubePlaylistId}
          youtubeApiKey={youtubeApiKey}
        />
      </div>
    );

  if (videoData && videoData.length >= 1)
    return <VideoStandardSection videoData={videoData} />;
}
