import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SlNote } from 'react-icons/sl';

import Fillter from '../components/Fillter';
import Tables from '../components/Tables';
const OrderList = () => {
  const head = [
    {
      id: 1,
      title: 'Order ID',
      name: 'Date',
    },
    {
      id: 2,
      title: 'Date',
      name: 'Location',
    },
    {
      id: 3,
      title: 'Customer Name',
      name: 'Status Order',
    },
    {
      id: 4,
      title: 'Location',
      name: 'Status Order',
    },
    {
      id: 5,
      title: 'Status Order',
      name: 'Status Order',
    },
    {
      id: 6,
      title: 'Amount',
      name: 'Amount',
    },
  ];
  const rows = [
    {
      id: 1,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: 'New Order',
    },
    {
      id: 2,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: 'On Delivery',
    },
    {
      id: 3,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: 'Delivered',
    },
    {
      id: 4,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: 'New Order',
    },
    {
      id: 5,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: 'New Order',
    },
    {
      id: 6,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: 'New Order',
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3 justify-center">
          <h1 className="route-title">Your Orders</h1>
          <p className="text-gray-500">This is your order list data</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Fillter
            class={'bg-white flex gap-3 items-center rounded-lg px-4 py-2'}
            icon={SlNote}
            arrow={MdKeyboardArrowDown}
            main={'All Status'}
            date={''}
            fill={'mainGreen'}
            color={'lightGreen'}
          />
          <Fillter
            class={'bg-white flex gap-3 items-center rounded-lg px-4 py-2'}
            icon={AiOutlineCalendar}
            arrow={MdKeyboardArrowDown}
            main={'Today'}
            date={''}
            fill={'mainGreen'}
            color={'lightGreen'}
          />
        </div>
      </div>
      <Tables head={head} rows={rows} headColor={'bg-mainGreen'} />

      {/* <div>
        <TableHead color={'mainGreen'} data={data} />
      </div>
      <div>
        <Table textColor={'mainRed'} bgcolor={'lightRed'} title={'New Order'} />
        <Table textColor={'mainBlue'} bgcolor={'lightBlue'} title={'On Delivery'} />
        <Table
          textColor={'mainGreen'}
          bgcolor={'lightGreen'}
          title={'Delivered'}
        />
      </div> */}
    </div>
  );
};

export default OrderList;
