'use client';

import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { handleToastNotification } from '@/components/ui/handle-toast';
import EarlyAccessForm from './EarlyAccessForm';
import SuccessMessage from './SuccessMessage';
import { submitEarlyAccess } from '../server/actions/submit-early-access.action';
import { z } from 'zod';
import { formSchema } from '../utils/schema';
import { safeSendGAEvent } from '@/utils';

type FormData = z.infer<typeof formSchema>;

const EarlyAccessFormContainer = () => {
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      safeSendGAEvent('event', 'signup_clicked', { value: 'xyz' });
      return await submitEarlyAccess(data);
    },
    onSuccess: res => {
      console.log({ res });
      if (res.error) {
        handleToastNotification('error', '', res.error);
      } else {
        handleToastNotification(
          'success',
          'Success!',
          'Your early access request has been submitted.',
        );
      }
    },
    onError: () => {
      handleToastNotification(
        'error',
        'Please try again later.',
        'Something went wrong.',
      );
    },
  });

  const handleReset = () => {
    mutation.reset();
  };

  return mutation.data?.success ? (
    <SuccessMessage onRequestAnother={handleReset} />
  ) : (
    <EarlyAccessForm
      onSubmit={data => mutation.mutate(data)}
      isSubmitting={mutation.isPending}
    />
  );
};

export default EarlyAccessFormContainer;
