import React from 'react';
import Fillter from '../components/Fillter';
import { AiOutlineArrowDown, AiOutlineCalendar } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Card from '../components/Card';
import { IoMdArrowDropdown } from 'react-icons/io';
import { SlOptionsVertical } from 'react-icons/sl';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReviewCard from '../components/ReviewCard';
// import ReviewSlide from '../components/ReviewSlide';
import PieChart from '../components/PieChart';
import AreaCharts from '../components/AreaCharts';
import LineCharts from '../components/LineCharts';
import BarCharts from '../components/BarCharts';
const Dashbord = () => {
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
    <div className="section-padding  h-screen capitalize">
      <div className="m-4 flex flex-col lg:flex-row  justify-between items-center">
        <div>
          <h1 className="font-semibold text-3xl">dashbord</h1>
          <p className="text-gray-500 text-lg">
            Hi, Samantha. Welcome back to Sedap Admin!
          </p>
        </div>
        <Fillter
          class={
            'bg-white flex gap-3 items-center text-gray-600 rounded-lg px-4 py-2'
          }
          icon={AiOutlineCalendar}
          arrow={MdKeyboardArrowDown}
          main={'Filter Periode'}
          date={'17 April 2020 - 21 May 2020'}
          color={'blue'}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 w-full items-center section-padding">
        <Card />
        <Card />
        <Card />
      </div>
      {/* charts1 */}
      <div className="flex flex-col md:flex-row  mt-10 gap-10  ">
        {/*start prpgresspar  */}

        <div className="flex flex-col bg-white w-full py-8 px-8 rounded-xl shadow-xl">
          <div className="flex justify-between items-center ">
            <h3 className=" font-bold text-2xl">Pie chart</h3>
            <p>ggg</p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-8">
            <PieChart
              value={'80'}
              text={'80'}
              fill={'#FF5B5B'}
              stroke={': rgba(255, 91, 91, 0.15)'}
              title={'Total Order'}
            />
            <PieChart
              value={'22'}
              text={'22'}
              fill={'#00B074'}
              stroke={' rgba(0, 176, 116, 0.15)'}
              title={'Customer Growth'}
            />
            <PieChart
              value={'62'}
              text={'62'}
              fill={'#2D9CDB'}
              stroke={'rgba(45, 156, 219, 0.15)'}
              title={'Total Revenue'}
            />
          </div>
        </div>
        {/*end prpgresspar  */}
        <div className="flex flex-col bg-white w-full py-8 px-8 rounded-xl shadow-xl">
          <div className="flex justify-between items-center ">
            <h3 className=" font-bold text-2xl">Chart Order</h3>
            <div className="flex gap-2 items-center border border-[#2D9CDB] rounded-xl py-2 px-3">
              <AiOutlineArrowDown className="fill-[#2D9CDB]" />
              <button className="text-[#2D9CDB]">Save Report</button>
            </div>
          </div>

          <AreaCharts data={data} />
        </div>
      </div>
      {/*end charts1 */}
      {/*start charts2 */}
      <div className="flex flex-col md:flex-row  mt-10 gap-10  ">
        <div className="flex flex-col bg-white w-full py-8 px-8 rounded-xl shadow-xl">
          <div className="flex justify-between items-center ">
            <h3 className=" font-bold text-2xl">Total Revenue</h3>
            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <p className="text-gray-400 ">2020</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <p className="text-gray-400 ">2020</p>
              </div>
            </div>
          </div>
          <LineCharts data={data} />
        </div>
        <div className="flex flex-col bg-white w-full py-8 px-8 rounded-xl shadow-xl">
          <div className="flex justify-between  items-center ">
            <h3 className=" font-bold text-2xl">Customer Map</h3>
            <div className="flex gap-2 items-center border border-gray-500 rounded-xl py-2 px-3">
              <button className="">Weekly</button>
              <IoMdArrowDropdown className="fill-red-500 w-6" />
            </div>
            <SlOptionsVertical className="fill-gray-500 w-6" />
          </div>

          <BarCharts data={ data} />
        </div>
      </div>
      {/*end charts2 */}

      {/*review */}
      <div className=" flex flex-col relative">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-5 my-10">
            <h3 className=" font-semibold text-3xl ">Customer Review</h3>
            <p className=" font-medium text-lg">
              Eum fuga consequuntur utadsjn et.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white py-3 px-2 rounded-xl">
              <IoIosArrowBack className=" fill-green-500" />{' '}
            </div>
            <div className="bg-white py-3 px-2 rounded-xl">
              <IoIosArrowForward className=" fill-green-500" />{' '}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-between items-center my-5">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        {/* <ReviewSlide /> */}
      </div>
    </div>
  );
};

export default Dashbord;
