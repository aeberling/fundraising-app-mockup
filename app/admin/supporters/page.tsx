'use client';

import { useState } from 'react';
import DataTable from '../../components/DataTable';
import { UserIcon } from '@heroicons/react/24/outline';

// Extend Record<string, unknown> to satisfy the DataTable constraint
interface Supporter extends Record<string, unknown> {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  businessSupported: string;
  organizationSupported: string;
  amountDonated: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

const mockSupporters: Supporter[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    email: 'athompson@example.com',
    phone: '(503) 555-1111',
    location: 'Portland, OR',
    businessSupported: 'Local Pizza Co.',
    organizationSupported: 'Lincoln High School',
    amountDonated: 150,
    status: 'active',
    createdAt: '2023-02-10',
  },
  {
    id: '2',
    name: 'Jessica Martinez',
    email: 'jmartinez@example.com',
    phone: '(206) 555-2222',
    location: 'Seattle, WA',
    businessSupported: 'City Brew Coffee',
    organizationSupported: 'Westside Elementary',
    amountDonated: 75,
    status: 'active',
    createdAt: '2023-03-15',
  },
  {
    id: '3',
    name: 'Ryan Kim',
    email: 'rkim@example.com',
    phone: '(415) 555-3333',
    location: 'San Francisco, CA',
    businessSupported: 'Neighborhood Bookstore',
    organizationSupported: 'Youth Sports Foundation',
    amountDonated: 200,
    status: 'active',
    createdAt: '2023-04-20',
  },
  {
    id: '4',
    name: 'Sophia Williams',
    email: 'swilliams@example.com',
    phone: '(213) 555-4444',
    location: 'Los Angeles, CA',
    businessSupported: 'Fitness First Gym',
    organizationSupported: 'Community Arts Center',
    amountDonated: 50,
    status: 'inactive',
    createdAt: '2023-05-25',
  },
  {
    id: '5',
    name: 'Daniel Brown',
    email: 'dbrown@example.com',
    phone: '(303) 555-5555',
    location: 'Denver, CO',
    businessSupported: 'Tech Solutions Inc.',
    organizationSupported: 'Eastside High School',
    amountDonated: 125,
    status: 'active',
    createdAt: '2023-06-30',
  },
];

const SupportersPage = () => {
  const [supporters, setSupporters] = useState<Supporter[]>(mockSupporters);

  const handleDelete = (id: string) => {
    setSupporters(supporters.filter((supporter) => supporter.id !== id));
  };

  const columns = [
    {
      header: 'Supporter',
      accessor: 'name' as const,
      cell: (value: unknown, row: Supporter) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{value as string}</div>
            <div className="text-gray-500">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Location',
      accessor: 'location' as const,
    },
    {
      header: 'Supporting',
      accessor: 'businessSupported' as const,
      cell: (value: unknown, row: Supporter) => (
        <div>
          <div className="font-medium text-gray-900">{value as string}</div>
          <div className="text-gray-500">for {row.organizationSupported}</div>
        </div>
      ),
    },
    {
      header: 'Donated',
      accessor: 'amountDonated' as const,
      cell: (value: unknown) => (
        <div className="font-medium text-gray-900">
          ${(value as number).toFixed(2)}
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status' as const,
      cell: (value: unknown) => {
        const status = value as Supporter['status'];
        return (
          <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
              status === 'active'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      },
    },
  ];

  return (
    <DataTable<Supporter>
      columns={columns}
      data={supporters}
      title="Supporters"
      description="Manage individuals supporting businesses and organizations"
      addNewHref="/admin/supporters/new"
      onDelete={handleDelete}
    />
  );
};

export default SupportersPage; 