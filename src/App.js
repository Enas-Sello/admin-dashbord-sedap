import './App.css';
import Navebar from './components/Navebar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';

import Dashbord from './pages/Dashbord';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex flex-col ">
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
