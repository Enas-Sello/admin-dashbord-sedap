import React from 'react';
import Notification from './Notification';
import Search from './Search';
import Profile from './Profile';

const Navebar = () => {
  return (
    <div className=" flex gap-2 md:gap-5 w-full mt-5 md:m-0 pb-7">
        <Search />
        <Notification />
        <Profile />
    </div>
  );
};

export default Navebar;
