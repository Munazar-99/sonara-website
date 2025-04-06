'use server';

import { Ratelimit } from '@upstash/ratelimit';
import { z } from 'zod';
import { saveSignUp } from '../db/saveInquiry';
import { redis } from '@/lib/upstash';
import { headers } from 'next/headers';
import {
  sendAdminNotificationEmail,
  sendSignUpEmail,
} from '../../utils/sendEmail';
import { checkEmailExists } from '../db/checkEmailExists';

// Define the form validation schema
const earlyAccessSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  name: z.string().min(1, 'Your name is required'),
  email: z.string().email('Invalid email address'),
});

// Implement Upstash rate limiting (2 requests per minute)
const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(2, '60s'),
});

export async function submitEarlyAccess(formData: {
  businessName: string;
  name: string;
  email: string;
}): Promise<{ error?: string; success?: boolean }> {
  try {
    const ip = (await headers()).get('x-forwarded-for') ?? 'unknown-ip';

    // Rate limit check
    const { success: withinLimit } = await rateLimit.limit(ip);
    if (!withinLimit) {
      return {
        error: 'Too many requests. Please wait a minute and try again.',
      };
    }

    // Validate input
    const validationResult = earlyAccessSchema.safeParse(formData);
    if (!validationResult.success) {
      return { error: 'Invalid input. Please check your details.' };
    }

    const { businessName, name, email } = validationResult.data;

    // Check if email already exists
    const existingSignup = await checkEmailExists(email);
    if (existingSignup) {
      return {
        success: false,
        error: 'This email is already registered for early access.',
      };
    }

    // Store lead in database
    await saveSignUp({ businessName, name, email });

    // Send confirmation email to the user
    await sendSignUpEmail(email, name, businessName);

    // Notify yourself (or your team)
    await sendAdminNotificationEmail(email, name, businessName);

    return { success: true };
  } catch (error) {
    console.error('Early access submission error:', error);
    return { error: 'An unexpected error occurred. Please try again later.' };
  }
}
