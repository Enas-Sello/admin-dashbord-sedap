import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import {  useEffect } from 'react';

function App ()
{
  
useEffect(() => {
  Aos.init();
  Aos.refresh();
}, []);
  return (
    <div className="flex flex-col duration-300">
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
