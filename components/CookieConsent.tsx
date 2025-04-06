'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoogleAnalytics } from '@next/third-parties/google';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      setAnalyticsAllowed(true);
    } else if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    setAnalyticsAllowed(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  return (
    <>
      {analyticsAllowed && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID || ''} />
      )}

      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed right-4 bottom-4 left-4 z-50 sm:bottom-6 md:right-6 md:left-auto md:max-w-md"
          >
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="bg-sonara-50 shrink-0 rounded-lg p-2">
                  <Cookie className="text-sonara-500 h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1.5 text-base font-semibold">
                    Cookie Consent
                  </h3>
                  <p className="mb-3 text-sm leading-snug text-gray-600">
                    We use cookies to enhance your browsing experience and
                    analyze site traffic.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      onClick={handleAccept}
                      size="sm"
                      className="bg-sonara-500 hover:bg-sonara-600 h-auto rounded-full px-4 py-1.5 text-xs text-white sm:text-sm"
                    >
                      Accept All
                    </Button>
                    <Button
                      onClick={handleDecline}
                      variant="outline"
                      size="sm"
                      className="h-auto rounded-full border-gray-200 px-4 py-1.5 text-xs text-gray-700 hover:bg-gray-50 sm:text-sm"
                    >
                      Decline
                    </Button>
                  </div>
                </div>

                {/* <button 
                onClick={handleDecline} 
                className="text-gray-400 hover:text-gray-600 transition-colors p-0.5 rounded-full hover:bg-gray-100"
                aria-label="Close cookie banner"
              >
                <X size={18} />
              </button> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
