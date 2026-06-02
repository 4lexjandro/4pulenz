



'use client';

import { useRouter } from 'next/navigation';

const gradientText =
  'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]';

export default function SecretPage() {
  const router = useRouter();

  return (
     <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
 
      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none fixed top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }}
      />
      <div
        className="pointer-events-none fixed bottom-[-10%] right-[15%] w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ef4444, transparent 70%)' }}
      />
 
      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full gap-10">
 
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          exclusive access
        </p>

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h1 className={`text-5xl font-bold leading-tight ${gradientText}`}>
            4pulenz
          </h1>
          <h4 className={`text-1xl font-bold leading-tight ${gradientText}`}>
            Congratulations
          </h4>
          <p className="text-neutral-400 text-sm leading-relaxed">
            
            You found something most don&apos;t see.
            <br />
            Follow the work or own it digitally 
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-red-500 opacity-60" />

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/4pulenz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full rounded-xl px-6 py-4 transition-all duration-300 flex items-center justify-between overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(239,68,68,0.15))',
              border: '1px solid rgba(168,85,247,0.4)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(168,85,247,0.8)';
              (e.currentTarget as HTMLAnchorElement).style.background =
                'linear-gradient(135deg, rgba(168,85,247,0.25), rgba(239,68,68,0.25))';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(168,85,247,0.4)';
              (e.currentTarget as HTMLAnchorElement).style.background =
                'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(239,68,68,0.15))';
            }}
          >
            <div className="flex flex-col items-start gap-0.5">
              <span className={`font-semibold text-sm ${gradientText}`}>Follow on Instagram</span>
              <span className="text-neutral-400 text-xs"> Curious how your photo was made?</span>
            </div>
            <svg
              className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>

          {/* Buy a print */}
          <button
            onClick={() => router.push('/prints')}
            className="group relative w-full rounded-xl px-6 py-4 transition-all duration-300 flex items-center justify-between overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(239,68,68,0.15))',
              border: '1px solid rgba(168,85,247,0.4)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.8)';
              (e.currentTarget as HTMLButtonElement).style.background =
                'linear-gradient(135deg, rgba(168,85,247,0.25), rgba(239,68,68,0.25))';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.4)';
              (e.currentTarget as HTMLButtonElement).style.background =
                'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(239,68,68,0.15))';
            }}
          >
            <div className="flex flex-col items-start gap-0.5">
              <span className={`font-semibold text-sm ${gradientText}`}>Own the shot</span>
              <span className="text-neutral-400 text-xs">Browse &amp; buy your digital print</span>
            </div>
            <svg
              className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>

        </div>

        

      </div>
    </div>
  );
}