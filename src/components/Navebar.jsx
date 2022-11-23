import React from 'react';
import Notification from './Notification';
import Search from './Search';
import Profile from './Profile';

const Navebar = ({ handleThemeSwitch }) => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center gap-4   mt-0 md:mt-10   ">
      <Search />
      <Notification />
      <Profile handleThemeSwitch={handleThemeSwitch} />
    </div>
  );
};

export default Navebar;
