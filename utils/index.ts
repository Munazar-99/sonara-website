import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { sendGAEvent } from '@next/third-parties/google';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function safeSendGAEvent(...args: Parameters<typeof sendGAEvent>) {
  if (
    typeof window !== 'undefined' &&
    localStorage.getItem('cookieConsent') === 'accepted'
  ) {
    sendGAEvent(...args);
  }
}
