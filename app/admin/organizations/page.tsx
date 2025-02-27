'use client';

import { useState } from 'react';
import DataTable from '../../components/DataTable';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

// Extend Record<string, unknown> to satisfy the DataTable constraint
interface Organization extends Record<string, unknown> {
  id: string;
  name: string;
  type: string;
  location: string;
  contactPerson: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'pending';
  createdAt: string;
}

const mockOrganizations: Organization[] = [
  {
    id: '1',
    name: 'Lincoln High School',
    type: 'School',
    location: 'Portland, OR',
    contactPerson: 'John Smith',
    email: 'jsmith@lincolnhs.edu',
    phone: '(503) 555-1234',
    status: 'active',
    createdAt: '2023-01-15',
  },
  {
    id: '2',
    name: 'Westside Elementary',
    type: 'School',
    location: 'Seattle, WA',
    contactPerson: 'Sarah Johnson',
    email: 'sjohnson@westside.edu',
    phone: '(206) 555-5678',
    status: 'active',
    createdAt: '2023-02-20',
  },
  {
    id: '3',
    name: 'Youth Sports Foundation',
    type: 'Non-profit',
    location: 'San Francisco, CA',
    contactPerson: 'Michael Chen',
    email: 'mchen@ysf.org',
    phone: '(415) 555-9012',
    status: 'active',
    createdAt: '2023-03-10',
  },
  {
    id: '4',
    name: 'Community Arts Center',
    type: 'Non-profit',
    location: 'Los Angeles, CA',
    contactPerson: 'Lisa Rodriguez',
    email: 'lrodriguez@artscenter.org',
    phone: '(213) 555-3456',
    status: 'pending',
    createdAt: '2023-04-05',
  },
  {
    id: '5',
    name: 'Eastside High School',
    type: 'School',
    location: 'Denver, CO',
    contactPerson: 'David Wilson',
    email: 'dwilson@eastsidehs.edu',
    phone: '(303) 555-7890',
    status: 'inactive',
    createdAt: '2023-05-12',
  },
];

const OrganizationsPage = () => {
  const [organizations, setOrganizations] = useState<Organization[]>(mockOrganizations);

  const handleDelete = (id: string) => {
    setOrganizations(organizations.filter((org) => org.id !== id));
  };

  const columns = [
    {
      header: 'Name',
      accessor: 'name' as const,
      cell: (value: unknown, row: Organization) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
            <BuildingOfficeIcon className="h-5 w-5 text-gray-500" />
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
      cell: (value: unknown, row: Organization) => (
        <div>
          <div className="font-medium text-gray-900">{value as string}</div>
          <div className="text-gray-500">{row.email}</div>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status' as const,
      cell: (value: unknown) => {
        const status = value as Organization['status'];
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
    {
      header: 'Created',
      accessor: 'createdAt' as const,
      cell: (value: unknown) => {
        const date = new Date(value as string);
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }).format(date);
      },
    },
  ];

  return (
    <DataTable<Organization>
      columns={columns}
      data={organizations}
      title="Organizations"
      description="Manage schools and non-profits raising funds"
      addNewHref="/admin/organizations/new"
      onDelete={handleDelete}
    />
  );
};

export default OrganizationsPage; 