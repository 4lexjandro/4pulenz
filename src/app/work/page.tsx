'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Social Media Content',
    description:
      'Short-form videos tailored for Instagram, TikTok, and YouTube Shorts. We focus on punchy edits, trend-aligned storytelling, and optimized aspect ratios to maximize reach and engagement.',
  },
  {
    title: 'After Movies',
    description:
      'Dynamic event recaps that preserve energy, emotion, and atmosphere. Ideal for festivals, concerts, and branded events with cinematic pacing and impactful music syncing.',
  },
  {
    title: 'Commercial',
    description:
      'Professional promotional content designed for digital campaigns, product launches, and brand awareness. Every piece is designed to convert attention into action through intentional framing, lighting, and direction.',
  },
  {
    title: 'Private Shoots',
    description:
      'Personalized one-on-one sessions designed around your creative vision. Whether it’s lifestyle, fashion, or abstract storytelling, we bring cinematic tools and ideas to make your concept come to life.',
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Work = () => {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)] mb-12">
          OUR WORK
        </h1>

        {/* iPhone mockups */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="relative w-[160px] h-[320px] rounded-[2rem] bg-[#1a1a1a] shadow-[0_0_20px_rgba(255,0,128,0.3)] border-[2px] border-[#333] overflow-hidden"
            >
              {/* Dynamic Island + Camera */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[70px] h-[18px] rounded-full bg-black/90 z-10 flex items-center justify-end pr-1">
                <div className="w-[6px] h-[6px] rounded-full bg-gray-700" />
              </div>

              {/* Video */}
              <video
                src="/placeholder.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Service Sections */}
      {services.map((service, index) => (
        <motion.section
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">{service.title}</h2>
            <p className="text-gray-300 text-base md:text-lg">{service.description}</p>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default Work;