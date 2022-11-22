import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {  AiOutlineCalendar } from 'react-icons/ai';
import { CgLoadbarSound } from 'react-icons/cg';
import Fillter from '../components/Fillter';
import AreaCharts from '../components/AreaCharts';
import Analytic from '../assets/Analytics.png';
import { SlOptions } from 'react-icons/sl';
import YearlyFiltter from '../components/YearlyFiltter';
import BarCharts from '../components/BarCharts';
import AnalyticsCArd from '../components/AnalyticsCArd';

const Analytics = () => {
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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
        <div className="flex flex-row items-center md:items-start md:flex-col gap-3 justify-center">
          <h1 className="route-title">Analytics</h1>
          <p className="text-gray-500 text-[12px] md:text-base">
            Here is your restaurant summary with graph view
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Fillter
            class={'bg-white flex gap-3 items-center rounded-lg px-4 py-2'}
            icon={AiOutlineCalendar}
            arrow={MdKeyboardArrowDown}
            main={'Filter Periode'}
            date={'17 April 2020 - 21 May 2020'}
            color={'lightBlue'}
            fill={'mainBlue'}
          />
        </div>
      </div>
      {/*div card */}
      <div className="flex gap-8 flex-col lg:flex-row">
        <div className="flex flex-col md:flex-row w-full md:w-7/12 h-[450px]">
          <div className="bg-white rounded-xl flex flex-col p-4 w-full ">
            <div className="flex justify-between items-center gap-10">
              <div>
                <h4 className=" font-medium text-xl">Chart Orders</h4>
                <p className="text-sm font-normal text-gray-300">
                  Lorem ipsum dolor
                </p>
              </div>
              <YearlyFiltter />
            </div>
            <div className="flex items-center gap-10">
              <div className="flex flex-col gap-2 my-5">
                <div className="flex items-center gap-2">
                  <CgLoadbarSound className="fill-lightGray w-6 h-6 text-2xl text-[#D0D6DE]" />
                  <p className="text-mainGreen text-2xl font-bold">257k</p>
                </div>
                <p className=" text-xs font-semibold text-gray-400">
                  Total Sales
                </p>
              </div>
              <div className="flex flex-col gap-2 my-5">
                <div className="flex items-center gap-2">
                  <CgLoadbarSound className="fill-lightGray w-6 h-6 text-2xl text-[#D0D6DE]" />
                  <p className="text-mainGreen text-2xl font-bold">257k</p>
                </div>
                <p className=" text-xs font-semibold text-lightGray">
                  Total Sales
                </p>
              </div>
            </div>

            <AreaCharts data={data} />
          </div>
        </div>
        {/*end card */}
        {/* card  */}
        <div className="flex flex-col md:flex-row w-full md:w-6/12 h-[500px]">
          <div className="bg-white rounded-xl flex flex-col p-4">
            <div className="flex justify-between items-center gap-10">
              <div>
                <h4 className=" font-medium text-xl">Most Selling Items</h4>
                <p className="text-sm font-normal text-lightGray">
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
                  <p className="text-lightGray text-xs">Serves for 4 Person</p>
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
                  <p className="text-lightGray text-xs">Serves for 4 Person</p>
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
                  <p className="text-lightGray text-xs">Serves for 4 Person</p>
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
        {/*end div card  */}
      </div>
      {/*start div card  */}

      {/* card */}
      <div className="flex gap-8 flex-col lg:flex-row -mt-5">
        {/* card  */}
        <div className="flex flex-col md:flex-row w-full md:w-6/12 h-[500px] -mt-12">
          <div className="bg-white rounded-xl flex w-full flex-col p-4">
            <div className="flex justify-between items-center gap-10">
              <div>
                <h4 className=" font-medium text-xl">🔥 Trending Items</h4>
                <p className="text-sm font-normal text-gray-300">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className=" bg-gray-50 rounded-full flex gap-2 justify-center items-center py-2 px-4">
                <p className="text-mainGray ">Weekly</p>
                <MdKeyboardArrowDown className="w-6 h-6" />
              </div>{' '}
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
        {/*end card  */}

        {/* card  */}
        <div className="flex flex-col md:flex-row w-full md:w-7/12 h-[450px] ">
          <div className="bg-white rounded-xl flex w-full flex-col p-4">
            <div className="flex justify-between items-center gap-10">
              <div>
                <h4 className=" font-medium text-xl">Chart Orders</h4>
                <p className="text-sm font-normal text-gray-300">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <YearlyFiltter />
            </div>
            <div className="flex items-center gap-10">
              <div className="flex flex-col gap-2 my-5">
                <div className="flex items-center gap-2">
                  <CgLoadbarSound className="fill-[#D0D6DE] w-6 h-6 text-2xl text-[#D0D6DE]" />
                  <p className="text-[#00B074] text-2xl font-bold">257k</p>
                </div>
                <p className=" text-xs font-semibold text-gray-400">
                  Total Sales
                </p>
              </div>
              <div className="flex flex-col gap-2 my-5">
                <div className="flex items-center gap-2">
                  <CgLoadbarSound className="fill-[#D0D6DE] w-6 h-6 text-2xl text-[#D0D6DE]" />
                  <p className="text-[#00B074] text-2xl font-bold">257k</p>
                </div>
                <p className=" text-xs font-semibold text-gray-400">
                  Total Sales
                </p>
              </div>
            </div>

            <BarCharts data={data} />
          </div>
        </div>
        {/*end card */}

        {/*end card  */}
      </div>
      {/*end card div  */}
      {/* start customer */}
      <div className="flex flex-col w-full bg-white rounded-lg p-5">
        <div className="flex justify-between items-center gap-10">
          <div>
            <h4 className=" font-medium text-xl">Most Favourite Items</h4>
            <p className="text-sm font-normal text-gray-300">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <YearlyFiltter />
        </div>
        {/* card */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-4 text-center py-8 ">
          {/* card contant */}

          <AnalyticsCArd />
          <AnalyticsCArd />
          <AnalyticsCArd />
          <AnalyticsCArd />
          <AnalyticsCArd />
          <AnalyticsCArd />

          {/* end card contant */}
        </div>
        {/*END card */}
      </div>
      {/* END customer */}
    </div>
  );
};

export default Analytics;
