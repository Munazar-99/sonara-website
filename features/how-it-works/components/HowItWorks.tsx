import React from 'react';
import * as m from 'motion/react-m';
import { containerVariants, itemVariants } from '../utils';
import { steps } from '../utils/constants';
import { safeSendGAEvent } from '@/utils';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 py-24">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="bg-sonara-100 text-sonara-600 rounded-full px-3 py-1 text-sm font-medium">
              Ready In 48 Hours
            </span>
          </div>

          <m.h2
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How <span className="text-sonara-500">Sonara</span> Works
          </m.h2>

          <m.p
            className="section-subheading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We&apos;ve removed the technical roadblocks. Sonara can be up and
            running in just a few days, answering calls and booking meetings
            while you focus on what matters most. Claim your free setup today
            and take back your time.
          </m.p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-0 left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform bg-gray-200 md:block"></div>

            {/* Steps */}
            <m.div
              className="relative space-y-12 md:space-y-32"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {steps.map((step, index) => (
                <m.div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                  } items-center gap-8`}
                  variants={itemVariants}
                >
                  <div className="flex w-full justify-center md:w-1/2">
                    <m.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div
                        className={`h-20 w-20 ${step.color} relative z-10 flex items-center justify-center rounded-full`}
                      >
                        {step.icon}

                        <div className="text-sonara-500 absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold shadow-md">
                          {step.number}
                        </div>
                      </div>

                      {/* Step animation ring */}
                      <m.div
                        className={`absolute inset-0 ${step.color} rounded-full opacity-20`}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'loop',
                        }}
                      ></m.div>
                    </m.div>
                  </div>

                  <div className="w-full text-center md:w-1/2 md:text-left">
                    <h3 className="mb-4 text-2xl font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>

        <m.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#early-access"
            className="button-primary inline-block"
            onClick={() => {
              safeSendGAEvent('event', 'steps_cta', { value: 'xyz' });
            }}
          >
            Get Started With Sonara
          </a>
        </m.div>
      </div>
    </section>
  );
};

export default HowItWorks;
