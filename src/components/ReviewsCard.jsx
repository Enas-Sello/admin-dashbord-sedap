import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ReviewsCard = () => {
  return (
    <div className=" w-[500px ] flex flex-col gap-3 p-5 rounded-lg bg-white">
      <div className="flex items-center justify- w-full gap-8">
        <div className="-mt-20 bg-slate-500 w-40 h-40 rounded-full shadow-xl">
          {/* <img src={placeholder} width={100} height={80} alt="" /> */}
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className=" font-bold text-lg w-[215px]">
              Chicken Curry Special withCucumber
            </h3>
            <h6 className="text-green-600 font-normal text-xs">MAIN COURSE</h6>
          </div>
          <div className="bg-gray-500 w-full h-[.5px]"></div>{' '}
        </div>
      </div>
      <div>
        <p className="w-[350px] text-sm font-medium">
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
