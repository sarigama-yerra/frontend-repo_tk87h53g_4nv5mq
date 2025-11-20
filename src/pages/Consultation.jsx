import React from 'react';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Consultation() {
  return (
    <main className="pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold text-white">Book Your Free 1:1 Strategy Call</h1>
            <p className="mt-2 text-slate-300">Tell us about your goals. We’ll share a tailored plan, quick wins, and next steps.</p>

            <form className="mt-8 grid gap-4 bg-white/[0.03] p-6 rounded-2xl border border-cyan-400/20">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Name</label>
                  <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Company / Website</label>
                <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white" placeholder="acme.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Primary Goal</label>
                <textarea rows={4} className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white" placeholder="What outcome would make this a win?" />
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:shadow-[0_0_55px_rgba(34,211,238,0.8)] transition">
                <Calendar size={18} /> Book Your Free 1:1 Strategy Call
              </button>
            </form>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6">
              <div className="text-white font-semibold">Calendar</div>
              <p className="text-slate-300 text-sm">Embed your scheduling tool here (Calendly, Cal.com, etc.).</p>
              <div className="mt-4 aspect-[16/9] w-full bg-slate-900/60 rounded-xl border border-white/10 grid place-items-center text-slate-500">
                Calendar embed placeholder
              </div>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6">
              <div className="text-white font-semibold">What to expect</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex gap-2"><CheckCircle2 className="text-cyan-400" size={16} /> 15–20 min discovery to understand goals and constraints</li>
                <li className="flex gap-2"><CheckCircle2 className="text-cyan-400" size={16} /> Quick audit of funnel, traffic, and messaging</li>
                <li className="flex gap-2"><CheckCircle2 className="text-cyan-400" size={16} /> Action plan with 2–3 immediate wins</li>
              </ul>
              <a href="#form" className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-white">
                Jump to form <ArrowRight size={16} />
              </a>
            </div>
            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6">
              <div className="text-white font-semibold">Proof we can help</div>
              <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
                <li>+420 qualified SaaS leads in 90 days</li>
                <li>ROAS from 1.8x → 4.9x for DTC brand</li>
                <li>Organic leads +260% for local services</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
