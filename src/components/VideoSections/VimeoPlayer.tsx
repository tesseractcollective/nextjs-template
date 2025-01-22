import React from "react";

interface VimeoPlayerProps {
  videoId: string;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ videoId }) => {
  const src = `https://player.vimeo.com/video/${videoId}`;

  return (
    <div
      style={{
        width: "100%",
        height: "0",
        paddingBottom: "56.25%",
        position: "relative",
      }}
    >
      <iframe
        src={src}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title="Vimeo Video"
      />
    </div>
  );
};

export default VimeoPlayer;
