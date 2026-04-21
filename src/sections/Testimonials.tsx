import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "M.Sc. Data Science",
    text: "The flexibility at Westland allowed me to complete my degree while working full-time at a top tech firm.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Marcus Thorne",
    role: "M.Sc. Business Admin",
    text: "The live classes are incredibly engaging. I never felt like I was learning in isolation.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    name: "Elena Rodriguez",
    role: "M.Sc. Digital Marketing",
    text: "The career mentorship program was a game-changer. I secured a promotion before graduating.",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    name: "David Chen",
    role: "M.Sc. Computer Science",
    text: "Westland's AI assistant helped me grasp complex algorithms much faster than traditional methods.",
    avatar: "https://i.pravatar.cc/150?u=david",
  },
  {
    name: "Amina Okoro",
    role: "M.Sc. Public Health",
    text: "Truly accessible premium education. The payment plans are a blessing for students.",
    avatar: "https://i.pravatar.cc/150?u=amina",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-slate-900"
        >
          What Our Students Are <span className="text-primary-green italic underline decoration-primary-green/20 underline-offset-8">Saying</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 font-sans"
        >
          Real experiences from students who chose flexible, digital learning.
        </motion.p>
      </div>

      <div className="relative group">
        <div className="flex marquee-h gap-8 py-8 px-4">
          {[...testimonials, ...testimonials].map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
        {/* Gradient Overlays for Marquee */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text, avatar }: typeof testimonials[0] & { key?: any }) {
  return (
    <div className="w-[350px] md:w-[450px] shrink-0 glass p-8 rounded-[32px] hover:border-primary-green/30 transition-all duration-500 hover:scale-[1.02] cursor-pointer group">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-1 text-accent-orange">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <Quote size={40} className="text-slate-100 group-hover:text-primary-green/10 transition-colors" />
      </div>
      <p className="text-lg text-slate-600 font-sans leading-relaxed italic mb-8">"{text}"</p>
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full border-2 border-primary-green/20" referrerPolicy="no-referrer" />
        <div>
          <div className="font-display font-bold text-slate-900">{name}</div>
          <div className="text-sm font-semibold text-slate-400 font-sans">{role}</div>
        </div>
      </div>
    </div>
  );
}
