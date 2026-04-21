import { motion } from 'motion/react';
import { 
  Video, Library, Bot, FileText, ShieldCheck, 
  Users, Award, Briefcase, ChevronRight 
} from 'lucide-react';

const features = [
  {
    title: "Live Classes",
    description: "Attend real-time, interactive sessions from anywhere.",
    icon: Video,
    color: "bg-blue-500",
  },
  {
    title: "Virtual Library",
    description: "Access books, journals, and research materials anytime.",
    icon: Library,
    color: "bg-purple-500",
  },
  {
    title: "AI Study Assistant",
    description: "Get instant help understanding complex topics.",
    icon: Bot,
    color: "bg-emerald-500",
  },
  {
    title: "Thesis Workspace",
    description: "Manage your research with structured supervision and feedback.",
    icon: FileText,
    color: "bg-amber-500",
  },
  {
    title: "Proctored Exams",
    description: "Take secure, credible exams with integrity.",
    icon: ShieldCheck,
    color: "bg-red-500",
  },
  {
    title: "Discussion Forum",
    description: "Collaborate, ask questions, and learn with peers.",
    icon: Users,
    color: "bg-indigo-500",
  },
  {
    title: "Digital Certificates",
    description: "Earn and share recognized credentials.",
    icon: Award,
    color: "bg-sky-500",
  },
  {
    title: "Internship Opportunities",
    description: "Access real-world career and growth opportunities.",
    icon: Briefcase,
    color: "bg-orange-500",
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden rounded-[60px] mx-4 my-10 border border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 rounded-full border border-slate-200 text-sm font-semibold uppercase tracking-widest text-[#01913F]"
            >
              Academic Excellence
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-display leading-tight text-slate-900"
            >
              Everything You Need to <span className="text-primary-green italic">Succeed</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed font-sans"
            >
              A complete digital learning experience designed for flexibility, depth, and real-world impact.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
              <button className="group flex items-center gap-3 text-lg font-bold text-slate-900 hover:text-primary-green transition-colors">
                Explore Student Portal
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary-green group-hover:bg-primary-green group-hover:text-white transition-all">
                  <ChevronRight size={20} />
                </div>
              </button>
            </motion.div>
          </div>

          <div className="h-[600px] overflow-hidden relative">
            <div className="marquee-v gap-6">
              {[...features, ...features].map((feature, index) => (
                <div
                  key={`${feature.title}-${index}`}
                  className="group relative glass p-8 rounded-[32px] transition-all duration-500 overflow-hidden"
                >
                  {/* Background Shadow Glow */}
                  <div className={`absolute -right-10 -bottom-10 w-40 h-40 ${feature.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-700`} />
                  
                  <div className="flex gap-6 items-start">
                    <div className={`shrink-0 w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <feature.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary-green transition-colors">{feature.title}</h3>
                      <p className="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors font-sans">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Gradient Overlays */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
