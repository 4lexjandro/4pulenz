'use client';

import { useState } from 'react';
// import { Social, Events, Commercial, Private } from '@Assets/images/image.barrel';

const services = [
  {
    key: 'social',
    title: 'SOCIAL MEDIA CONTENT',
    subtitle: 'SHORT-FORM VIDEO PACKAGES',
    description:
      'Social media is a dynamic and fast-paced environment where consistency is essential to building a strong presence. To help your business stand out, our social media content package is designed to deliver high-quality reels that captivate your audience and drive engagement.',
    image: '/assets/images/Z.jpg'    
      // video: '/videos/AirVid.mp4',
  },
  {
    key: 'private',
    title: 'PRIVATE SHOOTS',
    subtitle: 'ONE-ON-ONE CREATIVE',
    description:
      'From portraits to passion projects, our private shoots focus on personalized, high-quality visuals with your unique style in mind.',
    image: '/assets/images/FW.jpg'    
      // video: '/videos/AirVid.mp4',
  },
  {
    key: 'commercial',
    title: 'COMMERCIAL',
    subtitle: 'PRODUCT / BRANDING',
    description:
      'Make your brand unforgettable with cinematic commercials tailored to your vision, values, and target audience.',
    image: '/assets/images/coke.jpg'    
      // video: '/videos/AirVid.mp4',
  },
  {
    key: 'events',
    title: 'EVENTS',
    subtitle: 'LIVE THE MAGIC AGAIN',
    description:
      'Perfect for capturing the energy and emotion of live events, our recap package distills your event’s highlights into a visually compelling narrative.',
    image: '/assets/images/table.JPG'    
      // video: '/videos/AirVid.mp4',
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center py-5 px-4'>
      <h2 className='text-md tracking-widest text-gray-400 mb-6 text-center'>EXPLORE OUR SERVICES</h2>

      {/* Button group */}
      <div className='flex flex-col md:flex-row flex-wrap gap-4 mb-12 w-full max-w-3xl items-center justify-center'>
        {services.map((service) => {
          const isActive = activeService.key === service.key;
          return (
            <button
              key={service.key}
              onClick={() => setActiveService(service)}
              className={`w-full md:w-auto px-4 py-2 text-sm font-semibold transition-all duration-300
                ${
                  isActive
                    ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]'
                    : 'text-white hover:text-purple-300'
                }`}
            >
              {service.title.split(' ')[0]}
            </button>
          );
        })}
      </div>

      {/* Content section */}
      <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-2'>
        {/* Video preview */}
        <div className='flex flex-col items-center md:items-start w-full'>

          {/* In case You want to implement videos, it is commmented out  */}
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className='rounded-xl w-full object-cover max-w-md shadow-md'
          >
            <source src={activeService.video} type='video/mp4' />
            Your browser does not support the video tag.
          </video> */}
          

           <img
               src={activeService.image}
               alt={activeService.title}
               className='rounded-xl w-full object-cover max-w-md shadow-md'
            />

        </div>

        {/* Text content */}
        <div className='text-center md:text-left'>
          <h1 className='text-lg font-bold leading-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]'>
            {activeService.title}
          </h1>
          <p className='uppercase text-gray-400 tracking-wide text-sm mb-4'>
            {activeService.subtitle}
          </p>
          <div className='border-t border-gray-600 mb-4 w-20 mx-auto md:mx-0'></div>
          <p className='text-gray-300 mb-6 whitespace-pre-line'>{activeService.description}</p>
        </div>
      </div>
    </div>
  );
};


export default Services;