import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-32 pb-12 px-6 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand Col */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-green rounded-xl flex items-center justify-center text-white">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight block text-zinc-900">WESTLAND</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-500 -mt-1 block">University</span>
              </div>
            </div>
            <p className="text-zinc-500 max-w-xs leading-relaxed">
              Empowering students through flexible, digital education. We bring world-class degrees to your doorstep.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Facebook} />
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Programs</h4>
            <ul className="space-y-4">
              <FooterLink href="#">Business Admin</FooterLink>
              <FooterLink href="#">Computer Science</FooterLink>
              <FooterLink href="#">Digital Marketing</FooterLink>
              <FooterLink href="#">Public Health</FooterLink>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Student Support</h4>
            <ul className="space-y-4">
              <FooterLink href="#">Virtual Library</FooterLink>
              <FooterLink href="#">Career Mentorship</FooterLink>
              <FooterLink href="#">IT Support</FooterLink>
              <FooterLink href="#">LMS Guide</FooterLink>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-zinc-400">Contact</h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-600">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-green" />
                admissions@westland.edu
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-green" />
                +1 (800) WESTLAND
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary-green" />
                Digital Campus, Global
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-slate-400">
            <span className="hover:text-primary-green transition-colors cursor-pointer">Accredited Program</span>
            <span className="hover:text-primary-green transition-colors cursor-pointer">Global Recognition</span>
            <span className="hover:text-primary-green transition-colors cursor-pointer">Interactive LMS</span>
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
            </div>
            <span className="text-xs font-sans text-slate-500">Join <span className="font-bold text-slate-900">2,400+</span> Online Masters Students</span>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase font-bold tracking-widest text-slate-300">
          <p>© {currentYear} Westland University. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-primary-green transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-green transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-green transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a 
        href={href} 
        className="text-zinc-600 hover:text-primary-green transition-colors font-medium flex items-center group gap-2"
      >
        <span className="w-0 h-[2px] bg-primary-green group-hover:w-3 transition-all" />
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <motion.a 
      whileHover={{ y: -5, scale: 1.1 }}
      href="#"
      className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-primary-green/10 hover:text-primary-green transition-colors border border-zinc-100"
    >
      <Icon size={18} />
    </motion.a>
  );
}
