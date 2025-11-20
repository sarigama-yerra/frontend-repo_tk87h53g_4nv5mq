import React from 'react';
import { PenSquare, CalendarDays } from 'lucide-react';

const posts = [
  {
    title: 'Playbooks: 7 AI Automations That Book More Calls',
    date: '2025-01-05',
    summary:
      'From AI SDRs to lead routing and instant quote bots—how to ship automations that turn attention into pipeline.',
    tags: ['AI', 'Automation', 'Sales'],
  },
  {
    title: 'Creative Testing Framework for 3–6x ROAS',
    date: '2025-01-12',
    summary:
      'A disciplined approach to hooks, angles, and iterations that scales across Meta and Google.',
    tags: ['Paid Media', 'ROAS', 'Creative'],
  },
  {
    title: 'Programmatic SEO: Launch 100 Pages in a Weekend',
    date: '2025-01-19',
    summary:
      'Blueprint for compounding organic growth with data-driven landing page systems.',
    tags: ['SEO', 'Content Ops'],
  },
];

function PostCard({ post }) {
  return (
    <article className="rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6">
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <CalendarDays size={14} /> {new Date(post.date).toLocaleDateString()}
      </div>
      <h3 className="mt-2 text-white font-semibold">{post.title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{post.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {post.tags.map((t) => (
          <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300">{t}</span>
        ))}
      </div>
      <button className="mt-4 text-cyan-300 hover:text-white text-sm">Read article →</button>
    </article>
  );
}

export default function Blog() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <PenSquare className="text-cyan-400" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Insights & Playbooks</h1>
        </div>
        <p className="mt-2 text-slate-300">We publish one high-utility article every week to help you grow faster with AI.</p>

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((p) => (
            <PostCard key={p.title} post={p} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-white font-semibold">Publishing cadence</div>
            <p className="text-slate-300 text-sm">New article every week. Want topics covered? Send a request via the contact page.</p>
          </div>
          <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold">Request a topic</a>
        </div>
      </div>
    </main>
  );
}
