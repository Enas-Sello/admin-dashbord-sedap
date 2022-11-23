import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const Search = () =>
{
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="dark:bg-lightDark flex justify-start items-center   px-2 rounded-lg bg-white border-none outline-none focus-within:shadow-lg ">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        value={searchTerm}
        className="p-2  lg:w-[600px] bg-transparent outline-none "
      />
      <CiSearch className="" />
    </div>
  );
};

export default Search;
