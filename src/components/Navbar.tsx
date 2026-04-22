import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 px-6 flex items-center justify-between"
    >
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-none">
        <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center text-white">
          <span className="font-display font-bold text-xl">W</span>
        </div>
        <span className="font-display font-bold text-2xl tracking-tight text-slate-900 hidden sm:block">Westland University</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 font-semibold text-xs uppercase tracking-widest">
        <NavLink href="/#programs">Programs</NavLink>
        <NavLink href="/#how-it-works">How It Works</NavLink>
        <NavLink href="/#experience">Experience</NavLink>
        <NavLink href="/#faq">FAQ</NavLink>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-primary-green transition-colors px-4 py-2 cursor-none">
          Login
        </button>
        <Link to="/enroll">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-green text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl shadow-primary-green/20 hover:bg-opacity-90 transition-all uppercase tracking-widest cursor-none"
          >
            Enroll Now
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-slate-600 hover:text-primary-green transition-colors relative group cursor-none"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-green transition-all group-hover:w-full" />
    </a>
  );
}
