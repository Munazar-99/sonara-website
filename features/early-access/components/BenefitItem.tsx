import React from 'react';
import { CheckCircle } from 'lucide-react';

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description }) => {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle className="text-sonara-500 mt-1 flex-shrink-0" size={20} />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
