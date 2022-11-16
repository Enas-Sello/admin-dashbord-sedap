import React from 'react';
import Fillter from '../components/Fillter';
import { RiSoundModuleLine } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Table from '../components/Table';
import TableHead from '../components/TableHead';

const Customer = () => {
  const data = [
    {
      id: 1,
      title: 'Customer ID',
      name: 'Join Date',
    },
    {
      id: 1,
      title: 'Customer Name',
      name: 'Location',
    },
    {
      id: 1,
      title: 'Total Spent',
      name: 'Last Order',
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      {' '}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3 justify-center">
          <h1 className="route-title">General Customer</h1>
          <p className="text-gray-500">
            Here is your general customers list data
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Fillter
            class={
              'bg-white flex gap-3 items-center text-gray-600 rounded-lg px-4 py-2'
            }
            icon={RiSoundModuleLine}
            arrow={MdKeyboardArrowDown}
            main={'Filter'}
            date={''}
            color={'green'}
          />
        </div>
      </div>
      <div className="">
        <div>
          <TableHead color={'#2d9cdb'} data={data} />
        </div>
        <div>
          <Table textColor={''} bgcolor={'#4642551A'} title={'$35.35'} />
          <Table textColor={''} bgcolor={'#4642551A'} title={'$35.35'} />
          <Table textColor={''} bgcolor={'#4642551A'} title={'$35.35'} />
        </div>
      </div>
    </div>
  );
};

export default Customer;
