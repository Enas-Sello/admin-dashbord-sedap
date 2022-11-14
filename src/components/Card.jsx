import React from 'react';
import dash1 from '../assets/dash1png.png';
import { CgArrowUp } from 'react-icons/cg';
const Card = () => {
  return (
    <div
      className={` bg-white flex gap-10 px-5 py-3 w-full items-center rounded-2xl`}
    >
      <div
        className={`bg-green-200 rounded-full flex items-center justify-center`}
      >
        <img src={dash1} alt="" className="w-full h-full object-contain p-1" />
      </div>
      <div className="flex flex-col items-center ">
        <h3 className=" font-bold text-5xl">75</h3>
        <h6 className="font-normal text-base">Total Orders</h6>
        <div className="flex gap-5">
          <div className="bg-red-300 fill-red-600 rounded-full px-1 flex items-center">
            <CgArrowUp />
          </div>
          <span className="font-normal text-xs text-gray-400">
            4% (30 days)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
