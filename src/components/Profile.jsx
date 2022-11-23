import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/placeholder.png';
import DarkMode from './DarkMode';
const Profile = ({ handleThemeSwitch }) => {
  return (
    <div className="flex items-center gap-2 ">
      <DarkMode handleThemeSwitch={handleThemeSwitch} />

      <div className="">
        <Link>Hello,name</Link>
      </div>
      <div className="">
        <img
          src={placeholder}
          alt=""
          className="rounded-full border-2 border-white  w-12 bg-white object-contain  "
        />
      </div>
    </div>
  );
};

export default Profile;
