import React from 'react';
import dash1 from '../assets/dash1png.png';
import { CgArrowUp } from 'react-icons/cg';
const Card = () => {
  return (
    <div
      className={` dark:bg-lightDark hover:hoverAnimat flex-wrap xl:flex-nowrap bg-white flex gap-2 lg:gap-5 p-2 md:p-5  w-full items-center justify-center rounded-2xl shadow-xl`}
    >
      <div
        className={`flex bg-none md:bg-lightGreen rounded-full  items-center justify-center `}
      >
        <img
          src={dash1}
          alt=""
          className="w-14 sm:w-16 md:w-20 lg:h-20  object-contain p-2"
        />
      </div>
      <div className="flex sm:flex-row lg:flex-col  items-center justify-between md:justify-center  gap-3">
        <h3 className=" font-bold text-2xl md:text-5xl">75</h3>
        <h6 className="font-normal text-base">Total Orders</h6>
        <div className="flex gap-5">
          <div className="bg-lightGreen  rounded-full px-1 flex items-center">
            <CgArrowUp className="text-mainGreen" />
          </div>
          <span className="font-normal text-xs text-lightGray">
            4% (30 days)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
