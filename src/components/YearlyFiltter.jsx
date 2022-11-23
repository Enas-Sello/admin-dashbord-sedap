import React from 'react'

const YearlyFiltter = () => {
  return (
    <div className="dark:bg-darkMode bg-gray-200 rounded-full">
      <div className="flex justify-between gap-5  py-2 px-4">
        <p className="rounded-full dark:bg-lightDark  bg-white py-1 px-6 ">
          Monthly
        </p>
        <p>Weekly</p>
        <p>Daily</p>
      </div>
    </div>
  );
}

export default YearlyFiltter