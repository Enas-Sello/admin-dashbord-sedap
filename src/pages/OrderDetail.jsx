import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CiDeliveryTruck } from 'react-icons/ci';
import { TbTruckDelivery } from 'react-icons/tb';
import Fillter from '../components/Fillter';
import placeholder from '../assets/placeholder.png';
import DataTables from '../components/DataTables';
const OrderDetail = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      {/* nav */}
      <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
        <div className="flex flex-row items-center md:items-start md:flex-col gap-3 justify-center">
          <h1 className="font-semibold text-3xl">Order ID #5552351</h1>
          <p className="text-lightGray text-lg">
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
              'bg-mainGreen flex gap-2 items-center text-white  rounded-lg px-2 py-1'
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
      <div class="grid grid-cols-1 lg:grid-cols-3  gap-4 w-full">
        <div className=" flex flex-col gap-2 p-4 bg-white rounded-xl item-center justify-center">
          <img
            src={placeholder}
            className="w-40 h-40 drop-shadow-main object-contain rounded-full"
            alt=""
          />
          <p className=" font-semibold text-lg m-2 text-center">
            Wahyu Adi Kurniawan
          </p>
          <button className=" font-semibold text-xs bg-lightGreen rounded-xl px-3 py-2 lg:mb-6 text-mainGreen">
            Customer
          </button>
        </div>
        <div class="col-span-2 row-span-2 rounded-lg bg-mainGray">
          <DataTables />
        </div>
        <div className=" col-span-1 row-span-1 flex flex-col  lg:-mt-8 ">
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
        <div class="col-span-2 row-span-2 md:col-span-1 md:row-span-2  flex flex-col gap-4 p-4 bg-white rounded-lg lg:mt-10">
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
                <p className="font-medium text-sm text-lightGray">-</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className=" font-medium text-lg">Order Delivered</p>
                <p className="font-medium text-sm text-lightGray">-</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className=" font-medium text-lg">Order Delivered</p>
                <p className="font-medium text-sm text-lightGray">-</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-4 row-span-2  rounded-lg mt-10 bg-mainGray">
          map
        </div>{' '}
      </div>
    </div>
  );
};

export default OrderDetail;
