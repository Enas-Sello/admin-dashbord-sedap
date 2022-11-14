import React from 'react';
import placeholder from '../assets/placeholder.png';
const Profile = () => {
  return (
    <div className='flex items-center w-full gap-5'>
      <div className='w-[1px] h-10 bg-gray-300'></div>
      <div>
        <h4>name</h4>
      </div>
      <div>
        <img
          src={placeholder}
          alt=""
          className="rounded-full w-10 h-10 bg-gary-500"
        />
      </div>
    </div>
  );
};

export default Profile;
