import React from 'react';
import { Bot, Share2, Search, Megaphone, Palette, BarChart3, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Automations & AI Agents for Businesses',
    desc: 'Custom agents and automations that replace repetitive workflows and scale personalization.',
    benefits: ['Reduce manual ops', '24/7 responses', 'Personalized CX'],
    roi: 'Cut costs 30–60% while increasing throughput.',
    use: 'Lead routing, SDR agents, support triage, reporting, content drafting.'
  },
  {
    icon: Share2,
    title: 'Social Media Management & Content Creation',
    desc: 'High-velocity content engines built for reach, engagement, and conversion.',
    benefits: ['Content calendar', 'UGC + reels', 'Repurposing at scale'],
    roi: 'Grow audience and pipeline with consistent, on-brand content.',
    use: 'Monthly packs, ghostwriting, video edits, distribution.'
  },
  {
    icon: Search,
    title: 'SEO & Keyword Ranking Systems',
    desc: 'Programmatic SEO plus technical fixes to win compounding organic traffic.',
    benefits: ['Technical SEO', 'Programmatic pages', 'Authority building'],
    roi: 'Own high-intent keywords and reduce paid spend dependency.',
    use: 'Topic clusters, internal linking, schema, content hub ops.'
  },
  {
    icon: Megaphone,
    title: 'Meta + Google Ads Management',
    desc: 'Full-funnel acquisition with rigorous creative testing and budget control.',
    benefits: ['Creative testing', 'Incrementality', 'Budget pacing'],
    roi: '3–6x ROAS typical after creative and funnel optimization.',
    use: 'Prospecting, retargeting, PMAX, landing pages.'
  },
  {
    icon: Palette,
    title: 'Branding & Creative Strategy',
    desc: 'Distinctive visuals and messaging that make you memorable and clickable.',
    benefits: ['Visual identity', 'Messaging pillars', 'Creative direction'],
    roi: 'Higher CTRs and stronger recall across channels.',
    use: 'Brand kits, ad templates, landing page systems.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Performance Optimization',
    desc: 'Measurement, dashboards, and CRO so decisions are data-led.',
    benefits: ['Attribution', 'Realtime dashboards', 'A/B testing'],
    roi: 'Better spend allocation and improved conversion rate.',
    use: 'GA4, Looker, Meta/Google, Mixpanel, custom pipelines.'
  }
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
          <p className="mt-1 text-slate-300 text-sm">{s.desc}</p>
        </div>
      </div>
      <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
        <div>
          <div className="text-slate-400">Benefits</div>
          <ul className="mt-1 space-y-1 text-slate-300">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> {b}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-slate-400">ROI</div>
          <p className="mt-1 text-slate-300">{s.roi}</p>
        </div>
        <div>
          <div className="text-slate-400">Use-cases</div>
          <p className="mt-1 text-slate-300">{s.use}</p>
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
