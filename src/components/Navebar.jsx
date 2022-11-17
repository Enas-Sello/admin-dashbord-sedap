import React from 'react';
import Notification from './Notification';
import Search from './Search';
import Profile from './Profile';

const Navebar = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center md:gap-3  lg:w-11/12 lg:mt-5 md:m-8  ">
      <Search />
      <Notification />
      <Profile />
    </div>
  );
};

export default Navebar;
