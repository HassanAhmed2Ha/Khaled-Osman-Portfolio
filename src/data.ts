import { Content } from './types';

export const contentEn: Content = {
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Expertise' },
    { id: 'experience', label: 'Journey' },
    { id: 'certifications', label: 'Awards' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    greeting: 'Welcome to the Professional Profile of',
    namePrefix: "Prof. Dr.",
    name: 'Khaled A. Osman',
    role: [ 
      'Professor of Pesticide Chemistry',
      'Chairman of Pesticide Department',
      'Environmental Toxicology Expert'
    ],
    description: 'A distinguished scientist with over 40 years of expertise in Pesticide Toxicology and Environmental Protection. Committed to advancing "Green Technology" and food safety across the MENA region.',
    btnAbout: 'Academic Journey',
    btnProjects: 'View Research',
  },
  about: {
    title: 'About Me',
    p1: 'I am a <strong>Professor and Chairman</strong> of the Department of Pesticide Chemistry & Technology at Alexandria University[cite: 37, 38]. My career is dedicated to safeguarding human health and the environment through advanced chemical and toxicological research[cite: 44, 45].',
    p2: 'With over <strong>2,623 citations</strong> and an <strong>h-index of 21</strong>, my work bridges global expertise—from visiting fellowships at the <strong>University of Texas (USA)</strong> [cite: 20] and the <strong>University of Padova (Italy)</strong> [cite: 24, 25] to over a decade of scientific leadership in Saudi Arabia[cite: 32, 33].',
    btnLinkedin: 'View Scholar Profile',
  },
  experience: {
    title: 'Professional Milestones',
    items: [
      {
        role: 'Chairman of the Department',
        company: 'Pesticide Chemistry & Technology, Alexandria University',
        period: '2018 – Present',
        location: 'Alexandria, Egypt',
        description: [
          'Directing academic and research strategies for the department[cite: 38].',
          'Supervising high-impact research on pesticide residue removal and food safety[cite: 48, 51].',
          'Leading departmental development and international research collaborations.'
        ]
      },
      {
        role: 'Professor of Pesticide Chemistry & Toxicology',
        company: 'Qassim University & King Saud University',
        period: '2001 – 2012',
        location: 'Saudi Arabia',
        description: [
          'Led significant research projects on pesticide residues in honey, dates, and vegetables[cite: 83, 103].',
          'Expert in environmental toxicology and risk assessment for the Al-Qassim region[cite: 33, 34].',
          'Published foundational studies on food safety and bioremediation[cite: 270, 277].'
        ]
      },
      {
        role: 'Visiting Research Scientist',
        company: 'University of Padova & University of Texas',
        period: '1988 – 1995',
        location: 'Italy & USA',
        description: [
          'Conducted advanced research on neurotoxicity and organophosphorus compounds[cite: 20, 25].',
          'Collaborated with international teams on clinical expression of neurotoxicity[cite: 188].',
          'Developed expertise in biochemical and autoradiographic techniques[cite: 47].'
        ]
      }
    ]
  },
  certifications: {
    title: 'National Awards & Honors',
    items: [
      {
        title: 'National Award for Environmental Sciences',
        issuer: 'Academy of Scientific Research and Technology',
        date: '2000',
        link: 'https://orcid.org/0000-0002-5977-2385'
      },
      {
        title: 'National Award for Agricultural Sciences',
        issuer: 'Academy of Scientific Research and Technology',
        date: '1996',
        link: 'https://orcid.org/0000-0002-5977-2385'
      }
    ]
  },
  services: {
    title: 'Scientific Expertise',
    items: [
      {
        title: 'Pesticide Toxicology',
        description: 'Analyzing enzyme inhibitory action and toxicity of metals and pesticides to mammals[cite: 44].',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.008 12.008 0 002 15c0 4.848 3.447 8.521 7.24 9.077l.5.077c1.77.25 3.56-.27 4.96-1.57a12.002 12.002 0 007.24-9.077c.216-2.52.216-5.11 0-7.63z'
      },
      {
        title: 'Ozone Technology',
        description: 'Pioneering studies in removing pesticide residues from vegetables and fruits using ozone as a safe method[cite: 51].',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        title: 'Bioremediation',
        description: 'Advanced research in bioremediation of pesticides by microorganisms and animal manures[cite: 49, 50].',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.832 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.168 18 16.5 18s-3.332.477-4.5 1.253'
      }
    ]
  },
  projects: {
    title: 'Featured Research Projects',
    viewAll: 'View All Publications',
    items: [
      {
        title: 'Ozone Post-harvest Technology',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        description: 'Production of date palm fruits free of acaricides residues using ozone technology as a post-harvest treatment[cite: 112].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1007/s13197-013-1123-x'
      },
      {
        title: 'Bioremediation of Animal Manures',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
        description: 'Scientific initiative for safe bioremediation of pesticide-contaminated animal manures to protect soil and water[cite: 100].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.ibiod.2008.10.004'
      }
    ]
  },
  publications: {
    title: 'High-Impact Publications',
    items: [
      {
        title: 'Ozone treatment as a green technology for removing acetamiprid residues',
        meta: '2025 — Journal of Food Composition and Analysis',
        description: 'Latest research on green technology for residue removal and its impact on vegetable quality[cite: 388, 390].',
        doi: '10.1016/j.jfca.2025.107975'
      },
      {
        title: 'Monitoring of pesticide residues in vegetables marketed in Al-Qassim region',
        meta: '2010 — Ecotoxicology and Environmental Safety',
        description: 'A landmark study assessing food safety and pesticide contamination in regional markets[cite: 270, 271].',
        doi: '10.1016/j.ecoenv.2010.08.033'
      }
    ]
  },
  contact: {
    title: 'Get In Touch',
    btnSend: 'Send Message',
    placeholders: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone (Optional)',
      subject: 'Subject',
      message: 'Message'
    }
  },
  footer: {
    col1Title: "Prof. Khaled Osman",
    col1Text: 'Advancing pesticide chemistry and environmental health through innovative research and leadership.',
    col2Title: 'University Links',
    col3Title: 'Contact Info',
    copyright: '© 2026 Prof. Dr. Khaled A. Osman. Alexandria University. All rights reserved.',
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
    { id: 'about', label: 'عن الدكتور' },
    { id: 'services', label: 'التخصصات' },
    { id: 'experience', label: 'المسيرة' },
    { id: 'certifications', label: 'الجوائز' },
    { id: 'projects', label: 'المشاريع' },
    { id: 'publications', label: 'الأبحاث' },
    { id: 'contact', label: 'تواصل' },
  ],
  hero: {
    greeting: 'مرحباً بكم في الملف المهني لـ',
    namePrefix: 'أ.د.',
    name: 'خالد عثمان',
    role: [
      'أستاذ كيمياء وسمية المبيدات',
      'رئيس قسم كيمياء وتكنولوجيا المبيدات',
      'خبير في السموم البيئية'
    ],
    description: 'عالم متميز بخبرة تزيد عن 40 عاماً في مجال سمية المبيدات وحماية البيئة. ملتزم بتطوير "التكنولوجيا الخضراء" وسلامة الغذاء في منطقة الشرق الأوسط.',
    btnAbout: 'المسيرة الأكاديمية',
    btnProjects: 'عرض الأبحاث',
  },
  about: {
    title: 'نبذة عن الأستاذ الدكتور',
    p1: 'أشغل حالياً منصب <strong>رئيس قسم</strong> كيمياء وتكنولوجيا المبيدات بكلية الزراعة - جامعة الإسكندرية[cite: 37, 38]. كرست مسيرتي المهنية لحماية الصحة العامة والبيئة من خلال أبحاث كيميائية وسمية متقدمة[cite: 44, 45].',
    p2: 'بأكثر من <strong>2623 اقتباساً</strong> ومؤشر <strong>h-index 21</strong>، تجمع أبحاثي بين الخبرة الدولية كباحث زائر في <strong>جامعة تكساس (أمريكا)</strong> [cite: 20] و<strong>جامعة بادوفا (إيطاليا)</strong> [cite: 24, 25] وبين أكثر من عقد من القيادة العلمية في المملكة العربية السعودية[cite: 32, 33].',
    btnLinkedin: 'عرض الملف الأكاديمي',
  },
  experience: {
    title: 'محطات مهنية وقيادية',
    items: [
      {
        role: 'رئيس القسم',
        company: 'قسم كيمياء وتكنولوجيا المبيدات - جامعة الإسكندرية',
        period: '2018 – الآن',
        location: 'الإسكندرية، مصر',
        description: [
          'توجيه الاستراتيجيات الأكاديمية والبحثية للقسم[cite: 38].',
          'الإشراف على الأبحاث ذات التأثير العالي في إزالة متبقيات المبيدات وسلامة الغذاء[cite: 48, 51].',
          'قيادة تطوير القسم وتعزيز الشراكات البحثية الدولية.'
        ]
      },
      {
        role: 'أستاذ كيمياء وسمية المبيدات',
        company: 'جامعة القصيم وجامعة الملك سعود',
        period: '2001 – 2012',
        location: 'المملكة العربية السعودية',
        description: [
          'قيادة مشاريع بحثية كبرى حول متبقيات المبيدات في العسل والتمور والخضروات[cite: 83, 103].',
          'خبير في السموم البيئية وتقييم المخاطر في منطقة القصيم[cite: 33, 34].',
          'نشر دراسات مرجعية في سلامة الغذاء والمعالجة الحيوية[cite: 270, 277].'
        ]
      }
    ]
  },
  certifications: {
    title: 'الجوائز والتكريمات القومية',
    items: [
      {
        title: 'جائزة الدولة في العلوم البيئية',
        issuer: 'أكاديمية البحث العلمي والتكنولوجيا',
        date: '2000',
        link: 'https://orcid.org/0000-0002-5977-2385'
      },
      {
        title: 'جائزة الدولة التشجيعية في العلوم الزراعية',
        issuer: 'أكاديمية البحث العلمي والتكنولوجيا',
        date: '1996',
        link: 'https://orcid.org/0000-0002-5977-2385'
      }
    ]
  },
  services: {
    title: 'مجالات الخبرة العلمية',
    items: [
      {
        title: 'سمية المبيدات',
        description: 'تحليل التأثير المثبط للمبيدات على الإنزيمات وتقييم السمية للمعادن والمبيدات على الثدييات[cite: 44].',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.008 12.008 0 002 15c0 4.848 3.447 8.521 7.24 9.077l.5.077c1.77.25 3.56-.27 4.96-1.57a12.002 12.002 0 007.24-9.077c.216-2.52.216-5.11 0-7.63z'
      },
      {
        title: 'تكنولوجيا الأوزون',
        description: 'دراسات رائدة في إزالة متبقيات المبيدات من الخضروات والفاكهة باستخدام الأوزون كطريقة آمنة[cite: 51].',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        title: 'المعالجة الحيوية',
        description: 'أبحاث متقدمة في المعالجة الحيوية للمبيدات بواسطة الكائنات الدقيقة والأسمدة الحيوانية[cite: 49, 50].',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.832 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.168 18 16.5 18s-3.332.477-4.5 1.253'
      }
    ]
  },
  projects: {
    title: 'مشاريع بحثية مختارة',
    viewAll: 'عرض كافة الأبحاث',
    items: [
      {
        title: 'تكنولوجيا الأوزون للتمور',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        description: 'الباحث الرئيسي لإنتاج تمور خالية من متبقيات المبيدات باستخدام تكنولوجيا الأوزون كمعاملة ما بعد الحصاد[cite: 112].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1007/s13197-013-1123-x'
      },
      {
        title: 'المعالجة الحيوية للمخلفات',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
        description: 'مبادرة بحثية للمعالجة الحيوية الآمنة للأسمدة الحيوانية الملوثة بالمبيدات لحماية التربة والمياه[cite: 100].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.ibiod.2008.10.004'
      }
    ]
  },
  publications: {
    title: 'أبحاث منشورة عالمياً',
    items: [
      {
        title: 'تكنولوجيا الأوزون كحل أخضر لإزالة متبقيات الأسيتاميبريد',
        meta: '2025 — Journal of Food Composition and Analysis',
        description: 'أحدث الأبحاث حول التكنولوجيا الخضراء لإزالة المتبقيات وتأثيرها على جودة الخضروات[cite: 388, 390].',
        doi: '10.1016/j.jfca.2025.107975'
      },
      {
        title: 'رصد متبقيات المبيدات في خضروات منطقة القصيم',
        meta: '2010 — Ecotoxicology and Environmental Safety',
        description: 'دراسة مرجعية لتقييم سلامة الغذاء وتلوث المبيدات في الأسواق الإقليمية[cite: 270, 271].',
        doi: '10.1016/j.ecoenv.2010.08.033'
      }
    ]
  },
  contact: {
    title: 'تواصل معي',
    btnSend: 'إرسال الرسالة',
    placeholders: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف (اختياري)',
      subject: 'الموضوع',
      message: 'الرسالة'
    }
  },
  footer: {
    col1Title: "أ.د. خالد عثمان",
    col1Text: 'النهوض بكيمياء المبيدات والصحة البيئية من خلال البحث العلمي المبتكر والقيادة الأكاديمية.',
    col2Title: 'روابط الجامعة',
    col3Title: 'معلومات الاتصال',
    copyright: '© 2026 الأستاذ الدكتور خالد عثمان. جامعة الإسكندرية. جميع الحقوق محفوظة.',
    contactInfo: {
      phone: '+20 122 434 1220',
      email: 'Khaled.osman@alexu.edu.eg',
      location: 'الإسكندرية، مصر'
    }
  }
};
