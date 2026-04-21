import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Globe, Award, TrendingUp } from 'lucide-react';

const opportunities = [
  { title: "MSc Scholarship - Africa Excellence", type: "Scholarship", icon: GraduationCap },
  { title: "Junior Data Analyst Intern @ Google", type: "Internship", icon: Briefcase },
  { title: "Digital Marketing Externship @ Meta", type: "Opportunity", icon: Globe },
  { title: "Financial Analyst Role @ Goldman Sachs", type: "Career", icon: Award },
  { title: "Startup Seed Funding for Tech Alumni", type: "Venture", icon: TrendingUp },
];

export default function Opportunities() {
  return (
    <section className="py-32 px-6 bg-zinc-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-primary-green opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="text-white space-y-8 z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Opportunities Beyond the Classroom
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 leading-relaxed"
          >
            Discover internships, scholarships, and career opportunities designed for your growth. 
            Being a Westland student opens doors to the world's most innovative organizations.
          </motion.p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <span className="px-5 py-2 rounded-full border border-white/10 text-zinc-400 font-medium text-sm">Accredited Degrees</span>
            <span className="px-5 py-2 rounded-full border border-white/10 text-zinc-400 font-medium text-sm">Global Alumni Network</span>
            <span className="px-5 py-2 rounded-full border border-zinc-500/30 text-primary-green font-bold text-sm bg-primary-green/10">Job Placement Assistance</span>
          </div>
        </div>

        <div className="relative h-[500px] group">
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="h-20 bg-gradient-to-b from-zinc-900 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-zinc-900 to-transparent" />
          </div>

          <div className="marquee-v gap-6 py-10 h-full">
            {[...opportunities, ...opportunities, ...opportunities].map((opp, index) => (
              <OpportunityCard key={index} {...opp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OpportunityCard({ title, type, icon: Icon }: any) {
  return (
    <div className="bg-zinc-800/50 p-6 rounded-[24px] border border-white/5 hover:border-primary-green/40 transition-all duration-300 flex items-center gap-6 cursor-pointer group">
      <div className="w-14 h-14 bg-zinc-700 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-primary-green group-hover:bg-primary-green/10 transition-all">
        <Icon size={28} />
      </div>
      <div>
        <div className="text-xs font-bold text-primary-green uppercase tracking-widest mb-1">{type}</div>
        <div className="text-xl font-bold text-white group-hover:text-primary-green transition-colors">{title}</div>
      </div>
    </div>
  );
}
