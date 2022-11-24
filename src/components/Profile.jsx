import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/placeholder.png';
import DarkMode from './DarkMode';
const Profile = ({ handleThemeSwitch }) => {
  return (
    <div className="flex items-center justify-center gap-2 w-1/6">
      {/* <DarkMode handleThemeSwitch={handleThemeSwitch} /> */}
      <div className="h-5 w-[1px] bg-black dark:bg-white hidden md:block"></div>
      <div className="">
        <Link>Hello,name</Link>
      </div>
      <div className=" hidden md:flex w-12 h-12  justify-center items-center">
        <img
          src={placeholder}
          alt=""
          className="rounded-full border-2 border-white w-full h-full md:w-10 md:h-10 bg-white object-contain  "
        />
      </div>
    </div>
  );
};

export default Profile;
