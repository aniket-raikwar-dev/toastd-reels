import React, { useEffect } from "react";

const VideoPlayer = ({ videoRef, videoSrc, isActive }) => {
  useEffect(() => {
    const video = videoRef?.current;
    if (video) {
      if (isActive) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [isActive, videoRef]);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      className="h-[95vh] w-auto max-w-screen"
      loop
      muted
      playsInline
    />
  );
};

export default VideoPlayer;
