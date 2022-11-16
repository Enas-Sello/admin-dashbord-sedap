import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PieChart = (prop) => {

  return (
    <div>
      <CircularProgressbar
        value={prop.value}
        text={`${prop.text}%`}
        strokeWidth={18}
        styles={{
          path: {
            strokeLinecap: 'butt',

            stroke: prop.fill,
            transition: 'stroke-dashoffset 0.5s ease 0s',
          },
          trail: {
            strokeLinecap: 'butt',

            stroke: prop.stroke,
            transform: '(0.25turn)',
            transformOrigin: 'center center',
          },
          text: {
            fill: prop.fill,
            fontSize: '16px',
          },
        }}
      />
      <p className="text-center mt-5  font-semibold ">{prop.title}</p>
    </div>
  );
};

export default PieChart;
