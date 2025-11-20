import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <p className="mt-2 text-slate-300">Reach out for partnerships, proposals, or quick questions.</p>

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
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea rows={5} className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-white" placeholder="How can we help?" />
          </div>
          <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15">Send Message</button>
        </form>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold shadow-[0_0_40px_rgba(16,185,129,0.6)]"
        >
          <MessageCircle size={18} /> WhatsApp Us
        </a>
      </div>
    </main>
  );
}
