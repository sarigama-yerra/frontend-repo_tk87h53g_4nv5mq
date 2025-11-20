import React from 'react';

const items = [
  { title: 'B2B SaaS Lead Engine', stats: ['+420 qualified leads in 90 days', 'CAC -32%', 'Pipeline +$1.2M'] },
  { title: 'DTC Creative Revamp', stats: ['ROAS from 1.8x → 4.9x', 'AOV +18%', 'Refund rate -22%'] },
  { title: 'Local Services SEO', stats: ['Top 3 for 18 keywords', 'Organic leads +260%', 'CPL -41%'] }
];

function Card({ item }) {
  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6">
      <div className="text-white font-semibold">{item.title}</div>
      <ul className="mt-3 space-y-1 text-slate-300 text-sm">
        {item.stats.map((s) => (
          <li key={s}>• {s}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Case Studies & Results</h2>
        <p className="mt-2 text-slate-300">Real metrics, real growth.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
