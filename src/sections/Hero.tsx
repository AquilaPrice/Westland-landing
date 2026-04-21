import { motion } from 'motion/react';
import RevealText from '../components/RevealText';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08759df9a13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="University Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary-green/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-green/40 via-transparent to-bg-page" />
      </div>

      {/* Background Gradients (Atmospheric) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -right-[10%] w-[60%] aspect-square bg-gradient-to-br from-primary-green/20 to-accent-light/10 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[10%] -left-[10%] w-[50%] aspect-square bg-gradient-to-tr from-accent-orange/10 to-primary-green/5 blur-[100px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-green/5 border border-primary-green/20 text-primary-green text-sm font-semibold mb-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            Applications now open for Fall 2026
          </motion.div>

          <RevealText 
            text="Advance Your Career with a Flexible Online Master’s Degree" 
            className="text-6xl md:text-7xl font-display leading-[1.1] text-white"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            Study from anywhere, attend live classes, access a rich virtual library, and graduate with a recognized certificate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button className="bg-accent-orange text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-accent-orange/20 hover:scale-105 transition-transform flex items-center gap-2 group">
              Start Enrollment
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-slate-700 border-2 border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:border-primary-green transition-all flex items-center gap-2">
              <Play size={20} className="fill-current" />
              Explore Programs
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5 }}
            className="text-sm font-medium text-zinc-500 italic"
          >
            No relocation. No disruption. Just focused learning.
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative z-10"
          >
             {/* Main Hero Illustration Placeholder */}
            <div className="relative w-full aspect-[4/5] max-w-[500px] mx-auto rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/edu/1000/1250" 
                alt="Online Student" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center text-accent-orange">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-400 uppercase">Recognized</div>
                  <div className="font-display font-semibold">Global Certificate</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-10 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center text-primary-green">
                  <Play size={20} fill="currentColor" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-400 uppercase">Live Now</div>
                  <div className="font-display font-semibold">Interactive Classes</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square -z-10 border border-zinc-200 rounded-full opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square -z-10 border border-zinc-200 rounded-full opacity-10" />
        </div>
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
