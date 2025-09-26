import React from "react";

interface BannerVideoProps {
  title: string;
  videoSrc: string;
  posterSrc: string;
  className?: string;
}

export const BannerVideo: React.FC<BannerVideoProps> = ({
  title,
  videoSrc,
  posterSrc,
  className,
}) => {
  return (
    <section className={`pg-bnr banner-video ${className || ""}`}>
      <div className="video-wrapper h-100">
        <video
          poster={posterSrc}
          src={videoSrc}
          autoPlay
          loop
          playsInline
          muted></video>
      </div>
      <div className="container">
        <div className="pg-bnr__div">
          <h1 className="pg-bnr__ttl">{title}</h1>
        </div>
      </div>
    </section>
  );
};
