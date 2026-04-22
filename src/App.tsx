/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  GraduationCap, 
  Github, 
  ExternalLink, 
  ChevronRight,
  Database,
  Layers,
  Zap,
  MapPin,
  FileText,
  Code
} from "lucide-react";
import { ACADEMIC_DATA, Publication, Project } from "./data";

const staggeredContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function App() {
  const { 
    name, title, institution, location, bio, 
    email, linkedin, googleScholar, github,
    researchInterests, publications, projects 
  } = ACADEMIC_DATA;

  return (
    <div className="min-h-screen selection:bg-gold/30 bg-dark-bg text-[#E5E5E5]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-subtle">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between transition-all">
          <span className="serif text-xl tracking-tight">{name}</span>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-medium text-zinc-500">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#research" className="hover:text-white transition-colors">Research</a>
            <a href="#publications" className="hover:text-white transition-colors">Publications</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a 
            href={`mailto:${email}`} 
            className="text-[10px] uppercase tracking-widest font-semibold text-gold border border-gold/30 hover:border-gold hover:bg-gold/10 px-4 py-2 rounded-sm transition-all"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-container relative border-b border-subtle">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-dark-surface rounded-sm overflow-hidden border border-subtle relative group"
            >
              <img 
                src="/alireza_ghorbani.jpg" 
                alt={name}
                className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-1000"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/materialscience/800/800";
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/5" />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggeredContainer}
              className="flex-grow flex flex-col justify-center pt-4"
            >
              <motion.div variants={fadeIn}>
                <h1 className="serif text-5xl md:text-6xl font-light tracking-tight mb-2">{name}</h1>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-8">
                  {title} <span className="mx-2 text-gold opacity-50">/</span> {institution}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center text-zinc-500 text-[10px] uppercase tracking-widest gap-2">
                    <MapPin size={12} className="text-gold" />
                    <span>{location}</span>
                  </div>
                  <div className="flex gap-4 border-l border-subtle pl-4 ml-2">
                    <a href={linkedin} className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
                    <a href={googleScholar} className="text-zinc-500 hover:text-white transition-colors"><GraduationCap size={18} /></a>
                    <a href={github} className="text-zinc-500 hover:text-white transition-colors"><Github size={18} /></a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />
        </section>

        {/* About Section */}
        <section id="about" className="border-b border-subtle">
          <div className="section-container">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12">
              <div>
                <p className="sub-heading">Biography</p>
                <h2 className="serif text-3xl font-light leading-snug">Materials as a canvas for engineering.</h2>
              </div>
              <div className="text-zinc-400 text-sm leading-relaxed space-y-6 font-light">
                <p>{bio}</p>
                <p>
                  My research aims to provide a fundamental understanding of energy materials at the atomic scale, translating these insights into the next generation of power storage solutions.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-6 bg-white/5 rounded-sm border border-subtle">
                    <p className="text-2xl serif text-white">10+</p>
                    <p className="sub-heading !mb-0 !mt-2">Publications</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-sm border border-subtle">
                    <p className="text-2xl serif text-white">100+</p>
                    <p className="sub-heading !mb-0 !mt-2">Citations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Interests */}
        <section id="research" className="section-container border-b border-subtle">
          <p className="sub-heading">Inquiry</p>
          <div className="grid md:grid-cols-3 gap-12">
            {researchInterests.map((interest, idx) => (
              <motion.div 
                key={interest.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="w-1 h-1 bg-gold mb-6" />
                <h3 className="serif text-2xl mb-4 group-hover:text-gold transition-colors">{interest.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="section-container border-b border-subtle">
          <p className="sub-heading">Selected Publications</p>
          
          <div className="space-y-12">
            {publications.map((pub, idx) => (
              <motion.div 
                key={pub.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <div className="max-w-3xl">
                    <h3 className="serif text-xl md:text-2xl group-hover:text-gold transition-colors leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-[#888] mt-2 italic">
                      {pub.journal}, {pub.year} &bull; {pub.authors}
                    </p>
                  </div>
                  {pub.doi && (
                    <a 
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-colors flex items-center gap-2"
                    >
                      DOI <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20">
            <a 
              href={googleScholar} 
              className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold border-b border-gold/30 hover:border-gold transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Google Scholar Profile &rarr;
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-container border-b border-subtle">
          <p className="sub-heading">Current Projects</p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.title}
                className="p-8 bg-white/5 rounded-sm border border-subtle hover:border-gold/30 transition-all group"
              >
                <h3 className="text-gold text-xs uppercase tracking-widest font-bold mb-4">{project.title}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] uppercase tracking-widest font-bold text-zinc-600">
                      // {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-container">
          <p className="sub-heading">Contact</p>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <h2 className="serif text-5xl font-light mb-6">Let's discuss research.</h2>
              <a 
                href={`mailto:${email}`}
                className="serif text-2xl md:text-3xl hover:text-gold transition-colors underline underline-offset-8 decoration-gold/30"
              >
                {email}
              </a>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-2">
                <span className="sub-heading !mb-1">Follow</span>
                <a href={linkedin} className="text-sm font-light hover:text-gold transition-colors">LinkedIn</a>
                <a href={github} className="text-sm font-light hover:text-gold transition-colors">GitHub</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="sub-heading !mb-1">Academic</span>
                <a href={googleScholar} className="text-sm font-light hover:text-gold transition-colors">Scholar</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-subtle">
        <div className="max-w-5xl mx-auto px-6 h-full flex justify-between items-center text-zinc-600">
          <p className="text-[10px] uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} {name}</p>
          <p className="text-[10px] font-serif italic">Materials Reimagined</p>
        </div>
      </footer>
    </div>
  );
}
