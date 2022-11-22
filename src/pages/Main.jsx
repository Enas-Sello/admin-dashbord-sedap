import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Navebar from '../components/Navebar';
import Analytics from './Analytics';
import Customer from './Customer';
import Dashbord from './Dashbord';
import Foods from './Foods';
import Review from './Review';
import OrderList from './OrderList';
import FoodDetails from './FoodDetails';
import CustomerDetail from './CustomerDetail';
import Calender from './Calender';
import Chat from './Chat';
import Wallet from './Wallet';
import OrderDetail from './OrderDetail';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="px-2 md:px-5 h-screen w-full bg-[#F3F2F7] ">
      <div className="">
        <Navebar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="h-full bg-[#F3F2F7] mt-5 md:mt-10">
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/OrderList" element={<OrderList />} />
          <Route path="/OrderDetail" element={<OrderDetail />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Foods" element={<Foods />} />
          <Route path="/FoodDetails" element={<FoodDetails />} />
          <Route path="/CustomerDetail" element={<CustomerDetail />} />
          <Route path="/Calender" element={<Calender />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Wallet" element={<Wallet />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
