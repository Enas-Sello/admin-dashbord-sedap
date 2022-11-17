import React from 'react';
import placeholder from '../assets/placeholder.png';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillLightningFill, BsPen } from 'react-icons/bs';
import { RiMailLine } from 'react-icons/ri';
import { IoCallOutline } from 'react-icons/io5';
const CustomerDetail = () => {
  return (
    <div className="flex flex-col gap-8 h-full w-full">
      {/*nav start */}
      <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
        <div className="flex flex-row items-center md:items-start md:flex-col gap-3 justify-center">
          <h1 className="font-semibold text-3xl">Customer Detail</h1>
          <p className="text-gray-500 text-lg">
            Here your Customer Detail Profile
          </p>
        </div>
      </div>
      {/*nav end */}

      {/*details start */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="w-9/12 bg-slate-50 flex section-padding gap-5 rounded-lg items-center justify-">
          <div>
            <img
              src={placeholder}
              className=" w-56 h-52 object-contain rounded-lg bg-slate-300"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 justify-center ">
            <div className="flex items-start gap-2 justify-between">
              <div className="flex flex-col gap-4 justify-center">
                <h2 className=" font-semibold text-4xl">Eren Yeager</h2>
                <h4 className="text-green-500 font-medium text-xl">
                  UX Designer
                </h4>
                <p className="text-gray-500 text-sm">
                  St. Kings Road 57th, Garden Hills, Chelsea - London
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="bg-green-200 py-1 px-2 rounded-lg">
                  <AiOutlineInfoCircle className="fill-green-400 w-5 h-5" />
                </div>
                <div className="bg-slate-200  py-1 px-2 rounded-lg">
                  <BsPen className="fill-slate-400 w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 justify-between">
              <div className=" flex gap-2 items-center">
                <div className="bg-blue-200 p-1 rounded-lg">
                  <RiMailLine className="w-4 h-4 fill-blue-500" />
                </div>
                <p className="text-sm w-[130px]">eren.yeager@mail.co.id</p>
              </div>
              <div className=" flex gap-2 items-center">
                <div className="bg-green-200 p-1 rounded-lg">
                  <IoCallOutline className="w-4 h-4 fill-green-500" />
                </div>
                <p className="text-sm w-[130px]">+012 345 6789</p>
              </div>
              <div className=" flex gap-2 items-center">
                <div className="bg-red-200 p-1 rounded-lg">
                  <BsFillLightningFill className="w-4 h-4 fill-red-500" />
                </div>
                <p className="text-sm w-[130px] ">Highspeed Studios</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12 flex flex-col justify-between items-center rounded-lg">
          <div className='bg-green-600'></div>
        </div>
      </div>
      {/*details end */}

      {/*info start */}
      <div></div>
      {/*info end */}
    </div>
  );
};

export default CustomerDetail;
