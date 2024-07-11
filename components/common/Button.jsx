import React from "react";

const Button = ({ btnname }) => {
  return (
    <button
      style={{
        maxWidth: 320
      }}
      className={`max-w-[320px] before:absolute before:duration-300 before:-bottom-full before:w-full before:h-full hover:before:bottom-0 before:bg-white relative before:start-0 before:rounded-200 overflow-hidden hover:text-luxor-gold z-20 before:-z-10 duration-300 bg-gold-btn font-bold rounded-200 mt-8 text-white py-4`}
    >
      {btnname}
    </button >
  );
};

export default Button;
