import { Content } from './types';

export const contentEn: Content = {
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Awards' }, // Re-labeled for Academic profile
    { id: 'projects', label: 'Research Projects' },
    { id: 'publications', label: 'Selected Publications' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    greeting: 'Welcome to the Professional Profile of',
    namePrefix: 'Prof. Dr.',
    name: 'Khaled A. Osman',
    role: [ 
      'Professor of Pesticide Chemistry',
      'Chairman of Pesticide Department',
      'Environmental Toxicology Expert'
    ],
    description: 'Specializing in Pesticide Toxicology and Food Safety, with over 40 years of academic excellence and 2,600+ global citations in bioremediation and green technologies.',
    btnAbout: 'Academic Journey',
    btnProjects: 'Research Projects',
  },
  about: {
    title: 'About Me',
    p1: 'I am a <strong>Professor and Chairman</strong> of the Department of Pesticide Chemistry at Alexandria University[cite: 30, 38]. My career is dedicated to safeguarding human health and the environment through advanced chemical and toxicological research[cite: 229, 230].',
    p2: 'With an <strong>h-index of 21</strong> and over <strong>2,623 citations</strong>, my research bridges international expertise—from visiting fellowships at the <strong>University of Texas (USA)</strong> and the <strong>University of Padova (Italy)</strong> to over a decade of scientific leadership in Saudi Arabia. My current focus is implementing "Green Technology" using Ozone for pesticide removal[cite: 378, 389].',
    btnLinkedin: 'View Scholar Profile', // Redirect to Google Scholar
  },
  experience: {
    title: 'Academic Leadership & Career',
    items: [
      {
        role: 'Chairman of the Department',
        company: 'Pesticide Chemistry & Technology, Alexandria University',
        period: '2018 – Present',
        location: 'Alexandria, Egypt',
        description: [
          'Directing academic and research strategies for the department[cite: 38].',
          'Supervising high-impact research on pesticide residue removal and food safety[cite: 388, 389].',
          'Leading departmental development and international research collaborations[cite: 341].'
        ]
      },
      {
        role: 'Professor of Pesticide Chemistry & Toxicology',
        company: 'Qassim University & King Saud University',
        period: '2001 – 2012',
        location: 'Saudi Arabia',
        description: [
          'Led significant research projects on pesticide residues in honey, dates, and vegetables[cite: 83, 103, 112].',
          'Served as a key expert in environmental toxicology and risk assessment for the region [cite: 33-35].',
          'Published high-citation studies on food safety and bioremediation[cite: 271, 278].'
        ]
      },
      {
        role: 'Visiting Research Scientist',
        company: 'University of Padova & University of Texas (Medical Branch)',
        period: '1988 – 1995',
        location: 'Italy & USA',
        description: [
          'Conducted advanced research on neurotoxicity and organophosphorus compounds[cite: 20, 25].',
          'Collaborated with international teams on clinical expression of neurotoxicity[cite: 188, 189].',
          'Developed expertise in biochemical and autoradiographic techniques[cite: 47, 173].'
        ]
      },
      {
        role: 'Academic Progression (Demonstrator to Associate Prof.)',
        company: 'Alexandria University',
        period: '1983 – 2001',
        location: 'Alexandria, Egypt',
        description: [
          'Progressed through the full academic hierarchy from demonstrator to Associate Professor [cite: 18-28].',
          'Completed Ph.D. in 1991 focusing on Neurological Lesions of organophosphorus compounds[cite: 122, 123].',
          'Published foundational studies on pesticide interaction with Snails as bio-indicators [cite: 161-169].'
        ]
      }
    ]
  },
  certifications: {
    title: 'Awards & Recognition',
    items: [
      {
        title: 'National Award for Environmental Sciences',
        issuer: 'Egyptian National Academy',
        date: '2000',
        link: 'https://orcid.org/0000-0002-5977-2385'
      },
      {
        title: 'National Award for Agricultural Sciences',
        issuer: 'Egyptian National Academy',
        date: '1996',
        link: 'https://orcid.org/0000-0002-5977-2385'
      },
      {
        title: 'Editorial Board Member',
        issuer: 'Journal of Applied Sciences',
        date: '2005 - Present',
        link: 'https://orcid.org/0000-0002-5977-2385'
      },
      {
        title: 'Expert Peer Reviewer',
        issuer: 'Elsevier, Springer, and Wiley Journals',
        date: 'Continuous',
        link: 'https://orcid.org/0000-0002-5977-2385'
      }
    ]
  },
  services: {
    title: 'Fields of Expertise',
    items: [
      {
        title: 'Pesticide Toxicology',
        description: 'Analyzing the inhibitory action of pesticides on enzymes and neurotoxicity assessment[cite: 44, 45].',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.008 12.008 0 002 15c0 4.848 3.447 8.521 7.24 9.077l.5.077c1.77.25 3.56-.27 4.96-1.57a12.002 12.002 0 007.24-9.077c.216-2.52.216-5.11 0-7.63z'
      },
      {
        title: 'Bioremediation',
        description: 'Removing pesticide pollutants from soil and animal manures using microorganisms[cite: 49, 50, 269].',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.832 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.168 18 16.5 18s-3.332.477-4.5 1.253'
      },
      {
        title: 'Ozone Technology',
        description: 'Implementing Ozone as a safe, green post-harvest treatment for residue removal in vegetables and fruits[cite: 51, 378, 389].',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        title: 'Risk Assessment',
        description: 'Evaluating human and environmental exposure risks to heavy metals and chemical residues[cite: 229, 230, 278].',
        iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M9 20H4v-2a3 3 0 015-2.236M9 20v-2c0-.656-.126-1.283-.356-1.857m-4.735-3.143A8 8 0 0112 12c.706 0 1.378.163 1.996.444M12 12c-3.197 0-6.236-.884-8-2.5m16 2.5a8 8 0 00-8-8 8 8 0 00-8 8'
      }
    ]
  },
  projects: {
    title: 'Major Research Projects',
    viewAll: 'View Research Gate Portfolio',
    items: [
      {
        title: 'Ozone Technology for Date Palm',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        description: 'Principle Investigator for production of Acaricides-free dates using Ozone technology as a post-harvest treatment[cite: 112].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1007/s13197-013-1123-x'
      },
      {
        title: 'Bioremediation of Animal Manures',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
        description: 'Leading the PI initiative for safe bioremediation of pesticide-contaminated animal manures to protect soil health[cite: 100].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.ibiod.2008.10.004'
      },
      {
        title: 'Residue Monitoring in Greenhouses',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
        description: 'Comprehensive risk assessment and estimated daily intake analysis of pesticides in greenhouse vegetables[cite: 271, 278].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.ecoenv.2010.08.033'
      }
    ]
  },
  publications: {
    title: 'High-Impact Publications',
    items: [
      {
        title: 'Ozone as a green technology for removing acetamiprid residues from vegetables',
        meta: '2025 — Journal of Food Composition and Analysis',
        description: 'Latest research demonstrating Ozone as a sustainable solution for food safety and residue removal[cite: 389, 390].',
        doi: '10.1016/j.jfca.2025.107975'
      },
      {
        title: 'Monitoring of pesticide residues in vegetables marketed in Al-Qassim region',
        meta: '2010 — Ecotoxicology and Environmental Safety',
        description: 'Landmark study with 170+ citations assessing regional food safety and pesticide contamination.',
        doi: '10.1016/j.ecoenv.2010.08.033'
      },
      {
        title: 'Risk assessment of pesticide to human and the environment',
        meta: '2003 — Saudi Journal of Biological Sciences',
        description: 'A foundational comprehensive framework for chemical risk evaluation and environmental protection.',
        doi: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en'
      }
    ]
  },
  contact: {
    title: 'Get In Touch',
    btnSend: 'Contact Office',
    placeholders: {
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Phone',
      subject: 'Subject',
      message: 'Inquiry'
    }
  },
  footer: {
    col1Title: "Prof. Khaled Osman",
    col1Text: 'Advancing environmental toxicology and food safety through innovative green technologies. Alexandria University.',
    col2Title: 'University Links',
    col3Title: 'Department Office',
    copyright: '© 2026 Prof. Dr. Khaled A. Osman. Faculty of Agriculture, Alexandria University.',
    contactInfo: {
      phone: '+20 122 434 1220',
      email: 'Khaled.osman@alexu.edu.eg',
      location: 'Alexandria, Egypt'
    }
  }
};

export const contentAr: Content = {
  nav: [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'عن الأستاذ الدكتور' },
    { id: 'experience', label: 'المسيرة' },
    { id: 'certifications', label: 'الجوائز' },
    { id: 'projects', label: 'المشاريع البحثية' },
    { id: 'publications', label: 'أبرز الأبحاث' },
    { id: 'contact', label: 'تواصل' },
  ],
  hero: {
    greeting: 'مرحباً بكم في الملف الأكاديمي لـ',
    namePrefix: 'أ.د.',
    name: 'خالد عثمان',
    role: [
      'أستاذ كيمياء وسمية المبيدات',
      'رئيس قسم كيمياء وتكنولوجيا المبيدات',
      'خبير علم السموم البيئية'
    ],
    description: 'متخصص في سموم المبيدات وسلامة الغذاء، بخبرة أكاديمية تمتد لأكثر من 40 عاماً وأكثر من 2600 اقتباس عالمي في مجالات المعالجة الحيوية والتكنولوجيا الخضراء.',
    btnAbout: 'المسيرة العلمية',
    btnProjects: 'عرض الأبحاث',
  },
  about: {
    title: 'عن الأستاذ الدكتور',
    p1: 'أشغل منصب <strong>رئيس قسم</strong> كيمياء وتكنولوجيا المبيدات بكلية الزراعة - جامعة الإسكندرية[cite: 30, 38]. كرست مسيرتي المهنية لحماية الصحة العامة والبيئة من خلال أبحاث كيميائية وسمية متقدمة[cite: 229, 230].',
    p2: 'بمؤشر <strong>h-index يصل إلى 21</strong> وأكثر من <strong>2623 اقتباساً</strong>، تجمع أبحاثي بين الخبرة الدولية كباحث زائر في <strong>جامعة تكساس (أمريكا)</strong> و<strong>جامعة بادوفا (إيطاليا)</strong>، وبين عقود من القيادة العلمية إقليمياً. أركز حالياً على تطبيقات "التكنولوجيا الخضراء" باستخدام الأوزون[cite: 378, 389].',
    btnLinkedin: 'عرض الملف الأكاديمي',
  },
  experience: {
    title: 'القيادة الأكاديمية والمسيرة',
    items: [
      {
        role: 'رئيس القسم',
        company: 'قسم كيمياء وتكنولوجيا المبيدات - جامعة الإسكندرية',
        period: '2018 – الآن',
        location: 'الإسكندرية، مصر',
        description: [
          'إدارة الاستراتيجيات الأكاديمية والبحثية للقسم[cite: 38].',
          'الإشراف على الأبحاث ذات التأثير العالي في مجال إزالة متبقيات المبيدات وسلامة الغذاء[cite: 388, 389].',
          'قيادة تطوير القسم وتعزيز الشراكات البحثية الدولية[cite: 341].'
        ]
      },
      {
        role: 'أستاذ كيمياء وسمية المبيدات',
        company: 'جامعة القصيم وجامعة الملك سعود',
        period: '2001 – 2012',
        location: 'المملكة العربية السعودية',
        description: [
          'قيادة مشاريع بحثية كبرى حول متبقيات المبيدات في العسل والتمور والخضروات[cite: 83, 103, 112].',
          'العمل كخبير أساسي في السموم البيئية وتقييم المخاطر في المنطقة [cite: 33-35].',
          'نشر دراسات عالية الاقتباس في مجالات سلامة الغذاء والمعالجة الحيوية[cite: 271, 278].'
        ]
      },
      {
        role: 'عالم وباحث زائر',
        company: 'جامعة بادوفا (إيطاليا) وجامعة تكساس (أمريكا)',
        period: '1988 – 1995',
        location: 'إيطاليا وأمريكا',
        description: [
          'إجراء أبحاث متقدمة في علم السموم العصبية ومركبات الفوسفور العضوية[cite: 20, 25].',
          'التعاون مع فرق دولية حول التعبيرات السريرية للسموم العصبية[cite: 188, 189].',
          'تطوير خبرات واسعة في تقنيات القياس الكيميائي الحيوي والتصوير الإشعاعي الذاتي[cite: 47, 173].'
        ]
      },
      {
        role: 'التدرج الأكاديمي (معيد إلى أستاذ مشارك)',
        company: 'جامعة الإسكندرية',
        period: '1983 – 2001',
        location: 'الإسكندرية، مصر',
        description: [
          'التدرج في التسلسل الأكاديمي الكامل من معيد حتى أستاذ مشارك [cite: 18-28].',
          'الحصول على الدكتوراه عام 1991 ببحث حول الآفات العصبية لمركبات الفوسفور العضوية[cite: 122, 123].',
          'نشر دراسات تأسيسية حول تفاعل المبيدات مع القواقع كمؤشرات حيوية [cite: 161-169].'
        ]
      }
    ]
  },
  certifications: {
    title: 'الجوائز والتكريمات',
    items: [
      {
        title: 'جائزة الدولة في العلوم البيئية',
        issuer: 'مصر',
        date: '2000',
        link: 'https://orcid.org/0000-0002-5977-2385'
      },
      {
        title: 'جائزة الدولة التشجيعية في العلوم الزراعية',
        issuer: 'مصر',
        date: '1996',
        link: 'https://orcid.org/0000-0002-5977-2385'
      },
      {
        title: 'عضو هيئة تحرير مجلة العلوم التطبيقية',
        issuer: 'Journal of Applied Sciences',
        date: '2005 - الآن',
        link: 'https://orcid.org/0000-0002-5977-2385'
      },
      {
        title: 'محكم خبير لدى دور النشر العالمية',
        issuer: 'Elsevier, Springer, Wiley',
        date: 'مستمر',
        link: 'https://orcid.org/0000-0002-5977-2385'
      }
    ]
  },
  services: {
    title: 'مجالات الخبرة',
    items: [
      {
        title: 'سمية المبيدات',
        description: 'تحليل التأثير المثبط للمبيدات على الإنزيمات وتقييم السموم العصبية[cite: 44, 45].',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.008 12.008 0 002 15c0 4.848 3.447 8.521 7.24 9.077l.5.077c1.77.25 3.56-.27 4.96-1.57a12.002 12.002 0 007.24-9.077c.216-2.52.216-5.11 0-7.63z'
      },
      {
        title: 'المعالجة الحيوية',
        description: 'إزالة ملوثات المبيدات من التربة والأسمدة الحيوانية باستخدام الكائنات الدقيقة[cite: 49, 50, 269].',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.832 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.168 18 16.5 18s-3.332.477-4.5 1.253'
      },
      {
        title: 'تكنولوجيا الأوزون',
        description: 'تطبيق الأوزون كمعاملة آمنة وصديقة للبيئة لإزالة متبقيات المبيدات من الخضروات والفاكهة[cite: 51, 378, 389].',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        title: 'تقييم المخاطر',
        description: 'تقييم مخاطر التعرض للمعادن الثقيلة ومتبقيات المواد الكيميائية على الإنسان والبيئة[cite: 229, 230, 278].',
        iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M9 20H4v-2a3 3 0 015-2.236M9 20v-2c0-.656-.126-1.283-.356-1.857m-4.735-3.143A8 8 0 0112 12c.706 0 1.378.163 1.996.444M12 12c-3.197 0-6.236-.884-8-2.5m16 2.5a8 8 0 00-8-8 8 8 0 00-8 8'
      }
    ]
  },
  projects: {
    title: 'مشاريع بحثية كبرى',
    viewAll: 'عرض الملف على ResearchGate',
    items: [
      {
        title: 'تكنولوجيا الأوزون للتمور',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        description: 'الباحث الرئيسي لإنتاج تمور خالية من متبقيات المبيدات باستخدام تكنولوجيا الأوزون كمعاملة ما بعد الحصاد[cite: 112].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1007/s13197-013-1123-x'
      },
      {
        title: 'المعالجة الحيوية للأسمدة',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
        description: 'قيادة مبادرة المعالجة الحيوية للأسمدة الحيوانية الملوثة بالمبيدات لحماية صحة التربة[cite: 100].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.ibiod.2008.10.004'
      },
      {
        title: 'رصد المتبقيات في الصوبات',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
        description: 'تقييم المخاطر الشامل وتحليل المدخول اليومي المقدر للمبيدات في خضروات الصوبات الزراعية[cite: 271, 278].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.ecoenv.2010.08.033'
      }
    ]
  },
  publications: {
    title: 'أبحاث مختارة ذات تأثير عالي',
    items: [
      {
        title: 'تكنولوجيا الأوزون كحل أخضر لإزالة متبقيات الأسيتاميبريد من الخضروات',
        meta: '2025 — Journal of Food Composition and Analysis',
        description: 'أحدث الأبحاث التي تثبت فعالية الأوزون كحل مستدام لسلامة الغذاء وإزالة المتبقيات[cite: 389, 390].',
        doi: '10.1016/j.jfca.2025.107975'
      },
      {
        title: 'رصد متبقيات المبيدات في الخضروات المسوقة في منطقة القصيم',
        meta: '2010 — Ecotoxicology and Environmental Safety',
        description: 'دراسة مرجعية حاصلة على أكثر من 170 اقتباساً لتقييم سلامة الغذاء الإقليمي.',
        doi: '10.1016/j.ecoenv.2010.08.033'
      },
      {
        title: 'تقييم مخاطر المبيدات على الإنسان والبيئة',
        meta: '2003 — Saudi Journal of Biological Sciences',
        description: 'إطار تأسيسي شامل لتقييم المخاطر الكيميائية وحماية البيئة.',
        doi: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en'
      }
    ]
  },
  contact: {
    title: 'تواصل معي',
    btnSend: 'تواصل مع مكتب رئيس القسم',
    placeholders: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      subject: 'الموضوع',
      message: 'الاستفسار'
    }
  },
  footer: {
    col1Title: "أ.د. خالد عثمان",
    col1Text: 'نعمل على تطوير علم السموم البيئية وسلامة الغذاء من خلال حلول التكنولوجيا الخضراء المبتكرة. جامعة الإسكندرية.',
    col2Title: 'روابط الجامعة',
    col3Title: 'مكتب القسم',
    copyright: '© 2026 الأستاذ الدكتور خالد عثمان. كلية الزراعة، جامعة الإسكندرية.',
    contactInfo: {
      phone: '+20 122 434 1220',
      email: 'Khaled.osman@alexu.edu.eg',
      location: 'الإسكندرية، مصر'
    }
  }
};
