import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as m from 'motion/react-m';

interface SuccessMessageProps {
  onRequestAnother: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  onRequestAnother,
}) => {
  return (
    <m.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <m.div
        className="mb-6 flex justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </m.div>

      <m.h3
        className="mb-4 text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Thank You for Your Interest!
      </m.h3>

      <m.p
        className="mb-6 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        We&#39;ve received your request for early access to Sonara. Our team
        will be in touch with you shortly to discuss how we can help transform
        your customer calls.
      </m.p>

      <m.p
        className="mb-8 font-medium text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Keep an eye on your inbox for next steps!
      </m.p>

      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Button
          onClick={onRequestAnother}
          variant="outline"
          className="mx-auto flex items-center justify-center gap-2"
        >
          Request for Another Business <ArrowRight size={16} />
        </Button>
      </m.div>
    </m.div>
  );
};

export default SuccessMessage;
