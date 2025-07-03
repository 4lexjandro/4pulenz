'use client';
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessSectionProps {
  gradient?: boolean;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ gradient = true }) => {
  const gradientText =
    'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]';

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: `We’ll discuss your goals, creative vision, & target audience \n• Desired style \n• Length & quantity of videos and media`,
    },
    {
      number: '02',
      title: 'Booking',
      description: `We set a date, time, and location to capture media.\n\n• Deposit: 50% (Check, Zelle, Apple Pay) \n• Balance: Due upon delivery`,
    },
    {
      number: '03',
      title: 'Filming',
      description: `On the event day, everything’s prepped and ready. You just show up  & we capture the magic in action.\n\n• Duration: A few hours to a full day \n• Location: Yours or scouted together`,
    },
    {
      number: '04',
      title: 'Post-Production',
      description: `You'll receive a preview through a link where you can add feedback.\n • Turn around: 1 – 2 weeks`,
    },
    {
      number: '05',
      title: 'Delivery',
      description: `Once finalized and paid, you’ll receive a downloadable link of your finalized media.\n\n• Formats: 4K or Optimized for any social platform\n• Shared via Google Drive or FrameIO`,
    },
    {
      number: '06',
      title: 'Share',
      description: `Enjoy your finished results`,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black">
      <section className="px-6 py-8 max-w-6xl mx-auto bg-black">
        <h2
          className={cn(
            'text-3xl md:text-4xl font-bold mb-16 text-center',
            gradient ? gradientText : 'text-white'
          )}
        >
          The Process — How It All Works
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#111] rounded-2xl p-6 shadow-md shadow-black/30 hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className={cn('text-xl font-bold', gradient ? gradientText : 'text-white')}>
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              </div>
              <div className="text-gray-300 text-sm leading-loose space-y-2">
                {step.description.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProcessSection;