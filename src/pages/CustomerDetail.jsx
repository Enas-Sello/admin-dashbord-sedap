import React from 'react';
import placeholder from '../assets/placeholder.png';
import visa from '../assets/visa.png';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillLightningFill, BsPen } from 'react-icons/bs';
import { RiMailLine } from 'react-icons/ri';
import { IoCallOutline } from 'react-icons/io5';
import { SlOptions } from 'react-icons/sl';
import Analytic from '../assets/Analytics.png';
import YearlyFiltter from '../components/YearlyFiltter';
import BarCharts from '../components/BarCharts';

const CustomerDetail = () => {
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
    {
      name: 'Friday',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Saturday',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="flex flex-col gap-8 h-full w-full">
      {/*nav start */}
      <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
        <div className="flex flex-row items-center md:items-start md:flex-col gap-3 justify-center">
          <h1 className="font-semibold text-3xl">Customer Detail</h1>
          <p className="text-lightGray text-lg">
            Here your Customer Detail Profile
          </p>
        </div>
      </div>
      {/*nav end */}

      {/*details start */}
      <div className="flex  flex-col md:flex-row justify-between gap-3 items-center w-full">
        <div className="w-full h-[275px] bg-slate-50 flex section-padding gap-5 rounded-lg items-center justify-">
          <div>
            <img
              src={placeholder}
              className="hidden lg:block w-52 h-48 object-contain rounded-lg bg-slate-200"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 justify-center ">
            <div className="flex items-start sm:justify-between md:justify-start  flex-col md:flex-row">
              <div className="flex flex-col gap-2 lg:gap-4 justify-center">
                <h2 className=" font-semibold text-4xl">Eren Yeager</h2>
                <h4 className="text-mainGreen font-medium text-xl">
                  UX Designer
                </h4>
                <p className="text-lightGray text-sm ">
                  St. Kings Road 57th, Garden Hills, Chelsea - London
                </p>
              </div>
              <div className="flex md:hidden lg:flex items-center justify-center gap-3">
                <div className="bg-lightGreen py-1 px-2 rounded-lg">
                  <AiOutlineInfoCircle className="fill-mainGreen w-5 h-5" />
                </div>
                <div className="bg-slate-200  py-1 px-2 rounded-lg">
                  <BsPen className="fill-lightGray w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="flex items-start md:items-start flex-col lg:flex-row gap-5 justify-between">
              <div className=" flex gap-2 items-center">
                <div className="lightBlue p-1 rounded-lg">
                  <RiMailLine className="w-4 h-4 fill-mainBlue" />
                </div>
                <p className="text-sm w-[130px]">eren.yeager@mail.co.id</p>
              </div>
              <div className=" flex gap-2 items-center">
                <div className="bg-lightGreen p-1 rounded-lg">
                  <IoCallOutline className="w-4 h-4 fill-mainGreen" />
                </div>
                <p className="text-sm w-[130px]">+012 345 6789</p>
              </div>
              <div className=" flex gap-2 items-center">
                <div className="bg-lightRed p-1 rounded-lg">
                  <BsFillLightningFill className="w-4 h-4 fill-mainRed" />
                </div>
                <p className="text-sm w-[130px] ">Highspeed Studios</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-5/12 h-[293px]  flex flex-col justify-between items-center p-3 rounded-lg ">
          <div className=" flex flex-col justify-around bg-mainGreen w-full h-2/3 rounded-t-lg p-5 ">
            <div className="flex w-full justify-between items-center">
              <p className="text-white">Your Balance</p>
              <SlOptions className="md:hidden xl:block text-white" />
            </div>
            <p className=" font-bold text-xl xl:text-4xl text-white">$ 9,425</p>
            <div className="flex w-full justify-between items-baseline">
              <div className="flex justify-between w-full">
                <p className="text-white">2451 **** **** ****</p>
                <p className="text-white">02/21</p>
              </div>
            </div>
          </div>
          <div className="bg-green-700 w-full h-1/3  rounded-b-lg p-5 flex justify-between items-center">
            <div className="flex flex-col md:flex-row lg:flex-col md:items-center lg:items-start gap-2 w-full ">
              <p className="text-white text-sm">Name:</p>
              <p className="text-white text-xl font-medium">Eren Yeager</p>
            </div>
            <div>
              <img
                src={visa}
                className="w-16 block md:hidden lg:block"
                alt="visa"
              />
            </div>
          </div>
        </div>
      </div>
      {/*details end */}

      {/*info start */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-3 gap-8">
        <div className="flex flex-col md:flex-row w-full md:w-6/12 h-[500px]">
          <div className="bg-white rounded-xl flex w-full flex-col p-4">
            <div className="flex justify-between flex-col md:flex-row items-center gap-10">
              <div>
                <h4 className=" font-medium text-xl w-[185px]">
                  Most Ordered Food
                </h4>
                <p className="text-sm font-normal text-gray-300">
                  Lorem ipsum dolor
                </p>
              </div>
              <YearlyFiltter />
            </div>
            <div className="flex justify-between items-center gap-2 mt-8">
              <div className="flex items-center gap-5">
                <div>
                  <img src={Analytic} alt="" className="rounded-xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold">Meidum Spicy Spagethi Italiano</h4>
                  <span className="font-semibold text-xs text-[#2D9CDB] ">
                    SPAGETHI
                  </span>
                  <p className="text-gray-400 text-xs">Serves for 4 Person</p>
                </div>
              </div>
              {/* $ */}
              <div className="flex items-center gap-4 ">
                <p className=" font-medium text-2xl">$12.56</p>
                <SlOptions />
              </div>
              {/* $ */}
            </div>
            <div className="flex justify-between items-center gap-2 mt-8">
              <div className="flex items-center gap-5">
                <div>
                  <img src={Analytic} alt="" className="rounded-xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold">Meidum Spicy Spagethi Italiano</h4>
                  <span className="font-semibold text-xs text-[#2D9CDB] ">
                    SPAGETHI
                  </span>
                  <p className="text-gray-400 text-xs">Serves for 4 Person</p>
                </div>
              </div>
              {/* $ */}
              <div className="flex items-center gap-4 ">
                <p className=" font-medium text-2xl">$12.56</p>
                <SlOptions />
              </div>
              {/* $ */}
            </div>
            <div className="flex justify-between items-center gap-2 mt-8">
              <div className="flex items-center gap-5">
                <div>
                  <img src={Analytic} alt="" className="rounded-xl" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold">Meidum Spicy Spagethi Italiano</h4>
                  <span className="font-semibold text-xs text-[#2D9CDB] ">
                    SPAGETHI
                  </span>
                  <p className="text-gray-400 text-xs">Serves for 4 Person</p>
                </div>
              </div>
              {/* $ */}
              <div className="flex items-center gap-4 ">
                <p className=" font-medium text-2xl">$12.56</p>
                <SlOptions />
              </div>
              {/* $ */}
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full bg-white w-full lg:w-6/12 p-5 gap-10 rounded-xl mt-3 md:mt-0 drop-shadow-main">
          <div className="flex flex-col md:flex-row justify-between  items-center ">
            <h3 className=" font-bold text-2xl">Most Liked Food</h3>
            <YearlyFiltter />
          </div>

          <BarCharts data={data} />
          <div className="flex flex-col w-full justify-between gap-5 items-center">
            <div className="flex flex-col md:flex-row w-full justify-between items-start gap-3">
              <div className="flex  gap-2 items-center">
                <div className="w-5 h-5 rounded-lg bg-teal-500"></div>
                <p>Spaghetti (22%)</p>
                <p className=" font-bold text-2xl ml-4">69</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-lg bg-mainGreen"></div>
                <p>Burger (27%)</p>
                <p className=" font-bold text-2xl ml-4">763</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-between items-start gap-3">
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-lg bg-mainRed"></div>
                <p>Pizza (11%)</p>
                <p className=" font-bold text-2xl ml-4">321</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-lg bg-mainYellow"></div>
                <p>Sprite (15%) </p>
                <p className=" font-bold text-2xl ml-4">154</p>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
      {/*info end */}
    </div>
  );
};

export default CustomerDetail;
