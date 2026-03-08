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
          'Leading departmental development and international research collaborations[cite: 128].'
        ]
      },
      {
        role: 'Professor of Pesticides Chemistry and Toxicology',
        company: 'Alexandria University',
        period: '2012 – Present',
        location: 'Alexandria, Egypt',
        description: [
          'Conducting advanced studies on the bioremediation of pesticides by microorganisms[cite: 49].',
          'Implementing green technology solutions using ozone for pesticide removal[cite: 51, 305].',
          'Mentoring Ph.D. and Master’s students in environmental toxicology[cite: 153].'
        ]
      },
      {
        role: 'Professor of Pesticide Chemistry and Toxicology',
        company: 'Faculty of Agriculture and Veterinary Medicine, Qassim University',
        period: '2004 – 2012',
        location: 'Saudi Arabia',
        description: [
          'Served as Principle Investigator (PI) for projects on pesticide residues in dates and vegetables[cite: 80, 103].',
          'Analyzed heavy metal contamination and characteristics of natural honey[cite: 53, 83].',
          'Contributed to regional risk assessment and food safety standards[cite: 278].'
        ]
      },
      {
        role: 'Professor of Pesticide Chemistry and Toxicology',
        company: 'Faculty of Agriculture and Veterinary Medicine, King Saud University',
        period: '2001 – 2004',
        location: 'Al-Qassim Branch, Saudi Arabia',
        description: [
          'Conducted research on chemical residues in human foodstuffs and breast milk[cite: 77, 78].',
          'Evaluated the environmental impact of pesticides on local ecosystems[cite: 33].',
          'Published foundational studies on human health risk assessment[cite: 229].'
        ]
      },
      {
        role: 'Professor of Pesticides Chemistry and Toxicology',
        company: 'Alexandria University',
        period: '2001 – Now',
        location: 'Alexandria, Egypt',
        description: [
          'Performing comprehensive research on enzyme inhibitory action and toxicity of metals[cite: 44].',
          'Assessing oxidative stress induced by different pesticides[cite: 244].',
          'Serving as an expert reviewer for international toxicological journals [cite: 135-154].'
        ]
      },
      {
        role: 'Associate Professor of Pesticides Chemistry and Toxicology',
        company: 'Alexandria University',
        period: '1997 – 2001',
        location: 'Alexandria, Egypt',
        description: [
          'Participated in biological monitoring of water pollution by pesticides[cite: 72].',
          'Studied lead toxicity and blood levels in lead-related occupations[cite: 199].',
          'Received the National Award for Environmental Sciences (2000)[cite: 125].'
        ]
      },
      {
        role: 'Visiting Scientist',
        company: 'The University of Padova, Medical Branch',
        period: '1994 – 1995',
        location: 'Padova, Italy',
        description: [
          'Collaborated on clinical expressions of IDPN neurotoxicity in rats[cite: 189].',
          'Focused on the promotion of organophosphate polyneuropathy[cite: 196, 197].',
          'Utilized advanced biochemical techniques for neurotoxicology research[cite: 25, 188].'
        ]
      },
      {
        role: 'Assistant Professor of Pesticides Chemistry and Toxicology',
        company: 'Alexandria University',
        period: '1991 – 1997',
        location: 'Alexandria, Egypt',
        description: [
          'Carried out studies on the effects of pesticides on the immune system[cite: 68].',
          'Evaluated side effects of pesticides on non-target organisms like land snails[cite: 66, 169].',
          'Honored with the National Award for Agricultural Sciences (1996)[cite: 124].'
        ]
      },
      {
        role: 'Visiting Research Fellow',
        company: 'The University of Texas, Medical Branch',
        period: '1988 – 1989',
        location: 'Galveston, TX, USA',
        description: [
          'Researched whole-body autoradiographic disposition and elimination of Tri-o-cresyl Phosphate[cite: 173, 174].',
          'Conducted risk assessment studies using autoradiograph techniques[cite: 47].',
          'Engaged with international teams on clinical toxicology standards[cite: 20].'
        ]
      },
      {
        role: 'Assistant Lecturer',
        company: 'Pesticides Chemistry Dept., Alexandria University',
        period: '1987 – 1991',
        location: 'Alexandria, Egypt',
        description: [
          'Instructed undergraduate labs in Organic, Physical, and Analytical Chemistry[cite: 41].',
          'Completed Master’s research on toxicokinetics of insecticides[cite: 120, 121].',
          'Performed assessment of delayed neuropathy in organophosphorus compounds[cite: 123].'
        ]
      },
      {
        role: 'Demonstrator',
        company: 'Pesticides Chemistry Dept., Alexandria University',
        period: '1983 – 1987',
        location: 'Alexandria, Egypt',
        description: [
          'Supported teaching activities in Pesticides Chemistry and Toxicology[cite: 42].',
          'Assisted in monitoring hazardous pollutants in the Alexandria region[cite: 60].',
          'Contributed to Cotton Leafworm control research for the Ministry of Agriculture[cite: 65].'
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
    title: 'Fields of Expertise',
    items: [
      {
        title: 'Academic Teaching',
        description: 'Over 40 years of teaching Organic, Physical, Analytical, and Pesticide Chemistry, along with Environmental Pollution courses[cite: 41, 42, 43].',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.832 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.168 18 16.5 18s-3.332.477-4.5 1.253'
      },
      {
        title: 'Toxicology & Neurotoxicity',
        description: 'Specialized research in enzyme inhibitory action, neurotoxicity assessment in workers, and delayed neuropathy of organophosphorus compounds[cite: 44, 45].',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.008 12.008 0 002 15c0 4.848 3.447 8.521 7.24 9.077l.5.077c1.77.25 3.56-.27 4.96-1.57a12.002 12.002 0 007.24-9.077c.216-2.52.216-5.11 0-7.63z'
      },
      {
        title: 'Environmental Monitoring',
        description: 'Monitoring pesticide residues, mycotoxins, and heavy metals in food, soil, and tea; including risk assessment using autoradiograph techniques[cite: 48, 57].',
        iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M9 20H4v-2a3 3 0 015-2.236M9 20v-2c0-.656-.126-1.283-.356-1.857m-4.735-3.143A8 8 0 0112 12c.706 0 1.378.163 1.996.444M12 12c-3.197 0-6.236-.884-8-2.5m16 2.5a8 8 0 00-8-8 8 8 0 00-8 8'
      },
      {
        title: 'Bioremediation & Green Tech',
        description: 'Advanced studies in pesticide removal using microorganisms, animal manures, and pioneering Ozone technology[cite: 49, 50, 51, 55].',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      }
    ]
  },
  projects: {
    title: 'Featured Research Projects',
    viewAll: 'View Full Research Record',
    items: [
      {
        title: 'Ozone Post-harvest Technology',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        description: 'Principal Investigator for producing acaricide-free date palm fruits using Ozone technology as an innovative post-harvest treatment[cite: 112].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1007/s13197-013-1123-x'
      },
      {
        title: 'Food Safety in Protected Agriculture',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
        description: 'Leading a PI project monitoring pesticide residues in greenhouse-cultivated vegetables to ensure public health safety standards[cite: 103].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.foodcont.2010.11.027'
      },
      {
        title: 'Bioremediation of Animal Manures',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
        description: 'Directing the biological treatment and remediation of pesticide-contaminated animal manures to protect soil and water resources[cite: 100].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.ibiod.2008.10.004'
      },
      {
        title: 'Natural Honey Quality Assessment',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
        description: 'Principal Investigator for comprehensive monitoring of pesticide residues and heavy metals in natural honey within the Al-Qassim region[cite: 83].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.jfca.2010.08.033'
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
    title: 'المحطات المهنية والقيادية',
    items: [
      {
        role: 'رئيس القسم',
        company: 'قسم كيمياء وتكنولوجيا المبيدات - جامعة الإسكندرية',
        period: '2018 – الآن',
        location: 'الإسكندرية، مصر',
        description: [
          'توجيه الاستراتيجيات الأكاديمية والبحثية للقسم[cite: 38].',
          'الإشراف على الأبحاث ذات التأثير العالي في إزالة متبقيات المبيدات وسلامة الغذاء[cite: 48, 51].',
          'قيادة تطوير القسم وتعزيز الشراكات البحثية الدولية[cite: 128].'
        ]
      },
      {
        role: 'أستاذ كيمياء وسمية المبيدات',
        company: 'جامعة الإسكندرية',
        period: '2012 – الآن',
        location: 'الإسكندرية، مصر',
        description: [
          'إجراء دراسات متقدمة حول المعالجة الحيوية للمبيدات بواسطة الكائنات الدقيقة[cite: 49].',
          'تطبيق حلول التكنولوجيا الخضراء باستخدام الأوزون للتخلص من المبيدات[cite: 51, 305].',
          'الإشراف على طلاب الدكتوراه والماجستير في تخصص السموم البيئية[cite: 153].'
        ]
      },
      {
        role: 'أستاذ كيمياء وسمية المبيدات',
        company: 'كلية الزراعة والطب البيطري - جامعة القصيم',
        period: '2004 – 2012',
        location: 'المملكة العربية السعودية',
        description: [
          'الباحث الرئيسي (PI) لمشاريع متبقيات المبيدات في التمور والخضروات[cite: 80, 103].',
          'تحليل تلوث المعادن الثقيلة وخصائص العسل الطبيعي[cite: 53, 83].',
          'المساهمة في تقييم المخاطر الإقليمية ومعايير سلامة الغذاء[cite: 278].'
        ]
      },
      {
        role: 'أستاذ كيمياء وسمية المبيدات',
        company: 'كلية الزراعة والطب البيطري - جامعة الملك سعود',
        period: '2001 – 2004',
        location: 'فرع القصيم، المملكة العربية السعودية',
        description: [
          'إجراء أبحاث حول المتبقيات الكيميائية في الأغذية وحليب الأم[cite: 77, 78].',
          'تقييم الأثر البيئي للمبيدات على النظم البيئية المحلية[cite: 33].',
          'نشر دراسات مرجعية حول تقييم مخاطر المواد الكيميائية على صحة الإنسان[cite: 229].'
        ]
      },
      {
        role: 'أستاذ كيمياء وسمية المبيدات',
        company: 'جامعة الإسكندرية',
        period: '2001 – الآن',
        location: 'الإسكندرية، مصر',
        description: [
          'إجراء أبحاث شاملة حول التأثير المثبط للإنزيمات وسمية المعادن[cite: 44].',
          'تقييم الإجهاد التأكسدي الناتج عن أنواع مختلفة من المبيدات[cite: 244].',
          'العمل كمحكم خبير لدى المجلات العلمية الدولية المتخصصة في السموم [cite: 135-154].'
        ]
      },
      {
        role: 'أستاذ مشارك كيمياء وسمية المبيدات',
        company: 'جامعة الإسكندرية',
        period: '1997 – 2001',
        location: 'الإسكندرية، مصر',
        description: [
          'المشاركة في الرصد البيولوجي لتلوث المياه بالمبيدات[cite: 72].',
          'دراسة سمية الرصاص ومستوياته في الدم لدى العاملين في المهن المرتبطة به[cite: 199].',
          'الحصول على جائزة الدولة في العلوم البيئية (عام 2000)[cite: 125].'
        ]
      },
      {
        role: 'عالم زائر',
        company: 'جامعة بادوفا - القسم الطبي',
        period: '1994 – 1995',
        location: 'بادوفا، إيطاليا',
        description: [
          'التعاون في دراسة التعبيرات السريرية لسمية IDPN العصبية في الفئران[cite: 189].',
          'التركيز على مسببات اعتلال الأعصاب المتعدد الناتج عن الفوسفور العضوي[cite: 196, 197].',
          'استخدام تقنيات كيميائية حيوية متقدمة في أبحاث السموم العصبية[cite: 25, 188].'
        ]
      },
      {
        role: 'أستاذ مساعد كيمياء وسمية المبيدات',
        company: 'جامعة الإسكندرية',
        period: '1991 – 1997',
        location: 'الإسكندرية، مصر',
        description: [
          'إجراء دراسات حول تأثير المبيدات على الجهاز المناعي[cite: 68].',
          'تقييم الآثار الجانبية للمبيدات على الكائنات غير المستهدفة مثل القواقع الأرضية[cite: 66, 169].',
          'الحصول على جائزة الدولة التشجيعية في العلوم الزراعية (عام 1996)[cite: 124].'
        ]
      },
      {
        role: 'باحث زائر',
        company: 'جامعة تكساس - القسم الطبي',
        period: '1988 – 1989',
        location: 'جالفستون، تكساس، أمريكا',
        description: [
          'البحث في التخلص والتمثيل الغذائي لمركب ثلاثي أورثو كريزيل الفوسفات[cite: 173, 174].',
          'إجراء دراسات تقييم المخاطر باستخدام تقنيات التصوير الإشعاعي الذاتي[cite: 47].',
          'العمل مع فرق دولية على معايير علم السموم السريري[cite: 20].'
        ]
      },
      {
        role: 'مدرس مساعد',
        company: 'قسم كيمياء المبيدات - جامعة الإسكندرية',
        period: '1987 – 1991',
        location: 'الإسكندرية، مصر',
        description: [
          'تدريس المعامل لطلاب البكالوريوس في الكيمياء العضوية والفيزيائية والتحليلية[cite: 41].',
          'إتمام بحث الماجستير حول الحركية السمية للمبيدات الحشرية[cite: 120, 121].',
          'تقييم اعتلال الأعصاب المتأخر الناتج عن مركبات الفوسفور العضوية[cite: 123].'
        ]
      },
      {
        role: 'معيد',
        company: 'قسم كيمياء المبيدات - جامعة الإسكندرية',
        period: '1983 – 1987',
        location: 'الإسكندرية، مصر',
        description: [
          'دعم الأنشطة التدريسية في كيمياء وسمية المبيدات[cite: 42].',
          'المساعدة في رصد الملوثات الخطرة على الإنسان في منطقة الإسكندرية[cite: 60].',
          'المساهمة في أبحاث مكافحة دودة ورق القطن لصالح وزارة الزراعة المصرية[cite: 65].'
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
    title: 'مجالات الخبرة والأنشطة',
    items: [
      {
        title: 'التدريس الأكاديمي',
        description: 'أكثر من 40 عاماً في تدريس الكيمياء العضوية والفيزيائية والتحليلية وكيمياء المبيدات وتلوث البيئة[cite: 41, 42, 43].',
        iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.832 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.168 18 16.5 18s-3.332.477-4.5 1.253'
      },
      {
        title: 'علم السموم والأعصاب',
        description: 'أبحاث متخصصة في التأثير المثبط للإنزيمات، وتقييم السمية العصبية للعاملين، واعتلال الأعصاب الناتج عن الفوسفور العضوي[cite: 44, 45].',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.008 12.008 0 002 15c0 4.848 3.447 8.521 7.24 9.077l.5.077c1.77.25 3.56-.27 4.96-1.57a12.002 12.002 0 007.24-9.077c.216-2.52.216-5.11 0-7.63z'
      },
      {
        title: 'الرصد البيئي وتقييم المخاطر',
        description: 'رصد متبقيات المبيدات والسموم الفطرية والمعادن الثقيلة في الغذاء والتربة، وتقييم المخاطر باستخدام تقنيات التصوير الإشعاعي[cite: 47, 48].',
        iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M9 20H4v-2a3 3 0 015-2.236M9 20v-2c0-.656-.126-1.283-.356-1.857m-4.735-3.143A8 8 0 0112 12c.706 0 1.378.163 1.996.444M12 12c-3.197 0-6.236-.884-8-2.5m16 2.5a8 8 0 00-8-8 8 8 0 00-8 8'
      },
      {
        title: 'المعالجة الحيوية والتكنولوجيا الخضراء',
        description: 'دراسات متقدمة في إزالة المبيدات باستخدام الكائنات الدقيقة والمخلفات العضوية، وتكنولوجيا الأوزون الرائدة[cite: 49, 50, 51, 55].',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      }
    ]
  },
  projects: {
    title: 'مشاريع بحثية مختارة',
    viewAll: 'عرض السجل البحثي الكامل',
    items: [
      {
        title: 'تطبيقات تكنولوجيا الأوزون',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800',
        description: 'الباحث الرئيسي لإنتاج تمور خالية من متبقيات المبيدات باستخدام تكنولوجيا الأوزون كمعاملة مبتكرة ما بعد الحصاد[cite: 112].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1007/s13197-013-1123-x'
      },
      {
        title: 'سلامة الغذاء في الزراعة المحمية',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
        description: 'قيادة مشروع بحثي لرصد متبقيات المبيدات في خضروات الصوبات الزراعية لضمان أعلى معايير الصحة العامة[cite: 103].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.foodcont.2010.11.027'
      },
      {
        title: 'المعالجة الحيوية للملوثات',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
        description: 'إدارة أبحاث المعالجة البيولوجية للأسمدة الحيوانية الملوثة بالمبيدات لحماية الموارد الطبيعية من التربة والمياه[cite: 100].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.ibiod.2008.10.004'
      },
      {
        title: 'تقييم جودة العسل الطبيعي',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
        description: 'الباحث الرئيسي لدراسة شاملة لرصد متبقيات المبيدات والمعادن الثقيلة في العسل الطبيعي بمنطقة القصيم[cite: 83].',
        demoLink: 'https://scholar.google.com.eg/citations?user=9CRT1QoAAAAJ&hl=en',
        doiLink: '10.1016/j.jfca.2010.08.033'
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
  publications: {
    title: 'أبحاث مختارة',
    items: [
      {
        title: 'تكنولوجيا الأوزون كحل أخضر',
        meta: '2025 — Journal of Food Composition',
        description: 'أحدث الأبحاث حول إزالة المتبقيات.',
        doi: '10.1016/j.jfca.2025.107975'
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
