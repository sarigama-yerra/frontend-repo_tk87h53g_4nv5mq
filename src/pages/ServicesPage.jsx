import React from 'react';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">What We Do</h1>
        <p className="mt-2 text-slate-300">Systems designed for measurable business impact.</p>
      </div>
      <Services />
    </main>
  );
}
