import React from 'react';
import logo from '../assets/Sedap.png';
import {
  AiOutlineBarChart,
  AiOutlineCalendar,
  AiOutlineWallet,
} from 'react-icons/ai';
import { BiGroup, BiHomeAlt } from 'react-icons/bi';
import { SlNote } from 'react-icons/sl';
import { BsPen, BsCup, BsPerson, BsChatLeftDots } from 'react-icons/bs';
const Sidebar = () =>
{
  
  
  return (
    <div className=" flex flex-col bg-white section-padding h-full capitalize">
      <div className=" px-8">
        <div className="mb-8">
          <img src={logo} alt="" className="mb-5" />
          <span className=" text-xs text-gray-500">Modern Admin Dashboard</span>
        </div>
        <div className="font-normal ">
          <ul className="flex flex-col gap-2">
            <li className=" font-normal flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <BiHomeAlt className="group-hover:fill-emerald-400" />
              <h2 className="group-hover:text-emerald-400 ">dashborad</h2>
            </li>
            <li className="flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <AiOutlineBarChart className="group-hover:fill-emerald-400 group-" />
              <h2 className="group-hover:text-emerald-400 ">Order List</h2>
            </li>
            <li className="flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <BiGroup className="group-hover:fill-emerald-400 group-" />
              <h2 className="group-hover:text-emerald-400 ">Customer</h2>
            </li>
            <li className="flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <AiOutlineBarChart className="group-hover:fill-emerald-400 group-" />
              <h2 className="group-hover:text-emerald-400 ">Analytics</h2>
            </li>
            <li className="flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <BsPen className="group-hover:fill-emerald-400 group-" />
              <h2 className="group-hover:text-emerald-400 ">Reviews</h2>
            </li>
            <li className="flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <BsCup className="group-hover:fill-emerald-400 group-" />
              <h2 className="group-hover:text-emerald-400 ">Foods</h2>
            </li>
            <li className="flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <SlNote className="group-hover:fill-emerald-400 group-" />
              <h2 className="group-hover:text-emerald-400 ">Food Detail</h2>
            </li>
            <li className="flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <BsPerson className="group-hover:fill-emerald-400 group-" />
              <h2 className="group-hover:text-emerald-400 ">Customer Detail</h2>
            </li>
            <li className="flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <AiOutlineCalendar className="group-hover:fill-emerald-400 group-" />
              <h2 className="group-hover:text-emerald-400 ">Calendar</h2>
            </li>
            <li className="flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <BsChatLeftDots className="group-hover:fill-emerald-400 group-" />
              <h2 className="group-hover:text-emerald-400 ">Chat</h2>
            </li>
            <li className="flex items-center gap-5 group hover:bg-emerald-100 rounded-[8px] px-5 py-2">
              <AiOutlineWallet className="group-hover:fill-emerald-400 group-" />
              <h2 className="group-hover:text-emerald-400 ">Wallet</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
