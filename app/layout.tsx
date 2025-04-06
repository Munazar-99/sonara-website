import { Toaster } from '@/components/ui/sonner';
import { Sarabun } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '@/components/providers/react-query';
import CookieConsent from '@/components/CookieConsent';
import { getSEOTags } from '@/utils/seo';

const rajdhani = Sarabun({
  subsets: ['latin'],
  weight: ['300'],
});

export const metadata = getSEOTags({
  title: 'Sonara - AI Phone Assistant for Businesses & Clinics',
  description:
    'Sonara helps service providers and clinics answer every call, book appointments, and automate common phone queries — 24/7.',
  canonicalUrlRelative: '/',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${rajdhani.className}`}>
        <CookieConsent />
        <Toaster />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
