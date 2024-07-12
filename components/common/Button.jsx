import React from "react";

export const Button = ({ btnname ,className }) => {
  return (
    <button
      className={`${className} max-w-[320px] w-full before:absolute before:duration-300 before:-bottom-full before:w-full before:h-full hover:before:bottom-0 before:bg-white relative before:start-0 before:rounded-200 overflow-hidden hover:text-luxor-gold z-20 before:-z-10 duration-300 bg-gold-btn font-bold rounded-200 sm:mt-8 text-white py-4`}
    >
      {btnname}
    </button>
  );
};


export const GoldButton = ({ goldButton ,className }) => {
  return (
    <button
      className={`${className} max-w-[320px] w-full text-luxor-gold before:absolute before:duration-300 before:-bottom-full before:w-full before:h-full hover:before:bottom-0 before:bg-gold-btn relative before:start-0 before:rounded-200 overflow-hidden hover:text-white z-20 before:-z-10 duration-300 bg-white font-bold rounded-200 sm:mt-8 !py-4`}
    >
      {goldButton}
    </button>
  );
};

export default Button;
