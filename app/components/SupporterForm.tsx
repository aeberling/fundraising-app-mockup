'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

const SupporterForm: FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    businessToSupport: '',
    organizationToSupport: '',
    donationAmount: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          businessToSupport: '',
          organizationToSupport: '',
          donationAmount: '',
        });
        router.push('/admin');
      }, 2000);
    }, 1500);
  };

  // Mock data for dropdowns
  const businesses = [
    { id: '1', name: 'Local Pizza Co.' },
    { id: '2', name: 'City Brew Coffee' },
    { id: '3', name: 'Neighborhood Bookstore' },
    { id: '4', name: 'Fitness First Gym' },
    { id: '5', name: 'Tech Solutions Inc.' },
  ];

  const organizations = [
    { id: '1', name: 'Lincoln High School' },
    { id: '2', name: 'Westside Elementary' },
    { id: '3', name: 'Youth Sports Foundation' },
    { id: '4', name: 'Community Arts Center' },
    { id: '5', name: 'Eastside High School' },
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-md">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-generation-blue-700">Become a Supporter</h1>
        <p className="mt-3 text-lg text-gray-600">
          Join our community of supporters and help raise funds for organizations you care about.
        </p>
      </div>

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-green-800">Registration successful</h3>
              <div className="mt-2 text-base text-green-700">
                <p>Thank you for becoming a supporter! You will be redirected to the dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-base font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-base font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-base font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <label htmlFor="city" className="block text-base font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-base font-medium text-gray-700 mb-2">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-base font-medium text-gray-700 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="businessToSupport" className="block text-base font-medium text-gray-700 mb-2">
                Business to Support
              </label>
              <select
                id="businessToSupport"
                name="businessToSupport"
                value={formData.businessToSupport}
                onChange={handleChange}
                required
                className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
              >
                <option value="">Select a business</option>
                {businesses.map((business) => (
                  <option key={business.id} value={business.id}>
                    {business.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="organizationToSupport" className="block text-base font-medium text-gray-700 mb-2">
                Organization to Support
              </label>
              <select
                id="organizationToSupport"
                name="organizationToSupport"
                value={formData.organizationToSupport}
                onChange={handleChange}
                required
                className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
              >
                <option value="">Select an organization</option>
                {organizations.map((org) => (
                  <option key={org.id} value={org.id}>
                    {org.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="donationAmount" className="block text-base font-medium text-gray-700 mb-2">
              Donation Amount ($)
            </label>
            <input
              type="number"
              id="donationAmount"
              name="donationAmount"
              value={formData.donationAmount}
              onChange={handleChange}
              min="1"
              required
              className="block w-full rounded-lg border-gray-300 px-4 py-3 text-base shadow-sm focus:border-generation-500 focus:ring-generation-500"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-5 w-5 rounded border-gray-300 text-generation-500 focus:ring-generation-500"
            />
            <label htmlFor="terms" className="ml-3 block text-base text-gray-700">
              I agree to the{' '}
              <a href="#" className="font-medium text-generation-500 hover:text-generation-600">
                terms and conditions
              </a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-generation-500 hover:bg-generation-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-generation-500 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? 'Processing...' : 'Become a Supporter'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SupporterForm; 