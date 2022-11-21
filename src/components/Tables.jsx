import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { SlOptions } from 'react-icons/sl';
export default function Tables({ rows, head, headColor }) {
  const menutogle = () => {};
  return (
    <TableContainer component={Paper} className="rounded-xl">
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {head.map((header) => (
              <TableCell key={header.id} className={`${headColor} `}>
                <div className="flex gap-2 items-center text-white  font-semibold text-base">
                  <h4>{header.title}</h4>
                  <div className="">
                    <IoMdArrowDropup />
                    <IoMdArrowDropdown className="-mt-2" />
                  </div>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} className=" text-mainGray hover:bg-mainGray">
              <TableCell component="th" scope="row">
                <h4>{row.Order}</h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4>{row.Date}</h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4>{row.Name}</h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4>{row.Location}</h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <h4>{row.Amount}</h4>
              </TableCell>
              <TableCell component="th" scope="row">
                <div className="flex w-full justify-between items-center">
                  <h4
                    className={
                      row.Status === 'New Order'
                        ? 'py-2 px-3 rounded-xl text-mainRed bg-lightRed'
                        : row.Status === 'On Delivery'
                        ? 'py-2 px-3 rounded-xl text-mainBlue bg-lightBlue'
                        : row.Status === 'Delivered'
                        ? 'py-2 px-3 rounded-xl text-mainGreen bg-lightGreen'
                        : 'py-2 px-3 rounded-xl bg-mainGray'
                    }
                  >
                    {row.Status}
                  </h4>
                  <SlOptions onClick={menutogle} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
