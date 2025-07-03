'use client';

import { BackgroundBeams } from './ui/background-beams';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='flex flex-col gap-3 items-center justify-center h-dvh bg-black'>
      <div className='relative h-[50px] flex flex-col items-center justify-center'>
        
        <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]">
  4PULENZ
</h1>
      </div>
      <h1 className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]">
      Soar into Orbit
</h1>

      
     
      <motion.h1
        animate={{
          y: [0, -10, 0], // Define the float motion
        }}
        transition={{
          duration: 8, // Animation duration (2 seconds)
          repeat: Infinity, // Loop the animation infinitely
          ease: 'easeInOut', // Smooth easing for the float
        }}
        className='absolute bottom-10 text-md font-bold'
      >
      </motion.h1>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;

