import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import placeholder2 from '../assets/placeholder2.png';

const FoodDetailsRewiew = () => {
  return (
    <div className="dark:bg-lightDark flex bg-white p-2 rounded-xl flex-col">
      <div className="flex items-center gap-5 mb-4">
        <img
          src={placeholder2}
          alt=""
          className=" object-contain w-14 h-14 border rounded-full"
        />
        <div>
          <p className="font-bold text-base">full name</p>
          <span className=" text-lightGrey text-sm">2 days ago</span>
        </div>
      </div>
      <p className="text-center font-medium text-sm w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text{' '}
      </p>
      <div className="flex items-center justify-center mt-5 ">
        <div className="flex items-center justify-center">
          <AiFillStar className="fill-mainYellow w-8 h-8" />
          <AiFillStar className="fill-mainYellow w-8 h-8 " />
          <AiFillStar className="fill-mainYellow w-8 h-8" />
          <AiFillStar className="fill-mainYellow w-8 h-8" />
          <AiFillStar className="fill-lightGray w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default FoodDetailsRewiew