import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SlNote } from 'react-icons/sl';

import Fillter from '../components/Fillter';
import Table from '../components/Table';
import TableHead from '../components/TableHead';
const OrderList = () => {
  const data = [
    {
      id: 1,
      title: 'Order ID',
      name: 'Date',
    },
    {
      id: 1,
      title: 'Customer Name',
      name: 'Location',
    },
    {
      id: 1,
      title: 'Amount',
      name: 'Status Order',
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
      <div>
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
      </div>
    </div>
  );
};

export default OrderList;
