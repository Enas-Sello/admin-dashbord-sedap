import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Navigation } from 'swiper';
import ReviewCard from './ReviewCard';

const ReviewSlide = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[ Navigation]}
        className="flex flex-col  md:flex-row justify-between items-center my-5 overflow-hidden w-full h-full"
      >
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ReviewSlide;
