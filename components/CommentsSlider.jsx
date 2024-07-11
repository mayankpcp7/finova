"use client"
import Image from "next/image";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { commentsSlide } from "./common/Helper";

const CommentsSlider = () => {
  return (
    <div className="container max-w-[844px] mx-auto lg:px-0 px-5">
      <Swiper
        slidesPerView={2}
        spaceBetween={64}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {commentsSlide.map((obj,index)=>{
            return(
        <SwiperSlide key={index}>
    <div className="px-4 py-5 rounded-[20px] bg-gun-metal max-w-[390px] flex flex-col gap-[34px]">
        <Image
          src={obj.curencyImage}
          alt={obj.curencyImageAlt}
          width={356}
          height={259}
        />
        <Image
          src={obj.commentImage}
          alt={obj.commentImageAlt}
          width={356}
          height={199}
        />
      </div>
        </SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  );
};

export default CommentsSlider;
