import { PhoneCall, MessageSquare, Calendar, ArrowRight } from 'lucide-react';

export const features = [
  {
    icon: <PhoneCall size={28} className="text-sonara-500" />,
    title: 'Capture Every Call, Every Time',
    description:
      'AI instantly answers & qualifies calls 24/7/365, turning missed opportunities into scheduled appointments and sales.',
    delay: 0.1,
  },
  {
    icon: <MessageSquare size={28} className="text-sonara-500" />,
    title: 'Eliminate Repetitive Call Handling',
    description:
      'Automates FAQs and routine inquiries while providing detailed insights about caller needs and pain points.',
    delay: 0.3,
  },
  {
    icon: <Calendar size={28} className="text-sonara-500" />,
    title: 'Frictionless Appointment Booking',
    description:
      'Seamlessly schedules meetings into your calendar and sends confirmation details to callers—no human effort required.',
    delay: 0.5,
  },
  {
    icon: <ArrowRight size={28} className="text-sonara-500" />,
    title: 'Plug-and-Play Integration',
    description:
      'Works instantly with tools you already use—Salesforce, HubSpot, Google Calendar, and more. No technical setup needed.',
    delay: 0.7,
  },
];
