import React, { useContext } from 'react';
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';
import { ThemeContext } from './themeContext';

const DarkMode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === 'dark' ? (
        <button
          className="w-10 h-8 flex justify-center items-center bg-white  rounded-xl duration-300 cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <img className="w-5 h-5 object-contain" src={sun} alt="" />
        </button>
      ) : (
        <button
          className="w-10 h-8 flex justify-center items-center  rounded-xl border border-lightDark duration-300 cursor-pointer "
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <img className="w-5 h-5 object-contain" src={moon} alt="" />
        </button>
      )}
    </>
  );
};
export default DarkMode;
