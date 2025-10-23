import { useRef, useEffect, useState } from "react";
import type { VideoState } from "../../types";
import "./MediaViewer.css";

interface MediaViewerProps {
  image: string;
  video?: string;
  videoState: VideoState;
  onVideoStateChange: (state: Partial<VideoState>) => void;
  onMediaClick: () => void;
}

export const MediaViewer = ({
  image,
  video,
  videoState,
  onVideoStateChange,
  onMediaClick,
}: MediaViewerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !video) return;

    const updateProgress = () => {
      if (videoElement.duration) {
        const progress =
          (videoElement.currentTime / videoElement.duration) * 100;
        onVideoStateChange({ progress });
      }
    };

    const updateDuration = () => {
      if (videoElement.duration) {
        onVideoStateChange({ duration: videoElement.duration });
      }
    };

    const handleVideoEnd = () => {
      onVideoStateChange({ isPlaying: false, progress: 0 });
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setHasError(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
      onVideoStateChange({ isPlaying: false });
    };

    const handleVolumeChange = () => {
      setVolume(videoElement.volume);
      onVideoStateChange({ isMuted: videoElement.muted });
    };

    videoElement.addEventListener("timeupdate", updateProgress);
    videoElement.addEventListener("loadedmetadata", updateDuration);
    videoElement.addEventListener("ended", handleVideoEnd);
    videoElement.addEventListener("loadstart", handleLoadStart);
    videoElement.addEventListener("canplay", handleCanPlay);
    videoElement.addEventListener("error", handleError);
    videoElement.addEventListener("volumechange", handleVolumeChange);

    return () => {
      videoElement.removeEventListener("timeupdate", updateProgress);
      videoElement.removeEventListener("loadedmetadata", updateDuration);
      videoElement.removeEventListener("ended", handleVideoEnd);
      videoElement.removeEventListener("loadstart", handleLoadStart);
      videoElement.removeEventListener("canplay", handleCanPlay);
      videoElement.removeEventListener("error", handleError);
      videoElement.removeEventListener("volumechange", handleVolumeChange);
    };
  }, [video, onVideoStateChange]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const playPromise = async () => {
      try {
        if (videoState.isPlaying) {
          await videoElement.play();
        } else {
          videoElement.pause();
        }
      } catch (error) {
        console.error('Error playing video:', error);
        setHasError(true);
        onVideoStateChange({ isPlaying: false });
      }
    };

    playPromise();
  }, [videoState.isPlaying, onVideoStateChange]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.muted = videoState.isMuted;
    videoElement.volume = videoState.isMuted ? 0 : volume;
  }, [videoState.isMuted, volume]);

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    onVideoStateChange({ isPlaying: !videoState.isPlaying });
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onVideoStateChange({ isMuted: !videoState.isMuted });
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        onVideoStateChange({ isMuted: true });
      } else if (videoState.isMuted) {
        onVideoStateChange({ isMuted: false });
      }
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const videoElement = videoRef.current;
    if (videoElement) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoElement.requestFullscreen();
      }
    }
  };

  const handleStop = (e: React.MouseEvent) => {
    e.stopPropagation();
    onVideoStateChange({ isPlaying: false, progress: 0 });
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;

    if (videoRef.current && videoState.duration) {
      const newTime = (percentage / 100) * videoState.duration;
      videoRef.current.currentTime = newTime;
      onVideoStateChange({ progress: percentage });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="media-viewer" onClick={onMediaClick}>
      {hasError && video ? (
        <div className="error-state">
          <img src={image} alt="Look" className="media-content" />
          <div className="error-overlay">
            <div className="error-message">
              <span>⚠️</span>
              <p>Video failed to load</p>
              <button 
                className="retry-btn" 
                onClick={(e) => {
                  e.stopPropagation();
                  setHasError(false);
                  if (videoRef.current) {
                    videoRef.current.load();
                  }
                }}
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      ) : video && videoState.isPlaying ? (
        <div className="video-container">
          <video
            ref={videoRef}
            className="media-content"
            src={video}
            poster={image}
            playsInline
            preload="metadata"
            crossOrigin="anonymous"
          />

          {isLoading && (
            <div className="loading-overlay">
              <div className="loading-spinner">⏳</div>
            </div>
          )}

          <div className="video-controls">
            <div className="controls-top">
              <div className="volume-control">
                <button
                  className="control-btn mute-btn"
                  onClick={handleMuteToggle}
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  onMouseLeave={() => setShowVolumeSlider(false)}
                  title={videoState.isMuted ? "Unmute" : "Mute"}
                >
                  {videoState.isMuted || volume === 0 ? "🔇" : volume < 0.5 ? "�" : "�🔊"}
                </button>
                {showVolumeSlider && (
                  <div 
                    className="volume-slider"
                    onMouseEnter={() => setShowVolumeSlider(true)}
                    onMouseLeave={() => setShowVolumeSlider(false)}
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={videoState.isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="volume-input"
                    />
                  </div>
                )}
              </div>
              <button
                className="control-btn fullscreen-btn"
                onClick={handleFullscreen}
                title="Fullscreen"
              >
                📺
              </button>
            </div>

            <div className="controls-bottom">
              <div className="progress-container" onClick={handleSeek}>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${videoState.progress}%` }}
                  />
                  <div className="progress-handle" style={{ left: `${videoState.progress}%` }} />
                </div>
              </div>

              <div className="control-buttons">
                <button
                  className="control-btn play-pause-btn"
                  onClick={handlePlayPause}
                  title={videoState.isPlaying ? "Pause" : "Play"}
                >
                  {videoState.isPlaying ? "⏸️" : "▶️"}
                </button>

                <button
                  className="control-btn stop-btn"
                  onClick={handleStop}
                  title="Stop"
                >
                  ⏹️
                </button>

                <span className="time-display">
                  {formatTime(
                    (videoState.progress / 100) * videoState.duration
                  )}{" "}
                  / {formatTime(videoState.duration)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <img src={image} alt="Look" className="media-content" />
      )}

      {video && !videoState.isPlaying && !hasError && (
        <div className="play-button">
          <button className="play-btn" aria-label="Play video">
            ▶️
          </button>
          {isLoading && <div className="loading-indicator">⏳</div>}
        </div>
      )}
    </div>
  );
};
