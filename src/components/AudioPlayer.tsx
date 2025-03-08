import React, { useState, useRef, useEffect, useCallback } from "react";
import * as Slider from "@radix-ui/react-slider";
import { Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  title: string;
  audioURL: string;
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, audioURL }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeUpdateInterval = useRef<NodeJS.Timeout>();

  const handlePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          timeUpdateInterval.current = setInterval(() => {
            setCurrentTime(audio.currentTime);
          }, 100);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
      if (timeUpdateInterval.current) {
        clearInterval(timeUpdateInterval.current);
      }
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      if (timeUpdateInterval.current) {
        clearInterval(timeUpdateInterval.current);
      }
    };
  }, []);

  const handleSliderChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = value[0];
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="w-full bg-[#000000]/90 backdrop-blur-md rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-[#ffffff] font-medium truncate">{title}</h3>
        </div>
      </div>

      <div className="space-y-2">
        <audio ref={audioRef} src={audioURL} />

        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[currentTime]}
          max={duration}
          step={0.1}
          onValueChange={handleSliderChange}
        >
          <Slider.Track className="bg-[#ffffff]/30 relative grow rounded-full h-1">
            <Slider.Range className="absolute bg-[#ffffff] rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-3 h-3 bg-[#ffffff] rounded-full hover:bg-[#ffffff]/80 focus:outline-none focus:ring-2 focus:ring-[#ffffff]" />
        </Slider.Root>

        <div className="flex justify-between text-xs text-[#ffffff]/70">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handlePlayPause}
          className="p-3 rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/20 transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-[#ffffff]" />
          ) : (
            <Play className="h-5 w-5 text-[#ffffff]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
