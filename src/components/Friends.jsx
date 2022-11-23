import React from 'react'
import placeholder from '../assets/placeholder.png';

const Friends = () => {
  return (
    <>
      {/* msg */}
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2">
          <img
            src={placeholder}
            className="bg-rose-200 rounded-full w-12 h-12 object-contain"
            alt=""
          />
          <div className="flex flex-col">
            <p className=" text-lg font-medium">Robert Johanson</p>
            <p className=" text-sm  font-medium">Hi David, can you ...</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" text-xs text-gray-400  font-normal">2 min ago</p>
          <p className=" bg-mainBlue py-1 px-2 text-center rounded-lg text-sm font-normal text-white">
            2
          </p>
        </div>
      </div>
      {/*end msg */}
    </>
  );
}

export default Friends