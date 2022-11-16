import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
const AreaCharts = ({data}) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#6EC8EF" stopOpacity={0.8} />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tickSize={0}  />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="uv"
          stroke="#2D9CDB"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
