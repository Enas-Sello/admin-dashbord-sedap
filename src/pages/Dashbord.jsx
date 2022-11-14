import React from 'react';
import Fillter from '../components/Fillter';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Card from '../components/Card';
import ReviewCard from '../components/ReviewCard';
const Dashbord = () => {
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
      <div className="flex flex-col md:flex-row gap-10 w-full items-center section-padding">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center my-5">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Dashbord;
