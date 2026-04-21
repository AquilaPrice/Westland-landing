import { motion } from 'motion/react';
import { Bot, Sparkles, Send } from 'lucide-react';

const messages = [
  { text: "How can I prepare for my Research Methods quiz?", isAI: false },
  { text: "I can help with that! I've summarized the key topics from Week 4 including Qualitative Analysis and Sampling Techniques. Would you like to start a practice session?", isAI: true },
  { text: "Yes, please focus on Sampling Techniques.", isAI: false },
  { text: "Great! Let's start. Simple Random Sampling ensures that every member of the population has an equal chance...", isAI: true },
];

export default function AISupport() {
  return (
    <section className="py-32 px-6 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 text-primary-green font-bold text-sm tracking-widest uppercase bg-primary-green/5 px-4 py-2 rounded-full border border-primary-green/10">
            <Sparkles size={16} />
            Next-Gen Learning
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-slate-900"
          >
            Learn Smarter with <span className="text-primary-green italic">AI Support</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 leading-relaxed font-sans"
          >
            Your personal academic assistant, available anytime you need help. 
            Understanding complex topics has never been this intuitive.
          </motion.p>

          <div className="space-y-4 pt-4">
            <FeatureItem title="Understand complex topics faster" />
            <FeatureItem title="Prepare for quizzes effectively" />
            <FeatureItem title="Get support for your thesis research" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative glass rounded-[40px] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-green rounded-2xl flex items-center justify-center text-white relative">
                <Bot size={24} />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <div className="font-bold">Westland AI</div>
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Assistant</div>
              </div>
            </div>
            <div className="bg-primary-green/10 text-primary-green text-xs font-bold px-3 py-1.5 rounded-full">Active</div>
          </div>

          {/* Chat Interface */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.isAI ? -20 : 20, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: index * 0.5 }}
                className={`flex ${msg.isAI ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[80%] p-5 rounded-[24px] text-sm md:text-base leading-relaxed ${
                  msg.isAI 
                    ? 'bg-zinc-100 text-zinc-800 rounded-tl-none' 
                    : 'bg-primary-green text-white rounded-tr-none'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
            
            {/* Thinking Indicator */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 2.5, repeat: Infinity, duration: 1.5 }}
               className="flex gap-1 items-center px-4"
            >
              <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce delay-100" />
              <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce delay-200" />
            </motion.div>
          </div>

          {/* Footer Input Mockup */}
          <div className="p-6 border-t border-zinc-100 bg-zinc-50/50">
            <div className="relative">
              <div className="w-full bg-white border border-zinc-200 rounded-2xl py-4 px-6 text-zinc-400 text-sm flex items-center justify-between">
                Type your academic question...
                <Send size={18} className="text-primary-green" />
              </div>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-green opacity-[0.03] blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureItem({ title }: { title: string }) {
  return (
    <motion.div 
      whileHover={{ x: 10 }}
      className="flex items-center gap-4 text-zinc-800 font-semibold text-lg py-2 cursor-pointer group"
    >
      <div className="w-6 h-6 rounded-full border-2 border-primary-green/30 flex items-center justify-center group-hover:border-primary-green group-hover:bg-primary-green transition-all">
        <Sparkles size={12} className="text-primary-green group-hover:text-white transition-colors" />
      </div>
      {title}
    </motion.div>
  );
}
