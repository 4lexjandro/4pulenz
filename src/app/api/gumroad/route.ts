import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GUMROAD_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'Missing Gumroad token' }, { status: 500 });
  }

  const allProducts: any[] = [];
  let nextPage: string | null = 'https://api.gumroad.com/v2/products';

  while (nextPage) {
    const res = await fetch(nextPage, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch products' }, { status: res.status });
    }

    const data = await res.json();
    allProducts.push(...(data.products || []));

    // Gumroad sometimes returns a relative URL, fix it
    const raw = data.next_page_url || null;
    if (raw) {
      nextPage = raw.startsWith('http') ? raw : `https://api.gumroad.com${raw}`;
    } else {
      nextPage = null;
    }
  }

  return NextResponse.json(allProducts);
}