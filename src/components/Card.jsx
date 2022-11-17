import React from 'react';
import dash1 from '../assets/dash1png.png';
import { CgArrowUp } from 'react-icons/cg';
const Card = () => {
  return (
    <div
      className={`hover:scale-110 duration-500 flex-wrap bg-white flex gap-10 p-10 px-4 w-full lg:w-3/12 items-center justify-center rounded-2xl shadow-xl`}
    >
      <div
        className={`hidden md:flex bg-none lg:bg-green-100 rounded-full  items-center justify-center `}
      >
        <img
          src={dash1}
          alt=""
          className=" lg:w-20 lg:h-20 w-full h-full object-contain p-2"
        />
      </div>
      <div className="flex sm:flex-row lg:flex-col  items-center justify-between md:justify-center  gap-3">
        <h3 className=" font-bold text-5xl">75</h3>
        <h6 className="font-normal text-base">Total Orders</h6>
        <div className="flex gap-5">
          <div className="bg-none lg:bg-green-300  rounded-full px-1 flex items-center">
            <CgArrowUp className="text-green-600" />
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
