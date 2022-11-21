import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Starts from './Starts';


const DataTables = ({ head, rows ,headColor }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow className={`${headColor}`} >
            {head.map((header) => (
              <TableCell key={header.id}>
                <p className="text-white font-medium text-xl ml-2">
                  {header.title}
                </p>{' '}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <div className="flex gap-5 items-center">
                  <img
                    src={row.img}
                    alt=""
                    className="hidden md:block w-20 rounded-xl object-contain bg-mainGray"
                  />
                  <div className="flex flex-col justify-between ">
                    <p className=" text-xs font-semibold text-mainBlue">
                      {row.course}
                    </p>
                    <p className="text-xs sm:text-lg font-bold text-lightGray">
                      {row.product}
                    </p>
                    <div className="flex gap-3 items-center">
                      <Starts />
                      <p className=" text-xs font-semibold text-gray-400">
                        {row.reviews}
                      </p>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell align="">{row.Qty}</TableCell>
              <TableCell align="">{row.Total}</TableCell>
              <TableCell align="">{row.Price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DataTables;
