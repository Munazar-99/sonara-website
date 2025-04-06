import { CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';

export const handleToastNotification = (
  type: 'success' | 'error',
  message: string,
  description: string,
): void => {
  const config = {
    success: {
      className: '!bg-white !border-gray-100 !shadow-md text-black',
      icon: <CheckCircle className="!text-sonara-500 h-5 w-5" />,
    },
    error: {
      className: '!bg-white !border-gray-100 !shadow-md',
      icon: <XCircle className="h-5 w-5 !text-red-500" />,
    },
  };

  toast(message, {
    position: 'top-center',
    duration: 4000,
    classNames: {
      toast: 'group rounded-xl border shadow-md text-black',
      title: 'text-base font-medium',
      description: 'text-sm text-',
    },
    ...config[type],
    description,
  });
};
