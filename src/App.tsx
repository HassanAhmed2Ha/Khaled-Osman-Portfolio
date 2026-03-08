import React, { useState, useEffect, useRef } from 'react';
import { contentEn, contentAr } from './data';
import { Content, Language } from './types';
import { sendMessage, ContactFormData } from './contactService';

// --- UPDATED ACADEMIC ICONS ---
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
    <a href="https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <GoogleScholarIcon />
    </a>
    <a href="https://www.scopus.com/authid/detail.uri?authorId=7006488585" target="_blank" rel="noreferrer" aria-label="Scopus Profile" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <ScopusIcon />
    </a>
    <a href="https://orcid.org/0000-0002-5977-2385" target="_blank" rel="noreferrer" aria-label="ORCID Profile" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 hover:border-amber-500 transition duration-300 transform hover:scale-110">
      <OrcidIcon />
    </a>
  </div>
);

// --- NANO-MOLECULAR BACKGROUND ---
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000); 
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8, // سرعة هادئة تشبه الجزيئات
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = 'rgba(245, 158, 11, 0.5)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) { // روابط جزيئية ممتدة
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.2 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40" />;
};

// --- REST OF COMPONENTS (Typewriter, Tilt3D, Reveal) REMAIN THE SAME ---
// ... (Include Typewriter, Tilt3D, Reveal components from previous App.tsx)

export default function App() {
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic for Egyptian Professor
  const [content, setContent] = useState<Content>(contentAr);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language;
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    setContent(lang === 'en' ? contentEn : contentAr);
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }, [lang]);

  // ... (Include useEffect for Scroll and handle functions from previous App.tsx)

  const fontClass = lang === 'ar' ? "font-['Cairo']" : "font-['Plus_Jakarta_Sans']";

  return (
    <div className={`min-h-screen flex flex-col ${fontClass} overflow-x-hidden bg-gray-900 text-gray-100 relative pt-20 transition-all duration-300 antialiased`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center h-full">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-xl md:text-2xl font-bold tracking-tight text-gray-100 hover:text-amber-500 transition">
            {lang === 'en' ? 'Prof. Khaled Osman' : 'أ.د. خالد عثمان'}
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {content.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className={`transition-all duration-200 p-2 rounded-lg relative group cursor-pointer ${activeSection === item.id ? 'text-amber-500 font-bold' : 'text-gray-300 hover:text-amber-500'}`}>
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full ${activeSection === item.id ? 'w-full' : ''}`}></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${lang === 'en' ? 'bg-amber-500 text-gray-900 border-amber-500' : 'text-gray-300 border-gray-600 hover:border-amber-500'}`}>EN</button>
            <button onClick={() => setLang('ar')} className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${lang === 'ar' ? 'bg-amber-500 text-gray-900 border-amber-500' : 'text-gray-300 border-gray-600 hover:border-amber-500'}`}>AR</button>
          </div>
        </div>
      </header>

      <main className="flex-grow z-10">
        
        {/* HERO */}
        <section id="home" className="relative py-20 md:py-32 flex items-center min-h-screen overflow-hidden">
            <ParticleBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Reveal className="space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-start">
                <p className="text-xl md:text-2xl text-amber-500 font-semibold tracking-wide">{content.hero.greeting}</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 leading-tight">
                  {content.hero.namePrefix} <span className="text-gray-100">{content.hero.name}</span>
                </h1>
                <div className="text-2xl md:text-3xl font-bold text-gray-300 h-10">
                   <Typewriter words={content.hero.role} />
                </div>
                <p className="text-lg text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">{content.hero.description}</p>
                <div className="flex justify-center md:justify-start"><SocialIcons /></div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                  <a href="#publications" onClick={(e) => scrollToSection(e, 'publications')} className="px-8 py-3 rounded-full font-semibold text-gray-900 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:bg-amber-400 hover:-translate-y-1 transition duration-300 inline-flex items-center gap-2 cursor-pointer">
                    <span>{lang === 'en' ? 'View Publications' : 'عرض الأبحاث'}</span>
                    <ExternalLink />
                  </a>
                </div>
              </Reveal>
              <div className="flex justify-center items-center p-4 md:p-8 order-1 md:order-2">
                <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
                  <div className="absolute -inset-10 bg-amber-500/20 blur-3xl rounded-full pointer-events-none"></div>
                  <div className="w-full h-full rounded-full border-4 border-gray-800 shadow-2xl bg-gray-800 relative z-10 ring-4 ring-amber-500/30 overflow-hidden">
                    <img src="https://i.ibb.co/mF94JtHY/KHALID.jpg" alt="Prof. Khaled Osman" className="w-full h-full object-cover rounded-full transform hover:scale-110 transition duration-700" loading="eager" />
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* ... (Include ALL other sections: About, Experience, Certifications, Projects, Publications, Contact from original App.tsx) */}

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16 relative z-10 mt-auto text-center md:text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-100">{content.footer.col1Title}</h3>
            <p className="text-gray-400 text-base max-w-sm mx-auto md:mx-0">{content.footer.col1Text}</p>
            <div className="flex justify-center md:justify-start"><SocialIcons className="gap-5" /></div>
          </div>
          {/* ... Footer quick links and contact info columns ... */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 mt-16 pt-8 border-t border-gray-800 text-sm">
          <p>{content.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
