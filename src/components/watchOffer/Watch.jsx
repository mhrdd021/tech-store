import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
//cart
import ProductCart from "../../cart/productCart/ProductCart";

const Watch = ({ ProductsData: { Watch } }) => {
  return (
    <div className="flex items-center justify-center w-10/12 mt-4 mb-4 py-4  flex-col">
      <h1 className="text-2xl font-semibold text-gray-500">گوشی‌های همراه</h1>
      <Swiper
        className="flex item-center justify-center w-full"
        spaceBetween={2}
        slidesPerView={4}
        centeredSlides
        initialSlide={3}
        breakpoints={{
          0: {
            slidesPerView : 1.3
          },
          600:{
            slidesPerView : 2 
          },
          800:{
            slidesPerView : 3
          },
          1000:{
            slidesPerView: 4
          }
        }}
      >
        {Watch.map((slide, i) => (
          <SwiperSlide key={i} className="flex item-center justify-center py-8">
            <ProductCart data={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Watch;
