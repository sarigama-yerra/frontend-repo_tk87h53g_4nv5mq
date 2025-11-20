import React from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

function GlowCard({ children }) {
  return (
    <div className="relative rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-white/5 to-white/[0.02] shadow-[0_0_60px_rgba(34,211,238,0.15)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(34,211,238,0.12),transparent),radial-gradient(500px_circle_at_80%_30%,rgba(59,130,246,0.12),transparent)]" />
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pb-24">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.15),transparent_60%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              AI-Powered Digital Marketing That Brings Real Growth.
            </h1>
            <p className="mt-5 text-lg text-slate-300">
              We focus on measurable outcomes: qualified leads, higher ROAS, and compounding brand equity. No buzzwords—just systems that drive revenue.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:shadow-[0_0_55px_rgba(34,211,238,0.8)] transition"
              >
                Book 1:1 Consultation <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/30 text-cyan-300 hover:text-white hover:border-cyan-300/60 transition"
              >
                View Services
              </Link>
            </div>
          </div>

          <GlowCard>
            <div className="aspect-[4/3] md:aspect-[16/10]">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
