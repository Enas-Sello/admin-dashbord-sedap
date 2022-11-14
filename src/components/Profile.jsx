import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/placeholder.png';
const Profile = () => {
  return (
    <div className="flex items-center w-full gap-5">
      <div className="w-[1px] h-10 bg-gray-300 hidden md:block"></div>
      <div className='w-[120px]'>
        <Link>
          hello,name
        </Link>
      </div>
      <div>
        <img
          src={placeholder}
          alt=""
          className="rounded-full w-15 h-15 bg-gary-500 object-contain"
        />
      </div>
    </div>
  );
};

export default Profile;
