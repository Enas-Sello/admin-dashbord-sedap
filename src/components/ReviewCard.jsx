import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import placeholder from '../assets/placeholder.png';
import image4 from '../assets/image4.png';
const ReviewCard = () => {
  return (
    
      <div className=" bg-white px-3 py-6 rounded-xl w-full">
        <div className=" flex flex-col w-full">
          <div className="flex items-center gap-5 mb-4">
            <img
              src={placeholder}
              alt=""
              className=" object-contain w-14 h-14"
            />
            <div>
              <p className="font-medium">full name</p>
              <span className=" text-[15px] text-gray-300 -mt-2">
                2 days ago
              </span>
            </div>
          </div>
          <p className="text-center font-medium text-sm w-[250px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text{' '}
          </p>
          <div className="flex ml-10 mt-5 items-center">
            <div className="flex">
              <AiFillStar className="fill-amber-400" />
              <AiFillStar className="fill-amber-400" />
              <AiFillStar className="fill-amber-400" />
              <AiFillStar className="fill-amber-400" />
              <AiFillStar className="fill-gray-400" />
            </div>
            <p className="font-medium text-lg ml-3">4.5</p>
          </div>
        </div>
        {/* <div className=" absolute top-[50%] left-[50%] -mr-20">
        <img src={image4} alt="" className=" object-fill rounded-full" />
      </div> */}
      </div>
    
  );
};

export default ReviewCard;
