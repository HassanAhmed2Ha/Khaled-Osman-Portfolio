import React, { useState, useEffect, useRef } from 'react';
import { contentEn, contentAr } from './data';
import { Content, Language } from './types';
import { sendMessage, ContactFormData } from './contactService';

// --- ICONS (Academic Identity) ---
const ChevronRight = () => (
  <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
);
const ExternalLink = () => (
  <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
);
const GoogleScholarIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
);
const ScopusIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13zM9 9.5h6v1H9v-1zm0 2h6v1H9v-1zm0 2h4v1H9v-1z"/></svg>
);
const OrcidIcon = () => (
  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.631 7.178c.676 0 1.222.547 1.222 1.222 0 .675-.546 1.221-1.222 1.221-.674 0-1.22-.546-1.22-1.221 0-.675.546-1.222 1.22-1.222zm1.884 9.897h-3.768v-8.15h3.768v8.15zm8.905-.724c-.382.744-1.027 1.284-1.802 1.509-.64.185-1.594.185-1.956.185h-2.804v-8.15h2.956c1.29 0 2.225.048 2.89.57.84.661 1.223 1.688 1.223 2.822 0 1.341-.53 2.404-1.507 3.064zm-1.898-4.576c-.524-.22-1.309-.234-2.031-.234h-1.082v5.337h1.018c.957 0 1.488-.047 1.932-.381.564-.424.81-1.127.81-2.288 0-1.277-.289-2.029-.647-2.434z"/></svg>
);

const SocialIcons = ({ className = '' }: { className?: string }) => (
  <div className={`flex gap-3.5 ${className}`}>
    <a href="https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 transition duration-300 transform hover:scale-110"><GoogleScholarIcon /></a>
    <a href="https://www.scopus.com/authid/detail.uri?authorId=7006488585" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 transition duration-300 transform hover:scale-110"><ScopusIcon /></a>
    <a href="https://orcid.org/0000-0002-5977-2385" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-600 text-gray-400 hover:bg-amber-500 hover:text-gray-900 transition duration-300 transform hover:scale-110"><OrcidIcon /></a>
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
      const count = Math.floor((canvas.width * canvas.height) / 11000);
      for (let i = 0; i < count; i++) particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 1.5, vy: (Math.random() - 0.5) * 1.5, size: Math.random() * 2 + 1 });
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1; if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.fillStyle = 'rgba(245, 158, 11, 0.7)'; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]; const dx = p.x - p2.x; const dy = p.y - p2.y; const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 135) { ctx.beginPath(); ctx.strokeStyle = `rgba(245, 158, 11, ${0.4 * (1 - dist / 135)})`; ctx.lineWidth = 0.7; ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke(); }
        }
      });
      requestAnimationFrame(draw);
    };
    window.addEventListener('resize', resize); resize(); draw();
    return () => window.removeEventListener('resize', resize);
  }, []);
  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50" />;
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

const Tilt3D: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const xRot = -((y - rect.height / 2) / rect.height * 2); const yRot = (x - rect.width / 2) / rect.width * 2;
    ref.current.style.transform = `perspective(1000px) scale(1.01) rotateX(${xRot}deg) rotateY(${yRot}deg)`;
  };
  return <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={() => ref.current && (ref.current.style.transform = 'none')} className={`transition-transform duration-200 ease-out ${className}`}>{children}</div>;
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = content.nav.map(item => item.id);
      const scrollPos = window.scrollY + 90;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) setActiveSection(section);
      }
    };
    window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll);
  }, [content.nav]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); setMenuOpen(false); const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setIsSubmitting(true); const res = await sendMessage(formData);
    alert(res.message); if (res.success) setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const fontClass = lang === 'ar' ? "font-['Cairo']" : "font-['Plus_Jakarta_Sans']";

  return (
    <div className={`min-h-screen flex flex-col ${fontClass} overflow-x-hidden bg-gray-900 text-gray-100 relative pt-16 transition-all antialiased`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Header - Height reduced from 20 to 18 (72px) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-800 h-18">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-xl md:text-2xl font-bold text-gray-100 hover:text-amber-500 transition">
            {lang === 'en' ? 'Prof. Khaled Osman' : 'أ.د. خالد عثمان'}
          </a>
          <nav className="hidden md:flex gap-5 text-sm font-medium">
            {content.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className={`p-2 rounded-lg relative group transition ${activeSection === item.id ? 'text-amber-500' : 'text-gray-300'}`}>
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <button onClick={() => setLang('en')} className={`px-2.5 py-0.5 rounded-full text-xs border transition ${lang === 'en' ? 'bg-amber-500 text-gray-900' : 'border-gray-600 hover:border-amber-500'}`}>EN</button>
            <button onClick={() => setLang('ar')} className={`px-2.5 py-0.5 rounded-full text-xs border transition ${lang === 'ar' ? 'bg-amber-500 text-gray-900' : 'border-gray-600 hover:border-amber-500'}`}>AR</button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1.5"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
          </div>
        </div>
      </header>

      <main className="flex-grow z-10">
        
        {/* HERO - Sizes reduced (text, image, padding) */}
        <section id="home" className="relative py-16 md:py-28 flex items-center min-h-screen overflow-hidden">
            <ParticleBackground />
            <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <Reveal className="space-y-5 md:space-y-7 order-2 md:order-1 text-center md:text-start">
                <p className="text-lg md:text-xl text-amber-500 font-semibold">{content.hero.greeting}</p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-100 leading-tight">
                  {content.hero.namePrefix} <span className="text-gray-100">{content.hero.name}</span>
                </h1>
                <div className="text-xl md:text-2xl font-bold text-gray-300 h-9">
                   <Typewriter words={content.hero.role} />
                </div>
                <p className="text-base text-gray-400 max-w-lg leading-relaxed mx-auto md:mx-0">{content.hero.description}</p>
                <div className="flex justify-center md:justify-start"><SocialIcons /></div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-3">
                  <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="px-7 py-2.5 rounded-full font-semibold text-gray-900 bg-amber-500 hover:bg-amber-400 transition inline-flex items-center gap-2">
                    <span>{content.hero.btnProjects}</span>
                    <ExternalLink />
                  </a>
                  <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="px-5 py-2.5 rounded-full font-semibold border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 transition inline-flex items-center gap-2">
                    <span>{content.hero.btnAbout}</span>
                    <ChevronRight />
                  </a>
                </div>
              </Reveal>
              <div className="flex justify-center items-center p-4 order-1 md:order-2">
                <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                  <div className="absolute -inset-8 bg-amber-500/20 blur-3xl rounded-full"></div>
                  <div className="w-full h-full rounded-full border-4 border-gray-800 shadow-xl bg-gray-800 relative z-10 ring-2 ring-amber-500/20 overflow-hidden">
                    <img src="https://i.ibb.co/mF94JtHY/KHALID.jpg" alt="Prof. Khaled Osman" className="w-full h-full object-cover rounded-full transform hover:scale-105 transition duration-500" />
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/* ABOUT - Padding and font adjustments */}
        <section id="about" className="py-16 bg-gray-900/50">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-9"><span className="border-b-4 border-amber-500 pb-1.5">{content.about.title}</span></h2>
              <Reveal><Tilt3D className="bg-gray-800/80 rounded-2xl p-7 md:p-10 border border-gray-700 shadow-xl text-start">
                   <p className="text-base text-gray-300 mb-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.about.p1 }} />
                   <p className="text-base text-gray-300 mb-7 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.about.p2 }} />
                   <a href="https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-500 font-semibold hover:text-gray-100 transition"><span>{content.about.btnLinkedin}</span><ExternalLink /></a>
              </Tilt3D></Reveal>
            </div>
        </section>

        {/* EXPERTISE (SERVICES) - Reduced gaps and sizes */}
        <section id="services" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-14"><span className="border-b-4 border-amber-500 pb-1.5">{content.services.title}</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {content.services.items.map((s, i) => (
                  <Reveal key={i}><Tilt3D className="bg-gray-800/60 rounded-xl p-7 border border-gray-700 hover:border-amber-500 transition h-full text-start">
                        <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-5 border border-gray-700">
                            <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.iconPath}></path></svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-100 mb-2.5">{s.title}</h3>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{s.description}</p>
                  </Tilt3D></Reveal>
                ))}
              </div>
            </div>
        </section>

        {/* JOURNEY (EXPERIENCE) - Reduced spacing */}
        <section id="experience" className="py-16 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-14"><span className="border-b-4 border-amber-500 pb-1.5">{content.experience.title}</span></h2>
              <div className="max-w-4xl mx-auto space-y-7 relative before:absolute before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600 before:left-5 md:before:left-1/2 md:before:-translate-x-1/2 rtl:before:right-5 rtl:md:before:right-auto rtl:md:before:left-1/2">
                {content.experience.items.map((item, idx) => (
                  <Reveal key={idx} className="relative flex items-center justify-center w-full">
                    <div className="absolute flex items-center justify-center w-9 h-9 rounded-full border border-gray-600 bg-gray-900 z-10 left-5 rtl:right-5 -translate-x-1/2 rtl:translate-x-1/2"><div className="w-2.5 h-2.5 bg-amber-500 rounded-full"></div></div>
                    <div className={`w-full md:w-1/2 flex flex-col relative pl-10 rtl:pl-0 rtl:pr-10 md:pl-0 rtl:md:pr-0 ${idx % 2 === 0 ? 'md:mr-auto md:pr-14 md:items-end rtl:md:ml-auto rtl:md:pl-14' : 'md:ml-auto md:pl-14 md:items-start rtl:md:mr-auto rtl:md:pr-14'}`}>
                       <Tilt3D className="w-full p-5 bg-gray-800 rounded-xl border border-gray-700 text-start">
                          <div className="flex justify-between items-center mb-1.5">
                            <h3 className="font-bold text-base text-gray-100">{item.role}</h3>
                            <span className="text-[10px] font-mono text-gray-400 bg-gray-900 px-1.5 py-0.5 rounded border border-gray-700">{item.period}</span>
                          </div>
                          <p className="text-xs text-amber-400 font-semibold mb-2.5">{item.company}</p>
                          <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">{item.description.map((p, j) => <li key={j}>{p}</li>)}</ul>
                       </Tilt3D>
                    </div>
                  </Reveal>
                ))}
              </div>
          </div>
        </section>

        {/* AWARDS (CERTIFICATIONS) */}
        <section id="certifications" className="py-16 bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-14"><span className="border-b-4 border-amber-500 pb-1.5">{content.certifications.title}</span></h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {content.certifications.items.map((c, i) => (
                      <Reveal key={i}><Tilt3D className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-amber-500 transition flex flex-col h-full text-start">
                            <div className="mb-3 text-amber-500"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                            <h4 className="font-bold text-gray-100 text-sm mb-1.5">{c.title}</h4>
                            <p className="text-[11px] text-gray-400 mb-0.5">{c.issuer}</p>
                            <p className="text-[10px] text-gray-500 mb-3">{c.date}</p>
                            <a href={c.link} target="_blank" rel="noreferrer" className="mt-auto text-[10px] font-semibold text-amber-500 flex items-center gap-1">Verify <ExternalLink /></a>
                      </Tilt3D></Reveal>
                    ))}
                </div>
            </div>
        </section>

        {/* PROJECTS - Grid adjusted for 2 items */}
        <section id="projects" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-14"><span className="border-b-4 border-amber-500 pb-1.5">{content.projects.title}</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">
                {content.projects.items.map((p, i) => (
                  <Reveal key={i}><Tilt3D className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-amber-500 transition flex flex-col h-full text-start">
                        <div className="h-48 overflow-hidden relative">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-gray-100 mb-2">{p.title}</h3>
                          <p className="text-gray-400 mb-5 text-xs md:text-sm flex-grow leading-relaxed">{p.description}</p>
                          <div className="flex gap-2.5">
                            <a href={p.demoLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg bg-amber-500 text-gray-900 font-semibold text-xs">View</a>
                            {p.doiLink && <a href={`https://doi.org/${p.doiLink}`} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-lg border border-gray-600 text-gray-100 font-semibold text-xs">DOI</a>}
                          </div>
                        </div>
                  </Tilt3D></Reveal>
                ))}
              </div>
            </div>
        </section>

        {/* PUBLICATIONS - Reduced font sizes and spacing */}
        <section id="publications" className="py-16 bg-gray-900/50">
             <div className="max-w-3xl mx-auto px-4">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-14"><span className="border-b-4 border-amber-500 pb-1.5">{content.publications.title}</span></h2>
              <div className="space-y-5">
                {content.publications.items.map((pub, i) => (
                  <Reveal key={i}><Tilt3D className="bg-gray-800/40 rounded-xl p-5 border-l-4 border-amber-500 text-start">
                        <h3 className="text-lg font-bold text-gray-100 mb-1.5">{pub.title}</h3>
                        <p className="text-[10px] text-amber-500 font-mono mb-2.5 uppercase tracking-wide">{pub.meta}</p>
                        <p className="text-gray-300 mb-3.5 text-xs md:text-sm leading-relaxed">{pub.description}</p>
                        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-amber-500 text-xs inline-flex items-center gap-1 transition"><ExternalLink /> DOI: {pub.doi}</a>
                  </Tilt3D></Reveal>
                ))}
              </div>
             </div>
        </section>

        {/* CONTACT - Form padding adjustment */}
        <section id="contact" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 text-center mb-14"><span className="border-b-4 border-amber-500 pb-1.5">{content.contact.title}</span></h2>
              <Reveal className="max-w-xl mx-auto"><Tilt3D className="bg-gray-800 p-7 rounded-2xl border border-gray-700 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder={content.contact.placeholders.name} className="w-full p-2.5 bg-gray-900 border border-gray-600 rounded-lg text-sm text-white outline-none focus:border-amber-500 transition" required />
                        <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder={content.contact.placeholders.email} className="w-full p-2.5 bg-gray-900 border border-gray-600 rounded-lg text-sm text-white outline-none focus:border-amber-500 transition" required />
                      </div>
                      <textarea name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder={content.contact.placeholders.message} rows={4} className="w-full p-2.5 bg-gray-900 border border-gray-600 rounded-lg text-sm text-white outline-none focus:border-amber-500 transition" required></textarea>
                      <button type="submit" disabled={isSubmitting} className="w-full py-2.5 rounded-full font-bold text-gray-900 bg-amber-500 hover:bg-amber-400 transition text-sm disabled:opacity-50">{isSubmitting ? 'Sending...' : content.contact.btnSend}</button>
                    </form>
              </Tilt3D></Reveal>
            </div>
        </section>
      </main>

      {/* Footer - Reduced height and spacing */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-start">
          <div className="space-y-5 lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-100">Prof. Khaled<span className="text-amber-500">.</span></h3>
            <p className="text-gray-400 text-sm max-w-sm mx-auto md:mx-0">{content.footer.col1Text}</p>
            <div className="flex justify-center md:justify-start"><SocialIcons /></div>
          </div>
          <div className="space-y-5">
             <h3 className="text-base font-bold text-gray-100 uppercase">{content.footer.col2Title}</h3>
             <ul className="text-gray-400 space-y-2 text-xs">
                {content.nav.map(item => <li key={item.id}><a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="hover:text-amber-500 transition">{item.label}</a></li>)}
             </ul>
          </div>
          <div className="space-y-5">
            <h3 className="text-base font-bold text-gray-100 uppercase">{content.footer.col3Title}</h3>
            <ul className="text-gray-400 space-y-3 text-xs">
                <li>{content.footer.contactInfo.phone}</li>
                <li>{content.footer.contactInfo.email}</li>
                <li>{content.footer.contactInfo.location}</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-14 pt-7 border-t border-gray-800 text-[10px]">{content.footer.copyright}</p>
      </footer>
    </div>
  );
}
