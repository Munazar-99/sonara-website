'use client';

import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { formSchema } from '../utils/schema';

// Define the form data type based on the schema
type FormData = z.infer<typeof formSchema>;

interface EarlyAccessFormProps {
  onSubmit: (formData: FormData) => void;
  isSubmitting: boolean;
}

const EarlyAccessForm: React.FC<EarlyAccessFormProps> = ({
  onSubmit,
  isSubmitting,
}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: '',
      name: '',
      email: '',
    },
  });

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">Claim Your Free Setup</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-gray-700">
                  Business Name 🏢
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Company Name"
                    className="focus:ring-sonara-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-gray-700">
                  Your Name 🧑
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Full Name"
                    className="focus:ring-sonara-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-gray-700">
                  Email Address ✉️
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@company.com"
                    className="focus:ring-sonara-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="button-primary mt-6 flex w-full items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-t-2 border-b-2 border-white"></span>
                Processing...
              </>
            ) : (
              <>
                Secure My Free Setup <ArrowRight size={18} />
              </>
            )}
          </Button>
        </form>
      </Form>

      <div className="mt-4 flex items-center justify-center gap-1 text-center text-sm text-gray-500">
        <Lock size={14} />
        <span>We respect your privacy - no spam, Just your setup details!</span>
      </div>
    </div>
  );
};

export default EarlyAccessForm;
