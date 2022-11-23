import React, { useState } from 'react';
import placeholder2 from '../assets/placeholder2.png';
import { BsPersonPlusFill } from 'react-icons/bs';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { CgMenuGridR } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { TiThMenu } from 'react-icons/ti';
import YearlyFiltter from '../components/YearlyFiltter';
import AreaCharts from '../components/AreaCharts';
import FoodDetailsRewiew from '../components/FoodDetailsRewiew';
const FoodDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = [
    {
      name: 'Sunday',
      uv: 8000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Monday',
      uv: 5000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Tuesday',
      uv: 4000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Wednesday',
      uv: 8780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Thursday',
      uv: 6890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Friday',
      uv: 9390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Saturday',
      uv: 6490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="flex flex-col gap-8 p-4">
      {/* start nav */}
      <div className="flex flex-col md:flex-row justify-between  items-center">
        <div className="flex items-center md:items-start flex-col gap- justify-center">
          <h1 className="font-semibold text-3xl">Foods</h1>
          <p className="text-lightGray text-lg">
            Here is your menus summary with graph view
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-1 md:gap-3">
          <div className="dark:bg-lightDark flex justify-start items-center  px-2 rounded-lg bg-white border-none outline-none focus-within:shadow-lg">
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search here"
              value={searchTerm}
              className="p-2 lg:w-80 rounded-lg bg-transparent outline-none "
            />
            <CiSearch className="fill-mainGreen w-10 h-6" />
          </div>
          <div className="flex items-center justify-center mt-1 md:mt-0 flex-row gap-3">
            <div className="dark:bg-lightDark bg-white py-2 px-3 rounded-lg shadow-lg">
              <TiThMenu className="text-mainGreen w-5 h-5" />
            </div>
            <div className="dark:bg-lightDark bg-white py-2 px-3 rounded-lg shadow-lg">
              <CgMenuGridR className="w-5 h-5 text-mainGreen" />
            </div>
            <div className="hover:scale-110 duration-500  flex items-center gap-1 bg-mainGreen py-2 px-2  rounded-lg font-bold text-[15px] shadow-lg">
              <BsPersonPlusFill color="white" />
              <button className="w-20 text-white">New Menu</button>
            </div>
          </div>
        </div>
      </div>
      {/* end nav */}

      {/* start main */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="dark:bg-lightDark bg-white rounded-lg flex flex-col p-5 shadow-lg">
          <div className="flex w-full  justify-between lg:gap-10 items-center">
            <h4 className=" font-semibold text-[28px]">Detail Menus</h4>
            <h6 className="text-lightGray text-lg">
              Category: Food / <span className="text-mainGreen">Burger</span>
            </h6>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="lg:flex-1">
              <img
                src={placeholder2}
                className="lock w-48 h-48 object-contain rounded-lg bg-slate-200"
                alt=""
              />
            </div>
            <div className="flex lg:flex-1 flex-col  items-start">
              <div className=" relative">
                <p className=" font-bold text-xs text-mainGreen foode-details-defore">
                  Stock Available
                </p>
              </div>
              <h4 className=" font-semibold text-[28px]">
                Burger Jumbo Special with Spicy
              </h4>
              <p className="text-xs text-lightGray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div className="flex gap-2">
                <div className="hover:scale-110 duration-500 flex gap-2 items-center justify-center rounded-lg py-3 px-5 mt-5 font-medium bg-mainGreen text-white">
                  <BiMessageSquareAdd color="white" size={' 16px'} />
                  Add Menu
                </div>
                <button className="bg-mainGray rounded-lg py-3 px-5 mt-5 font-medium ">
                  Edit Menu
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col  h-full w-full justify-between ">
            <hr className="block md:hidden lg:block my-4 border border-dashed" />
            <div className="flex flex-col gap-2">
              <h5 className=" text-2xl">Nutrition Info</h5>
              <p className="text-lightGray text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <hr className=" my-4 md:mx-4 xl:mx-0 h-full border-1 border-dashed	" />
            <div className="flex flex-col gap-2">
              <h5 className=" text-2xl">Ingredients</h5>
              <p className="text-lightGray text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>{' '}
          </div>
        </div>
        <div className="dark:bg-lightDark flex  flex-col justify-between p-5 bg-white rounded-xl drop-shadow-main">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="flex flex-col gap-2">
              <h4 className=" text-xl font-medium">Revenue</h4>
              <p className=" text-xs text-lightGray">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <YearlyFiltter />
          </div>
          <div>
            <AreaCharts data={data} />
          </div>
        </div>
      </div>
      {/* end main */}

      {/* start Customer Reviews */}
      <div className="flex flex-col w-full justify-between">
        <p className=" text-3xl font-semibold">Customer Reviews</p>
        <div className="w-full grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8 gap-4 text-center p-8">
          {/* start card */}
          <FoodDetailsRewiew />
          <FoodDetailsRewiew />
          <FoodDetailsRewiew />
          <FoodDetailsRewiew />
          {/* end card */}
        </div>
      </div>
      {/* end Customer Reviews */}
    </div>
  );
};

export default FoodDetails;
