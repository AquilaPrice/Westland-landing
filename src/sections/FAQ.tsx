import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is the online Master’s degree recognized globally?",
    answer: "Yes, Westland University is fully accredited. Our online certificates carry the same prestige and legal recognition as our on-campus degrees.",
  },
  {
    question: "Do I need to visit the campus for exams?",
    answer: "No. All exams are proctored digitally using secure, high-integrity technology that ensures credibility from the comfort of your home.",
  },
  {
    question: "Can I pay my tuition in installments?",
    answer: "Absolutely. We offer flexible payment plans including per-semester and per-session options to ensure education is financially manageable.",
  },
  {
    question: "Are the live classes mandatory?",
    answer: "While live interaction is highly recommended for the best experience, all sessions are recorded and made available in the portal for students with busy schedules.",
  },
  {
    question: "How does the AI Study Assistant work?",
    answer: "Our AI assistant is trained on your specific curriculum. It can summarize lectures, provide practice quizzes, and help you structure your research thesis.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 bg-bg-page">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            Frequently <span className="text-primary-green italic">Asked</span> Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-lg text-slate-500 font-sans"
          >
            Have questions? We’ve got answers.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
  key?: any;
}) {
  return (
    <div className={`rounded-3xl transition-all duration-300 ${isOpen ? 'glass border-primary-green/30' : 'bg-transparent border border-slate-200 hover:border-slate-300'}`}>
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left"
      >
        <span className={`text-lg font-display font-bold ${isOpen ? 'text-primary-green' : 'text-slate-800'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-green text-white' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-8 pb-8 text-slate-500 leading-relaxed font-sans">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
