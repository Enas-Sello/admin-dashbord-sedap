import React from 'react';
import Notification from './Notification';
import Search from './Search';
import Profile from './Profile';
import DarkMode from './DarkMode';

const Navebar = ({ handleThemeSwitch }) => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center gap-4 w-full    mt-0 md:mt-10   ">
      <Search />
      <Notification />
      <DarkMode handleThemeSwitch={handleThemeSwitch} />
      <Profile handleThemeSwitch={handleThemeSwitch} />
    </div>
  );
};

export default Navebar;
