import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <CaseStudies />
    </main>
  );
}
