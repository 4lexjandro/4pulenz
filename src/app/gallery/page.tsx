// 'use client';

// import {
//   Gallery1,
//   Gallery2,
//   Gallery3,
//   Gallery4,
//   Gallery5,
//   Gallery6,
//   Gallery7,
//   Gallery8,
//   Gallery9,
//   Gallery10,
//   Gallery11,
//   Gallery12,
//   Gallery13,
//   Gallery14,
//   Gallery15,
//   Gallery16,
//   Gallery17,
//   Gallery18,
//   Gallery19,
//   Gallery20,
//   Gallery21,
//   Gallery22,
//   Gallery24,
//   Gallery25,
//   Roller,
//   FPV,
//   Air,
//   Ground,
// } from '@Assets/images/image.barrel';

// import Image, { StaticImageData } from 'next/image';

// const gradientText =
//   'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]';

// const page = () => {
//   const images = [
//     Gallery1,
//     Gallery2,
//     Gallery3,
//     Gallery4,
//     Gallery5,
//     Gallery6,
//     Gallery7,
//     Gallery8,
//     Gallery9,
//     Gallery10,
//     Gallery11,
//     Gallery12,
//     Gallery13,
//     Gallery14,
//     Gallery15,
//     Gallery16,
//     Gallery17,
//     Gallery18,
//     Gallery19,
//     Gallery20,
//     Gallery21,
//     Gallery22,
//     Gallery24,
//     Gallery25,
//     Roller,
//     FPV,
//     Air,
//     Ground,
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center bg-black">
//       <div className="px-10">
//         <h1 className={`text-lg font-medium my-5 ${gradientText}`}>Gallery</h1>
//         <div className="columns-1 md:columns-4 lg:columns-6 gap-3">
//           {images.map((img: StaticImageData) => (
//             <Image
//               key={img.src}
//               className="aspect-auto w-full object-cover mb-3"
//               alt="photo"
//               src={img}
//             />
//           ))}
//           {/* <video className="h-auto mb-3" autoPlay loop muted>
//             <source src="/videos/DJI.mp4" />
//           </video>
//           <video className="h-auto mb-3" autoPlay loop muted>
//             <source src="/videos/DJI2.mp4" />
//           </video>
//           <video className="h-auto mb-3" autoPlay loop muted>
//             <source src="/videos/DJI3.mp4" />
//           </video> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
  Gallery11,
  Gallery12,
  Gallery13,
  Gallery14,
  Gallery15,
  Gallery16,
  Gallery17,
  Gallery18,
  Gallery19,
  Gallery20,
  Gallery21,
  Gallery22,
  Gallery24,
  Gallery25,
  Roller,
  FPV,
  Air,
  Ground,
} from '@Assets/images/image.barrel';

const gradientText =
  'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]';

type Category = 'all' | 'stills' | 'aerial' | 'rollers';

type GalleryImage = {
  src: StaticImageData;
  category: Exclude<Category, 'all'>;
};

// ─── Tag your photos here ───────────────────────────────────────────────────
// Change the category for each image to 'stills' | 'aerial' | 'rollers'
// Delete any images you no longer want shown
const images: GalleryImage[] = [
  { src: Gallery1,  category: 'stills' },
  { src: Gallery2,  category: 'stills' },
  { src: Gallery3,  category: 'stills' },
  { src: Gallery4,  category: 'stills' },
  { src: Gallery5,  category: 'stills' },
  { src: Gallery6,  category: 'stills' },
  { src: Gallery7,  category: 'stills' },
  { src: Gallery8,  category: 'stills' },
  { src: Gallery9,  category: 'stills' },
  { src: Gallery10, category: 'stills' },
  { src: Gallery11, category: 'stills' },
  { src: Gallery12, category: 'stills' },
  { src: Gallery13, category: 'stills' },
  { src: Gallery14, category: 'stills' },
  { src: Gallery15, category: 'stills' },
  { src: Gallery16, category: 'stills' },
  { src: Gallery17, category: 'stills' },
  { src: Gallery18, category: 'stills' },
  { src: Gallery19, category: 'stills' },
  { src: Gallery20, category: 'stills' },
  { src: Gallery21, category: 'stills' },
  { src: Gallery22, category: 'stills' },
  { src: Gallery24, category: 'stills' },
  { src: Gallery25, category: 'stills' },
  { src: Roller,    category: 'rollers' },
  { src: FPV,       category: 'aerial' },
  { src: Air,       category: 'aerial' },
  { src: Ground,    category: 'stills' },
];
// ────────────────────────────────────────────────────────────────────────────

const tabs: { label: string; value: Category }[] = [
  { label: 'All',     value: 'all' },
  { label: 'Stills',  value: 'stills' },
  { label: 'Aerial',  value: 'aerial' },
  { label: 'Rollers', value: 'rollers' },
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all'
    ? images
    : images.filter(img => img.category === active);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center px-6 py-16">

      {/* Ambient glows */}
      <div
        className="pointer-events-none fixed top-[-20%] left-0 w-full h-[600px]"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.25), transparent 70%)' }}
      />
      <div
        className="pointer-events-none fixed bottom-[-20%] left-0 w-full h-[500px]"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(239,68,68,0.15), transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-600">the work</p>
          <h1 className={`text-5xl font-light tracking-tight ${gradientText}`}>Gallery</h1>
          <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-red-500 opacity-60 mt-1" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map(tab => {
            const isActive = active === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActive(tab.value)}
                className="px-5 py-2 rounded-xl text-xs tracking-widest uppercase transition-all duration-300"
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(239,68,68,0.2))'
                    : 'transparent',
                  border: isActive
                    ? '1px solid rgba(168,85,247,0.6)'
                    : '1px solid rgba(168,85,247,0.18)',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.4)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.18)';
                  }
                }}
              >
                <span className={isActive ? gradientText : 'text-neutral-500'}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry grid */}
        <div className="w-full columns-1 md:columns-3 lg:columns-4 gap-3">
          {filtered.map((img) => (
            <div
              key={img.src.src}
              className="mb-3 rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(168,85,247,0.15)' }}
            >
              <Image
                className="w-full object-cover"
                alt="gallery photo"
                src={img.src}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-neutral-600 text-sm py-20">No photos in this category yet.</p>
        )}

      </div>
    </div>
  );
}