import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-cyan-500/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600" />
              <span className="text-white font-semibold">NeonGrowth</span>
            </div>
            <p className="mt-2 text-slate-400 text-sm">AI-first growth agency. We build systems that sell.</p>
          </div>
          <div className="flex gap-6 text-sm text-slate-300 justify-center">
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/consultation" className="hover:text-white">Consultation</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/blog" className="hover:text-white">Blog</Link>
          </div>
          <div className="flex items-center justify-start md:justify-end gap-3">
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"><Twitter size={16} /></a>
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"><Linkedin size={16} /></a>
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"><Mail size={16} /></a>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} NeonGrowth. All rights reserved.</p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold"
          >
            <Calendar size={16} /> Book Your Free 1:1 Strategy Call
          </Link>
        </div>
      </div>
    </footer>
  );
}
