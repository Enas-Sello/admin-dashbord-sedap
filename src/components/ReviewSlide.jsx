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
        slidesPerView={3}
        spaceBetween={10}
        // breakpoints={{
        //   // 320: { slidesPerView: 1, spaceBetween: 5 },
        //   480: { slidesPerView: 1, spaceBetween: 5 },
        //   768: { slidesPerView: 2, spaceBetween: 50 },
        //   1024: { slidesPerView: 3, spaceBetween: 50},
        // }}
      
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="grid grid-cols-3 my-5 overflow-hidden w-full h-full"
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
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ReviewSlide;
