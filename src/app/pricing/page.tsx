'use client';

import { useRouter } from 'next/navigation';

const gradientText =
  'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]';

type Tier = {
  label: string;
  price: string;
  sub: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const photoTiers: Tier[] = [
  {
    label: 'Mini',
    price: 'From $75',
    sub: '30 min · 5–10 edited photos',
    features: [
      '30 minute shoot',
      '5–10 professionally edited photos',
      'Digital delivery',
    ],
    cta: 'Book',
  },
  {
    label: 'Standard',
    price: 'From $150',
    sub: '1 hr · 15–20 edited photos',
    features: [
      '1 hour shoot',
      '15–20 professionally edited photos',
      'Location scouting included',
      'Digital delivery',
    ],
    cta: 'Book',
    highlight: true,
  },
  {
    label: 'Full',
    price: 'From $250',
    sub: '2 hrs · 30+ edited photos',
    features: [
      '2 hour shoot',
      '30+ professionally edited photos',
      'Location scouting included',
      'Priority turnaround',
    ],
    cta: 'Book',
  },
];

const videoTiers: Tier[] = [
  {
    label: 'Reel',
    price: 'From $150',
    sub: '20–60 sec · social ready',
    features: [
      '20–60 second edited clip',
      'Music synced for social media',
      'Color graded footage',
    ],
    cta: 'Book',
  },
  {
    label: 'Content',
    price: 'From $300',
    sub: 'Multi-clip · photo + video',
    features: [
      '2–3 edited video clips',
      '10+ edited photos included',
      'Music synced for social media',
      'Color graded throughout',
    ],
    cta: 'Book',
    highlight: true,
  },
  {
    label: 'Event',
    price: 'From $500',
    sub: 'Full coverage · multi-video delivery',
    features: [
      '2–4 hours of coverage',
      '3 edited social media videos',
      'Full edited photo gallery',
      'Raw footage available on request',
    ],
    cta: 'Book',
  },
];

const droneTiers: Tier[] = [
  {
    label: 'Add-on',
    price: 'From $75',
    sub: 'Add to any existing package',
    features: [
      'DJI Mini 3 Pro aerial footage',
      '5–10 aerial photos or 1 aerial clip',
      'Weather dependent',
    ],
    cta: 'Add On',
  },
  {
    label: 'Aerial + Ground',
    price: 'From $250',
    sub: 'Full aerial and ground coverage',
    features: [
      'DJI Mini 3 Pro aerial footage',
      '1 edited aerial reel',
      '15+ edited ground photos',
      'Color graded throughout',
    ],
    cta: 'Book',
    highlight: true,
  },
  {
    label: 'Aerial Event',
    price: 'Custom Quote',
    sub: 'Full aerial event coverage',
    features: [
      'Full event aerial coverage',
      'Multiple aerial angles',
      'Edited highlight reel',
      'Raw footage available',
    ],
    cta: 'Get Quote',
  },
];

function TierCard({ tier, onBook }: { tier: Tier; onBook: (label: string) => void }) {
  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden transition-all duration-300 h-full"
      style={{
        background: tier.highlight
          ? 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(239,68,68,0.15))'
          : 'linear-gradient(135deg, rgba(168,85,247,0.05), rgba(239,68,68,0.05))',
        border: tier.highlight
          ? '1px solid rgba(168,85,247,0.6)'
          : '1px solid rgba(168,85,247,0.18)',
      }}
    >
      {tier.highlight && (
        <div
          className="text-center py-1 text-xs tracking-widest uppercase"
          style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.35), rgba(239,68,68,0.35))' }}
        >
          <span className="text-white opacity-80">Most Popular</span>
        </div>
      )}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div>
          <p className="text-neutral-500 text-xs tracking-widest uppercase mb-0.5">{tier.label}</p>
          <p className={`text-xl font-light tracking-tight ${gradientText}`}>{tier.price}</p>
          <p className="text-neutral-600 text-xs mt-0.5">{tier.sub}</p>
        </div>
        <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-red-500 opacity-40" />
        <ul className="flex flex-col gap-1.5 flex-1">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-neutral-400">
              <span className="text-purple-500 mt-0.5 shrink-0 text-xs">✦</span>
              {f}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onBook(tier.label)}
          className="group mt-1 w-full rounded-lg px-4 py-2.5 transition-all duration-300 flex items-center justify-between overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(239,68,68,0.12))',
            border: '1px solid rgba(168,85,247,0.35)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.8)';
            (e.currentTarget as HTMLButtonElement).style.background =
              'linear-gradient(135deg, rgba(168,85,247,0.22), rgba(239,68,68,0.22))';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.35)';
            (e.currentTarget as HTMLButtonElement).style.background =
              'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(239,68,68,0.12))';
          }}
        >
          <span className={`text-xs font-medium tracking-wide ${gradientText}`}>{tier.cta}</span>
          <svg
            className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Section({ title, sub, tiers, onBook }: { title: string; sub: string; tiers: Tier[]; onBook: (label: string) => void }) {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-0.5">
        <h2 className={`text-xl font-light tracking-widest uppercase ${gradientText}`}>{title}</h2>
        <p className="text-neutral-600 text-xs">{sub}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiers.map(tier => (
          <TierCard key={tier.label} tier={tier} onBook={onBook} />
        ))}
      </div>
    </div>
  );
}

export default function PricingPage() {
  const router = useRouter();

  const handleBook = (label: string) => {
    router.push(`/contact?package=${encodeURIComponent(label)}`);
  };

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

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-600">transparent pricing</p>
          <h1 className={`text-5xl font-light tracking-tight ${gradientText}`}>Pricing</h1>
          <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
            Every package is a starting point. Reach out and we&apos;ll build something around your vision.
          </p>
        </div>

        <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-red-500 opacity-60" />

        <Section
          title="Photography"
          sub="Professionally edited photos delivered digitally — events, portraits, cars, corporate and beyond."
          tiers={photoTiers}
          onBook={handleBook}
        />

        <Section
          title="Video"
          sub="Edited reels, social media clips, and event coverage — music synced and color graded."
          tiers={videoTiers}
          onBook={handleBook}
        />

        <Section
          title="Drone"
          sub="Aerial coverage with DJI Mini 3 Pro — cinematic perspective for any shoot or event."
          tiers={droneTiers}
          onBook={handleBook}
        />

        {/* Custom note */}
        <div
          className="w-full rounded-xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(239,68,68,0.08))',
            border: '1px solid rgba(168,85,247,0.25)',
          }}
        >
          <div className="flex flex-col gap-0.5 text-center md:text-left">
            <p className={`font-light tracking-wide text-lg ${gradientText}`}>Need something custom?</p>
            <p className="text-neutral-500 text-xs">Corporate campaigns, brand content, large events — let&apos;s talk.</p>
          </div>
          <button
            onClick={() => router.push('/contact')}
            className="group shrink-0 rounded-xl px-5 py-2.5 transition-all duration-300 flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(239,68,68,0.12))',
              border: '1px solid rgba(168,85,247,0.35)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.8)';
              (e.currentTarget as HTMLButtonElement).style.background =
                'linear-gradient(135deg, rgba(168,85,247,0.22), rgba(239,68,68,0.22))';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.35)';
              (e.currentTarget as HTMLButtonElement).style.background =
                'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(239,68,68,0.12))';
            }}
          >
            <span className={`text-xs font-medium tracking-wide ${gradientText}`}>Get in touch</span>
            <svg
              className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        <p className="text-white-700 text-xs">
          Pricing listed are starting points, final quote based on your project
        </p>

      </div>
    </div>
  );
}