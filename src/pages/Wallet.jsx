import React, { useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { RiFileList3Line } from 'react-icons/ri';
import { IoMdArrowDropright, IoMdArrowDropup } from 'react-icons/io';
import { CgSoftwareUpload } from 'react-icons/cg';
import LineCharts from '../components/LineCharts';
import LineProgressBar from '../components/LineProgressBar';
import visa from '../assets/visa.png';
import placeholder2 from '../assets/placeholder2.png';
const Wallet = () => {
  const [toggle, setToggle] = useState(false);

  const isActive =
    'flex items-center justify-between w-full gap-3 mt-10 text-white bg-lightGray p-2 rounded-t-lg duration-300';
  const isNotActive =
    'flex items-center justify-between w-full gap-5 mt-10  duration-300';
  const open = () => {
    setToggle(!toggle);
  };
  const data = [
    {
      name: 'Sunday',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Monday',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Tuesday',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Wednesday',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Thursday',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  return (
    <div class="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2  gap-4 mt-10">
      <div class="col-span-2  bg-white p-5 rounded-lg">
        <div className="flex-col gap-3 items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full ">
            <div className="flex flex-col gap-2">
              <p className=" font-medium text-xl text-lightGray">
                Main Balance
              </p>
              <p className=" text-4xl font-semibold">$673,412.66</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex flex-col md:flex-row gap-3 items-center">
                <div className="flex  md:flex-col items-center gap-1">
                  <p className=" text-sm font-medium text-lightGray">
                    VALID THRU
                  </p>
                  <p className=" text-base font-semibold">08/21</p>
                </div>
                <div className="flex  md:flex-col items-center gap-1">
                  <p className=" text-sm font-medium text-lightGray">
                    CARD HOLDER{' '}
                  </p>
                  <p className=" text-base font-semibold">Samantha Anderson</p>
                </div>
                <p className=" text-base font-semibold">**** **** **** 1234</p>
              </div>
              <SlOptionsVertical className="hidden lg:block" />
            </div>
          </div>

          <div>
            <LineCharts data={data} />
          </div>
        </div>
      </div>
      {/* palance */}
      <div class=" bg-[#464255] p-5 rounded-lg flex flex-col justify-between w-full">
        <div className="flex flex-col gap-3 items-center">
          <img
            src={visa}
            alt="visa"
            className="w-16 block md:hidden lg:block"
          />
          <div className="flex flex-col gap-2">
            <p className=" font-bold text-4xl text-white ">$824,571.93</p>
            <p className=" font-semibold text-base text-white ">
              Wallet Balance
            </p>
            <p className=" font-bold text-sm mt-10 text-white ">
              +0,8% than last week
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl flex gap-5 p-2 items-center justify-center">
          <div className="flex flex-col gap-3 ">
            <div className=" bg-lightRed py-4 px-6 rounded-lg">
              <RiFileList3Line className=" fill-mainRed  w-8 h-8" />
            </div>
            <p className=" font-bold text-base">Top Up</p>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className=" bg-lightGreen py-4 px-6 rounded-lg">
              <CgSoftwareUpload className=" text-mainGreen w-8 h-8" />
            </div>
            <p className=" font-bold text-base">Top Up</p>
          </div>
        </div>
      </div>
      {/*end palance */}
      {/* history */}
      <div class="col-span-2 bg-white p-5 rounded-lg">
        {/* nav */}
        <div className="flex  justify-between w-full">
          <div className="flex flex-col gap-3">
            <p className=" font-bold text-xl">Payment History</p>
            <p className=" text-xs text-gray-400">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm font-semibold text-lightGray ">
            <div className="pb-2 text-mainGreen border-b-mainGreen border-b-2  ">
              Monthly
            </div>
            <div className="pb-2 hover:text-mainGreen hover:border-b-mainGreen border-b-2 border-b-mainGray ">
              Weekly
            </div>
            <div className="pb-2 hover:text-mainGreen hover:border-b-mainGreen border-b-2 border-b-mainGray ">
              Today
            </div>
          </div>
        </div>
        {/* nav */}
        <div className="flex flex-col w-full ">
          {/* payment */}
          <div className="flex items-center justify-between w-full gap-5 mt-10">
            <div className="flex  gap-3">
              <div>
                <img
                  src={placeholder2}
                  className="hidden lg:block w-14 h-14 object-contain  rounded-xl bg-slate-200"
                  alt=""
                />{' '}
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[#464255] font-semibold text-xs md:text-base ">
                  Peterdraw
                </h4>
                <h4 className=" text-xs md:text-sm ">Online Shop</h4>
              </div>
            </div>
            <div className="flex gap-3 ml-2">
              <h4 className=" text-xs md:text-base ">Jun 5,2020</h4>
              <h4 className="text-[#464255] font-normal md:font-semibold text-xs md:text-base ">
                +$5,553
              </h4>
              <h4 className=" text-xs md:text-base md:w-40">MasterCard</h4>
            </div>
            <button className=" text-xs md:text-base bg-lightRed text-mainRed py-2 px-3 rounded-xl">
              Pending
            </button>
            <IoMdArrowDropright />{' '}
          </div>
          {/*  payment*/}
          {/* payment Completed */}
          <div className="flex flex-col">
            <div className={toggle ? isActive : isNotActive}>
              <div className="flex gap-3">
                <div>
                  <img
                    src={placeholder2}
                    className="hidden lg:block w-14 h-14 object-contain  rounded-xl bg-slate-200"
                    alt=""
                  />{' '}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className=" font-semibold text-xs md:text-base ">
                    Peterdraw
                  </h4>
                  <h4 className="  text-xs md:text-sm ">Online Shop</h4>
                </div>
              </div>
              <div className="flex gap-3 ml-2">
                <h4 className=" text-xs md:text-base ">Jun 5,2020</h4>
                <h4 className=" font-normal md:font-semibold text-xs md:text-base ">
                  +$5,553
                </h4>
                <h4 className=" text-xs md:text-base md:w-40 ">MasterCard</h4>
              </div>
              <button
                className={
                  toggle
                    ? 'text-xs md:text-base bg-mainGreen font-bold text-white py-2 px-3 rounded-xl'
                    : 'text-xs md:text-base bg-lightGreen text-mainGreen py-2 px-3 rounded-xl'
                }
              >
                Completed
              </button>
              {toggle ? (
                <IoMdArrowDropup onClick={open} />
              ) : (
                <IoMdArrowDropright onClick={open} />
              )}
            </div>
            {toggle && (
              <>
                {/* <hr/> */}
                <div className="bg-lightGray rounded-b-lg p-2 border-t-[1px] border-[#515D80]">
                  <div className="flex w-full justify-between  items-center p-2">
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-xs text-white">ID Payment</p>
                      <p className="text-xs md:text-base text-white font-bold">
                        #00123521
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-xs text-white">Invoice Date</p>
                      <p className="text-xs md:text-base text-white font-bold">
                        April 29, 2020
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-xs text-white">Due Date</p>
                      <p className="text-xs md:text-base text-white font-bold">
                        June 5, 2020
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-xs text-white">Date Paid</p>
                      <p className="text-xs md:text-base text-white font-bold">
                        June 4, 2020
                      </p>
                    </div>
                    {/* <div className="lg:flex flex-col  bg-[#46425540] p-2 bg-opacity-25 rounded-lg hidden ">
                      <p className="text-xs text-white">
                        Lorem ipsum dolor sit amet, consectetur{' '}
                      </p>
                    </div> */}
                  </div>
                </div>
              </>
            )}
          </div>
          {/*  payment Completed*/}

          {/* payment */}
          <div className="flex items-center justify-between w-full gap-5 mt-10">
            <div className="flex gap-3">
              <div>
                <img
                  src={placeholder2}
                  className="hidden lg:block w-14 h-14 object-contain  rounded-xl bg-slate-200"
                  alt=""
                />{' '}
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[#464255] font-semibold text-xs md:text-base ">
                  Peterdraw
                </h4>
                <h4 className=" text-xs md:text-sm ">Online Shop</h4>
              </div>
            </div>
            <div className="flex gap-3 ml-2">
              <h4 className=" text-xs md:text-base ">Jun 5,2020</h4>
              <h4 className="text-[#464255] font-normal md:font-semibold text-xs md:text-base ">
                +$5,553
              </h4>
              <h4 className=" text-xs md:text-base md:w-40">MasterCard</h4>
            </div>
            <button className=" text-xs md:text-base text-lightGray bg-mainGray py-2 px-3 rounded-xl">
              Canceled
            </button>
            <IoMdArrowDropright  />{' '}
          </div>
          {/*  payment*/}
        </div>
      </div>
      {/*end history */}

      {/*Invoices*/}
      <div class="col-span-2 sm:col-span-1 bg-white p-5 rounded-lg ">
        <div className="flex flex-col w-full justify-between">
          <div className="flex flex-col gap-2 mb-5">
            <p className=" font-bold text-xl">Invoices Sent</p>
            <p className=" text-xs font-normal text-gray-400 w-full">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="flex w-full flex-col l gap-6  items-center justify-between">
            {/*  */}
            <div className="flex w-full gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <img
                  src={placeholder2}
                  className="w-10 h-10 object-cover  rounded-full bg-slate-200"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className=" font-semibold text-base">Stevan Store</p>
                  <p className=" text-xs text-gray-400">Stevan Store</p>
                </div>
              </div>
              <p className=" font-bold text-base">$562</p>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex w-full gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <img
                  src={placeholder2}
                  className="w-10 h-10 object-cover  rounded-full bg-slate-200"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className=" font-semibold text-base">Stevan Store</p>
                  <p className=" text-xs text-gray-400">Stevan Store</p>
                </div>
              </div>
              <p className=" font-bold text-base">$562</p>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex w-full gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <img
                  src={placeholder2}
                  className="w-10 h-10 object-cover  rounded-full bg-slate-200"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className=" font-semibold text-base">Stevan Store</p>
                  <p className=" text-xs text-gray-400">Stevan Store</p>
                </div>
              </div>
              <p className=" font-bold text-base">$562</p>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex w-full gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <img
                  src={placeholder2}
                  className="w-10 h-10 object-cover  rounded-full bg-slate-200"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className=" font-semibold text-base">Stevan Store</p>
                  <p className=" text-xs text-gray-400">Stevan Store</p>
                </div>
              </div>
              <p className=" font-bold text-base">$562</p>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex w-full gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <img
                  src={placeholder2}
                  className="w-10 h-10 object-cover  rounded-full bg-slate-200"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className=" font-semibold text-base">Stevan Store</p>
                  <p className=" text-xs text-gray-400">Stevan Store</p>
                </div>
              </div>
              <p className=" font-bold text-base">$562</p>
            </div>
            {/*  */}
          </div>
          <button className=" text-lg font-semibold text-mainGreen border-2 border-mainGreen py-2 px-3 rounded-xl mt-4 hover:text-white hover:bg-mainGreen hover:hoverAnimat">
            View More
          </button>
        </div>
      </div>
      {/*endInvoices*/}
    </div>
  );
};

export default Wallet;
