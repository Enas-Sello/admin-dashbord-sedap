import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const LineCharts = ({ data }) => {
  return (
    <ResponsiveContainer width={500} height={250}>
      <LineChart
        width={730}
        height={250}
        data={data}
        syncId="anyId"
        margin={{ top: 15, right: 10, left: 0, bottom: 5 }}
      >
        <XAxis dataKey="name" tickSize={0} tick={7} axisLine={false} />
        <YAxis
          tickSize={0}
          // tick={ 7 } axisLine={ false }
        />
        <Tooltip />
        <Line type="monotone" dataKey="pv" strokeWidth={3} stroke="#FF5B5B" />
        <Line type="monotone" dataKey="uv" strokeWidth={3} stroke="#2D9CDB" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
