import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import placeholder from '../assets/placeholder.png';
const ReviewsCard = () => {
  return (
    <div className="hover:scale-110 duration-500 w-full flex flex-col gap-3 p-4 rounded-lg bg-white">
      <div></div>
      <div className="flex items-center justify-start md:justify-center lg:justify-start w-full gap-8">
        <div className="-mt-20 bg-red-200 w-7/12 rounded-full shadow-xl">
          <img
            src={placeholder}
            className="w-full rounded-full shadow-xl object-contain"
            alt=""
          />
        </div>
        <div className="flex w-5/12 flex-col gap-8">
          <div>
            <h3 className=" font-medium text-base ">
              Chicken Curry Special withCucumber
            </h3>
            <h6 className="text-mainGreen font-normal text-xs w-[180px]">
              MAIN COURSE
            </h6>
          </div>
          <div className="bg-mainGray w-full h-[.5px]"></div>{' '}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text{' '}
        </p>
      </div>

      <div className="mt-5 bg-lightGray p-2 rounded-xl">
        <div className="flex w-full justify-evenly items-center">
          <div className='flex gap-1 items-center'>
            <img
              src={placeholder}
              className="w-12 h-12 bg-slate-300 rounded-full object-contain"
              alt=""
            />
            <div className="flex flex-col ">
              <h3 className="font-semibold text-sm text-white">Roberto Jr.</h3>
              <p className=" text-white text-xs">Graphic Design</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <AiFillStar className="fill-mainYellow w-8 h-8" />
            <p className="text-white text-xl font-bold">4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
