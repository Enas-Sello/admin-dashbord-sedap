import React from 'react';
import Notification from './Notification';
import Search from './Search';
import Profile from './Profile';

const Navebar = () => {
  return (
    <div className="section-padding">
      <div className="flex w-full justify-between  gap-5 items-center">
        <Search />
        <Notification />
        <Profile />
      </div>
    </div>
  );
};

export default Navebar;
