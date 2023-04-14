import React from "react";
//component
import HeroCart from "./HeroCart";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Hero = ({ HeroData: { Slides } }) => {
  return (
    <div className="flex items-center justify-center w-full mt-12 py-4 px-6">
      <Swiper
        className="flex item-center justify-center w-full"
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        initialSlide={3}
        loop={true}
      >
        {Slides.map((slide, i) => (
          <SwiperSlide key={i} className="flex item-center justify-center">
            <HeroCart data={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
