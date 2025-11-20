import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Calendar, Menu } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 text-sm rounded-md transition text-slate-200 hover:text-white hover:bg-white/5 ${
      isActive ? 'text-white bg-white/10' : ''
    }`;

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.5)]" />
            <span className="text-white font-semibold tracking-tight">NeonGrowth</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/consultation" className={navLinkClass}>
              Consultation
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <div className="hidden md:block">
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] transition"
            >
              <Calendar size={18} />
              Book 1:1 Consultation
            </Link>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white border border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass} end>
                Home
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/consultation" className={navLinkClass}>
                Consultation
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
              <Link
                to="/consultation"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_25px_rgba(34,211,238,0.6)]"
              >
                <Calendar size={18} /> Book 1:1 Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
