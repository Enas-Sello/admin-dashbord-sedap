import React from 'react';
import Fillter from '../components/Fillter';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import ReviewsCard from '../components/ReviewsCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import placeholder from '../assets/placeholder.png';
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
          <div className="flex flex-col bg-white p-4 rounded-lg mt-10">
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col gap-3">
                <h3 className=" font-semibold text-xl md:text-2xl">Others review</h3>
                <p className="text-base md:text-lg font-normal text-gray-500">
                  Here is customer review about your restaurant{' '}
                </p>
              </div>
              <div className="flex gap-4 bg-lightBlue py-2 px-4 rounded-lg cursor-pointer">
                <button className="">Latest</button>
                <MdKeyboardArrowDown className="fill-mainBlue w-6 h-6" />
              </div>
            </div>
            {/* containt */}
            <div className="flex flex-col md:flex-row gap-1 w-full items-center justify-between mt-12">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-2 w-full justify-between items-center ">
                  <div className="flex gap-2">
                    <div>
                      <div className="w-10 h-10 bg-slate-100 rounded-full -mr-5">
                        <img
                          className="w-10 h-10 bg-slate-100 rounded-full object-contain"
                          src={placeholder}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <h4 className=" font-semibold text-xl">James Kowalski</h4>
                      <div className="flex gap-2 items-center ml-5">
                        <p className="text-xs text-lightGray">Head Marketing</p>
                        <div className="w-2 h-2 rounded-full bg-lightGray"></div>
                        <p className="text-xs text-lightGray">24 June 2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <button className="bg-lightBlue text-mainBlue rounded-full py-1 px-2 cursor-pointer">
                      Good Services
                    </button>
                    <button className="bg-lightGreen text-mainGreen rounded-full py-1 px-2 cursor-pointer">
                      Good Services
                    </button>
                    <button className="bg-lightRed text-mainRed rounded-full py-1 px-2 cursor-pointer">
                      Good Services
                    </button>
                  </div>{' '}
                </div>
                <div>
                  <p className=" font-medium text-lg">
                    We recently had dinner with friends at David CC and we all
                    walked away with a great experience. Good food, pleasant
                    environment, personal attention through all the evening.
                    Thanks to the team and we will be back! I will give a good
                    recommendation to my friend, family and people what i look.
                  </p>
                </div>
              </div>
              {/* review */}
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className=" font-extrabold text-3xl">3.5</p>
                <div className="flex gap-1 items-center">
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainGray" />
                </div>
              </div>
              {/*end review */}
            </div>
            {/*end containt */}
            <div className="mt-12  h-[.5px] w-full bg-gray-300"></div>
            <div className="flex flex-col md:flex-row gap-1 w-full items-center justify-between mt-12">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-2 w-full justify-between items-center ">
                  <div className="flex gap-2">
                    <div>
                      <div className="w-10 h-10 bg-slate-100 rounded-full -mr-5">
                        <img
                          className="w-10 h-10 bg-slate-100 rounded-full object-contain"
                          src={placeholder}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <h4 className=" font-semibold text-xl">James Kowalski</h4>
                      <div className="flex gap-2 items-center ml-5">
                        <p className="text-xs text-lightGray">Head Marketing</p>
                        <div className="w-2 h-2 rounded-full bg-lightGray"></div>
                        <p className="text-xs text-lightGray">24 June 2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gmainYellow-center">
                    <button className="bg-lightBlue text-mainBlue rounded-full py-1 px-2 cursor-pointer">
                      {' '}
                      Good Services
                    </button>
                    <button className="bg-lightGreen text-mainGreen rounded-full py-1 px-2 cursor-pointer">
                      {' '}
                      Good Services
                    </button>
                    <button className="bg-lightRed text-mainRed rounded-full py-1 px-2 cursor-pointer">
                      {' '}
                      Good Services
                    </button>
                  </div>{' '}
                </div>
                <div>
                  <p className=" font-medium text-lg">
                    We recently had dinner with friends at David CC and we all
                    walked away with a great experience. Good food, pleasant
                    environment, personal attention through all the evening.
                    Thanks to the team and we will be back! I will give a good
                    recommendation to my friend, family and people what i look.
                  </p>
                </div>
              </div>
              {/* review */}
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className=" font-extrabold text-3xl">3.5</p>
                <div className="flex gap-1 items-center">
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainGray" />
                </div>
              </div>
              {/*end review */}
            </div>{' '}
            <div className="flex flex-col md:flex-row gap-1 w-full items-center justify-between mt-12">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-2 w-full justify-between items-center ">
                  <div className="flex gap-2">
                    <div>
                      <div className="w-10 h-10 bg-slate-100 rounded-full -mr-5">
                        <img
                          className="w-10 h-10 bg-slate-100 rounded-full object-contain"
                          src={placeholder}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                      <h4 className=" font-semibold text-xl">James Kowalski</h4>
                      <div className="flex gap-2 items-center ml-5">
                        <p className="text-xs text-gray-400">Head Marketing</p>
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <p className="text-xs text-gray-400">24 June 2020</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <button className="bg-lightBlue text-mainBlue rounded-full py-1 px-2 cursor-pointer">
                      {' '}
                      Good Services
                    </button>
                    <button className="bg-lightGreen text-mainGreen rounded-full py-1 px-2 cursor-pointer">
                      {' '}
                      Good Services
                    </button>
                    <button className="bg-lightRed text-mainRed rounded-full py-1 px-2 cursor-pointer">
                      {' '}
                      Good Services
                    </button>
                  </div>{' '}
                </div>
                <div>
                  <p className=" font-medium text-lg">
                    We recently had dinner with friends at David CC and we all
                    walked away with a great experience. Good food, pleasant
                    environment, personal attention through all the evening.
                    Thanks to the team and we will be back! I will give a good
                    recommendation to my friend, family and people what i look.
                  </p>
                </div>
              </div>
              {/* review */}
              <div className="flex flex-col gap-3 justify-center items-center">
                <p className=" font-extrabold text-3xl">3.5</p>
                <div className="flex gap-1 items-center">
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainYellow" />
                  <AiFillStar className="fill-mainGray" />
                </div>
              </div>
              {/*end review */}
            </div>
          </div>
        </div>
        {/* end table */}
      </div>
      {/* main */}
    </div>
  );
};

export default Review;
