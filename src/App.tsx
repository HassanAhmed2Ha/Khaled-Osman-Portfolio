import React, { useState, useEffect, useRef } from 'react';
import { contentEn, contentAr } from './data';
import { Content, Language } from './types';
import { sendMessage, ContactFormData } from './contactService';

// --- ICONS ---
const ChevronRight = () => (
  <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
);
const ExternalLink = () => (
  <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);
const GoogleScholarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
);
const ScopusIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zM9 9.5h6v1H9v-1zm0 2h6v1H9v-1zm0 2h4v1H9v-1z"/></svg>
);
const OrcidIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.631 7.178c.676 0 1.222.547 1.222 1.222 0 .675-.546 1.221-1.222 1.221-.674 0-1.22-.546-1.22-1.221 0-.675.546-1.222 1.22-1.222zm1.884 9.897h-3.768v-8.15h3.768v8.15zm8.905-.724c-.382.744-1.027 1.284-1.802 1.509-.64.185-1.594.185-1.956.185h-2.804v-8.15h2.956c1.29 0 2.225.048 2.89.57.84.661 1.223 1.688 1.223 2.822 0 1.341-.53 2.404-1.507 3.064zm-1.898-4.576c-.524-.22-1.309-.234-2.031-.234h-1.082v5.337h1.018c.957 0 1.488-.047 1.932-.381.564-.424.81-1.127.81-2.288 0-1.277-.289-2.029-.647-2.434z"/></svg>
);

const SocialIcons = ({ className = '' }: { className?: string }) => (
  <div className={`flex gap-4 ${className}`}>
    <a href="https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110"><GoogleScholarIcon /></a>
    <a href="https://www.scopus.com/authid/detail.uri?authorId=7006488585" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110"><ScopusIcon /></a>
    <a href="https://orcid.org/0000-0002-5977-2385" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110"><OrcidIcon /></a>
  </div>
);

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); };
    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, size: Math.random() * 2 + 1 });
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1; if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.fillStyle = 'rgba(245, 158, 11, 0.4)'; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    window.addEventListener('resize', resize); resize(); draw();
    return () => window.removeEventListener('resize', resize);
  }, []);
  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40" />;
};

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0); const [subIndex, setSubIndex] = useState(0); const [reverse, setReverse] = useState(false);
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) { setTimeout(() => setReverse(true), 2000); return; }
    if (subIndex === 0 && reverse) { setReverse(false); setIndex((prev) => (prev + 1) % words.length); return; }
    const timeout = setTimeout(() => setSubIndex((prev) => prev + (reverse ? -1 : 1)), reverse ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);
  return <span className="text-amber-500">{words[index].substring(0, subIndex)}|</span>;
};

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false); const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current); return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}>{children}</div>;
};

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [content, setContent] = useState<Content>(contentAr);
  useEffect(() => { setContent(lang === 'en' ? contentEn : contentAr); document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl'; }, [lang]);

  const scrollToSection = (id: string) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-['Cairo']">
      <header className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800 h-20 flex items-center justify-between px-8">
        <div className="text-xl font-bold">{lang === 'en' ? 'Prof. Khaled Osman' : 'أ.د. خالد عثمان'}</div>
        <div className="flex gap-4">
          <button onClick={() => setLang('en')} className="px-3 py-1 border rounded text-xs">EN</button>
          <button onClick={() => setLang('ar')} className="px-3 py-1 border rounded text-xs">AR</button>
        </div>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-8">
          <ParticleBackground />
          <div className="grid md:grid-cols-2 gap-12 items-center z-10 w-full max-w-7xl mx-auto">
            <Reveal className="space-y-6">
              <p className="text-amber-500 font-bold">{content.hero.greeting}</p>
              <h1 className="text-5xl font-extrabold">{content.hero.namePrefix} {content.hero.name}</h1>
              <div className="text-2xl font-bold text-gray-400"><Typewriter words={content.hero.role} /></div>
              <p className="text-gray-400 max-w-lg">{content.hero.description}</p>
              <SocialIcons />
            </Reveal>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full border-4 border-amber-500/30 overflow-hidden shadow-2xl">
                <img src="https://i.ibb.co/mF94JtHY/KHALID.jpg" alt="Prof. Khaled" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-800/50 px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold border-b-2 border-amber-500 inline-block pb-2">{content.about.title}</h2>
            <p className="text-lg text-gray-300" dangerouslySetInnerHTML={{ __html: content.about.p1 }} />
            <p className="text-lg text-gray-300" dangerouslySetInnerHTML={{ __html: content.about.p2 }} />
          </div>
        </section>

        <section id="experience" className="py-20 px-8 max-w-5xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-12">{content.experience.title}</h2>
           <div className="space-y-8 border-r-2 border-gray-700 pr-8">
              {content.experience.items.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -right-10 top-2 w-4 h-4 bg-amber-500 rounded-full" />
                  <h3 className="text-xl font-bold text-amber-500">{item.role}</h3>
                  <p className="text-sm text-gray-400">{item.company} | {item.period}</p>
                  <ul className="mt-2 list-disc list-inside text-gray-300">{item.description.map((d, j) => <li key={j}>{d}</li>)}</ul>
                </div>
              ))}
           </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-800 text-center">
         <p className="text-gray-500">{content.footer.copyright}</p>
      </footer>
    </div>
  );
}
