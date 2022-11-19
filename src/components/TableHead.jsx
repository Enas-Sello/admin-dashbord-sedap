import React from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const TableHead = ( prop ) =>
{
    return (
      <div
        className={`flex  items-center justify-between bg-${prop.color } py-3 px-8 rounded-xl text-white font-semibold text-lg mb-5`}
      >
        {prop.data.map((x) => (
          <div key={x.id} className="flex gap-5 items-center">
            <div className="flex gap-2 items-center">
              <h4>{x.title}</h4>
              <div className="">
                <IoMdArrowDropup />
                <IoMdArrowDropdown className="-mt-2" />
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <h4>{x.name}</h4>
              <div className="">
                <IoMdArrowDropup />
                <IoMdArrowDropdown className="-mt-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default TableHead;
