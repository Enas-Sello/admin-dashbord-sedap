import React from 'react';

const NotifivationBadge = ({ number, bg }) => {
  return (
    <div
      className={`absolute -top-2 left-6 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-normal bg-${bg}  `}
    >
      {number}
    </div>
  );
};

export default NotifivationBadge;
