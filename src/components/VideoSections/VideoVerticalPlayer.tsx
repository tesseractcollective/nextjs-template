import React, { useRef, useEffect, useState } from "react";
import parse from "html-react-parser";
import type { VideoBoxFieldsFragment } from "@/graphql/generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

interface VideoStandardSectionProps {
  videoData: VideoBoxFieldsFragment[];
}

export default function VideoVerticalPlayer({
  videoData,
}: VideoStandardSectionProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isMuted, setIsMuted] = useState<boolean[]>(videoData.map(() => true));

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.muted = isMuted[index];
        video.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
      }
    });
  }, [isMuted]);

  const toggleMute = (index: number) => {
    setIsMuted((prev) => {
      const newMuted = [...prev];
      newMuted[index] = !newMuted[index];
      return newMuted;
    });
  };

  return (
    <section className="relative w-full mx-auto py-8 overflow-hidden max-w-8xl px-4">
      {videoData.map((video, index) => (
        <div
          key={`${video?.videoTitle}-${index}`}
          className="w-full gap-y-4 flex flex-col items-center justify-center mb-12"
        >
          <div className="relative w-[320px] h-[650px] bg-[#000] rounded-[60px] overflow-hidden border-[14px] border-black shadow-[0_16px_16px_#000000b0]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[30px] bg-black rounded-b-3xl"></div>
            <div className="relative w-full h-full">
              {!!video?.videoTitle && (
                <p className="text-[white] text-shadow shadow text-center font-bold text-lg absolute left-6 bottom-4 my-0 p-2">
                  {parse(video.videoTitle)}
                </p>
              )}
              {video?.thumbnail?.url && (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={video.thumbnail.url}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                  onClick={(e) => {
                    const vid = e.currentTarget;
                    if (vid.paused) {
                      vid.play();
                    } else {
                      vid.pause();
                    }
                  }}
                ></video>
              )}
              <button
                className="absolute bottom-4 right-4 bg-black p-2 rounded-full z-50 text-primary border-primary border bg-glass glass-primary"
                onClick={() => toggleMute(index)}
              >
                {isMuted[index] ? (
                  <FontAwesomeIcon
                    icon={faVolumeMute as IconProp}
                    className="fa-fw text-lg"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faVolumeHigh as IconProp}
                    className="fa-fw text-lg"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
