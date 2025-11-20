import React from 'react';

export default function Consultation() {
  return (
    <main className="pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Book Your 1:1 Consultation</h1>
        <p className="mt-2 text-slate-300">Tell us about your goals. We’ll share a tailored plan and next steps.</p>

        <form className="mt-8 grid gap-4 bg-white/[0.03] p-6 rounded-2xl border border-cyan-400/20">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white" placeholder="you@company.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Company / Website</label>
            <input className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white" placeholder="acme.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Primary Goal</label>
            <textarea rows={4} className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white" placeholder="What outcome would make this a win?" />
          </div>
          <button className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_40px_rgba(34,211,238,0.6)]">
            Book Your 1:1 Consultation
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
    </main>
  );
}
