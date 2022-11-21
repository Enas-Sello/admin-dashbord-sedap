import React from 'react';
import { SlOptions } from 'react-icons/sl';

const Table = ( prop ) =>
{
    
    const menutogle =()=>{}
  return (
    <div className="bg-white flex items-center justify-between py-3 px-8 rounded-xl font-medium text-base mb-1">
      <div className='flex gap-5 items-center">'>
        <div className="flex gap-20 justify-between items-center">
          <h4>#555231</h4>
          <h4>26 March 2020</h4>
        </div>
      </div>
      <div className='flex gap-5 items-center">'>
        <div className="flex gap-20 justify-between items-center">
          <h4>Mikasa Ackerman</h4>
          <h4>Corner Street </h4>
        </div>
      </div>
      <div className='flex items-center gap-5 items-center">'>
        <div className="flex gap-20 justify-between items-center">
          <h4 className='-mr-10'>$184.52</h4>
          <h4
            className={`text-${prop.textColor} bg-${prop.bgcolor} py-2 px-3 rounded-xl`}
          >
            {prop.title}
          </h4>
        </div>

        <SlOptions onClick={menutogle} />
      </div>
    </div>
  );
};

export default Table;
