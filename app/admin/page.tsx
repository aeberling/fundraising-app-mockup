import { FC } from 'react';
import Link from 'next/link';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  UserIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Total Organizations', value: '24', href: '/admin/organizations', icon: BuildingOfficeIcon },
  { name: 'Total Businesses', value: '58', href: '/admin/businesses', icon: UserGroupIcon },
  { name: 'Total Supporters', value: '1,429', href: '/admin/supporters', icon: UserIcon },
  { name: 'Total Funds Raised', value: '$24,500', href: '#', icon: CurrencyDollarIcon },
];

const AdminDashboard: FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your fundraising platform
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="relative overflow-hidden rounded-lg bg-white p-6 shadow hover:shadow-md transition-shadow duration-300"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </dd>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Organizations */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-medium text-gray-900">Recent Organizations</h2>
              <Link href="/admin/organizations" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all
              </Link>
            </div>
            <div className="mt-6 flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {[
                  { name: 'Lincoln High School', type: 'School', location: 'Portland, OR' },
                  { name: 'Westside Elementary', type: 'School', location: 'Seattle, WA' },
                  { name: 'Youth Sports Foundation', type: 'Non-profit', location: 'San Francisco, CA' },
                ].map((org) => (
                  <li key={org.name} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 rounded-full bg-gray-200 p-2">
                        <BuildingOfficeIcon className="h-5 w-5 text-gray-500" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">{org.name}</p>
                        <p className="truncate text-sm text-gray-500">{org.type} • {org.location}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Businesses */}
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-medium text-gray-900">Recent Businesses</h2>
              <Link href="/admin/businesses" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all
              </Link>
            </div>
            <div className="mt-6 flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {[
                  { name: 'Local Pizza Co.', type: 'Restaurant', location: 'Portland, OR' },
                  { name: 'City Brew Coffee', type: 'Cafe', location: 'Seattle, WA' },
                  { name: 'Neighborhood Bookstore', type: 'Retail', location: 'San Francisco, CA' },
                ].map((business) => (
                  <li key={business.name} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 rounded-full bg-gray-200 p-2">
                        <UserGroupIcon className="h-5 w-5 text-gray-500" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900">{business.name}</p>
                        <p className="truncate text-sm text-gray-500">{business.type} • {business.location}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 