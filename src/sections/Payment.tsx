import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Payment() {
  return (
    <section className="py-32 px-6 bg-primary-green relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[40%] aspect-square bg-white/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[30%] aspect-square bg-accent-light/5 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="text-white space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Flexible Payment Options That Work for You
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80"
          >
            Choose a payment plan that fits your financial comfort. We believe premium education should be accessible.
          </motion.p>

          <div className="space-y-6 pt-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Pay per semester</h4>
                <p className="text-white/60">Split your tuition into 3 manageable payments.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Pay per session</h4>
                <p className="text-white/60">Maximum flexibility for part-time working professionals.</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6 pt-6"
          >
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <ShieldCheck size={18} /> Secure.
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <CheckCircle2 size={18} /> Simple.
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <CheckCircle2 size={18} /> Transparent.
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="bg-white p-10 lg:p-16 rounded-[60px] shadow-2xl relative"
        >
          <div className="space-y-8">
            <div className="text-center">
              <div className="text-primary-green font-bold text-sm tracking-widest uppercase mb-2">Master's Tuition</div>
              <div className="text-6xl font-bold">$2,499<span className="text-zinc-400 text-lg font-medium">/semester</span></div>
            </div>

            <div className="space-y-4 pt-8 border-t border-zinc-100">
              <div className="flex items-center justify-between font-medium">
                <span className="text-zinc-500">Live Interactive Classes</span>
                <CheckCircle2 className="text-primary-green" size={20} />
              </div>
              <div className="flex items-center justify-between font-medium">
                <span className="text-zinc-500">24/7 Digital Library Access</span>
                <CheckCircle2 className="text-primary-green" size={20} />
              </div>
              <div className="flex items-center justify-between font-medium">
                <span className="text-zinc-500">AI Personal Study Assistant</span>
                <CheckCircle2 className="text-primary-green" size={20} />
              </div>
              <div className="flex items-center justify-between font-medium">
                <span className="text-zinc-500">Career Mentorship Session</span>
                <CheckCircle2 className="text-primary-green" size={20} />
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-green text-white py-6 rounded-full font-bold text-xl shadow-xl shadow-primary-green/20 hover:bg-opacity-95 transition-all text-center"
            >
              Start Enrollment
            </motion.button>
            <p className="text-center text-xs font-semibold text-zinc-400 uppercase tracking-widest">
              Available for immediate intake
            </p>
          </div>

          {/* Decorative Sparkle pulse */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-white font-bold"
          >
            !
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
