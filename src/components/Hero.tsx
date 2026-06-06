// 'use client';

// import { BackgroundBeams } from './ui/background-beams';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <div className='flex flex-col gap-3 items-center justify-center h-dvh bg-black'>
//       <div className='relative h-[50px] flex flex-col items-center justify-center'>
        
//         <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]">
//   4PULENZ
// </h1>
//       </div>
//       <h1 className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]">
//       Soar into Orbit
// </h1>

      
     
//       <motion.h1
//         animate={{
//           y: [0, -10, 0], // Define the float motion
//         }}
//         transition={{
//           duration: 8, // Animation duration (2 seconds)
//           repeat: Infinity, // Loop the animation infinitely
//           ease: 'easeInOut', // Smooth easing for the float
//         }}
//         className='absolute bottom-10 text-md font-bold'
//       >
//       </motion.h1>
//       <BackgroundBeams />
//     </div>
//   );
// };

// export default Hero;



'use client';

import { BackgroundBeams } from './ui/background-beams';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='relative flex flex-col gap-3 items-center justify-center h-dvh bg-black overflow-hidden'>

      {/* Ambient glow top center */}
      <div
        className="pointer-events-none absolute top-[-20%] left-0 w-full h-[600px]"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.35), transparent 70%)' }}
      />

      {/* Ambient glow bottom */}
      <div
        className="pointer-events-none absolute bottom-[-20%] left-0 w-full h-[500px]"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(239,68,68,0.2), transparent 70%)' }}
      />

      <div className='relative z-10 h-[50px] flex flex-col items-center justify-center'>
        <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]">
          4PULENZ
        </h1>
      </div>

      <h1 className="relative z-10 text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]">
        Soar into Orbit
      </h1>

      <motion.h1
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute bottom-10 text-md font-bold z-10'
      >
      </motion.h1>

      <BackgroundBeams />
    </div>
  );
};

export default Hero;