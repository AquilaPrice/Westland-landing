import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    id: 'enroll',
    title: "Seamless Enrollment",
    description: "Our digital-first application process is designed for modern students. No physical paperwork, no queues. Secure your spot in minutes through our encrypted gateway.",
    visual: "code",
    content: `// Westland University Enrollment API
const application = await Westland.enroll({
  program: "M.Sc. Data Science",
  studentId: "WU-2026-X82",
  paymentPlan: "Flexible",
  status: "ENROLLED"
});`
  },
  {
    id: 'register',
    title: "Smart Course Selection",
    description: "Build your semester using our AI-driven curriculum builder. It analyzes your career goals to recommend the most impactful electives for your specific path.",
    visual: "blueprint",
    content: "M.Sc. Curriculum Architecture"
  },
  {
    id: 'learn',
    title: "Global Classroom",
    description: "Join live, interactive sessions with world-class faculty and peers from over 40 countries. Access our 24/7 virtual library and collaborative research labs from any device.",
    visual: "code",
    content: `class VirtualClassroom {
  constructor(sessionId) {
    this.session = LMS.connect(sessionId);
    this.tools = ['Whiteboard', 'ScreenShare', 'AI-Tutor'];
  }
  
  startLiveSession() {
    this.session.broadcast("Welcome students!");
  }
}`
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(steps[0].id);
  const stepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    steps.forEach((step) => {
      if (stepRefs.current[step.id]) {
        observer.observe(stepRefs.current[step.id]!);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="bg-[#f8f9fa] py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="md:w-1/4 h-fit sticky top-32 space-y-8 hidden md:block">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Process flow</p>
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => stepRefs.current[step.id]?.scrollIntoView({ behavior: 'smooth' })}
                className={`flex items-center gap-4 group w-full text-left py-3 transition-colors ${activeStep === step.id ? 'text-slate-900' : 'text-slate-400'}`}
              >
                <div className={`w-2 h-2 rounded-full transition-all ${activeStep === step.id ? 'bg-primary-green scale-125 shadow-[0_0_10px_rgba(1,145,63,0.5)]' : 'bg-slate-200 group-hover:bg-slate-300'}`} />
                <span className="text-sm font-bold uppercase tracking-tighter">{step.title}</span>
              </button>
            ))}
          </div>
          
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <p className="text-xs text-slate-500 leading-relaxed font-sans">Our streamlined process ensures you focus on what matters most: <span className="font-bold text-slate-900 italic">your education</span>.</p>
            <div className="h-px bg-slate-100" />
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />)}
              <div className="pl-4 text-[10px] font-bold text-slate-400 self-center">+4k enrolled</div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.id}
              id={step.id}
              ref={(el) => (stepRefs.current[step.id] = el)}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-6">
                <div className="text-primary-green font-mono text-sm leading-none opacity-50">0{index + 1}</div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">{step.title}</h3>
                <p className="text-lg text-slate-500 leading-relaxed font-sans">{step.description}</p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-slate-900 font-bold group cursor-pointer"
                >
                  <span className="border-b-2 border-slate-200 group-hover:border-primary-green transition-colors pb-1">Learn more about {step.id}</span>
                </motion.div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 group">
                  {step.visual === 'code' ? (
                    <div className="p-8 bg-slate-900 h-full font-mono text-sm overflow-hidden relative">
                      <div className="flex gap-1.5 mb-6">
                        <div className="w-2 h-2 rounded-full bg-red-500/30" />
                        <div className="w-2 h-2 rounded-full bg-amber-500/30" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
                      </div>
                      <pre className="text-indigo-300">
                        <code>{step.content}</code>
                      </pre>
                      {/* Decorative SVG Overlay */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
                        <path d="M0,0 L100,100 M100,0 L0,100" stroke="currentColor" fill="none" strokeWidth="0.1" />
                      </svg>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center bg-slate-50 relative overflow-hidden">
                      {/* Blueprint Visual */}
                      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                      <div className="relative z-10 text-center">
                         <div className="w-48 h-48 border border-slate-200 rounded-full flex items-center justify-center animate-spin-slow">
                            <div className="w-40 h-40 border border-dashed border-primary-green/30 rounded-full flex items-center justify-center">
                               <div className="w-12 h-12 bg-primary-green rounded-xl" />
                            </div>
                         </div>
                         <p className="mt-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{step.content}</p>
                      </div>
                      {/* Architectural Lines SVG Overlay */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-200/50" viewBox="0 0 400 400" fill="none">
                         <path d="M0 200 H400 M200 0 V400" strokeWidth="1" />
                         <circle cx="200" cy="200" r="100" strokeWidth="0.5" />
                         <path d="M50 50 L350 350 M350 50 L50 350" strokeWidth="0.5" strokeDasharray="5,5" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
