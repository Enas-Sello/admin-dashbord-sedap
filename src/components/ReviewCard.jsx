import React from 'react';
import placeholder from '../assets/placeholder.png';
import Starts from './Starts';
const ReviewCard = () => {
  return (
    <div className="mx-4 flex items-center justify-center  ">
      <div className=" flex bg-white p-1 rounded-xl flex-col w-full shadow-lg ">
        <div className="flex items-center gap-5 mb-4">
          <img
            src={placeholder}
            alt=""
            className=" object-contain w-14 h-14"
          />
          <div>
            <p className="font-medium">full name</p>
            <span className=" text-[15px] text-gray-300 -mt-2">2 days ago</span>
          </div>
        </div>
        <p className="text-center font-medium text-sm w-8/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text{' '}
        </p>
        <div className="flex ml-10 mt-5 items-center">
          <Starts />
          <p className="font-medium text-lg ml-3">4.5</p>
        </div>
      </div>
      <div className=" -ml-[20%] ">
        <img
          src={placeholder}
          alt=""
          className=" object-contain rounded-full bg-slate-100 shadow-lg w-52"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
