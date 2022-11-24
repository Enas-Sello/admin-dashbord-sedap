import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { TiThMenu } from 'react-icons/ti';
import { CgMenuGridR } from 'react-icons/cg';
import PieChart from '../components/PieChart';
import { BsPersonPlusFill } from 'react-icons/bs';
import FoodCard from '../components/FoodCard';
const Foods = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
          <div className=" dark:bg-lightDark flex justify-start items-center  px-2 rounded-lg bg-white border-none outline-none focus-within:shadow-lg">
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search here"
              value={searchTerm}
              className="p-2 lg:w-80 rounded-lg bg-transparent outline-none "
            />
            <CiSearch className="fill-mainGreen w-10 h-6" />
          </div>
          <div className="flex items-center justify-center flex-row gap-1 md:gap-3">
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
      {/*end nav */}
      {/*start food  */}
      <div className=" p-4 flex  justify-center w-full h-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-6 gap-4 text-center py-8 ">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
      {/*end food */}
      {/* start PieChart */}
      <div className="flex flex-col dark:bg-lightDark bg-white w-ful p-5 w-full rounded-xl shadow-xl">
        <div className="flex justify-between items-center ">
          <h3 className=" font-bold text-base md:text-2xl">Pie chart</h3>
          <fieldset className="flex gap-2">
            <input
              id="Chart"
              className="peer/Chart"
              type="checkbox"
              name="status"
              // checked
            />
            <label
              htmlFor="Chart"
              className="peer-checked/Chart:text-mainGreen text-base md:text-lg font-semibold"
            >
              Chart
            </label>

            <input
              id="Value"
              className="peer/Value border-none"
              type="checkbox"
              name="status"
            />
            <label
              htmlFor="Value"
              className="peer-checked/Value:text-mainGreen text-base md:text-lg font-semibold"
            >
              Show Value
            </label>
          </fieldset>{' '}
        </div>
        <div className="hover:scale-110 duration-500 flex items-center justify-center gap-3 mt-8">
          <PieChart
            value={'75'}
            text={'75'}
            fill={'#FF5B5B'}
            stroke={': rgba(255, 91, 91, 0.15)'}
            title={'Burger'}
          />
          <PieChart
            value={'32'}
            text={'32'}
            fill={'#00B074'}
            stroke={' rgba(0, 176, 116, 0.15)'}
            title={'Pizza'}
          />
          <PieChart
            value={'67'}
            text={'67'}
            fill={'#F7C604'}
            stroke={'rgba(247, 198, 4, 0.15)'}
            title={'Soft Drink'}
          />
        </div>
      </div>
      {/*end PieChart */}
    </div>
  );
};

export default Foods;
