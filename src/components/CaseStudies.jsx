import React from 'react';
import { TrendingUp, Briefcase, Sparkles } from 'lucide-react';

const cases = [
  {
    icon: Briefcase,
    title: 'B2B SaaS: Pipeline in 90 Days',
    challenge: 'Flat inbound and long sales cycles with poor MQL quality.',
    solution: 'Deployed AI SDR bot, programmatic SEO, and retargeting creatives.',
    results: ['+420 qualified leads', 'CAC -32%', 'Pipeline +$1.2M'],
  },
  {
    icon: Sparkles,
    title: 'DTC: Creative Revamp at Scale',
    challenge: 'Rising CPMs, stale creatives, and weak landing CTR.',
    solution: 'New hooks, UGC system, and conversion-focused LP patterns.',
    results: ['ROAS 1.8x → 4.9x', 'AOV +18%', 'Refund rate -22%'],
  },
  {
    icon: TrendingUp,
    title: 'Local Services: Search Dominance',
    challenge: 'Low organic visibility and over-reliance on paid clicks.',
    solution: 'Technical SEO fixes + programmatic location pages + GMB ops.',
    results: ['Top 3 for 18 keywords', 'Organic leads +260%', 'CPL -41%'],
  },
];

function CaseCard({ c }) {
  const Icon = c.icon;
  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 text-cyan-300">
          <Icon size={20} />
        </div>
        <div className="text-white font-semibold">{c.title}</div>
      </div>
      <div className="mt-3 text-sm text-slate-300">
        <div><span className="text-slate-400">Challenge:</span> {c.challenge}</div>
        <div className="mt-1"><span className="text-slate-400">Solution:</span> {c.solution}</div>
        <div className="mt-2 text-slate-300">
          <div className="text-slate-400">Results</div>
          <ul className="mt-1 space-y-1 list-disc list-inside">
            {c.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Case Studies</h2>
        <p className="mt-2 text-slate-300">Realistic scenarios with measurable outcomes.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <CaseCard key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
