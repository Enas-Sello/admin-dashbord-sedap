import './App.css';
import Navebar from './components/Navebar';
import Sidebar from './components/Sidebar';
import Dashbord from './pages/Dashbord';

function App() {
  return (
    <div className='flex flex-col'>
      {/* <div className="flex gap-4">
        <Sidebar />
        <Navebar />
      </div> */}
      <Dashbord />
    </div>
  );
}

export default App;
