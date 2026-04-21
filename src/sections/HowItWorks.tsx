import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CreditCard, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: "Enroll",
    description: "Secure your admission with a simple and flexible payment process.",
    icon: CreditCard,
    color: "bg-primary-green",
  },
  {
    title: "Register Courses",
    description: "Select your courses and build your semester plan with ease.",
    icon: BookOpen,
    color: "bg-accent-orange",
  },
  {
    title: "Start Learning",
    description: "Join live classes, access materials, and begin your academic journey.",
    icon: GraduationCap,
    color: "bg-accent-light",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section id="how-it-works" ref={containerRef} className="py-32 px-6 overflow-hidden bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            Start Your Journey in <span className="text-primary-green italic">3 Simple Steps</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary-green mx-auto rounded-full"
          />
        </div>

        <motion.div style={{ x }} className="flex gap-8 min-w-max pb-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative glass p-10 rounded-[40px] text-center flex flex-col items-center w-[400px] shadow-2xl shadow-slate-200/50"
            >
              <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl shadow-inherit/20`}>
                <step.icon size={40} />
              </div>
              <div className="absolute top-8 right-10 text-6xl font-display font-bold text-slate-100/50 -z-10">0{index + 1}</div>
              <h3 className="text-3xl font-display font-bold mb-6 text-slate-900">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed font-sans text-lg">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-primary-green text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto group">
            Begin Enrollment
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
