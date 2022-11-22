import React from 'react';
import Fillter from '../components/Fillter';
import { RiSoundModuleLine } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Tables from '../components/Tables';

const Customer = () => {
  const head = [
    {
      id: 1,
      title: 'Customer ID',
    },
    {
      id: 2,
      title: 'Join Date',
    },
    {
      id: 3,
      title: 'Customer Name',
    },
    {
      id: 4,
      title: 'Location',
    },
    {
      id: 5,
      title: 'Total Spent',
    },
    {
      id: 6,
      title: 'Last Order',
    },
  ];
  const rows = [
    {
      id: 1,
      Order: '#C-004560',
      Date: '27 March 2020, 12:42 AM',
      Name: 'Veronica',
      Location: 'Corner Street 5th, London',
      Amount: '$78.92',
      Status: '$35.35',
    },
    {
      id: 2,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: '$35.35',
    },
    {
      id: 3,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: '$35.35',
    },
    {
      id: 4,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: '$35.35',
    },
    {
      id: 5,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: '$35.35',
    },
    {
      id: 6,
      Order: '#555231',
      Date: '26 March 2020, 12:42 AM',
      Name: 'Mikasa Ackerman',
      Location: 'Corner Street 5th London',
      Amount: '$164.52',
      Status: '$35.35',
    },
  ];
  return (
    <div className="flex flex-col gap-8 p-4">
      {' '}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-3 justify-center">
          <h1 className="route-title">General Customer</h1>
          <p className="text-lightGray">
            Here is your general customers list data
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Fillter
            class={'bg-white flex gap-3 items-center rounded-lg px-4 py-2'}
            icon={RiSoundModuleLine}
            arrow={MdKeyboardArrowDown}
            main={'Filter'}
            date={''}
            fill={'mainGreen'}
            color={'lightGreen'}
          />
        </div>
      </div>
      <Tables head={head} rows={rows} headColor={'bg-mainBlue'} />
    </div>
  );
};

export default Customer;
