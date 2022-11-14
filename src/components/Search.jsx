import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-start items-center  w-full  px-2 rounded-lg bg-white border-none outline-none focus-within:shadow-lg mt-10">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        value={searchTerm}
        className="p-2 w-full md:w-[700px] bg-white outline-none "
      />
      <CiSearch className="" />
    </div>
  );
};

export default Search;
