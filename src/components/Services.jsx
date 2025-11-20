import React from 'react';
import { Bot, Share2, Search, Megaphone, Palette, BarChart3, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Automations & Growth Systems',
    benefit: 'Stop leaking leads into your inbox.',
    desc: 'Automate follow-ups, qualify prospects with bots, and convert faster. Build always-on pipelines that nurture and book meetings while you sleep.',
  },
  {
    icon: Share2,
    title: 'Social Content Engines',
    benefit: 'Turn one idea into a week of content.',
    desc: 'Plan, produce, and repurpose across platforms for reach and conversion. Consistent, on-brand output that grows audience and pipeline.',
  },
  {
    icon: Search,
    title: 'SEO & Programmatic Pages',
    benefit: 'Own high-intent keywords and compound traffic.',
    desc: 'Technical fixes plus programmatic pages to scale search visibility. Build topic clusters and capture demand before competitors do.',
  },
  {
    icon: Megaphone,
    title: 'Meta + Google Ads',
    benefit: 'Full-funnel acquisition that actually scales.',
    desc: 'Creative testing, smart budgeting, and landing page optimization. Drive 3–6x ROAS with disciplined experimentation and clear tracking.',
  },
  {
    icon: Palette,
    title: 'Brand & Creative Strategy',
    benefit: 'Be the brand people remember and click.',
    desc: 'Distinctive visuals and messaging frameworks that boost CTRs. Ship ad kits and landing patterns that accelerate production.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & CRO',
    benefit: 'Decisions led by data, not guesswork.',
    desc: 'Attribution, dashboards, and rapid A/B testing to improve CVR. Reallocate spend to what works and confidently scale.',
  },
];

function ServiceCard({ s }) {
  const Icon = s.icon;
  return (
    <div className="group rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6 hover:border-cyan-300/40 transition relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(400px_circle_at_20%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 text-cyan-300">
          <Icon size={22} />
        </div>
        <div>
          <h3 className="text-white font-semibold">{s.title}</h3>
          <p className="mt-1 text-cyan-300 text-sm italic">{s.benefit}</p>
          <p className="mt-1 text-slate-300 text-sm">{s.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
        <p className="mt-2 text-slate-300">Designed to increase revenue, reduce CAC, and scale operations.</p>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
