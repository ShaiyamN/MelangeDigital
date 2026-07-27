import React, { useState } from "react";

import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Banner = () => {
  const [muted, setMuted] = useState(true);

  const handleToggleMute = () => {
    setMuted(!muted);
  };

  return (
   {/* <div className="w-full pt-10">
      <div className="aspect-w-9 aspect-h-16">
        <video
          className="object-cover w-full"
          src={bannerVideo}
          autoPlay
          loop
          playsInline
          muted={muted}
        ></video>
        <div className="button-volume ">
          <button
            onClick={handleToggleMute}
            className="top-[730px] bg-[white] shadow-lg rounded-[50px] p-4 "
          >
            {muted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      </div>
    </div>*/}
  );
};

export default Banner;
