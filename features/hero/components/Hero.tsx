import React from 'react';
import {
  ArrowRight,
  CheckCircle,
  CalendarCheck,
  XCircle,
  PhoneMissed,
} from 'lucide-react';
import * as m from 'motion/react-m';
import { fadeIn } from '../utils';
import { safeSendGAEvent } from '@/utils';
const Hero = () => {
  return (
    <section className="bg-hero-pattern relative overflow-hidden bg-cover bg-center pt-32 pb-24">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col items-center text-center">
          <m.div
            className="bg-sonara-100 text-sonara-600 mb-6 inline-flex items-center rounded-full px-3 py-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold">
              Your Always-On AI Receptionist
            </span>
          </m.div>

          <m.h1
            className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Never Miss a Call. <br />
            <span className="text-sonara-500">Never Lose a Customer.</span>
          </m.h1>

          <m.p
            className="mx-auto mb-8 max-w-3xl text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sonara answers every call 24/7, captures key details, and books
            meetings straight into your calendar. While you&#39;re focused on
            running the business, Sonara&#39;s making sure no opportunity slips
            through the cracks.
          </m.p>

          <m.a
            href="#early-access"
            className="button-primary flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              safeSendGAEvent('event', 'hero_cta', { value: 'xyz' });
            }}
          >
            Get Started for €0 <ArrowRight size={18} />
          </m.a>

          <m.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-1">
              <CheckCircle size={16} className="text-sonara-500" />
              <span>No Setup Fees (Limited Time)</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle size={16} className="text-sonara-500" />
              <span>Only €0.49/Minute</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle size={16} className="text-sonara-500" />
              <span>No Monthly Commitments</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle size={16} className="text-sonara-500" />
              <span>Working Within 48 Hours</span>
            </div>
          </m.div>
        </div>

        <m.div
          className="glass-card mx-auto max-w-5xl overflow-hidden rounded-2xl border shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="grid gap-0 md:grid-cols-2">
            <m.div
              className="flex flex-col justify-center bg-gray-100 p-8 md:p-10 lg:p-12"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <div className="mb-4 flex items-center text-red-500">
                <PhoneMissed className="mr-2" size={20} />
                <h3 className="font-semibold">Without Sonara</h3>
              </div>
              <h3 className="mb-2 text-xl font-bold">Missed Call</h3>
              <p className="mb-4 text-gray-600">
                The calls you miss during peak hours, after closing, or over the
                weekend aren&#39;t just lost - they&#39;re picked up by your
                competitors.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-red-500">
                  <XCircle size={20} className="shrink-0" />
                  <span>Lost revenue and wasted ad spend</span>
                </div>
                <div className="flex items-center gap-3 text-red-500">
                  <XCircle size={20} className="shrink-0" />
                  <span>Competitors scoop up your leads</span>
                </div>
                <div className="flex items-center gap-3 text-red-500">
                  <XCircle size={20} className="shrink-0" />
                  <span>Staff constantly interrupted by calls</span>
                </div>
              </div>
            </m.div>

            <m.div
              className="bg-sonara-50 flex flex-col justify-center p-8 md:p-10 lg:p-12"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
            >
              <div className="text-sonara-500 mb-4 flex items-center">
                <CalendarCheck className="mr-2" size={20} />
                <h3 className="font-semibold">With Sonara</h3>
              </div>
              <h3 className="mb-2 text-xl font-bold">Meeting Scheduled</h3>
              <p className="mb-4 text-gray-600">
                Sonara answers calls around the clock, handles questions on the
                spot, and books appointments straight into your calendar.
              </p>
              <div className="flex flex-col gap-2">
                <div className="text-sonara-500 flex items-center gap-3">
                  <CheckCircle size={20} className="shrink-0" />
                  <span>Never miss another opportunity (even at 2AM)</span>
                </div>
                <div className="text-sonara-500 flex items-center gap-3">
                  <CheckCircle size={20} className="shrink-0" />
                  <span>Convert after-hours callers while you sleep</span>
                </div>
                <div className="text-sonara-500 flex items-center gap-3">
                  <CheckCircle size={20} className="shrink-0" />
                  <span>Pay only for call minutes - no contracts</span>
                </div>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>

      {/* Background elements */}
      <div className="bg-sonara-500/10 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl"></div>
      <div className="bg-sonara-500/10 absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
