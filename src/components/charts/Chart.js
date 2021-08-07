import React from 'react';
import './Chart.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    ActiveUser: 4000,
  },
  {
    name: 'Feb',
    ActiveUser: 3000,
  },
  {
    name: 'Mar',
    ActiveUser: 2000,
  },
  {
    name: 'Apr',
    ActiveUser: 2780,
  },
  {
    name: 'Jun',
    ActiveUser: 1890,
  },
  {
    name: 'Jul',
    ActiveUser: 2390,
  },
  {
    name: 'Aug',
    ActiveUser: 3490,
  },
  {
    name: 'Sep',
    ActiveUser: 2580,
  },
  {
    name: 'Oct',
    ActiveUser: 4490,
  },
  {
    name: 'Nov',
    ActiveUser: 3590,
  },
  {
    name: 'Dex',
    ActiveUser: 2420,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="ActiveUser"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <CartesianGrid stroke="#e0dfdf" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
