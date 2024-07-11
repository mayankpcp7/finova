import React from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Button from "./common/Button";
const Hero = () => {
  return (
    <>
      <div className="bg-luxor-gold py-4 px-10">
        <p className="text-white font-bold text-sm text-center leading-126">
          <span className="relative before:bg-white before:absolute before:bottom-[-2px] before:w-full before:h-[1px]">
            Join Gold Now
          </span>
          , Hurry! Only 5 Spots Available
        </p>
        <div className="flex items-center justify-center mt-2">
          <p className="text-white leading-126 text-sm font-bold">0</p>
          <div className="w-full max-w-[649.71px] bg-yellowish-orange h-1 before:shadow-progress relative  before:w-[95%] before:bg-parchment before:h-full before:absolute before:start-0 before:rounded-sm rounded-sm mx-2"></div>
          <p className="text-white leading-126 text-sm font-bold">200</p>
        </div>
      </div>
      <div className="bg-off-black relative pointer-events-none-z-0">
        <Image
          width={193}
          height={193}
          className="absolute top-0 start-0"
          alt="left-ellipse"
          src="/assets/images/png/hero-left-ellipse.png"
        />
        <Image
          width={193}
          height={193}
          className="absolute -rotate-[270deg] top-0 end-0"
          alt="left-ellipse"
          src="/assets/images/png/hero-left-ellipse.png"
        />

        <Sidebar />
        <main className="py-16 max-w-[1080px] mx-auto px-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-custom-4xl max-w-[470px] text-white">
                Achieve Financial{" "}
                <span className="text-luxor-gold leading-125 font-bold">
                  Freedom with FINOVA
                </span>
              </h1>
              <p className="text-moon-mist font-normal pt-3 text-md leading-">
                Crypto Trade Signals, Research & Courses
              </p>
              <div className="flex mt-8">
                <Image
                  alt="review-girl"
                  className="relative z-0 hover:scale-110 cursor-pointer hover:z-30 duration-300"
                  height={45}
                  width={45}
                  src="/assets/images/svg/review-girl.svg"
                />
                <Image
                  alt="review-man"
                  className="relative -ms-1 hover:scale-110 z-10 cursor-pointer hover:z-30 duration-300"
                  height={45}
                  width={45}
                  src="/assets/images/svg/review-first-man.svg"
                />
                <Image
                  alt="review-man"
                  className="relative -ms-2 hover:scale-110 z-20 cursor-pointer hover:z-30 duration-300"
                  height={45}
                  width={45}
                  src="/assets/images/svg/review-second-man.svg"
                />
                <div className="flex ps-1 items-center justify-center flex-col">
                  <p className="text-white text-base font-normal">
                    +3K reviews
                  </p>
                  <Image
                    className="pt-1"
                    alt="rating-stars"
                    width={77}
                    height={15}
                    src="/assets/images/svg/rating-stars.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col max-w-[320px]">
                <Button className="mt-8" btnname="Join Now" />
                <p className="text-custom-sm pt-3 text-moon-mist text-center">
                  Hurry! Only 5 Spots Available
                </p>
                <div className="flex gap-6">
                  <div className="flex flex-col justify-center">
                    <div className="rounded-10 border  max-w-[64px] px-0.5 py-0.5 max-h-[62px] border-luxor-gold">
                      <p className="text-custom-md text-luxor-gold px-4 py-3">
                        23
                      </p>
                    </div>
                    <p className="pt-1 text-white leading-126 text-md text-center">
                      Days
                    </p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="rounded-10 border  max-w-[64px] px-0.5 py-0.5 max-h-[62px] border-luxor-gold">
                      <p className="text-custom-md text-luxor-gold px-4 py-3">
                        23
                      </p>
                    </div>
                    <p className="pt-1 text-white leading-126 text-md text-center">
                      Days
                    </p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="rounded-10 border  max-w-[64px] px-0.5 py-0.5 max-h-[62px] border-luxor-gold">
                      <p className="text-custom-md text-luxor-gold px-4 py-3">
                        23
                      </p>
                    </div>
                    <p className="pt-1 text-white leading-126 text-md text-center">
                      Days
                    </p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="rounded-10 border  max-w-[64px] px-0.5 py-0.5 max-h-[62px] border-luxor-gold">
                      <p className="text-custom-md text-luxor-gold px-4 py-3">
                        23
                      </p>
                    </div>
                    <p className="pt-1 text-white leading-126 text-md text-center">
                      Days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Hero;
