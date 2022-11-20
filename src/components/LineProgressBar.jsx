import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';


const LineProgressBar = () => {
  return (
    <ProgressBar
      className="mt-8 "
      completedClassName="barCompleted"
      customLabel="  "
      maxCompleted={100}
    />
  );
};

export default LineProgressBar;
