import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-bg-page">
      <div className="max-w-5xl mx-auto backdrop-blur-3xl bg-white rounded-[60px] p-10 md:p-20 shadow-2xl border border-white text-center space-y-10 relative overflow-hidden">
        {/* Animated Background Pulse */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[50%] -left-[20%] w-full aspect-square bg-primary-green blur-[150px] rounded-full -z-10" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, delay: 5 }}
          className="absolute -bottom-[50%] -right-[20%] w-full aspect-square bg-accent-orange blur-[150px] rounded-full -z-10" 
        />

        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900"
          >
            Ready to Take the <span className="text-primary-green italic underline decoration-primary-green/20">Next Step</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto font-sans"
          >
            Start your Master’s journey today with Westland University. Your future is just a click away.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(244, 123, 32, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-orange text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center gap-3 group"
          >
            Enroll Today
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-zinc-100 text-zinc-900 px-12 py-5 rounded-full font-bold text-xl flex items-center gap-3 hover:bg-zinc-200 transition-colors"
          >
            <MessageSquare size={24} />
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
