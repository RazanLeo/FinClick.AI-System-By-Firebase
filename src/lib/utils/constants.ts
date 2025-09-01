// Sector Activities Mapping
export const SECTOR_ACTIVITIES: { [key: string]: string[] } = {
  energy: [
    'النفط والغاز - الاستكشاف',
    'النفط والغاز - الإنتاج',
    'النفط والغاز - التكرير',
    'النفط والغاز - التوزيع',
    'خدمات حقول النفط',
    'الطاقة الشمسية',
    'طاقة الرياح',
    'الطاقة المائية',
    'الطاقة الحرارية الأرضية',
    'الطاقة النووية',
    'إنتاج الهيدروجين الأخضر',
    'إنتاج الهيدروجين الأزرق',
    'الفحم والوقود الصلب',
    'الطاقة الحيوية والوقود الحيوي',
    'توزيع وتجارة الطاقة'
  ],
  materials: [
    'البتروكيماويات',
    'الكيماويات الصناعية',
    'المواد اللاصقة',
    'الطلاءات والدهانات',
    'المحفزات الكيميائية',
    'البلاستيك والبوليمرات',
    'المطاط والمواد المركبة',
    'الأسمدة والكيماويات الزراعية',
    'الغازات الصناعية',
    'المواد النانوية والمتقدمة'
  ],
  mining: [
    'الذهب والمعادن الثمينة',
    'الفضة والبلاتين',
    'النحاس',
    'الألومنيوم',
    'الزنك والرصاص',
    'الحديد والصلب',
    'المعادن النادرة والاستراتيجية',
    'الإسمنت',
    'الجبس',
    'الرخام والجرانيت',
    'الملح والمعادن الصناعية',
    'الأحجار الكريمة'
  ],
  manufacturing: [
    'صناعة السيارات',
    'صناعة الشاحنات والحافلات',
    'قطع غيار السيارات',
    'الآلات الصناعية',
    'المعدات الثقيلة',
    'الأجهزة الإلكترونية',
    'أشباه الموصلات',
    'الدوائر الكهربائية',
    'المولدات والمحولات الكهربائية',
    'الكابلات الكهربائية',
    'صناعة الطائرات',
    'بناء السفن',
    'صناعة القطارات',
    'الأثاث والديكور',
    'النسيج والملابس',
    'الجلود والأحذية',
    'الورق والطباعة',
    'التغليف',
    'الزجاج والسيراميك',
    'الأخشاب ومنتجات الغابات'
  ],
  food: [
    'تصنيع اللحوم',
    'منتجات الألبان',
    'المخبوزات',
    'الحلويات والشوكولاتة',
    'المشروبات الغازية',
    'العصائر',
    'المياه المعبأة',
    'الأغذية المجمدة',
    'الأغذية المحفوظة',
    'المكملات الغذائية',
    'الأغذية الصحية',
    'صناعة التبغ',
    'التموين والخدمات الغذائية'
  ],
  agriculture: [
    'زراعة الحبوب',
    'زراعة الخضروات',
    'زراعة الفواكه',
    'الزراعة المحمية',
    'الزراعة العمودية',
    'تربية الماشية',
    'تربية الدواجن',
    'تربية الأحياء المائية',
    'النحل وإنتاج العسل',
    'الغابات والحراجة',
    'البذور والشتلات',
    'الزراعة العضوية'
  ],
  fishing: [
    'الصيد التجاري',
    'الاستزراع السمكي',
    'معالجة وتصدير الأسماك',
    'صناعة الأعلاف السمكية'
  ],
  financial: [
    'البنوك التجارية',
    'البنوك الإسلامية',
    'بنوك الاستثمار',
    'تأمين الحياة',
    'التأمين العام',
    'التأمين الصحي',
    'إعادة التأمين',
    'شركات التمويل والتأجير',
    'صناديق الاستثمار',
    'إدارة الأصول',
    'الوساطة المالية',
    'البورصات وأسواق المال',
    'التكنولوجيا المالية',
    'العملات الرقمية والمشفرة',
    'خدمات الدفع الإلكتروني',
    'التمويل الجماعي',
    'التمويل الأصغر'
  ],
  realEstate: [
    'التطوير العقاري السكني',
    'التطوير العقاري التجاري',
    'التطوير العقاري الصناعي',
    'إدارة الممتلكات',
    'الوساطة العقارية',
    'صناديق الاستثمار العقاري',
    'المقاولات والبناء',
    'البنية التحتية',
    'الهندسة المدنية',
    'التصميم المعماري',
    'التصميم الداخلي',
    'مواد البناء والتشييد'
  ],
  retail: [
    'متاجر التجزئة الكبرى',
    'السلاسل التجارية المتخصصة',
    'التجارة الإلكترونية',
    'الأسواق والمراكز التجارية',
    'تجارة الجملة',
    'التوزيع',
    'التجارة الدولية',
    'الاستيراد والتصدير',
    'المتاجر الصغيرة والمحلية'
  ],
  transport: [
    'شركات الطيران',
    'المطارات',
    'الخدمات الأرضية',
    'الشحن البحري',
    'الموانئ',
    'الخدمات البحرية',
    'الشحن بالشاحنات',
    'النقل العام',
    'سيارات الأجرة',
    'القطارات',
    'مترو الأنفاق',
    'التخزين',
    'سلاسل الإمداد',
    'البريد والشحن السريع',
    'خدمات التوصيل الأخير'
  ],
  telecom: [
    'الهاتف الثابت',
    'الهاتف المحمول',
    'خدمات الإنترنت',
    'أبراج الاتصالات',
    'الكابلات البحرية',
    'الأقمار الصناعية',
    'تطوير البرمجيات',
    'خدمات السحابة',
    'مراكز البيانات',
    'الأمن السيبراني',
    'إنترنت الأشياء',
    'البلوك تشين',
    'الواقع الافتراضي والمعزز',
    'تحليل البيانات الضخمة'
  ],
  ai: [
    'معالجة اللغات الطبيعية',
    'رؤية الحاسوب',
    'الذكاء الاصطناعي التوليدي',
    'التعلم الآلي والتعلم العميق',
    'الذكاء الاصطناعي للمحادثة',
    'أنظمة التوصية الذكية',
    'الذكاء الاصطناعي التنبؤي',
    'أتمتة العمليات الروبوتية',
    'الذكاء الاصطناعي الطبي',
    'الذكاء الاصطناعي المالي',
    'الذكاء الاصطناعي الصناعي',
    'الذكاء الاصطناعي للأمن السيبراني',
    'منصات تطوير الذكاء الاصطناعي',
    'البنية التحتية للذكاء الاصطناعي',
    'رقائق ومعالجات الذكاء الاصطناعي'
  ],
  healthcare: [
    'المستشفيات',
    'المراكز الطبية',
    'العيادات التخصصية',
    'صناعة الأدوية',
    'التكنولوجيا الحيوية',
    'الأجهزة والمعدات الطبية',
    'المختبرات والتحاليل الطبية',
    'خدمات الرعاية المنزلية',
    'الطب عن بعد',
    'السياحة العلاجية',
    'الصحة النفسية',
    'طب الأسنان',
    'البصريات'
  ],
  education: [
    'رياض الأطفال',
    'المدارس الابتدائية',
    'المدارس المتوسطة والثانوية',
    'الجامعات',
    'الكليات التقنية',
    'التعليم المهني',
    'التدريب المؤسسي',
    'التعليم الإلكتروني',
    'مراكز اللغات',
    'التعليم الخاص',
    'المكتبات ومراكز المعلومات'
  ],
  tourism: [
    'الفنادق',
    'المنتجعات',
    'المطاعم',
    'المقاهي',
    'وكالات السفر والسياحة',
    'النقل السياحي',
    'المعالم السياحية',
    'المتنزهات',
    'السياحة البيئية',
    'سياحة المغامرات',
    'تنظيم الفعاليات والمؤتمرات',
    'السياحة الدينية'
  ],
  media: [
    'التلفزيون',
    'الإذاعة',
    'الصحافة والنشر',
    'إنتاج الأفلام',
    'إنتاج المسلسلات',
    'الموسيقى والتسجيلات',
    'الألعاب الإلكترونية',
    'الرياضة والنوادي الرياضية',
    'المسارح والفنون',
    'مدن الملاهي',
    'المنصات الرقمية',
    'البث المباشر'
  ],
  professional: [
    'المحاماة والخدمات القانونية',
    'المحاسبة والتدقيق',
    'الاستشارات الإدارية',
    'الاستشارات الهندسية',
    'أبحاث السوق',
    'التسويق',
    'العلاقات العامة',
    'الترجمة والخدمات اللغوية',
    'التوظيف والموارد البشرية'
  ],
  personal: [
    'صالونات التجميل',
    'الحلاقة',
    'النوادي الصحية',
    'اللياقة البدنية',
    'المنتجعات الصحية',
    'التنظيف والصيانة المنزلية',
    'رعاية الأطفال',
    'رعاية المسنين',
    'خدمات الحيوانات الأليفة',
    'خدمات الأفراح والمناسبات',
    'الغسيل والكي'
  ],
  defense: [
    'الصناعات العسكرية',
    'الأمن والحراسة',
    'الأمن السيبراني العسكري',
    'تقنيات المراقبة',
    'التدريب العسكري',
    'الخدمات اللوجستية العسكرية'
  ],
  space: [
    'إطلاق الأقمار الصناعية',
    'خدمات الاتصالات الفضائية',
    'الاستكشاف الفضائي',
    'السياحة الفضائية'
  ],
  environment: [
    'إدارة النفايات',
    'إعادة التدوير',
    'معالجة المياه',
    'معالجة الصرف الصحي',
    'الطاقة النظيفة',
    'الاستشارات البيئية',
    'تقنيات تنقية الهواء',
    'الزراعة المستدامة'
  ],
  robotics: [
    'الروبوتات الصناعية',
    'الروبوتات الخدمية',
    'الطائرات بدون طيار',
    'المركبات ذاتية القيادة',
    'أنظمة التحكم الآلي'
  ],
  government: [
    'الإدارات الحكومية',
    'المؤسسات العامة',
    'الخدمات البلدية',
    'المرافق العامة',
    'الجمارك والضرائب'
  ],
  nonprofit: [
    'الجمعيات الخيرية',
    'المؤسسات الوقفية',
    'منظمات الإغاثة',
    'منظمات حقوق الإنسان',
    'المنظمات البيئية',
    'المؤسسات الثقافية والفنية',
    'الخدمات الدينية'
  ],
  creative: [
    'التصميم الجرافيكي',
    'الفنون والحرف اليدوية',
    'الموضة والأزياء',
    'التصوير الفوتوغرافي',
    'صناعة المحتوى الرقمي',
    'الابتكار والملكية الفكرية'
  ],
  emerging: [
    'التكنولوجيا الكمية',
    'الطب الجيني',
    'العلاج الجيني',
    'الزراعة الخلوية',
    'اللحوم المصنعة',
    'تقنيات تمديد العمر',
    'الواقع الممتد',
    'الحوسبة العصبية',
    'تقنيات النانو'
  ]
};

export function getSectorActivities(sector: string): string[] {
  return SECTOR_ACTIVITIES[sector] || [];
}

// Analysis Templates
export const ANALYSIS_TEMPLATES = {
  executiveSummary: {
    ar: {
      title: 'الملخص التنفيذي',
      sections: [
        'معلومات الشركة',
        'ملخص النتائج',
        'تحليل SWOT',
        'المخاطر الرئيسية',
        'التنبؤات',
        'التوصيات الاستراتيجية'
      ]
    },
    en: {
      title: 'Executive Summary',
      sections: [
        'Company Information',
        'Results Summary',
        'SWOT Analysis',
        'Key Risks',
        'Forecasts',
        'Strategic Recommendations'
      ]
    }
  }
};

// Rating Colors and Labels
export const RATING_CONFIG = {
  excellent: {
    label: { ar: 'ممتاز', en: 'Excellent' },
    color: '#2E7D32',
    bgColor: 'rgba(46, 125, 50, 0.1)',
    icon: '⭐⭐⭐⭐⭐'
  },
  veryGood: {
    label: { ar: 'جيد جداً', en: 'Very Good' },
    color: '#0288D1',
    bgColor: 'rgba(2, 136, 209, 0.1)',
    icon: '⭐⭐⭐⭐'
  },
  good: {
    label: { ar: 'جيد', en: 'Good' },
    color: '#ED6C02',
    bgColor: 'rgba(237, 108, 2, 0.1)',
    icon: '⭐⭐⭐'
  },
  acceptable: {
    label: { ar: 'مقبول', en: 'Acceptable' },
    color: '#F57C00',
    bgColor: 'rgba(245, 124, 0, 0.1)',
    icon: '⭐⭐'
  },
  weak: {
    label: { ar: 'ضعيف', en: 'Weak' },
    color: '#D32F2F',
    bgColor: 'rgba(211, 47, 47, 0.1)',
    icon: '⭐'
  }
};

// Industry Average Sources
export const INDUSTRY_DATA_SOURCES = [
  {
    name: 'Financial Modeling Prep',
    key: 'FMP',
    endpoint: 'https://financialmodelingprep.com/api/v3/',
    rateLimits: { perMinute: 300, perDay: 250 }
  },
  {
    name: 'Yahoo Finance',
    key: 'YAHOO',
    endpoint: 'https://query1.finance.yahoo.com/v7/finance/',
    rateLimits: { perMinute: 100, perDay: 10000 }
  },
  {
    name: 'Alpha Vantage',
    key: 'ALPHA_VANTAGE',
    endpoint: 'https://www.alphavantage.co/query',
    rateLimits: { perMinute: 5, perDay: 500 }
  }
];

// File Upload Configurations
export const FILE_UPLOAD_CONFIG = {
  maxFiles: 10,
  maxSizePerFile: 50 * 1024 * 1024, // 50MB
  acceptedFormats: {
    pdf: ['.pdf'],
    excel: ['.xls', '.xlsx', '.xlsm', '.xlsb'],
    word: ['.doc', '.docx'],
    images: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
    csv: ['.csv']
  },
  mimeTypes: {
    'application/pdf': true,
    'application/vnd.ms-excel': true,
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': true,
    'application/msword': true,
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': true,
    'image/jpeg': true,
    'image/png': true,
    'image/gif': true,
    'image/bmp': true,
    'image/webp': true,
    'text/csv': true
  }
};

// Analysis Categories Configuration
export const ANALYSIS_CATEGORIES = {
  structural: {
    ar: 'التحليل الهيكلي للقوائم المالية',
    en: 'Financial Statement Structural Analysis',
    count: 15,
    icon: '📊'
  },
  ratios: {
    ar: 'النسب المالية الأساسية',
    en: 'Basic Financial Ratios',
    count: 30,
    icon: '📈'
  },
  flow: {
    ar: 'تحليلات التدفق والحركة',
    en: 'Flow and Movement Analysis',
    count: 10,
    icon: '💧'
  },
  comparative: {
    ar: 'تحليلات المقارنة المتقدمة',
    en: 'Advanced Comparative Analysis',
    count: 10,
    icon: '⚖️'
  },
  valuation: {
    ar: 'تحليلات التقييم والاستثمار',
    en: 'Valuation and Investment Analysis',
    count: 16,
    icon: '💰'
  },
  performance: {
    ar: 'تحليلات الأداء والكفاءة',
    en: 'Performance and Efficiency Analysis',
    count: 12,
    icon: '🎯'
  },
  modeling: {
    ar: 'النمذجة والمحاكاة',
    en: 'Modeling and Simulation',
    count: 15,
    icon: '🔮'
  },
  statistical: {
    ar: 'التحليل الإحصائي والكمي',
    en: 'Statistical and Quantitative Analysis',
    count: 20,
    icon: '📉'
  },
  portfolio: {
    ar: 'تحليل المحافظ والمخاطر',
    en: 'Portfolio and Risk Analysis',
    count: 35,
    icon: '🛡️'
  },
  detection: {
    ar: 'الكشف والتنبؤ الذكي',
    en: 'Intelligent Detection and Prediction',
    count: 18,
    icon: '🤖'
  }
};

// Chart Types Configuration
export const CHART_TYPES = {
  line: {
    label: { ar: 'خطي', en: 'Line' },
    icon: '📈'
  },
  bar: {
    label: { ar: 'أعمدة', en: 'Bar' },
    icon: '📊'
  },
  pie: {
    label: { ar: 'دائري', en: 'Pie' },
    icon: '🥧'
  },
  radar: {
    label: { ar: 'شبكي', en: 'Radar' },
    icon: '🕸️'
  },
  scatter: {
    label: { ar: 'مبعثر', en: 'Scatter' },
    icon: '🔵'
  },
  area: {
    label: { ar: 'مساحي', en: 'Area' },
    icon: '📐'
  },
  waterfall: {
    label: { ar: 'شلال', en: 'Waterfall' },
    icon: '🌊'
  },
  heatmap: {
    label: { ar: 'خريطة حرارية', en: 'Heatmap' },
    icon: '🔥'
  },
  gauge: {
    label: { ar: 'مقياس', en: 'Gauge' },
    icon: '⚡'
  },
  sankey: {
    label: { ar: 'سانكي', en: 'Sankey' },
    icon: '🌐'
  }
};

// Report Export Formats
export const EXPORT_FORMATS = {
  pdf: {
    label: { ar: 'PDF', en: 'PDF' },
    icon: '📄',
    mimeType: 'application/pdf'
  },
  word: {
    label: { ar: 'Word', en: 'Word' },
    icon: '📝',
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  },
  excel: {
    label: { ar: 'Excel', en: 'Excel' },
    icon: '📊',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  },
  powerpoint: {
    label: { ar: 'PowerPoint', en: 'PowerPoint' },
    icon: '🎯',
    mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  }
};

// API Endpoints
export const API_ENDPOINTS = {
  analyze: '/api/analyze',
  upload: '/api/upload',
  ai: '/api/ai',
  export: '/api/export',
  benchmark: '/api/benchmark',
  report: '/api/report'
};

// Analysis Status
export const ANALYSIS_STATUS = {
  pending: {
    label: { ar: 'قيد الانتظار', en: 'Pending' },
    color: '#757575',
    icon: '⏳'
  },
  processing: {
    label: { ar: 'جاري التحليل', en: 'Processing' },
    color: '#1976D2',
    icon: '⚙️'
  },
  completed: {
    label: { ar: 'مكتمل', en: 'Completed' },
    color: '#388E3C',
    icon: '✅'
  },
  failed: {
    label: { ar: 'فشل', en: 'Failed' },
    color: '#D32F2F',
    icon: '❌'
  }
};

// Comparison Levels
export const COMPARISON_LEVELS = {
  local: {
    label: { ar: 'محلي (السعودية)', en: 'Local (Saudi Arabia)' },
    code: 'SA',
    icon: '🇸🇦'
  },
  gcc: {
    label: { ar: 'دول الخليج', en: 'GCC Countries' },
    countries: ['SA', 'AE', 'KW', 'QA', 'BH', 'OM'],
    icon: '🌍'
  },
  arab: {
    label: { ar: 'الدول العربية', en: 'Arab Countries' },
    icon: '🌍'
  },
  asia: {
    label: { ar: 'آسيا', en: 'Asia' },
    icon: '🌏'
  },
  africa: {
    label: { ar: 'أفريقيا', en: 'Africa' },
    icon: '🌍'
  },
  europe: {
    label: { ar: 'أوروبا', en: 'Europe' },
    icon: '🌍'
  },
  northAmerica: {
    label: { ar: 'أمريكا الشمالية', en: 'North America' },
    icon: '🌎'
  },
  southAmerica: {
    label: { ar: 'أمريكا الجنوبية', en: 'South America' },
    icon: '🌎'
  },
  australia: {
    label: { ar: 'أستراليا وأوقيانوسيا', en: 'Australia & Oceania' },
    icon: '🌏'
  },
  global: {
    label: { ar: 'عالمي', en: 'Global' },
    icon: '🌐'
  }
};
