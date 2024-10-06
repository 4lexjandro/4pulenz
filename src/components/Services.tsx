'use client';
import { motion } from 'framer-motion';
import { Air, Ground, Roller, FPV } from '@Assets/images/image.barrel';
import Image from 'next/image';

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center h-dvh'>
      <div className='relative flex flex-col items-center gap-5 w-[95%]'>
        <h1 className='text-lg font-semibold uppercase mb-20'>Services</h1>

        <div className=' w-full flex flex-col gap-3  md:hidden'>
          <div className=' h-[100px] animate-lavender-dream flex flex-col items-center justify-center'>
            <h1 className='text-white text-md font-medium tracking-wide z-10'>Air/Ground Photos</h1>
          </div>
          <div className=' h-[100px] animate-lavender-dream flex flex-col items-center justify-center'>
            <h1 className='text-white text-md font-medium tracking-wide z-10'>Air/Ground Videos</h1>
          </div>
          <div className=' h-[100px] animate-lavender-dream flex flex-col items-center justify-center'>
            <h1 className='text-white text-md font-medium tracking-wide z-10'>Rollers</h1>
          </div>
          <div className=' h-[100px] animate-lavender-dream flex flex-col items-center justify-center'>
            <h1 className='text-white text-md font-medium tracking-wide z-10'>FPV</h1>
          </div>
        </div>

        <div className='hidden md:flex flex-col gap-3  w-[600px]'>
          <motion.div
            initial={{ height: '100px' }}
            whileHover={{ height: '250px', transition: { ease: 'easeInOut', duration: '0.2' } }}
            className='relative bg-slate-200 flex flex-col items-center justify-center overflow-hidden '
          >
            <Image
              alt='Ground Photo'
              src={Ground}
              width={600}
              height={250}
              className='absolute top-0 object-cover '
              priority
            />
            <div className='w-full h-full absolute top-0 backdrop-blur-[2px] bg-white/10 '></div>
            <motion.h1 className='text-black text-md font-medium tracking-wide z-10'>Air/Ground Photos</motion.h1>
          </motion.div>
          <motion.div
            initial={{ height: '100px' }}
            whileHover={{ height: '250px', transition: { ease: 'easeInOut', duration: '0.2' } }}
            className='relative bg-slate-200 flex flex-col items-center justify-center overflow-hidden'
          >
            <Image alt='Ground Vid' src={Air} width={600} height={250} className='absolute top-0' priority />
            <div className='w-full h-full absolute top-0 backdrop-blur-[2px] bg-white/10 '></div>

            <motion.h1 className='text-black text-md font-medium tracking-wide z-10'>Air/Ground Videos</motion.h1>
          </motion.div>
          <motion.div
            initial={{ height: '100px' }}
            whileHover={{ height: '250px', transition: { ease: 'easeInOut', duration: '0.2' } }}
            className='relative bg-slate-200 flex flex-col items-center justify-center overflow-hidden'
          >
            <Image alt='Roller' src={Roller} width={600} height={250} className='absolute top-0' priority />
            <div className='w-full h-full absolute top-0 backdrop-blur-[2px] bg-white/10 '></div>

            <motion.h1 className='text-black text-md font-medium tracking-wide z-10'>Rollers</motion.h1>
          </motion.div>
          <motion.div
            initial={{ height: '100px' }}
            whileHover={{ height: '250px', transition: { ease: 'easeInOut', duration: '0.2' } }}
            className='relative bg-slate-200 flex flex-col items-center justify-center overflow-hidden'
          >
            <Image alt='FPV' src={FPV} width={600} height={250} className='absolute top-0' priority />
            <div className='w-full h-full absolute top-0 backdrop-blur-[2px] bg-white/10 '></div>
            <motion.h1 className='text-black text-md font-medium tracking-wide z-10'>FPV</motion.h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
