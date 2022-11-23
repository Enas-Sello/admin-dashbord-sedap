import React, { useEffect, useState } from 'react';
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
  
  // useEffect(() => {
    //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //     setTheme('dark');
      //   } else {
        //     setTheme('light');
        //   }
        // }, []);
const [theme, setTheme] = useState(false);
useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [theme]);

const handleThemeSwitch = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark');
  console.log('dark');
};
  return (
    <div className="dark:text-white px-2 md:px-5 h-screen w-full  ">
      <div className="">
        <Navebar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleThemeSwitch={handleThemeSwitch}
        />
      </div>
      <div className="h-full  mt-5 md:mt-10">
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
