import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    title: "M.Sc. Business Administration",
    duration: "18 Months",
    students: "1,200+",
    image: "https://picsum.photos/seed/biz/800/1000",
  },
  {
    title: "M.Sc. Computer Science",
    duration: "24 Months",
    students: "850+",
    image: "https://picsum.photos/seed/cs/800/1000",
  },
  {
    title: "M.Sc. Digital Marketing",
    duration: "12 Months",
    students: "1,500+",
    image: "https://picsum.photos/seed/mkt/800/1000",
  },
  {
    title: "M.Sc. Public Health",
    duration: "18 Months",
    students: "650+",
    image: "https://picsum.photos/seed/health/800/1000",
  },
  {
    title: "M.Sc. Cybersecurity",
    duration: "24 Months",
    students: "450+",
    image: "https://picsum.photos/seed/sec/800/1000",
  },
  {
    title: "M.Sc. Financial Technology",
    duration: "18 Months",
    students: "720+",
    image: "https://picsum.photos/seed/fin/800/1000",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative h-screen bg-bg-page flex flex-col justify-center overflow-hidden">
      <div className="px-6 mb-12 max-w-7xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-6xl font-display font-bold mb-4 text-slate-900"
        >
          Explore Our <span className="text-primary-green italic underline decoration-primary-green/20 underline-offset-8">Master’s</span> Programs
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 font-sans"
        >
          Choose a program that aligns with your career goals and future ambitions.
        </motion.p>
      </div>

      <div className="relative">
        <div className="marquee-h gap-8 px-6">
          {[...programs, ...programs].map((program, index) => (
            <motion.div
              key={`${program.title}-${index}`}
              whileHover={{ y: -20 }}
              className="relative shrink-0 w-[400px] h-[500px] rounded-[40px] overflow-hidden group shadow-2xl"
            >
              <img 
                src={program.image} 
                alt={program.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
                    {program.duration}
                  </span >
                  <span className="px-3 py-1 rounded-full bg-primary-green/20 backdrop-blur-md border border-primary-green/40 text-xs font-bold text-primary-green uppercase tracking-wider">
                    {program.students} Enrolled
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white leading-tight uppercase tracking-tight">
                  {program.title}
                </h3>
                <button className="flex items-center gap-2 text-primary-green font-bold text-sm group/btn">
                  View Program Details
                  <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Hover Highlight Border */}
              <div className="absolute inset-0 border-4 border-primary-green/0 group-hover:border-primary-green/40 transition-all duration-500 rounded-[40px]" />
            </motion.div>
          ))}
        </div>
        
        {/* Gradient Overlays for Marquee */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-page to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-page to-transparent z-10 pointer-events-none" />
      </div>

      {/* Scroll Progress Indicator Replacement */}
      <div className="mt-12 mx-auto w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="h-full w-1/2 bg-primary-green" 
        />
      </div>
    </section>
  );
}
