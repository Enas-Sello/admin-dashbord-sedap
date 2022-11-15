import React from 'react';
import Notification from './Notification';
import Search from './Search';
import Profile from './Profile';

const Navebar = () => {
  return (
    <div className=" flex items-center justify-center md:gap-3 w-full mt-5 md:m-8 pb-7 ">
      <Search />
      <Notification />
      <Profile />
    </div>
  );
};

export default Navebar;
