import { FC } from 'react';
import SupporterForm from '../../components/SupporterForm';

const BecomeSupporterPage: FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Become a Supporter</h1>
        <p className="mt-1 text-sm text-gray-500">
          Fill out the form below to become a supporter and help raise funds for organizations.
        </p>
      </div>
      
      <SupporterForm />
    </div>
  );
};

export default BecomeSupporterPage; 