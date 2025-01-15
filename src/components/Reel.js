import React, { useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import ProductTags from "./ProductTags";
import ActionButtons from "./ActionButtons";
import PlayPauseButtons from "./PlayPauseButtons";

const defaultLink = `https://www.linkedin.com/in/aniketraikwar/`;
const Reel = ({ reel, isActive }) => {
  const videoRef = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isProductShowing, setIsProductShowing] = useState(false);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    alert(`Link to Share: ${defaultLink}`);
  };

  const toggleProductShowing = () => {
    setIsProductShowing(!isProductShowing);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      <VideoPlayer
        videoRef={videoRef}
        videoSrc={reel.videoSrc}
        isActive={isActive}
      />

      <ActionButtons
        reel={reel}
        handleShare={handleShare}
        handleLike={handleLike}
        isLiked={isLiked}
        toggleProductShowing={toggleProductShowing}
        isProductShowing={isProductShowing}
      />

      <PlayPauseButtons
        reel={reel}
        togglePlayPause={togglePlayPause}
        isPlaying={isPlaying}
      />

      <ProductTags
        products={reel.products}
        isProductShowing={isProductShowing}
      />
    </div>
  );
};

export default Reel;
