import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';

const AnalyticsCArd = () => {
  return (
    <div className="hover:scale-110 duration-500 flex flex-col gap-10 bg-white rounded-lg mr-5 ">
      <div className="w-52 h-52 bg-slate-300 rounded-lg"></div>
      <h2 className=" font-medium w-44">
        Medium Spicy Pizza with Kemangi Leaf
      </h2>
      <div className="flex gap-2">
        <div className="flex gap-1 items-center">
          <AiFillStar className="fill-mainYellow" />
          <AiFillStar className="fill-mainYellow" />
          <AiFillStar className="fill-mainYellow" />
          <AiFillStar className="fill-mainYellow" />
          <AiFillStar className="fill-mainGray" />
        </div>
        <p className=" text-lightGray text-xs">(454 reviews)</p>
      </div>
      <div className="flex gap-2 items-center justify-center w-full bg-blue-200 rounded-full py-2 px-4">
        <FaRegHeart className="text-mainBlue w-5 h-5" />
        <button className="text-mainBlue ">256k Like it</button>
      </div>
    </div>
  );
}

export default AnalyticsCArd