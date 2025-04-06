import { Settings, Phone, Calendar, ArrowRight } from 'lucide-react';

export const steps = [
  {
    icon: <Settings size={32} className="text-white" />,
    title: ' White-Glove Setup Where We Do Everything',
    description:
      'We handle your entire onboarding process from start to finish, seamlessly integrating with your existing CRM and calendar systems while custom-training Sonara to perfectly represent your business.',
    number: '01',
    color: 'bg-sonara-500',
  },
  {
    icon: <Phone size={32} className="text-white" />,
    title: 'AI Instantly Handles All Calls',
    description:
      'Sonara intelligently qualifies leads through thoughtful conversation and books appointments directly into your calendar without any manual effort.',
    number: '02',
    color: 'bg-sonara-600',
  },
  {
    icon: <Calendar size={32} className="text-white" />,
    title: 'Automated Business Processes',
    description:
      'Appointments booked, leads captured in your CRM, and follow-ups scheduled—all without lifting a finger.',
    number: '03',
    color: 'bg-sonara-700',
  },
  {
    icon: <ArrowRight size={32} className="text-white" />,
    title: 'Measurable Business Growth',
    description:
      'Track performance in real-time with detailed analytics on calls, conversions, and appointments, all accessible in your dashboard.',
    number: '04',
    color: 'bg-sonara-800',
  },
];
