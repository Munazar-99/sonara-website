import { z } from 'zod';

export const formSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  name: z.string().min(1, 'Your name is required'),
  email: z.string().email('Please enter a valid email address'),
});

export type FormData = z.infer<typeof formSchema>;
