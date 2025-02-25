"use client";

import { useRef, useState, useEffect } from "react";
import { X, Maximize, Minimize, Play, Pause } from "lucide-react";

interface VideoPopupProps {
  onClose: () => void;
}

const VideoPopup = ({ onClose }: VideoPopupProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isClient, setIsClient] = useState(false); // ✅ Provera za klijentsko renderovanje
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playButtonTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true); // ✅ Obeležava da je klijent renderovao komponentu
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose, isClient]);

  useEffect(() => {
    if (!isClient) return;

    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [isClient]);

  const togglePlay = () => {
    if (isClient && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        if (playButtonTimeoutRef.current) {
          clearTimeout(playButtonTimeoutRef.current);
        }
        playButtonTimeoutRef.current = setTimeout(() => {
          setShowPlayButton(false);
        }, 1000);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    setShowPlayButton(true);
    if (playButtonTimeoutRef.current) {
      clearTimeout(playButtonTimeoutRef.current);
    }
    playButtonTimeoutRef.current = setTimeout(() => {
      setShowPlayButton(false);
    }, 1000);
    togglePlay();
  };

  const toggleFullscreen = () => {
    if (isClient && containerRef.current) {
      if (typeof document !== "undefined" && !document.fullscreenElement) {
        containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else if (typeof document !== "undefined") {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isClient && videoRef.current) {
      const newTime =
        (Number(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(Number(e.target.value));
    }
  };

  if (!isClient) return null; // ✅ Sprečava hydration error

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden border-2 border-green-500"
      >
        <video
          ref={videoRef}
          className="w-full h-full rounded-lg"
          src="/promo.mov"
          onClick={handleVideoClick}
        />
        {showPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="w-16 h-16 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors flex items-center justify-center"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-white" />
              ) : (
                <Play className="h-8 w-8 text-white" />
              )}
            </button>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <div className="flex items-center justify-between gap-4">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              onChange={handleProgressChange}
              className="flex-grow h-1 bg-gray-300 rounded-full appearance-none"
            />
            <button onClick={toggleFullscreen} className="text-white p-2">
              {isFullscreen ? (
                <Minimize className="h-6 w-6" />
              ) : (
                <Maximize className="h-6 w-6" />
              )}
            </button>
            <button onClick={onClose} className="text-white p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
