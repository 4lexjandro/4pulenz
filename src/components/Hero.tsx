'use client';

import { BackgroundBeams } from './ui/background-beams';
import Image from 'next/image';
import { Instagram, Youtube, Tiktok, X } from '@Assets/svg/svg.barrel';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center h-dvh'>
      <div className='relative h-[100px] flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-semibold tracking-wider z-10'>4PULENZ</h1>
        <h1 className='absolute text-3xl font-semibold tracking-wider text-[#7B337D] z-0 -top-1 md:-top-3 lg:-top-4 xl:-top-6'>
          4PULENZ
        </h1>
        <h1 className='absolute text-3xl font-semibold tracking-wider text-[#330A50] z-0 -bottom-1 md:-bottom-3 lg:-bottom-4 xl:-bottom-6'>
          4PULENZ
        </h1>
      </div>
      <h1 className='text-lg font-medium tracking-wide'>Soar into Orbit.</h1>
      <div className='flex items-center gap-5 z-20'>
        <Link href={'https://www.youtube.com/@4lexjandro'} target='_blank'>
          <Image alt='Youtube' src={Youtube} width={30} height={30} />
        </Link>
        <Link href={'https://x.com/4lexjandro_/'} target='_blank'>
          <Image alt='X' src={X} width={30} height={30} />
        </Link>
        <Link href={'https://www.instagram.com/4lexjandro_/'} target='_blank'>
          <Image alt='Instagram' src={Instagram} width={30} height={30} />
        </Link>
        <Link href={'https://www.tiktok.com/@4pulenz'} target='_blank'>
          <Image alt='Tiktok' src={Tiktok} width={30} height={30} />
        </Link>
      </div>
      <motion.h1
        animate={{
          y: [0, -10, 0], // Define the float motion
        }}
        transition={{
          duration: 2, // Animation duration (2 seconds)
          repeat: Infinity, // Loop the animation infinitely
          ease: 'easeInOut', // Smooth easing for the float
        }}
        className='absolute bottom-10 text-md font-bold'
      >
        Scroll for more
      </motion.h1>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
