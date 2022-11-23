import React from 'react';
import Fillter from '../components/Fillter';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ReviewsCard from '../components/ReviewsCard';
import OtherReviewCArd from '../components/OtherReviewCArd';
const Review = () => {
  return (
    <div className="section-padding  h-screen capitalize p-4">
      <div className=" flex flex-col lg:flex-row  justify-between items-center">
        <div>
          <h1 className="font-semibold text-3xl">Reviews</h1>
          <p className="text-lightGray text-lg">
            <span className="text-mainGreen">Dashboard</span> / Customer Reviews{' '}
          </p>
        </div>
        <Fillter
          class={'bg-white flex gap-3 items-center rounded-lg px-4 py-2'}
          icon={AiOutlineCalendar}
          arrow={MdKeyboardArrowDown}
          main={'Filter Periode'}
          date={'17 April 2020 - 21 May 2020'}
          fill={'mainBlue'}
          color={'lightBlue'}
        />
      </div>
      {/* main */}
      <div className="flex flex-col  justify-center w-full mt-24 sm:mt-10 md:mt-24">
        {/* cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full gap-5 lg:gap-2 justify-between">
          <ReviewsCard />
          <ReviewsCard />
          <ReviewsCard />
          {/* <ReviewsCard /> */}
        </div>
        {/*end cards */}
        {/* table */}
        <div className="section-padding flex flex-col">
          <div className="flex justify-end items-end  ">
            {/* slide */}
            {/* <div className="bg-white w-16 h-10 rounded-lg flex items-center justify-center gap-2">
              <div className="bg-lightGreen py-2 px-1 rounded-xl">
                <IoIosArrowBack className=" fill-mainGreen" />{' '}
              </div>
              <div className="bg-lightGreen py-2 px-1 rounded-xl">
                <IoIosArrowForward className=" fill-mainGreen" />{' '}
              </div>
            </div> */}
          </div>
          {/*end slide */}
          <div className="dark:bg-lightDark flex flex-col bg-white p-4 rounded-lg mt-10">
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col gap-3">
                <h3 className=" font-semibold text-xl md:text-2xl">
                  Others review
                </h3>
                <p className="text-base md:text-lg font-normal text-gray-500">
                  Here is customer review about your restaurant{' '}
                </p>
              </div>
              <div className="flex gap-4 bg-lightBlue py-2 px-4 rounded-lg cursor-pointer">
                <button className="">Latest</button>
                <MdKeyboardArrowDown className="fill-mainBlue w-6 h-6" />
              </div>
            </div>
           <OtherReviewCArd/>
           <OtherReviewCArd/>
           <OtherReviewCArd/>
          </div>
        </div>
        {/* end table */}
      </div>
      {/* main */}
    </div>
  );
};

export default Review;
