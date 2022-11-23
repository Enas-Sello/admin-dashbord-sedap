import React from 'react';
import moon from '../assets/moonn.png';

const DarkMode = ({ handleThemeSwitch }) => {
  return (
    <button
      className="py-2 px-2 bg-white rounded-xl"
      onClick={handleThemeSwitch}
    >
      <img className="w-5 h-5" src={moon} alt="" />
    </button>
  );
};
export default DarkMode;
