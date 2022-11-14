import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Search = () => {
  return (
    <div>
      <div className="w-full flex-1 ">
        <div className="py-2 px-6  flex bg-white items-center rounded-lg w-[700px]">
          <input
            type="text"
            className=" bg-transparent text-base font-normal w-full"
            placeholder="Search here"
          />
          <CiSearch className="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
