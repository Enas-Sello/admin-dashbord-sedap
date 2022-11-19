import React from 'react';
import { GrNotification } from 'react-icons/gr';
import { BsChatLeftDots } from 'react-icons/bs';
import { BiGift } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const Notification = () => {
  return (
    <div className="hidden md:flex justify-between gap-2 items-center md:mt-3 lg:mt-10">
      <div className=" py-2 px-3 bg-lightGreen rounded-xl relative ">
        <GrNotification className=" fill-mainGreen stroke-mainGreen text-mainGreen notification" />
      </div>
      <div className=" py-2 px-3 bg-lightBlue rounded-xl">
        <BsChatLeftDots className=" fill-mainBlue stroke-mainBlue" />
      </div>
      <div className=" py-2 px-3 bg-violet-200 rounded-xl">
        <BiGift className=" fill-violet-400" />
      </div>
      <div className=" py-2 px-3 bg-lightRed rounded-xl">
        <FiSettings className=" stroke-mainRed" />
      </div>
    </div>
  );
};

export default Notification;
