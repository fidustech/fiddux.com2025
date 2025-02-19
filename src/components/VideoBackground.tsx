import React from 'react';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source 
          src="https://www.fiddux.com/video/Trading3.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoBackground;