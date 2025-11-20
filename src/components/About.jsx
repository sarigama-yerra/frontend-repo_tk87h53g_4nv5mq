import React from 'react';

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Your Growth Engine, Supercharged by AI</h2>
            <p className="mt-4 text-slate-300">
              We build full-funnel growth systems that compound: AI automations, high-velocity content engines, search dominance, and paid media that actually scales. Our team blends strategy with engineering to move the metrics that matter.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Stat value="200%+" label="Avg. growth in MQLs" />
              <Stat value="3-6x" label="Typical ROAS range" />
              <Stat value="-28%" label="Lower CAC" />
              <Stat value="90 days" label="Time-to-impact" />
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.5)]" />
              <div>
                <div className="text-white font-semibold">Alex Rivera</div>
                <div className="text-slate-400 text-sm">Founder & Lead Strategist</div>
              </div>
            </div>
            <p className="mt-4 text-slate-300 text-sm">
              Built growth systems for SaaS, eCommerce, and B2B brands. Obsessed with automation, distribution, and turning content into pipeline.
            </p>
            <div className="mt-4 flex gap-2 text-xs text-slate-300">
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">AI</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Automation</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Content</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
