import React from "react";

const Heading = ({ headingname, headingoldname }) => {
  return (
    <h2
      className={`sm:text-3xl text-custom-2xl !leading-126 md:text-start text-center lg:text-custom-4xl max-w-[332px] sm:max-w-[370px] lg:max-w-[470px] font-bold text-white`}
    >
      {headingname} <span className="text-luxor-gold">{headingoldname}</span>
    </h2>
  );
};

export default Heading;
