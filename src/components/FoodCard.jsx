import React from 'react';
import placeholder from '../assets/placeholder.png';
import { AiOutlineEye } from 'react-icons/ai';
import { SlNote } from 'react-icons/sl';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoMdAddCircleOutline } from 'react-icons/io';

const FoodCard = () => {
  return (
    <div className="hover:scale-110 duration-500 flex flex-col w-full items-center justify-center shadow-lg">
      <div className="-mb-16 z-10">
        <img
          src={placeholder}
          className="w-40 h-36 object-contain drop-shadow-main rounded-full"
          alt=""
        />
      </div>
      <div className="bg-white p-5 flex flex-col items-center justify-center w-full rounded-lg gap-2 drop-shadow-main">
        <div className="flex flex-col w-full">
          <h1 className="mt-10 text-lg font-bold">
            Spicy Mozarella with Barbeque
          </h1>
          <div className="flex  items-center justify-center gap-2">
            <p className="text-mainGreen text-sm ">Food /</p>
            <p className="text-lightGray text-sm "> Noodle</p>
          </div>
        </div>
        <div className="flex gap-2 lg:gap-1 items-center justify-center w-full">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="bg-lightGreen rounded-lg py-1 px-2">
              <AiOutlineEye className="fill-mainGreen w- h-" />
            </div>
            <p className="text-xs text-lightGray">View</p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="bg-lightRed rounded-lg py-1 px-2">
              <SlNote className="fill-mainRed w- h-" />
            </div>
            <p className="text-xs text-gray-400">Edit</p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="bg-lightBlue rounded-lg py-1 px-2">
              <RiDeleteBinLine className="fill-mainBlue w- h-" />
            </div>
            <p className="text-xs text-lightGray">Delete</p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="bg-slate-200 rounded-lg py-1 px-2">
              <IoMdAddCircleOutline className="fill-mainGray w- h-" />
            </div>
            <p className="text-xs text-lightGray">Duplicate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
