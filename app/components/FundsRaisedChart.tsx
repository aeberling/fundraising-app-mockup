'use client';

import { FC } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface FundsData {
  name: string;
  schools: number;
  nonprofits: number;
}

const data: FundsData[] = [
  { name: 'Jan', schools: 4000, nonprofits: 2400 },
  { name: 'Feb', schools: 3000, nonprofits: 1398 },
  { name: 'Mar', schools: 5000, nonprofits: 3800 },
  { name: 'Apr', schools: 2780, nonprofits: 3908 },
  { name: 'May', schools: 1890, nonprofits: 4800 },
  { name: 'Jun', schools: 2390, nonprofits: 3800 },
  { name: 'Jul', schools: 3490, nonprofits: 4300 },
  { name: 'Aug', schools: 4000, nonprofits: 2400 },
  { name: 'Sep', schools: 5000, nonprofits: 4300 },
  { name: 'Oct', schools: 6000, nonprofits: 5400 },
  { name: 'Nov', schools: 7000, nonprofits: 6000 },
  { name: 'Dec', schools: 9000, nonprofits: 7000 },
];

const FundsRaisedChart: FC = () => {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Funds Raised This Year</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis 
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              formatter={(value) => [`$${value}`, undefined]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="schools"
              name="Schools"
              stackId="1"
              stroke="#4f46e5"
              fill="#818cf8"
            />
            <Area
              type="monotone"
              dataKey="nonprofits"
              name="Non-Profits"
              stackId="1"
              stroke="#0ea5e9"
              fill="#7dd3fc"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-indigo-50 p-4 rounded-md">
          <p className="text-sm text-indigo-700 font-medium">Total Raised for Schools</p>
          <p className="text-2xl font-bold text-indigo-900">${data.reduce((sum, item) => sum + item.schools, 0).toLocaleString()}</p>
        </div>
        <div className="bg-sky-50 p-4 rounded-md">
          <p className="text-sm text-sky-700 font-medium">Total Raised for Non-Profits</p>
          <p className="text-2xl font-bold text-sky-900">${data.reduce((sum, item) => sum + item.nonprofits, 0).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default FundsRaisedChart; 