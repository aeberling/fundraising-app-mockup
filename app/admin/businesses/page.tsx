'use client';

import { useState } from 'react';
import DataTable from '../../components/DataTable';
import { UserGroupIcon } from '@heroicons/react/24/outline';

// Extend Record<string, unknown> to satisfy the DataTable constraint
interface Business extends Record<string, unknown> {
  id: string;
  name: string;
  type: string;
  location: string;
  contactPerson: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
  eventsHosted: number;
  totalRaised: number;
}

const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Local Pizza Co.',
    type: 'Restaurant',
    location: 'Portland, OR',
    contactPerson: 'Tony Romano',
    email: 'tromano@localpizza.com',
    phone: '(503) 555-2345',
    status: 'active',
    createdAt: '2023-01-20',
    eventsHosted: 5,
    totalRaised: 2500,
  },
  {
    id: '2',
    name: 'City Brew Coffee',
    type: 'Cafe',
    location: 'Seattle, WA',
    contactPerson: 'Emma Wilson',
    email: 'ewilson@citybrew.com',
    phone: '(206) 555-6789',
    status: 'active',
    createdAt: '2023-02-15',
    eventsHosted: 8,
    totalRaised: 3200,
  },
  {
    id: '3',
    name: 'Neighborhood Bookstore',
    type: 'Retail',
    location: 'San Francisco, CA',
    contactPerson: 'James Lee',
    email: 'jlee@neighborhoodbooks.com',
    phone: '(415) 555-1234',
    status: 'active',
    createdAt: '2023-03-05',
    eventsHosted: 3,
    totalRaised: 1800,
  },
  {
    id: '4',
    name: 'Fitness First Gym',
    type: 'Fitness',
    location: 'Los Angeles, CA',
    contactPerson: 'Maria Garcia',
    email: 'mgarcia@fitnessfirst.com',
    phone: '(213) 555-7890',
    status: 'pending',
    createdAt: '2023-04-10',
    eventsHosted: 0,
    totalRaised: 0,
  },
  {
    id: '5',
    name: 'Tech Solutions Inc.',
    type: 'Technology',
    location: 'Denver, CO',
    contactPerson: 'Alex Johnson',
    email: 'ajohnson@techsolutions.com',
    phone: '(303) 555-4567',
    status: 'inactive',
    createdAt: '2023-05-01',
    eventsHosted: 2,
    totalRaised: 1200,
  },
];

const BusinessesPage = () => {
  const [businesses, setBusinesses] = useState<Business[]>(mockBusinesses);

  const handleDelete = (id: string) => {
    setBusinesses(businesses.filter((business) => business.id !== id));
  };

  const columns = [
    {
      header: 'Business',
      accessor: 'name' as const,
      cell: (value: unknown, row: Business) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
            <UserGroupIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{value as string}</div>
            <div className="text-gray-500">{row.type}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Location',
      accessor: 'location' as const,
    },
    {
      header: 'Contact',
      accessor: 'contactPerson' as const,
      cell: (value: unknown, row: Business) => (
        <div>
          <div className="font-medium text-gray-900">{value as string}</div>
          <div className="text-gray-500">{row.email}</div>
        </div>
      ),
    },
    {
      header: 'Events',
      accessor: 'eventsHosted' as const,
      cell: (value: unknown, row: Business) => (
        <div>
          <div className="font-medium text-gray-900">{value as number}</div>
          <div className="text-gray-500">${row.totalRaised} raised</div>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status' as const,
      cell: (value: unknown) => {
        const status = value as Business['status'];
        return (
          <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
              status === 'active'
                ? 'bg-green-100 text-green-800'
                : status === 'inactive'
                ? 'bg-red-100 text-red-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      },
    },
  ];

  return (
    <DataTable<Business>
      columns={columns}
      data={businesses}
      title="Businesses"
      description="Manage businesses hosting fundraising events"
      addNewHref="/admin/businesses/new"
      onDelete={handleDelete}
    />
  );
};

export default BusinessesPage; 