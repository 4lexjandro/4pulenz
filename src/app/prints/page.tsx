'use client';

import { useEffect, useState } from 'react';

const gradientText =
  'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]';

type Product = {
  id: string;
  name: string;
  formatted_price: string;
  short_url: string;
  preview_url: string | null;
  covers: { url: string }[];
  description: string;
  sales_count: number;
};

export default function PrintsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/gumroad')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
  setProducts(data.reverse());
}else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

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

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">digital prints</p>
          <h1 className={`text-5xl font-bold ${gradientText}`}>Own the shot</h1>
          <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
            Every photo is a real car, shot in the wild. Find yours, pay once, download instantly.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-red-500 opacity-60" />

        {/* Search */}
        <div className="w-full max-w-md relative">
          <input
            type="text"
            placeholder="Search by make, model, color..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 focus:border-purple-500 rounded-xl px-5 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors duration-300"
          />
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.197 5.197a7.5 7.5 0 0 0 10.606 10.606Z" />
          </svg>
        </div>

        {/* States */}
        {loading && (
          <div className="flex flex-col items-center gap-3 py-20">
            <div className="w-8 h-8 rounded-full border border-purple-500 border-t-transparent animate-spin" />
            <p className="text-neutral-600 text-xs tracking-widest uppercase">Loading prints</p>
          </div>
        )}

        {error && (
          <p className="text-red-400 text-sm py-20">Couldn&apos;t load prints. Try again in a moment.</p>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="text-neutral-600 text-sm py-20">No prints found for &ldquo;{search}&rdquo;</p>
        )}

        {/* Grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(product => (
              <a
                key={product.id}
                href={product.short_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(239,68,68,0.08))',
                  border: '1px solid rgba(168,85,247,0.25)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(168,85,247,0.6)';
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(239,68,68,0.15))';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(168,85,247,0.25)';
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(239,68,68,0.08))';
                }}
              >
                {/* Photo */}
                <div className="w-full aspect-[4/3] bg-neutral-900 overflow-hidden">
                {(product.covers?.[0]?.url || product.preview_url) ? (
  <img
    src={product.covers?.[0]?.url || product.preview_url!}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex items-center justify-between px-4 py-3 gap-3">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-white text-sm font-medium truncate">{product.name}</span>
                    <span className="text-neutral-500 text-xs">Digital print · instant download</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-sm font-semibold ${gradientText}`}>{product.formatted_price}</span>
                    <svg
                      className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 transition-transform duration-300"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Footer */}
        <p className="text-neutral-700 text-xs pt-6">
          4pulenz.com &mdash; pay once, yours forever
        </p>

      </div>
    </div>
  );
}

