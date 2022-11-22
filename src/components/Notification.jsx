import React from 'react';
import { RiNotification2Line } from 'react-icons/ri';
import { BsChatLeftDots } from 'react-icons/bs';
import { BiGift } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import NotifivationBadge from './NotifivationBadge';

const Notification = () => {
  return (
    <div className="hidden md:flex justify-between gap-2 items-center md:mt-3 lg:mt-10">
      <div className=" py-2 px-3 bg-lightGreen rounded-xl relative ">
        <RiNotification2Line className=" fill-mainGreen stroke-mainGreen text-mainGreen" />
        <NotifivationBadge number={'180'} bg={'mainGreen'} />
      </div>
      <div className=" py-2 px-3 bg-lightBlue rounded-xl relative">
        <BsChatLeftDots className=" fill-mainBlue stroke-mainBlue " />
        <NotifivationBadge number={'99'} bg={'mainBlue'} />
      </div>
      <div className=" py-2 px-3 bg-mainGray rounded-xl relative">
        <BiGift className=" fill-lightGray" />
        <NotifivationBadge number={'3'} bg={'lightGray'} />
      </div>
      <div className=" py-2 px-3 bg-lightRed rounded-xl relative">
        <FiSettings className=" stroke-mainRed" />
        <NotifivationBadge number={'15'} bg={'mainRed'} />
      </div>
    </div>
  );
};

export default Notification;
