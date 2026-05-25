/* ============================================================
   AL-ASIM — main.js
   ============================================================ */

const translations = {
  ar: {
    /* NAV */
    nav_home:       'الرئيسية',
    nav_about:      'من نحن',
    nav_vision:     'الرؤية والرسالة',
    nav_values:     'قيمنا',
    nav_contact:    'تواصل معنا',

    /* HERO */
    hero_eyebrow:   'شركة متخصصة في الاستثمار العقاري والسياحي',
    hero_title:     "شركة العاصم المحدودة",
    hero_subtitle:  "إحدى شركات المجموعة الوطنية القابضة (المحدودة)، متخصصة في التطوير والاستثمار العقاري والسياحي، وتسعى لتقديم مشاريع نوعية تجمع بين الجودة، الحداثة، والرؤية الاستثمارية المستدامة.",
    hero_btn1:      'من نحن',
    hero_btn2:      'رؤيتنا',
    hero_scroll:    'اكتشف المزيد',

    /* ABOUT PREVIEW */
    about_eyebrow:  'نبذة عنا',
    about_title:    'من نحن',
    about_text:     'تُعد شركة العاصم للاستثمارات العقارية والسياحية إحدى شركات المجموعة الوطنية القابضة، وتعمل في قطاع التطوير والاستثمار العقاري والسياحي، حيث تلتزم بتطوير مشاريع نوعية متكاملة تعيد رسم مفاهيم الحياة العصرية من خلال مجتمعات سكنية وتجارية وسياحية ترتكز على الجودة والابتكار والاستدامة.',
    about_link:     'اقرأ المزيد',
    about_badge_num: 'QHN',
    about_badge_text:'المجموعة الوطنية القابضة',

    /* VISION MISSION PREVIEW */
    vm_eyebrow:     'توجهاتنا الاستراتيجية',
    vm_title:       'الرؤية والرسالة',
    vision_title:   'رؤيتنا',
    vision_text:    'أن نكون المطور والاستثمار العقاري والسياحي الرائد في العراق والمنطقة، عبر تقديم مشاريع نوعية ترتقي بمعايير الجودة وتواكب أفضل الممارسات العالمية.',
    mission_title:  'رسالتنا',
    mission_text:   'تطوير مشاريع عقارية وسياحية متكاملة توفر قيمة مستدامة، وتدعم التنمية الحضرية، وتسهم في بناء مستقبل أكثر ازدهاراً من خلال الابتكار والتميز والجودة.',

    /* VALUES PREVIEW */
    val_eyebrow:    'ما يميزنا',
    val_title:      'قيمنا',
    val1: 'التميز', val2: 'الابتكار', val3: 'الاستدامة',
    val4: 'الموثوقية', val5: 'الجودة', val6: 'القيمة المستدامة',

    /* CTA */
    cta_eyebrow:    'تواصل معنا',
    cta_title:      'نبني مستقبلاً أكثر ازدهاراً',
    cta_desc:       'نحن هنا لنكون شريككم الموثوق في رحلة الاستثمار العقاري والسياحي.',
    cta_btn1:       'تواصل معنا',
    cta_btn2:       'اعرف أكثر',

    /* ABOUT PAGE */
    about_page_hero_title:   'من نحن',
    about_p1: 'تُعد شركة العاصم للاستثمارات العقارية والسياحية إحدى شركات المجموعة الوطنية القابضة، وتعمل في قطاع التطوير والاستثمار العقاري والسياحي، حيث تلتزم بتطوير مشاريع نوعية متكاملة تعيد رسم مفاهيم الحياة العصرية من خلال مجتمعات سكنية وتجارية وسياحية ترتكز على الجودة والابتكار والاستدامة.',
    about_p2: 'ومنذ تأسيسها، تسعى الشركة إلى تقديم مشاريع استثنائية تجمع بين الرؤية المستقبلية والتصاميم الحديثة والمعايير الهندسية المتقدمة، بما يحقق قيمة استثمارية مستدامة ويعزز جودة الحياة، انطلاقاً من إيمانها بأهمية بناء بيئات عمرانية متكاملة تلبي تطلعات الأفراد والمجتمعات.',
    about_p3: 'وانطلاقاً من رؤية استراتيجية طموحة، تواصل الشركة تطوير وجهات عقارية وسياحية رائدة تسهم في دعم التنمية الاقتصادية والعمرانية، من خلال حلول تطويرية مبتكرة وشراكات استراتيجية ونهج مؤسسي يرتكز على التميز والكفاءة والاستدامة، بما يعزز مكانتها كشريك موثوق في بناء مستقبل أكثر ازدهاراً واستدامة.',
    strategic_label:  'التوجه الاستراتيجي',
    strategic_eyebrow:'نهجنا',
    strategic_p1: 'تعمل الشركة وفق منهجية مؤسسية راسخة تجمع بين التخطيط الاستراتيجي البعيد المدى والتنفيذ الدقيق والمحترف، مما يمكّنها من تحقيق أعلى معايير الجودة وضمان رضا عملائها وشركائها.',
    strategic_p2: 'تؤمن الشركة بأن الاستثمار الحقيقي هو الذي يُحدث أثراً إيجابياً في المجتمع والبيئة، لذا تلتزم بمبادئ الاستدامة والمسؤولية المؤسسية في جميع مشاريعها وأعمالها.',

    /* VISION PAGE */
    vision_page_title:   'الرؤية والرسالة',
    vision_page_eyebrow: 'توجهاتنا',
    vision_page_title_h: 'رؤيتنا ورسالتنا',
    vision_label:   'رؤيتنا',
    vision_heading: 'الرؤية',
    vision_full:    'أن نكون المطور والاستثمار العقاري والسياحي الرائد في العراق والمنطقة، عبر تقديم مشاريع نوعية ترتقي بمعايير الجودة وتواكب أفضل الممارسات العالمية.',
    mission_label:  'رسالتنا',
    mission_heading:'الرسالة',
    mission_full:   'تطوير مشاريع عقارية وسياحية متكاملة توفر قيمة مستدامة، وتدعم التنمية الحضرية، وتسهم في بناء مستقبل أكثر ازدهاراً من خلال الابتكار والتميز والجودة.',

    /* VALUES PAGE */
    values_page_title:   'قيمنا',
    values_page_eyebrow: 'ما يميزنا',
    values_page_h:       'قيمنا الأساسية',
    v1_title: 'التميز',       v1_text: 'نسعى لتحقيق أعلى مستويات الجودة والاحترافية في جميع أعمالنا ومشاريعنا.',
    v2_title: 'الابتكار',     v2_text: 'نعتمد حلولاً حديثة وأفكاراً تطويرية تواكب التطورات العالمية وتلبي متطلبات المستقبل.',
    v3_title: 'الاستدامة',    v3_text: 'نؤمن ببناء مشاريع تحقق أثراً طويل الأمد وتسهم في دعم التنمية المستدامة.',
    v4_title: 'الموثوقية',    v4_text: 'نلتزم بالشفافية والمصداقية وبناء علاقات طويلة الأمد مع عملائنا وشركائنا.',
    v5_title: 'الجودة',       v5_text: 'نطبق أعلى المعايير الهندسية والتشغيلية لضمان تقديم مشاريع استثنائية.',
    v6_title: 'القيمة المستدامة', v6_text: 'نعمل على تطوير مشاريع نوعية تحقق قيمة استثمارية طويلة الأمد، وتسهم في دعم النمو الاقتصادي وتعزيز جودة الحياة، بما يرسخ أثراً مستداماً ويعزز مستقبل الأجيال.',

    /* CONTACT PAGE */
    contact_page_title:  'تواصل معنا',
    contact_eyebrow:     'نسعد بتواصلكم',
    contact_title:       'تواصل معنا',
    contact_desc:        'نحن هنا للإجابة على استفساراتكم ومناقشة فرص التعاون والشراكة.',
    contact_card1_title: 'الاستفسارات العامة',
    contact_card1_text:  'للاستفسارات العامة والمعلومات حول خدماتنا ومشاريعنا.',
    contact_card2_title: 'فرص الاستثمار',
    contact_card2_text:  'لمناقشة فرص الاستثمار والشراكة الاستراتيجية.',
    contact_card3_title: 'التواصل المؤسسي',
    contact_card3_text:  'للتواصل على مستوى مؤسسي وتطوير العلاقات التجارية.',
    contact_wa_label:       'واتساب',
    contact_email_label:    'البريد الإلكتروني',
    contact_location_label: 'الموقع',
    contact_location_value: "العراق - بغداد - قرب ساحة الواثق - طابق الثالث",
    form_title:          'أرسل لنا رسالة',
    form_sub:            'يسعدنا تلقي استفساراتكم وسنرد في أقرب وقت ممكن.',
    form_name:           'الاسم الكامل',
    form_email:          'البريد الإلكتروني',
    form_subject:        'موضوع الرسالة',
    form_message:        'نص الرسالة',
    form_submit:         'إرسال الرسالة',

    /* FOOTER */
    footer_contact: 'تواصل معنا',
    footer_company: 'شركة العاصم للاستثمارات العقارية والسياحية (المحدودة)',
    footer_desc:    'إحدى شركات المجموعة الوطنية القابضة (المحدودة)، متخصصة في التطوير والاستثمار العقاري والسياحي.',
    footer_links:   'روابط سريعة',
    footer_pages:   'الصفحات',
    footer_copy:    '© 2025 شركة العاصم للاستثمارات العقارية والسياحية. جميع الحقوق محفوظة.',
    footer_part:    'المجموعة الوطنية القابضة',

    /* MAP */
    map_eyebrow: 'موقعنا',
    map_title:  "زورونا في بغداد - قرب ساحة الواثق - الطابق الثالث",

    /* BREADCRUMB */
    bc_home: 'الرئيسية',
  },

  en: {
    /* NAV */
    nav_home:    'Home',
    nav_about:   'About Us',
    nav_vision:  'Vision & Mission',
    nav_values:  'Our Values',
    nav_contact: 'Contact Us',

    /* HERO */
    hero_eyebrow:  'Specialized in Real Estate & Tourism Investment',
    hero_title:    'Alasem LTD',
    hero_subtitle: 'One of Alwatania Holding Group companies, specialized in real estate and tourism development and investment, striving to deliver premium projects that combine quality, modernity, and a sustainable investment vision.',
    hero_btn1:     'About Us',
    hero_btn2:     'Our Vision',
    hero_scroll:   'Discover More',

    /* ABOUT PREVIEW */
    about_eyebrow: 'Who We Are',
    about_title:   'About Us',
    about_text:    'Al-Asim Real Estate & Tourism Investment Company is a member of the National Holding Group, operating in the real estate development and tourism investment sector, committed to developing premium integrated projects that redefine modern living through residential, commercial, and tourism communities built on quality, innovation, and sustainability.',
    about_link:    'Read More',
    about_badge_num: 'NHG',
    about_badge_text:'National Holding Group',

    /* VISION MISSION PREVIEW */
    vm_eyebrow:    'Our Strategic Direction',
    vm_title:      'Vision & Mission',
    vision_title:  'Our Vision',
    vision_text:   'To be the leading real estate and tourism developer and investor in Iraq and the region, by delivering premium projects that elevate quality standards and align with best global practices.',
    mission_title: 'Our Mission',
    mission_text:  'To develop integrated real estate and tourism projects that provide sustainable value, support urban development, and contribute to building a more prosperous future through innovation, excellence, and quality.',

    /* VALUES PREVIEW */
    val_eyebrow:   'What Sets Us Apart',
    val_title:     'Our Values',
    val1: 'Excellence', val2: 'Innovation', val3: 'Sustainability',
    val4: 'Reliability', val5: 'Quality', val6: 'Sustainable Value',

    /* CTA */
    cta_eyebrow: 'Get In Touch',
    cta_title:   'Building a More Prosperous Future',
    cta_desc:    'We are here to be your trusted partner in real estate and tourism investment.',
    cta_btn1:    'Contact Us',
    cta_btn2:    'Learn More',

    /* ABOUT PAGE */
    about_page_hero_title: 'About Us',
    about_p1: 'Al-Asim Real Estate & Tourism Investment Company is a member of the National Holding Group, operating in the real estate development and tourism investment sector, committed to developing premium integrated projects that redefine modern living through residential, commercial, and tourism communities built on quality, innovation, and sustainability.',
    about_p2: 'Since its founding, the company has sought to deliver exceptional projects that combine forward-looking vision with modern design and advanced engineering standards, achieving sustainable investment value and enhancing quality of life, driven by a belief in the importance of building integrated urban environments that meet the aspirations of individuals and communities.',
    about_p3: 'Guided by an ambitious strategic vision, the company continues to develop leading real estate and tourism destinations that support economic and urban development through innovative development solutions, strategic partnerships, and an institutional approach rooted in excellence, efficiency, and sustainability — reinforcing its position as a trusted partner in building a more prosperous and sustainable future.',
    strategic_label:   'Strategic Direction',
    strategic_eyebrow: 'Our Approach',
    strategic_p1: 'The company operates according to a solid institutional methodology that combines long-term strategic planning with precise and professional execution, enabling it to achieve the highest quality standards and ensure the satisfaction of its clients and partners.',
    strategic_p2: 'The company believes that true investment is one that creates a positive impact on society and the environment, and therefore commits to principles of sustainability and corporate responsibility across all its projects and operations.',

    /* VISION PAGE */
    vision_page_title:   'Vision & Mission',
    vision_page_eyebrow: 'Our Direction',
    vision_page_title_h: 'Our Vision & Mission',
    vision_label:   'Vision',
    vision_heading: 'Our Vision',
    vision_full:    'To be the leading real estate and tourism developer and investor in Iraq and the region, by delivering premium projects that elevate quality standards and align with best global practices.',
    mission_label:  'Mission',
    mission_heading:'Our Mission',
    mission_full:   'To develop integrated real estate and tourism projects that provide sustainable value, support urban development, and contribute to building a more prosperous future through innovation, excellence, and quality.',

    /* VALUES PAGE */
    values_page_title:   'Our Values',
    values_page_eyebrow: 'What Sets Us Apart',
    values_page_h:       'Our Core Values',
    v1_title: 'Excellence',   v1_text: 'We strive to achieve the highest levels of quality and professionalism across all our work and projects.',
    v2_title: 'Innovation',   v2_text: 'We adopt modern solutions and developmental ideas that keep pace with global advancements and meet future requirements.',
    v3_title: 'Sustainability',v3_text: 'We believe in building projects that create long-term impact and contribute to supporting sustainable development.',
    v4_title: 'Reliability',  v4_text: 'We are committed to transparency, credibility, and building long-term relationships with our clients and partners.',
    v5_title: 'Quality',      v5_text: 'We apply the highest engineering and operational standards to ensure the delivery of exceptional projects.',
    v6_title: 'Sustainable Value', v6_text: 'We develop premium projects that achieve long-term investment value, contribute to economic growth, and enhance quality of life — establishing lasting impact and advancing the future for generations.',

    /* CONTACT PAGE */
    contact_page_title:  'Contact Us',
    contact_eyebrow:     'We Welcome Your Inquiries',
    contact_title:       'Contact Us',
    contact_desc:        'We are here to answer your inquiries and discuss opportunities for cooperation and partnership.',
    contact_card1_title: 'General Inquiries',
    contact_card1_text:  'For general inquiries and information about our services and projects.',
    contact_card2_title: 'Investment Opportunities',
    contact_card2_text:  'To discuss investment opportunities and strategic partnerships.',
    contact_card3_title: 'Corporate Relations',
    contact_card3_text:  'For institutional-level communication and business relationship development.',
    contact_wa_label:       'WhatsApp',
    contact_email_label:    'Email',
    contact_location_label: 'Location',
    contact_location_value: 'Iraq – Baghdad – Near Al-Wathiq Square – Third Floor',
    form_title:   'Send Us a Message',
    form_sub:     'We welcome your inquiries and will respond at the earliest opportunity.',
    form_name:    'Full Name',
    form_email:   'Email Address',
    form_subject: 'Subject',
    form_message: 'Message',
    form_submit:  'Send Message',

    /* FOOTER */
    footer_contact: 'Contact Us',
    footer_company: 'Al-Asim Real Estate & Tourism Investment Company',
    footer_desc:    'A member of National Holding Group LTD, specialized in real estate development and tourism investment.',
    footer_links:   'Quick Links',
    footer_pages:   'Pages',
    footer_copy:    '© 2025 Al-Asim Real Estate & Tourism Investment Company. All rights reserved.',
    footer_part:    'National Holding Group',

    /* MAP */
    map_eyebrow: 'Our Location',
    map_title:   'Visit Us in Baghdad – Near Al-Wathiq Square – Third Floor',

    /* BREADCRUMB */
    bc_home: 'Home',
  }
};

/* ── State ── */
let currentLang  = localStorage.getItem('alasim_lang')  || 'ar';
let currentTheme = localStorage.getItem('alasim_theme') || 'light';

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  validateTranslations();
  applyLang(currentLang);
  applyTheme(currentTheme);
  initHeader();
  initMobileMenu();
  initReveal();
  initActiveNav();

  // Buttons
  const langBtn  = document.getElementById('langBtn');
  const themeBtn = document.getElementById('themeBtn');
  const mobileLangBtn  = document.getElementById('mobileLangBtn');
  const mobileThemeBtn = document.getElementById('mobileThemeBtn');

  if (langBtn)  langBtn.addEventListener('click',  toggleLang);
  if (themeBtn) themeBtn.addEventListener('click',  toggleTheme);
  if (mobileLangBtn)  mobileLangBtn.addEventListener('click', () => { toggleLang(); closeMenu(); });
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);
});

/* ============================================================
   LANGUAGE
   ============================================================ */
function applyLang(lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dataset.lang = lang;

  const t  = translations[lang];
  const fb = translations[lang === 'en' ? 'ar' : 'en']; // fallback to other lang

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.textContent = t[key];
    } else {
      console.warn(`[i18n] Missing ${lang.toUpperCase()} translation: "${key}"`);
      if (fb[key] !== undefined) el.textContent = fb[key];
    }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    } else {
      console.warn(`[i18n] Missing ${lang.toUpperCase()} placeholder: "${key}"`);
    }
  });

  const langBtn = document.getElementById('langBtn');
  const mobileLangBtn = document.getElementById('mobileLangBtn');
  if (langBtn) langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
  if (mobileLangBtn) mobileLangBtn.textContent = lang === 'ar' ? 'EN' : 'AR';

  document.body.style.fontFamily = lang === 'ar'
    ? "'Tajawal', sans-serif"
    : "'DM Sans', sans-serif";

  currentLang = lang;
  localStorage.setItem('alasim_lang', lang);
}

function toggleLang() {
  applyLang(currentLang === 'ar' ? 'en' : 'ar');
}

function validateTranslations() {
  const arKeys = Object.keys(translations.ar);
  const enKeys = new Set(Object.keys(translations.en));
  const missing = arKeys.filter(k => !enKeys.has(k));
  if (missing.length) {
    console.warn('[i18n] Keys in AR but missing in EN:\n' + missing.map(k => `  • ${k}`).join('\n'));
  }
}

/* ============================================================
   THEME
   ============================================================ */
const ICON_MOON = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const ICON_SUN  = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`;

function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  const themeBtn = document.getElementById('themeBtn');
  const mobileThemeBtn = document.getElementById('mobileThemeBtn');
  const svgIcon  = theme === 'dark' ? ICON_SUN  : ICON_MOON;
  const emojiIcon = theme === 'dark' ? '☀️' : '🌙';
  if (themeBtn) themeBtn.innerHTML = svgIcon;
  if (mobileThemeBtn) mobileThemeBtn.textContent = emojiIcon;
  currentTheme = theme;
  localStorage.setItem('alasim_theme', theme);
  syncHeaderLogo();
  syncAboutImage();
}

function syncAboutImage() {
  const img = document.querySelector('.about-visual-image');
  if (!img) return;
  img.src = document.body.classList.contains('dark-mode') ? 'aboutD-img.avif' : 'about-img.avif';
}

function syncHeaderLogo() {
  const logo = document.querySelector('.logo-img');
  if (!logo) return;
  const isDark = document.body.classList.contains('dark-mode');
  if (isDark) {
    logo.src = 'logo.png';
  } else {
    const p = window.location.pathname;
    const isIndex = p === '/' || p.endsWith('/index.html') || p.endsWith('\\index.html');
    logo.src = (isIndex && window.scrollY <= 40) ? 'logo.png' : 'logoD.png';
  }
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

/* ============================================================
   HEADER
   ============================================================ */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const p = window.location.pathname;
  const isIndex = p === '/' || p.endsWith('/index.html') || p.endsWith('\\index.html');
  if (isIndex && window.scrollY <= 40) {
    header.classList.remove('scrolled');
  }
  function onScroll() {
    header.classList.toggle('scrolled', isIndex ? window.scrollY > 40 : window.scrollY >= 0);
    syncHeaderLogo();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

function closeMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger)  hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   ACTIVE NAV
   ============================================================ */
function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') ||
        (page === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initReveal() {
  // Auto-tag elements that should animate but don't have .reveal yet
  [
    '.inner-hero-content',
    '.footer-grid > div',
  ].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });
  });

  // Stagger footer columns automatically
  document.querySelectorAll('.footer-grid > div').forEach((col, i) => {
    if (!col.style.transitionDelay) col.style.transitionDelay = `${i * 0.1}s`;
  });

  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
}
