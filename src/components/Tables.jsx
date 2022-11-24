import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { SlOptions } from 'react-icons/sl';
export default function Tables({
  rows,
  head,
  headColor,
  orderOptions,
  CustomerOptions,
}) {
  // const [menu, setMenu] = useState(true);
  // const menutogle = () => {

  //   console.log(menu);
  // };
  return (
    <TableContainer component={Paper} className="rounded-xl">
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map((header) => (
              <TableCell key={header.id} className={`${headColor} `}>
                <div className="flex gap- 2 items-center text-white  md:font-semibold font-normal text-xs md:text-base">
                  <h4>{header.title}</h4>
                  <div className="">
                    <IoMdArrowDropup className="hidden md:block" />
                    <IoMdArrowDropdown className="hidden md:block -mt-2" />
                  </div>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              className="dark:bg-lightDark  hover:bg-mainGray "
            >
              <TableCell component="th" scope="row">
                <h4 className="text-xs  dark:text-white  md:text-base -mr-5 sm:m-auto ">
                  {row.Order}
                </h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4 className="text-xs  dark:text-white">{row.Date}</h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4 className="text-xs  dark:text-white  md:text-base ">
                  {row.Name}
                </h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4 className="text-xs  dark:text-white md:text-base -mr-5 sm:m-auto ">
                  {row.Location}
                </h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4 className="text-xs  dark:text-white md:text-base -mr-5 sm:m-auto">
                  {row.Amount}
                </h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <div className="flex w-full justify-between items-center relative">
                  <h4
                    className={
                      row.Status === 'New Order'
                        ? 'w-[80px] sm:w-fit md:px-4 md:py-2 py-2  px-2 rounded-xl text-mainRed bg-lightRed text-xs md:text-base'
                        : row.Status === 'On Delivery'
                        ? 'w-[85px] sm:w-fit md:px-4 md:py-2 py-2  px-2 rounded-xl text-mainBlue bg-lightBlue text-xs md:text-base'
                        : row.Status === 'Delivered'
                        ? 'w-[80px] sm:w-fit md:px-4 md:py-2 py-2  px-2 rounded-xl text-mainGreen bg-lightGreen text-xs md:text-base'
                        : '  md:px-4 md:py-2 py-2 px-2 rounded-xl dark:bg-lightGray bg-mainGray text-xs md:text-base'
                    }
                  >
                    {row.Status}
                  </h4>
                  <div className="group relative">
                    <SlOptions
                      className="text-lightGray dark:text-white group-hover:text-mainBlue"
                      // onClick={() => setMenu(!menu)}
                    />
                    <div
                      className="dark:bg-darkMode  group-hover:block hidden absolute bg-white rounded-xl shadow-lg p-3 w-32 top-0 right-3 z-20"
                    >
                      <div className="flex flex-col w-full h-full justify-between">
                        {orderOptions && (
                          <div className=" flex flex-col w-full justify-between items-center gap-3">
                            <button className="text-mainBlue font-semibold hover:hoverAnimat  ">
                              {orderOptions.accept}
                            </button>
                            <button className="text-mainRed font-semibold hover:hoverAnimat ">
                              {orderOptions.reject}
                            </button>
                          </div>
                        )}
                        {CustomerOptions && (
                          <div className=" flex flex-col w-full justify-between items-start gap-3">
                            {' '}
                            <button className="font-semibold hover:hoverAnimat hover:text-mainBlue">
                              {CustomerOptions.detail}
                            </button>
                            <button className="font-semibold hover:hoverAnimat hover:text-mainBlue">
                              {CustomerOptions.edit}
                            </button>
                            <button className="font-semibold hover:hoverAnimat hover:text-mainBlue">
                              {CustomerOptions.delete}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
