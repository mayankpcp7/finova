"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Button from "./common/Button";
import Heading from "./common/Heading";

const calculateTimeLeft = (targetDate) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return timeLeft;
};

const Hero = () => {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 23);
    target.setHours(target.getHours() + 12);
    target.setMinutes(target.getMinutes() + 23);
    target.setSeconds(target.getSeconds() + 45);
    setTargetDate(target);
  }, []);

  useEffect(() => {
    if (targetDate) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetDate]);

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
          <div className="w-full max-w-[649.71px] bg-yellowish-orange h-1 before:shadow-progress relative before:w-[95%] before:bg-parchment before:h-full before:absolute before:start-0 before:rounded-sm rounded-sm mx-2"></div>
          <p className="text-white leading-126 text-sm font-bold">200</p>
        </div>
      </div>
      <div className="bg-off-black relative pointer-events-none-z-0">
        <Image
          width={193}
          height={193}
          className="absolute md:block hidden top-0 start-0"
          alt="left-ellipse"
          src="/assets/images/png/hero-left-ellipse.png"
        />
        <Image
          width={193}
          height={193}
          className="absolute md:block hidden lg:max-w-[193px] -rotate-[270deg] z-0 top-0 end-0"
          alt="left-ellipse"
          src="/assets/images/png/hero-left-ellipse.png"
        />
        <Image
          width={193}
          height={193}
          className="absolute md:hidden min-h-[194px] top-0 start-0"
          alt="left-ellipse"
          src="/assets/images/png/hero-left-ellipse.png"
        />
        <Image
          width={193}
          height={193}
          className="absolute md:hidden rotate-[-270deg] min-h-[194px] z-0 top-0 end-0"
          alt="left-ellipse"
          src="/assets/images/png/hero-left-ellipse.png"
        />

        <Sidebar />
        <main className="py-16 max-w-[1080px] mx-auto px-5">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="flex md:items-start items-center flex-col md:pb-8">
              <Heading
                headingname="Achieve Financial"
                headingoldname="Freedom with FINOVA"
              />
              <p className="text-moon-mist font-normal pt-3 text-md leading-126">
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
              <div className="md:flex hidden flex-col max-w-[320px]">
                <Button className="mt-8" btnname="Join Now" />
                <p className="text-custom-sm pt-3 text-moon-mist text-center">
                  Hurry! Only 5 Spots Available
                </p>
                <div className="flex gap-[22px] pt-4">
                  {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                    <div key={idx} className="flex flex-col justify-center">
                      <div className="rounded-10 border max-w-[64px] px-0.5 py-0.5 max-h-[62px] border-luxor-gold">
                        <p className="text-custom-md text-luxor-gold px-4 py-3">
                          {timeLeft[unit] || "00"}
                        </p>
                      </div>
                      <p className="pt-1 text-white leading-126 text-md text-center">
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Image
              className="lg:max-w-[500px] mt-8 mb-4 md:ms-2 lg:ms-0 max-w-[314px] sm:max-w-[400px]"
              alt="bitcoin"
              width={499}
              height={433}
              src="/assets/images/webp/bitcoin.webp"
            />
            <div className="flex md:hidden flex-col max-w-[320px]">
              <Button btnname="Join Now" />
              <p className="text-custom-sm pt-3 text-moon-mist text-center">
                Hurry! Only 5 Spots Available
              </p>
              <div className="flex md:hidden gap-[22px] pt-4">
                {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                  <div key={idx} className="flex flex-col justify-center">
                    <div className="rounded-10 border max-w-[64px] px-0.5 py-0.5 max-h-[62px] border-luxor-gold">
                      <p className="text-custom-md text-luxor-gold px-4 py-3">
                        {timeLeft[unit] || "00"}
                      </p>
                    </div>
                    <p className="pt-1 text-white leading-126 text-md text-center">
                      {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Hero;
