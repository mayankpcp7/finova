import React from "react";

const Hero = () => {
  return (
    <div className="bg-luxor-gold py-4 px-10">
      <p className="text-white font-eudoxus font-bold text-sm text-center leading-126">
        <span className="relative before:bg-white before:absolute before:bottom-[-2px] before:w-full before:h-[1px]">
          Join Gold Now
        </span>
        , Hurry! Only 5 Spots Available
      </p>
      <div className="flex items-center justify-center mt-2">
        <p className="text-white font-eudoxus leading-126 text-sm font-bold">0</p>
        <div className="w-full max-w-[649.71px] bg-yellowish-orange h-1 shadow-progress relative  before:w-[95%] before:bg-parchment before:h-full before:absolute before:start-0 before:rounded-sm rounded-sm mx-1"></div>
        <p className="text-white font-eudoxus leading-126 text-sm font-bold">200</p>
      </div>
    </div>
  );
};

export default Hero;
