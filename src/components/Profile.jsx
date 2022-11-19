import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/placeholder.png';
const Profile = () => {
  return (
    <div className="flex items-center mt-3 lg:mt-10">
      <div className="w-[1px] h-10 bg-lightGray hidden md:block mr-1"></div>
      <div className="w-[120px]">
        <Link>hello,name</Link>
      </div>
      <div className="-ml-5">
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
