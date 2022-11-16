import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarCharts = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis  />          <Tooltip />
        <Bar dataKey="pv" fill="#FF5B5B" />
        <Bar dataKey="uv" fill="#F7C604" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarCharts