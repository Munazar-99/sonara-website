import React from 'react';
import * as m from 'motion/react-m';
import { containerVariants, itemVariants } from '../utils';
import { features } from '../utils/constants';
import { safeSendGAEvent } from '@/utils';

const Benefits = () => {
  return (
    <section id="features" className="bg-white py-24">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="bg-sonara-100 text-sonara-600 rounded-full px-3 py-1 text-sm font-medium">
              Key Benefits
            </span>
          </div>

          <m.h2
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Makes Sonara <span className="text-sonara-500">Powerful</span>
          </m.h2>

          <m.p
            className="section-subheading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sonara is more than an AI assistant. It&apos;s a fully managed call
            solution that helps you capture more leads, grow revenue, and reduce
            the hidden costs of missed calls.
          </m.p>
        </div>

        <m.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <m.div
              key={index}
              className="feature-card glass-card flex h-full flex-col p-8"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-sonara-100 mb-6 flex h-14 w-14 items-center justify-center rounded-full">
                {feature.icon}
              </div>

              <h3 className="mb-3 flex min-h-[3rem] items-center text-xl font-bold">
                {feature.title}
              </h3>

              <p className="flex-grow text-gray-600">{feature.description}</p>
            </m.div>
          ))}
        </m.div>

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
              safeSendGAEvent('event', 'benefits_cta', { value: 'xyz' });
            }}
          >
            Experience The Benefits
          </a>
        </m.div>
      </div>
    </section>
  );
};

export default Benefits;
