'use client';

import { FC } from 'react';
import { 
  ArrowTrendingUpIcon, 
  BanknotesIcon, 
  BuildingStorefrontIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';
import { 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip
} from 'recharts';
import DataTable from '../components/DataTable';
import FundraisingChart from '../components/FundraisingChart';

// Sample data for the dashboard
const recentDonations = [
  { id: '1', donor: 'John Smith', amount: '$250', date: '2023-06-01', organization: 'Lincoln High School' },
  { id: '2', donor: 'Sarah Johnson', amount: '$500', date: '2023-06-02', organization: 'Westside Elementary' },
  { id: '3', donor: 'Michael Brown', amount: '$100', date: '2023-06-03', organization: 'Youth Sports Foundation' },
  { id: '4', donor: 'Emily Davis', amount: '$350', date: '2023-06-04', organization: 'Community Arts Center' },
  { id: '5', donor: 'David Wilson', amount: '$200', date: '2023-06-05', organization: 'Eastside High School' },
];

const organizationData = [
  { name: 'Lincoln High School', value: 35 },
  { name: 'Westside Elementary', value: 25 },
  { name: 'Youth Sports Foundation', value: 20 },
  { name: 'Community Arts Center', value: 15 },
  { name: 'Eastside High School', value: 5 },
];

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316'];

const Dashboard: FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of fundraising activities and performance metrics.
        </p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-indigo-50 p-3">
                <BanknotesIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Total Donations</dt>
                  <dd className="mt-1 text-xl font-semibold text-gray-900">$24,500</dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-green-600">↑ 12%</span> from last month
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-purple-50 p-3">
                <UserGroupIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Total Supporters</dt>
                  <dd className="mt-1 text-xl font-semibold text-gray-900">1,250</dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-green-600">↑ 8%</span> from last month
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-pink-50 p-3">
                <BuildingStorefrontIcon className="h-6 w-6 text-pink-600" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Participating Businesses</dt>
                  <dd className="mt-1 text-xl font-semibold text-gray-900">48</dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-green-600">↑ 5%</span> from last month
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 rounded-md bg-rose-50 p-3">
                <ArrowTrendingUpIcon className="h-6 w-6 text-rose-600" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">Average Donation</dt>
                  <dd className="mt-1 text-xl font-semibold text-gray-900">$196</dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-green-600">↑ 3%</span> from last month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-base font-semibold text-gray-900">Monthly Donations</h2>
            <p className="mt-1 text-sm text-gray-500">Fundraising performance over the last 6 months</p>
            <div className="mt-6 h-72">
              <FundraisingChart />
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-base font-semibold text-gray-900">Donations by Organization</h2>
            <p className="mt-1 text-sm text-gray-500">Distribution of funds across organizations</p>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={organizationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={90}
                    fill="#6366f1"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {organizationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderColor: '#e5e7eb',
                      borderRadius: '0.5rem',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                    }} 
                  />
                  <Legend formatter={(value) => <span className="text-sm text-gray-700">{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Donations Table */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">Recent Donations</h2>
          <p className="mt-1 text-sm text-gray-500">A list of recent donations across all organizations</p>
        </div>
        <div className="px-6 py-4">
          <DataTable
            data={recentDonations}
            columns={[
              { header: 'Donor', accessor: 'donor' },
              { header: 'Amount', accessor: 'amount' },
              { header: 'Date', accessor: 'date' },
              { header: 'Organization', accessor: 'organization' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 