import React from 'react';

const Fillter = (prop) => {
  return (
    <div className={`${prop.classList} dark:bg-lightDark`}>
      <div className={` bg-${prop.color} rounded-xl py-2 px-2 `}>
        <prop.icon className={`fill-${prop.fill} md:w-6 md:h-6`} />
      </div>
      <div className="flex flex-col ">
        <h4 className="font-medium text-base md:text-lg">{prop.main}</h4>
        <h6 className="font-normal text-xs md:ext-sm">{prop.date}</h6>
      </div>
      <prop.arrow className=" cursor-pointer md:w-12 md:h-5" />
    </div>
  );
};

export default Fillter;
