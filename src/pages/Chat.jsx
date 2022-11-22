import React from 'react';
import {
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  BiSearch,
} from 'react-icons/bi';
import { MdOutlineNotificationsOff } from 'react-icons/md';
import { BsInfo } from 'react-icons/bs';
import { SlOptionsVertical } from 'react-icons/sl';
import { IoAdd, IoCheckmarkDone } from 'react-icons/io5';
import { GrBold, GrItalic } from 'react-icons/gr';
import { BiUnderline } from 'react-icons/bi';
import { AiOutlineFontSize, AiOutlineClose } from 'react-icons/ai';
import { ImAttachment } from 'react-icons/im';
import { HiOutlinePhoto } from 'react-icons/hi2';
import placeholder from '../assets/placeholder.png';
import placeholder2 from '../assets/placeholder2.png';
import { RiSendPlaneLine } from 'react-icons/ri';
const Chat = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-dense gap-4 p-5">
      <div className=" col-span-1 p-2 bg-white rounded-lg shadow-md max-h-[450px]">
        <div className="w-full h-full p-2 flex flex-col gap-3 items-center  justify-center">
          {/* nav */}
          <div className="flex gap-2 items-center">
            <div className="flex justify-start items-center  px-2 rounded-lg bg-mainGray border-none outline-none focus-within:shadow-lg">
              <input
                type="text"
                // onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search here..."
                // value={SearchTerm}
                className="p-2 bg-transparent outline-none text-lightGray "
              />
              <BiSearch className=" fill-lightGray w-8 h-5  " />
            </div>
            <div className="bg-mainGreen py-3 px-4 rounded-lg">
              <IoAdd className=" text-white fill-white stroke-white  " />
            </div>
          </div>
          {/*end nav */}
          <div className="flex flex-col gap-3 mt-3 items-start w-full">
            <h5 className=" text-base font-normal text-lightGray">
              Pinned Message
            </h5>

            {/* msg */}
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2">
                <img
                  src={placeholder}
                  className="bg-mainGray rounded-full w-12 h-12 object-contain"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className=" text-lg font-medium">Robert Johanson</p>
                  <p className=" text-sm  font-medium">Hi David, can you ...</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className=" text-xs text-gray-400  font-normal">2 min ago</p>
                <p className=" bg-mainBlue py-1 px-2 text-center rounded-lg text-sm font-normal text-white">
                  2
                </p>
              </div>
            </div>
            {/*end msg */}
            {/* msg */}
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2">
                <img
                  src={placeholder2}
                  className="bg-mainGray rounded-full w-12 h-12 object-contain"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className=" text-lg font-medium">Chloe Jess</p>
                  <p className=" text-sm text-gray-400 font-medium">
                    I have done my task ...
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className=" text-xs text-gray-400  font-normal">
                  10 min ago
                </p>
                <p className=" flex justify-center items-center   text-mainGreen">
                  <IoCheckmarkDone className="w-8 h-5 " />
                </p>
              </div>
            </div>
            {/*end msg */}
            <h5 className=" text-start text-base font-normal text-lightGray">
              Recent Message
            </h5>
            {/* msg */}
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2">
                <img
                  src={placeholder}
                  className="bg-mainGray rounded-full w-12 h-12 object-contain"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className=" text-lg font-medium">Lisa Blekcurent</p>
                  <p className=" text-sm text-gray-400 font-medium">
                    I have done my task ...
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className=" text-xs text-gray-400  font-normal">
                  10 min ago
                </p>
                <p className=" flex justify-center items-center   text-lightGray">
                  <IoCheckmarkDone className="w-8 h-5 " />
                </p>
              </div>
            </div>
            {/*end msg */}
            {/* msg */}
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2">
                <img
                  src={placeholder2}
                  className="bg-mainGray rounded-full w-12 h-12 object-contain"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className=" text-lg font-medium">Robertos</p>
                  <p className=" text-sm text-gray-400 font-medium">
                    I have done my task ...
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className=" text-xs text-gray-400  font-normal">
                  10 min ago
                </p>
                <p className=" flex justify-center items-center   text-lightGray">
                  <IoCheckmarkDone className="w-8 h-5 " />
                </p>
              </div>
            </div>
            {/*end msg */}
          </div>
        </div>
      </div>
      {/* start chat */}
      <div className="sm:span-1 col-span-2 bg-white rounded-lg shadow-md max-h-[600px">
        {' '}
        <div className=" w-full h-full p-2 flex flex-col justify-between">
          <div className="flex grow-0 w-full justify-between items-center p-2 border-b-[1px]">
            <div className="flex gap-1">
              <img
                src={placeholder}
                className="bg-mainGray rounded-full w-12 h-12 object-contain"
                alt=""
              />
              <div className="flex flex-col  ">
                <p className=" font-medium text-2xl">Roberto</p>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-mainGreen rounded-full mt-1 "></div>
                  <p className=" text-sm font-normal ">online</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <MdOutlineNotificationsOff className="w-8 h-5 text-lightGray" />
              <BiSearch className="w-8 h-5 text-lightGray" />
              <BsInfo className="w-8 h-5 text-lightGray" />
              <SlOptionsVertical className="w-8 h-5 text-lightGray" />
            </div>
          </div>
          {/* chating */}
          <div className="flex flex-col grow w-full justify-between p-4 my-5">
            <div className="flex items-start flex-col gap-3 my-3">
              <div className="bg-mainGray p-3 rounded-lg">
                Hi everyone! Let’s start our discussion now about kick off
                meeting next week.
              </div>
              <div className="bg-mainGray p-3 rounded-lg">
                Is everyone ok about that schedule?
              </div>
            </div>
            <div className="flex items-end flex-col  gap-3 my-3">
              <div className="bg-lightBlue p-3 rounded-lg">
                Uhm, can I reschedule meeting?
              </div>
              <div className="bg-lightBlue p-3 rounded-lg">
                I still have 2 task left at that day. I worried can’t attend
                that meeting
              </div>
            </div>
          </div>
          {/*end chating */}
          {/* text */}
          <div className="flex grow-0 flex-col w-full justify-between p-2">
            <div className="mb-3">
              {' '}
              <input
                type="text"
                className=" border-[1px] border-lightGray w-full py-3 px-4 rounded-lg text-sm font-normal outline-none focus-within:shadow-lg"
                placeholder="Write your message here..."
              />
            </div>
            <div className="flex w-full justify-between items-center p-2">
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <GrBold className=" text-lightGray fill-lightGray hover:fill-mainGreen active:fill-mainGreen" />
                  <GrItalic className=" text-lightGray fill-lightGray hover:fill-mainGreen active:fill-mainGreen" />
                  <BiUnderline className=" text-lightGray fill-lightGray hover:fill-mainGreen active:fill-mainGreen" />
                  <AiOutlineFontSize className=" text-lightGray fill-lightGray hover:fill-mainGreen active:fill-mainGreen" />
                </div>
                <div className="flex gap-2 items-center">
                  <BiAlignLeft className=" text-lightGray fill-lightGray hover:fill-mainGreen active:fill-mainGreen" />
                  <BiAlignMiddle className=" text-lightGray fill-lightGray hover:fill-mainGreen active:fill-mainGreen" />
                  <BiAlignRight className=" text-lightGray fill-lightGray hover:fill-mainGreen active:fill-mainGreen" />
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <ImAttachment className=" text-lightGray fill-lightGray hover:fill-mainGreen active:fill-mainGreen" />
                <HiOutlinePhoto className=" text-lightGray  stroke-lightGray  hover:stroke-mainGreen active:fill-mainGreen" />
                <SlOptionsVertical className=" text-lightGray fill-lightGray hover:fill-mainGreen active:fill-mainGreen" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="hover:hoverAnimat flex justify-center items-center gap-1 border border-mainGreen px-3 py-2 rounded-lg  hover:border-mainRed group">
                  <AiOutlineClose className=" stroke-mainGreen text-mainGreen group-hover:text-mainRed" />
                  <button className="text-mainGreen font-medium text-base group-hover:text-mainRed">
                    Cancel
                  </button>
                </div>
                <div className=" hover:hoverAnimat flex justify-center items-center gap-1 border border-mainGreen bg-mainGreen px-3 py-2 rounded-lg  hover:border-mainBlue hover:bg-mainBlue  ">
                  <RiSendPlaneLine className=" stroke-white text-white" />
                  <button className="text-white font-medium text-base">
                    send
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*END text */}
        </div>
      </div>
      {/* end chat */}
    </div>
  );
};
export default Chat;
