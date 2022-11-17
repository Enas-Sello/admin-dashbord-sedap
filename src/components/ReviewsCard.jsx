import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import placeholder from '../assets/placeholder.png';
const ReviewsCard = () => {
  return (
    <div className="hover:scale-110 duration-500 w-full lg:w-4/12 flex flex-col gap-3 p-4 rounded-lg bg-white">
      <div></div>
      <div className="flex items-center justify-start md:justify-center lg:justify-start w-full gap-8">
        <div className="-mt-20 bg-slate-100 w-40 h-40 rounded-full shadow-xl">
          <img
            src={placeholder}
            className="w-40 h-40 rounded-full shadow-xl object-contain"
            alt=""
          />
        </div>
        <div className="flex w-3/12 flex-col gap-8">
          <div>
            <h3 className=" font-bold text-base w-[180px]">
              Chicken Curry Special withCucumber
            </h3>
            <h6 className="text-green-600 font-normal text-xs w-[180px]">
              MAIN COURSE
            </h6>
          </div>
          <div className="bg-gray-500 w-full h-[.5px]"></div>{' '}
        </div>
      </div>
      <div>
        <p className="lg:w-[310px] text-sm font-medium text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text{' '}
        </p>
      </div>

      <div className="mt-5 bg-[#5E6C93] p-3 rounded-xl">
        <div className="flex w-full justify-evenly items-center">
          <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
          <div className="flex flex-col ">
            <h3 className="font-semibold text-lg text-white">Roberto Jr.</h3>
            <p className=" text-white text-sm">Graphic Design</p>
          </div>
          <div className="flex items-center gap-2">
            <AiFillStar className="fill-yellow-400 w-8 h-8" />
            <p className="text-white text-xl font-bold">4.5</p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ReviewsCard;
