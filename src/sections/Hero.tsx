import { motion } from 'motion/react';
import { ArrowRight, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const fullText = "Transforming your future through recognized digital excellence.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[110vh] overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-152305085306e-88e4f6e0ad24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Education background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/40 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* New Tag Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest"
        >
          <span className="bg-indigo-500 text-white px-1.5 py-0.5 rounded text-[10px] mr-1">New</span>
          FALL 2026 ADMISSIONS OPEN
        </motion.div>

        {/* Serif Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-8xl font-display leading-[1] text-white"
        >
          Advance Your Degree <br /> 
          <span className="text-primary-green italic">Online & Effortless.</span>
        </motion.h1>

        {/* Typewriter Subheading */}
        <div className="min-h-[1.5em] flex items-center justify-center">
          <p className="text-xl md:text-2xl text-white/70 font-sans max-w-2xl">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary-green ml-1 animate-pulse" />
          </p>
        </div>

        {/* Input Area with Multi-colored Glow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative group max-w-2xl mx-auto"
        >
          {/* Multi-colored Glow Shadow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-green via-indigo-500 to-accent-orange rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative bg-white rounded-2xl flex items-center p-2 shadow-2xl">
            <div className="pl-4 pr-2 text-slate-400">
              <Search size={22} />
            </div>
            <input 
              type="text" 
              placeholder="Search for a Master's Program (e.g. Data Science)" 
              className="flex-1 bg-transparent border-none outline-none text-slate-800 font-sans py-3 px-2 text-lg"
            />
            <button 
              onClick={() => navigate('/enroll')}
              className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-green transition-colors flex items-center gap-2 group-hover:shadow-lg cursor-none"
            >
              Enroll Now
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-6 pt-6"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i} 
                src={`https://i.pravatar.cc/100?img=${i+10}`} 
                className="w-10 h-10 rounded-full border-2 border-slate-900" 
                alt="Student"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <p className="text-sm text-white/50 font-sans">
            <span className="text-white font-bold">1,200+</span> Students enrolled this month
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function GraduationCap({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
