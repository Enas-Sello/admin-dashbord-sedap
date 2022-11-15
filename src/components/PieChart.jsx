import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export const options = {
  responsive: true,
  Plugin: {
    legend: {
    //   position: 'top',
    },
      title: {
          display: true,
          text:"chart"
    }
  },
};
const labels = [
  'january',
  'january',
  'january',
  'january',
  'january',
  'january',
];

export const data = {
  labels,
  dataset: [
    {
      label: 'data 1',
      data: labels.map(() =><></>),
      backgoundColor: 'blue',
    },
    {
      label: 'data 1',
      data: labels.map(() => <></>),
      backgoundColor: 'blue',
    },
  ],
};
const PieChart = () => {
    return <Doughnut options={ options } data={data } />;
};

export default PieChart;
