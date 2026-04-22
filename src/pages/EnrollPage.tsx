import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EnrollPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[40px] shadow-2xl text-center space-y-6 border border-slate-100"
        >
          <div className="w-20 h-20 bg-primary-green/10 rounded-full flex items-center justify-center text-primary-green mx-auto">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900">Application Received!</h2>
          <p className="text-slate-500 font-sans leading-relaxed">
            Thank you for applying to Westland University. Our admissions team will review your profile and contact you within 48 hours.
          </p>
          <Link to="/" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-green transition-all">
            Return Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-green transition-colors mb-12 font-bold uppercase text-xs tracking-widest">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="grid md:grid-cols-5 gap-16">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-display font-bold text-slate-900">Begin Your <br/><span className="text-primary-green italic">Mastery.</span></h1>
              <p className="text-slate-500 font-sans leading-relaxed">Fill out the form to start your enrollment process. Finalize your global career transition today.</p>
            </div>
            
            <div className="space-y-6">
               {[
                 { title: "Accredited", desc: "Recognized worldwide" },
                 { title: "Flexible", desc: "Study at your own pace" },
                 { title: "Supportive", desc: "24/7 AI & Human assistance" }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-green">
                       <CheckCircle2 size={20} />
                    </div>
                    <div>
                       <div className="text-sm font-bold text-slate-900">{item.title}</div>
                       <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">First Name</label>
                  <input required type="text" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-green/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Last Name</label>
                  <input required type="text" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-green/20 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input required type="email" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-green/20 transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Master's Program</label>
                <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-green/20 transition-all appearance-none">
                  <option>M.Sc. Business Administration</option>
                  <option>M.Sc. Computer Science</option>
                  <option>M.Sc. Digital Marketing</option>
                  <option>M.Sc. Public Health</option>
                  <option>M.Sc. Data Science</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Prior Education Level</label>
                <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-green/20 transition-all appearance-none">
                  <option>Bachelor's Degree</option>
                  <option>Higher National Diploma</option>
                  <option>Postgraduate Diploma</option>
                </select>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-primary-green text-white py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary-green/20"
                >
                  Submit Application
                  <Send size={18} />
                </button>
              </div>
              
              <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. We respect your data and privacy.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
