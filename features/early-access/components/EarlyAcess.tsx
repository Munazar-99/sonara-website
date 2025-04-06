'use client';

import React from 'react';
import * as m from 'motion/react-m';
import BenefitItem from './BenefitItem';
import EarlyAccessFormContainer from './EarlyAccessFormContainer';

const EarlyAccess = () => {
  return (
    <section id="early-access" className="bg-sonara-50 py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-24 lg:grid-cols-2">
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-block">
                <span className="bg-sonara-100 text-sonara-600 rounded-full px-3 py-1 text-sm font-medium">
                  Limited Availability
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Free Setup Offer -{' '}
                <span className="text-sonara-500">Worth €499</span>
              </h2>

              <p className="mb-8 text-gray-600">
                We&apos;re currently waiving our €499 setup fee for new
                customers. After setup, pay only €0.49/min (excl. VAT) with no
                monthly commitments..
              </p>

              <m.div
                className="mb-8 space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                <m.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <BenefitItem
                    title="100% Managed Service"
                    description="We handle all setup, customization and maintenance"
                  />
                </m.div>

                <m.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <BenefitItem
                    title="Flexible Pay-Per-Use Pricing"
                    description="Only pay for the minutes we answer - no minimums or contracts"
                  />
                </m.div>

                <m.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <BenefitItem
                    title="Transparent Performance Tracking"
                    description="Access real-time data on all handled calls through your dashboard"
                  />
                </m.div>
              </m.div>
            </m.div>

            <m.div
              className="glass-card rounded-2xl p-8 lg:p-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <EarlyAccessFormContainer />
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
