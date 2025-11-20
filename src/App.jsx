import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 pointer-events-none opacity-70 bg-[radial-gradient(800px_circle_at_20%_0%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_circle_at_80%_20%,rgba(59,130,246,0.08),transparent)]" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
