import React from 'react';
import { GrNotification } from 'react-icons/gr';
import { BsChatLeftDots } from 'react-icons/bs';
import { BiGift } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const Notification = () => {
  return (
    <div className="flex justify-between w-full gap-2 items-center">
      <div className=" py-2 px-3 bg-blue-300 rounded-xl relative ">
        <GrNotification className=" fill-blue-400 stroke-blue-400 notification" />
      </div>
      <div className=" py-2 px-3 bg-blue-300 rounded-xl">
        <BsChatLeftDots className=" fill-blue-500 stroke-blue-500" />
      </div>
      <div className=" py-2 px-3 bg-violet-300 rounded-xl">
        <BiGift className=" fill-violet-500" />
      </div>
      <div className=" py-2 px-3 bg-red-300 rounded-xl">
        <FiSettings className=" stroke-red-400" />
      </div>
    </div>
  );
};

export default Notification;
