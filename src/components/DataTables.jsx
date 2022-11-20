import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import placeholder2 from '../assets/placeholder2.png';
import Starts from './Starts';

const rows = [
  {
    id: 1143155,
    product: 'Watermelon juice with ice',
    img: `${placeholder2}`,
    course: 'MAIN COURSE',
    reviews: '(454 reviews)',
    Qty: '5x',
    Total: '$10.8',
    Price: '$50.8',
  },
  {
    id: 2235235,
    product: 'Italiano pizza with garlic',
    img: `${placeholder2}`,
    course: 'MAIN COURSE',
    reviews: '(454 reviews)',
    Qty: '5x',
    Total: '$10.8',
    Price: '$50.8',
  },
  {
    id: 2342353,
    product: 'Watermelon juice with ice',
    img: `${placeholder2}`,
    course: 'MAIN COURSE',
    reviews: '(454 reviews)',
    Qty: '5x',
    Total: '$10.8',
    Price: '$50.8',
  },
  {
    id: 2357741,
    product: 'Italiano pizza with garlic',
    img: `${placeholder2}`,
    course: 'MAIN COURSE',
    reviews: '(454 reviews)',
    Qty: '5x',
    Total: '$10.8',
    Price: '$50.8',
  },
  {
    id: 2342355,
    product: 'Watermelon juice',
    img: `${placeholder2}`,
    course: 'MAIN COURSE',
    reviews: '(454 reviews)',
    Qty: '5x',
    Total: '$10.8',
    Price: '$50.8',
  },
];

const DataTables = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-mainGreen ">
            <TableCell>
              <p className="text-white font-medium text-xl ml-2">Items</p>{' '}
            </TableCell>
            <TableCell align="">
              {' '}
              <p className="text-white font-medium text-xl">Qty</p>{' '}
            </TableCell>
            <TableCell align="">
              <p className="text-white font-medium text-xl">Total</p>
            </TableCell>
            <TableCell align="">
              <p className="text-white font-medium text-xl">Price</p>
            </TableCell>
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
                    <p className=" text-lg font-bold text-lightGray">
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
