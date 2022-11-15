import React from 'react';

const Fillter = (prop) => {
  return (
    <div className={prop.class}>
      <div className={` bg-${prop.color}-50 rounded-xl py-2 px-2`}>
        <prop.icon className={`fill-${prop.color}-400 w-6 h-6`} />
      </div>
      <div className="flex flex-col ">
        <h4 className="font-medium text-lg">{prop.main}</h4>
        <h6 className="font-normal text-base">{prop.date}</h6>
      </div>
      <prop.arrow className="fill-gray-500 cursor-pointer" />
    </div>
  );
};

export default Fillter;
