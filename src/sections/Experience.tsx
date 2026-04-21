import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-slate-900"
          >
            Experience Learning That <span className="text-primary-green italic underline decoration-primary-green/10">Fits Your Life</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-sans"
          >
            From live classes to research tools, everything is built to support your success.
          </motion.p>
        </div>

        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-primary-green font-bold tracking-widest uppercase text-sm">Interactive Environment</span>
            <h3 className="text-4xl font-bold">Real-time collaboration with world-class faculty.</h3>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Our LMS portal provides a seamless way to connect with professors and peers. 
              Join live video sessions, share whiteboards, and get your questions answered in real-time.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-zinc-100 rounded-[40px] p-4 lg:p-8 shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/lms/800/600" 
                alt="LMS Interface" 
                className="w-full rounded-[24px] shadow-lg grayscale hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating UI Elements */}
             <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-10 -right-10 w-64 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-20 hidden md:block"
              >
                <div className="h-10 bg-primary-green flex items-center px-4 justify-between">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">LMS Portal</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Live Sessions</div>
                  <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></div>
                    <div className="text-[10px] font-bold text-slate-700 flex-1">Advanced Methods</div>
                    <div className="text-[10px] text-slate-400">Now</div>
                  </div>
                </div>
              </motion.div>
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative lg:order-2"
          >
            <div className="bg-zinc-100 rounded-[40px] p-4 lg:p-8 shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/lib/800/600" 
                alt="Virtual Library" 
                className="w-full rounded-[24px] shadow-lg grayscale hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:order-1"
          >
            <span className="text-accent-orange font-bold tracking-widest uppercase text-sm">Resource Rich</span>
            <h3 className="text-4xl font-bold">24/7 Access to a global research library.</h3>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Dive into millions of journals, case studies, and books. Our digital library 
              is tailored for research-heavy Master's programs, ensuring you have the data you need for your thesis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
