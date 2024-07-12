import React from "react";
import Heading from "./common/Heading";
import { ChooseCards } from "./common/Helper";
import Image from "next/image";
const WhyChoose = () => {
  return (
    <div className="bg-off-black">
      <div className="max-w-[1080px] sm:py-16 py-8 px-5 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Heading
            className="mx-auto !text-center"
            headingname="Why Choose"
            headingoldname="FINOVA?"
          />
          <p className="text-moon-mist text-center max-w-[350px] sm:max-w-[600px] lg:max-w-full font-normal pt-3 text-md leading-126">
            FINOVA empowers you with expert researched crypto trade signals and
            comprehensive courses.
          </p>
          <div className="grid w-full justify-center md:grid-cols-2 gap-8 mt-11 md:mt-16">
            {ChooseCards.map((card) => (
              <div
                className="flex duration-300 hover:border-white relative min-h-[350px] sm:min-h-[322px] flex-col h-full rounded-20 py-6 px-8 bg-dark-gold border border-dark-border"
                key={card.id}
              >
                <Image
                  width={211}
                  height={211}
                  className="absolute pointer-events-none -z-0 end-0 top-0"
                  src={card.ellipse}
                />
                <div className="flex justify-between">
                  <Image
                    className="mt-4"
                    height={78}
                    width={78}
                    src={card.logo}
                    alt="logo"
                  />
                  <p className="text-white opacity-20 text-custom-6xl font-bold pe-4">
                    {card.column}
                  </p>
                </div>
                <h3 className="font-bold mt-6 max-w-[340px] text-custom-lg text-white leading-126">
                  {card.heading}
                </h3>
                <p className="text-start text-moon-mist max-w-[334px] sm:max-w-[308px] pt-3 font-normal text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
