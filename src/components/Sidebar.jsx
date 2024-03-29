import React from 'react';
import Sedap from '../assets/Sedap.png';
import SedapLight from '../assets/SedapLight.png';
import chef from '../assets/chef.png';
import {
  AiOutlineBarChart,
  AiOutlineCalendar,
  AiOutlineWallet,
} from 'react-icons/ai';
import { BiGroup, BiHomeAlt } from 'react-icons/bi';
import { SlNote } from 'react-icons/sl';
import {
  BsPen,
  BsCup,
  BsPerson,
  BsChatLeftDots,
  BsListNested,
} from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { CiFileOn } from 'react-icons/ci';
const Sidebar = ({ handleThemeSwitch }) => {
  const handelcloseToggle = () => {
    if (handelcloseToggle) handelcloseToggle(false);
  };

  const isNotActiveStyle =
    'dark:text-white flex items-center p-1 gap-3 text-lightGray hover:font-bold text-lg transition-all w-52 duration-200 ease-in-out capitalize';

  const isActiveStyle =
    'flex items-center px-5 py-2 gap-3 font-bold border-l-2 rounded-r-[8px] border-mainGreen text-lg w-52 bg-lightGreen text-mainGreen transition-all duration-200 ease-in-out capitalize';

  return (
    <div className="dark:bg-lightDark dark:text-white flex flex-col justify-between items-center bg-white h-screen overflow-y-scroll  p-3 hide-scrollbar ">
      <div className="relative flex flex-col mt-2">
        <div className=" absolute top-0 right-0"></div>
        <Link
          to="/"
          className="hidden md:flex flex-col  gap-2 my-6 w-109 items-center"
          onClick={handelcloseToggle}
        >
          <img
            src={SedapLight}
            alt="SedapLight"
            className="w-32 hidden dark:block"
          />
          <img src={Sedap} alt="Sedap" className="w-32  dark:hidden" />

          <span className=" text-xs text-lightGray">
            Modern Admin Dashboard
          </span>
        </Link>

        <div className="flex  flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <BiHomeAlt />
            dashborad
          </NavLink>
          <NavLink
            to="OrderList"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <BsListNested />
            Order List
          </NavLink>
          <NavLink
            to="OrderDetail"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <CiFileOn />
            Order Detail{' '}
          </NavLink>
          <NavLink
            to="Customer"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <BiGroup />
            Customer
          </NavLink>
          <NavLink
            to="Analytics"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <AiOutlineBarChart />
            Analytics
          </NavLink>
          <NavLink
            to="Review"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <BsPen />
            Reviews
          </NavLink>
          <NavLink
            to="Foods"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <BsCup />
            Foods
          </NavLink>
          <NavLink
            to="FoodDetails"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <SlNote />
            Food Detail
          </NavLink>
          <NavLink
            to="CustomerDetail"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <BsPerson />
            Customer Detail
          </NavLink>
          <NavLink
            to="Calender"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <AiOutlineCalendar />
            Calendar
          </NavLink>
          <NavLink
            to="Chat"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <BsChatLeftDots />
            Chat
          </NavLink>
          <NavLink
            to="Wallet"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handelcloseToggle}
          >
            <AiOutlineWallet />
            Wallet
          </NavLink>
        </div>
      </div>
      <div className="  flex justify-between items-center w-64 bg-mainGreen p-4 rounded-lg shadow-2xl mt-2">
        <div className="flex flex-col">
          <h4 className="text-white font-medium text-xs">
            Please, organize your menus through button bellow!
          </h4>
          <button className="bg-white rounded-lg py-3 px-5 mt-5 font-medium text-[15px] text-lightGray">
            + Add Menus
          </button>
        </div>
        <img
          src={chef}
          alt=""
          className="object-contain m-2 w-[76.59px] h-[90.83px]"
        />
      </div>
      <div className="flex flex-col">
        <div className="my-5">
          <p className="font-bold text-sm text-lightGray">
            Sedap Restaurant Admin Dashboard
          </p>
          <p className=" text-[13px] text-lightGray">
            © 2020 All Rights Reserved
          </p>
        </div>
        <p className="mb-5 font-normal text-sm text-lightGray">
          Made with ♥ by Peterdraw
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
