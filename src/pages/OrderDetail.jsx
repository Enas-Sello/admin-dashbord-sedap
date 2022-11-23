import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CiDeliveryTruck } from 'react-icons/ci';
import { TbTruckDelivery } from 'react-icons/tb';
import Fillter from '../components/Fillter';
import placeholder from '../assets/placeholder.png';
import DataTables from '../components/DataTables';
import placeholder2 from '../assets/placeholder2.png';
import Maps from '../components/Maps';

const OrderDetail = () => {
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

  const head = [
    { id: 222, title: 'Items' },
    { id: 444, title: 'Qty' },
    { id: 555, title: 'Total' },
    { id: 666, title: 'Price' },
  ];

  return (
    <div className="flex flex-col gap-8 p-4">
      {/* nav */}
      <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center">
          <h1 className="font-semibold text-3xl">Order ID #5552351</h1>
          <p className="text-lightGray text-base md:text-lg">
            <span className="text-mainGreen">Orders /</span> Order Detaills{' '}
          </p>
        </div>
        <div className="flex gap-3 flex-col md:flex-row">
          <Fillter
            class={
              ' bg-transparent border-2 text-mainRed border-mainRed flex items-center rounded-lg px-2 py-1 cursor-pointer'
            }
            icon={'k'}
            arrow={'m'}
            main={'Cancel Order'}
            date={''}
            fill={''}
            color={''}
          />
          <Fillter
            class={
              'bg-mainGreen flex gap-2 items-center text-white  rounded-lg px-2 py-1  cursor-pointer'
            }
            icon={CiDeliveryTruck}
            arrow={MdKeyboardArrowDown}
            main={'On Delivery'}
            date={''}
            fill={'white'}
            color={''}
          />
        </div>
      </div>
      {/* nav */}
      <div class="grid grid-cols-1 lg:grid-cols-3 grid-flow-row-dense  gap-4 w-full">
        <div className="dark:bg-lightDark  flex flex-col gap-2 p-4 bg-white rounded-xl item-center justify-center shadow-xl ">
          <img
            src={placeholder}
            className="hidden md:block w-40 h-40 drop-shadow-main object-contain rounded-full bg-slate-300 ml-12"
            alt=""
          />
          <p className=" font-semibold text-lg m-2 text-center">
            Wahyu Adi Kurniawan
          </p>
          <button className=" font-semibold text-xs bg-lightGreen rounded-xl px-3 py-2 lg:mb-4 text-mainGreen">
            Customer
          </button>
        </div>
        <div class="col-span-2 row-span-2 h-full  w-full rounded-lg ">
          <DataTables rows={rows} head={head} headColor="bg-mainGreen" />
        </div>
        <div className="flex flex-col  lg:-mt-10 shadow-xl">
          <div className=" bg-lightGray  rounded-t-xl flex gap-2 flex-col p-6 lg:p-4">
            <h4 className=" font-bold text-2xl text-white">Note Order</h4>
            <p className=" text-sm text-white w-[170px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
          <div className="flex items-center justify-start gap-4 p-6 lg:p-4 bg-mainBlue rounded-b-lg">
            <TbTruckDelivery className=" bg-white w-8 h-8 stroke-mainBlue rounded-full p-1 drop-shadow-main" />
            <p className=" w-[150px]">6 The Avenue, London EC50 4GN</p>
          </div>
        </div>{' '}
        <div class="dark:bg-lightDark col-span-2 row-span-2 md:col-span-1 md:row-span-2  flex flex-col gap-4 p-4 bg-white rounded-lg lg:mt-10 shadow-xl">
          <p className=" font-medium text-xl text-center">History</p>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-[3.8rem] h-100 w-1 bg-mainRed rounded">
              <div className=" h-4 w-4 bg-lightGray rounded-full"></div>
              <div className=" h-4 w-4 bg-mainRed rounded-full"></div>
              <div className=" h-4 w-4 bg-mainRed rounded-full"></div>
              <div className=" h-4 w-4 bg-mainRed rounded-full -mt-2"></div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className=" font-medium text-lg">Order Delivered</p>
                <p className="font-medium text-sm text-lightGray">-</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className=" font-medium text-lg">Order Delivered</p>
                <p className="font-medium text-sm text-lightGray">
                  Fri, 22 Jul 2020, 10:44 AM
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className=" font-medium text-lg">Order Delivered</p>
                <p className="font-medium text-sm text-lightGray">
                  Fri, 22 Jul 2020, 10:44 AM
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className=" font-medium text-lg">Order Delivered</p>
                <p className="font-medium text-sm text-lightGray">
                  Thu, 21 Jul 2020, 11:49 AM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dark:bg-lightDark col-span-2 p-4 row-span-2  rounded-lg mt-10 bg-white shadow-xl">
          <Maps />
        </div>{' '}
      </div>
    </div>
  );
};

export default OrderDetail;
