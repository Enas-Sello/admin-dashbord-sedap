import React from 'react';

const Fillter = (prop) => {
  return (
    <div className={prop.class}>
      <div className={` bg-${prop.color} rounded-xl py-2 px-2 `}>
        <prop.icon className={`fill-${prop.fill} w-6 h-6`} />
      </div>
      <div className="flex flex-col ">
        <h4 className="font-medium text-lg">{prop.main}</h4>
        <h6 className="font-normal text-sm">{prop.date}</h6>
      </div>
      <prop.arrow className=" cursor-pointer w-12 h-5" />
    </div>
  );
};

export default Fillter;
