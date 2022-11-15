import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Sidebar from '../components/Sidebar';
import Main from './Main';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import logo from '../assets/Sedap.png';

const Home = () =>
{
    const [toggle, setToggle] = useState(false);
  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-100 ease-out">
      <div className="hidden md:flex h-screen flex-initial shadow-xl">
        <Sidebar />
      </div>

      {/* responsive */}
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-xl">
          <HiMenu
            fontSize={30}
            className="cursor-pointer"
            onClick={() => setToggle(true)}
          />
          <Link
            to="/Dashbord"
            className="flex flex-col px-5 pt-1 gap-2 my-6 w-109 items-center"
          >
            <img src={logo} alt="logo" className="w-20" />
            
          </Link>
        </div>
        {toggle && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-xl z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiOutlineClose
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </div>
            <Sidebar closeToggle={setToggle} />
          </div>
        )}
      </div>
      {/* responsive */}

      <div className="pb-2 flex-1 h-screen overflow-y-scroll">
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;