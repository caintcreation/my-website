/**
 * Caint Creation - Verified Projects Database
 * Audited directly from https://github.com/caintcreation/
 */
const PORTFOLIO_PROJECTS = [
  {
    id: "reviewpulse-ai",
    title: "ReviewPulse AI",
    tagline: "Autonomous Customer-Review Intelligence & AI Response Management Platform",
    category: "fullstack",
    categoryLabel: "Full-Stack & AI",
    status: "Production Ready",
    statusClass: "badge-success",
    featured: true,
    image: "assets/projects/reviewpulse-ai.png",
    gallery: [
      "assets/projects/reviewpulse-ai.png",
      "assets/projects/reviewpulse-ai-2.png",
      "assets/projects/reviewpulse-ai-3.png"
    ],
    overview: "ReviewPulse AI is an enterprise-grade customer review intelligence system designed for modern e-commerce teams. It ingests customer feedback across public APIs and dashboard inputs, performs automated sentiment classification, generates concise summaries, and drafts contextual AI responses with a human-in-the-loop review approval workflow.",
    problem: "E-commerce and service businesses receive hundreds of reviews daily across multiple channels. Manually analyzing feedback sentiment and crafting empathetic, brand-aligned replies is slow, inconsistent, and resource-intensive.",
    solution: "Built a full-stack Laravel application powered by modern REST APIs, SQLite/MySQL persistence, Vite-bundled frontends, and intelligent prompt pipelines that categorize sentiment into positive, neutral, or negative and generate instant, customizable reply drafts ready for one-click operator approval.",
    features: [
      "Automated sentiment classification & customer feedback scoring",
      "Context-aware AI response generation with tone customization",
      "Human-in-the-loop operator approval before publishing",
      "Public REST API for automated ingestion from third-party storefronts",
      "Interactive sentiment trends & analytics dashboard"
    ],
    technologies: ["Laravel (PHP 8.2+)", "Blade", "SQLite / MySQL", "Vite", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/caintcreation/reviewpulse-ai",
    liveUrl: null,
    embeddable: false,
    previewType: "modal"
  },
  {
    id: "quickcart",
    title: "QuickCart Studio",
    tagline: "Multi-Tenant E-Commerce & Automated WhatsApp Shopping Platform",
    category: "fintech",
    categoryLabel: "Fintech & E-Commerce",
    status: "Full-Stack Platform",
    statusClass: "badge-primary",
    featured: true,
    image: "assets/projects/quickcart.png",
    gallery: [
      "assets/projects/quickcart.png",
      "assets/projects/quickcart-2.png",
      "assets/projects/quickcart-3.png"
    ],
    overview: "QuickCart Studio is an elegant, full-stack multi-tenant e-commerce platform built for Kenyan small businesses, fashion boutiques, shoe retailers, cosmetics brands, and social media merchants selling on Instagram, TikTok, and WhatsApp. It allows business owners to launch a branded online catalogue and receive structured WhatsApp orders instantly with zero transaction commissions.",
    problem: "Most small retailers in emerging markets struggle with complex, expensive e-commerce setups that charge high commissions and confuse customers accustomed to conversational buying on WhatsApp.",
    solution: "Engineered a lightweight, multi-tenant PHP and MySQL architecture with isolated tenant catalogs, dynamic product routing, real-time inventory management, and an automated 1-click WhatsApp order generator that formats cart contents, sizes, customer delivery info, and pricing into a direct WhatsApp message.",
    features: [
      "Multi-tenant architecture supporting isolated merchant storefronts",
      "One-click WhatsApp order generation with pre-filled line items",
      "Real-time product catalog & stock inventory tracker",
      "Mobile-first responsive shopping cart with zero checkout friction",
      "Administrative dashboard for product and category management"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "WhatsApp API"],
    githubUrl: "https://github.com/caintcreation/quick_cart",
    liveUrl: null,
    embeddable: false,
    previewType: "modal"
  },
  {
    id: "kazilinks",
    title: "KaziLink Platform",
    tagline: "Online Tasks & Micro-Job Marketplace with Automated M-Pesa Disbursals",
    category: "fintech",
    categoryLabel: "Fintech & E-Commerce",
    status: "Live Deployed",
    statusClass: "badge-live",
    featured: true,
    image: "assets/projects/kazilinks.png",
    gallery: [
      "assets/projects/kazilinks.png",
      "assets/projects/kazilinks-2.png",
      "assets/projects/kazilinks-3.png"
    ],
    overview: "KaziLink is a Kenyan digital online-jobs and task platform where users complete short digital assignments, survey validations, and level-based milestones, earn reward credits, manage referral networks, and request automated M-Pesa mobile money withdrawals.",
    problem: "Digital freelancers and students in Kenya face high barrier-to-entry payout systems with international currencies and delayed processing times.",
    solution: "Developed a secure web platform combining user authentication, email verification, milestone progression logic, multi-tier referral tracking, and a transactional wallet ledger integrated with PayHero's M-Pesa STK Push and B2C disbursement gateway.",
    features: [
      "User authentication, role security, email verification, and recovery",
      "Tiered milestone tasks with automated reward crediting",
      "Real-time wallet ledger tracking earnings, referrals, and withdrawals",
      "Automated Kenyan M-Pesa payment gateway integration via PayHero",
      "Administrative backoffice for task approval, user moderation, and audit logs"
    ],
    technologies: ["PHP", "MySQL", "PayHero M-Pesa API", "JavaScript", "Responsive CSS", "REST Webhooks"],
    githubUrl: "https://github.com/caintcreation/kazi-links",
    liveUrl: "https://kazilinks.kesug.com/",
    embeddable: false,
    previewType: "live"
  },
  {
    id: "stainless-laundry",
    title: "Stainless Laundry Services",
    tagline: "Commercial Laundry Operations, Dynamic Pricing & Live Order Tracking System",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    status: "Live Client Platform",
    statusClass: "badge-live",
    featured: true,
    image: "assets/projects/stainless-laundry.png",
    gallery: [
      "assets/projects/stainless-laundry.png",
      "assets/projects/stainless-laundry-2.png",
      "assets/projects/stainless-laundry-3.png"
    ],
    overview: "Stainless Laundry Services is a full-featured commercial web application engineered for a local dry cleaning and laundry enterprise in Ndagani, Chuka, Kenya. The system features an interactive price estimation matrix, customer self-service order tracking, and an administrative order dispatch console.",
    problem: "Local laundry businesses rely on paper receipts, leading to lost ticket numbers, manual pricing confusion, and repetitive phone calls from customers checking laundry readiness.",
    solution: "Created an online customer and operations portal with live order tracking (track-order.php), an instant weight-based price calculator for different garments (wash, dry, fold, steam press), and an admin backoffice that updates ticket statuses in real time.",
    features: [
      "Live order status tracker using unique ticket ID lookups",
      "Interactive multi-category pricing calculator (clothes, duvets, suits)",
      "Customer account portal with booking history and receipts",
      "Direct WhatsApp hotline integration for quick rider dispatch",
      "Admin order management console with status dispatchers"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/caintcreation/stainless_laundry",
    liveUrl: "https://stainlesslaundry.wuaze.com/",
    embeddable: false,
    previewType: "live"
  },
  {
    id: "weather-automation",
    title: "Weather Data Automation Pipeline",
    tagline: "Serverless Environmental Data Ingestion & JSON Transformation Pipeline",
    category: "automation",
    categoryLabel: "Workflow Automation",
    status: "Completed Workflow",
    statusClass: "badge-success",
    featured: true,
    image: "assets/projects/n8n-weather-workflow.png",
    gallery: [
      "assets/projects/n8n-weather-workflow.png"
    ],
    overview: "An automated data engineering pipeline built using the self-hosted n8n workflow automation platform. The workflow connects to third-party meteorological REST APIs, fetches real-time environmental data, parses nested JSON payloads, applies filtering logic, and feeds clean metrics into downstream endpoints without manual intervention.",
    problem: "Organizations needing live environmental updates often resort to manual polling or complex custom server scripts that require continuous maintenance, patching, and monitoring.",
    solution: "Constructed an automated visual pipeline in n8n leveraging cron scheduling, HTTP request nodes, JavaScript JSON data transformation nodes, error-catch branching, and formatted webhook dispatching.",
    features: [
      "Automated scheduled cron triggers for recurring data ingestion",
      "RESTful API integration with secure header token authentication",
      "Dynamic data transformation & nested JSON payload flattening",
      "Automated alert routing and webhook notification hooks",
      "Zero-maintenance, self-healing workflow structure"
    ],
    technologies: ["n8n Workflow Automation", "REST APIs", "JSON Data Transformation", "Webhooks", "JavaScript"],
    githubUrl: "https://github.com/caintcreation/weather-automation-workflow",
    liveUrl: null,
    embeddable: false,
    previewType: "modal"
  },
  {
    id: "linah-school",
    title: "Linah Academy Early Childhood Center",
    tagline: "Modern Institutional Web Portal & Admissions Information System",
    category: "frontend",
    categoryLabel: "Frontend & Portals",
    status: "Live Deployed",
    statusClass: "badge-live",
    featured: true,
    image: "assets/projects/linah-preview.png",
    gallery: [
      "assets/projects/linah-preview.png",
      "assets/projects/linah-gallery1.png",
      "assets/projects/linah-live.png"
    ],
    overview: "A clean, fully responsive institutional website and admissions portal created for Linah Academy, an early childhood education institution. The platform showcases academic programs, institutional values, photo galleries, fee structures, and streamlined parent inquiry channels.",
    problem: "The institution lacked an accessible online identity, resulting in prospective parents having to visit the school physically just to obtain curriculum details, facility pictures, and admissions forms.",
    solution: "Designed and coded an elegant, fast-loading, mobile-friendly landing page and institutional portal built with pure semantic HTML5, CSS3, and vanilla JavaScript, ensuring instant load times even on slow 3G mobile connections.",
    features: [
      "Mobile-first responsive navigation with accessible touch menus",
      "Interactive curriculum and extracurricular program breakdowns",
      "Optimized campus photo gallery and video presentation",
      "Clear admissions guidelines and direct inquiry contact form",
      "Ultra-fast loading times with zero heavy frontend dependencies"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Media Optimization"],
    githubUrl: "https://github.com/caintcreation/linahschool",
    liveUrl: "https://caintcreation.github.io/linahschool/",
    embeddable: true,
    previewType: "live"
  },
  {
    id: "payhero-ui",
    title: "PayHero Checkout Gateway Interface",
    tagline: "Kenyan M-Pesa STK Push Payment Gateway Integration UI",
    category: "fintech",
    categoryLabel: "Fintech & E-Commerce",
    status: "Live Demo",
    statusClass: "badge-live",
    featured: false,
    image: "assets/projects/payhero-demo.png",
    gallery: [
      "assets/projects/payhero-demo.png",
      "assets/projects/payhero-demo.svg"
    ],
    overview: "A clean, mobile-first payment checkout interface prototype crafted specifically for Kenyan e-commerce stores and SaaS applications integrating PayHero's M-Pesa STK Push API.",
    problem: "Many checkout flows in Kenya are clumsy, requesting unnecessary fields that cause customer drop-offs during payment processing.",
    solution: "Built a distraction-free checkout experience that validates Safaricom phone numbers, initiates the STK push, and provides clear visual loading states while awaiting user PIN entry.",
    features: [
      "Safaricom M-Pesa phone number validation & formatting",
      "Live order summary and breakdown calculation",
      "Interactive feedback indicators during transaction polling",
      "Vercel cloud deployment with instant accessibility"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "PayHero API", "Vercel"],
    githubUrl: "https://github.com/caintcreation/Payhero",
    liveUrl: "https://payhero-lake.vercel.app",
    embeddable: true,
    previewType: "live"
  },
  {
    id: "school-management",
    title: "Enterprise School Management System",
    tagline: "Desktop Management Application for Institutional Administration",
    category: "desktop",
    categoryLabel: "Desktop & Systems",
    status: "Enterprise Prototype",
    statusClass: "badge-primary",
    featured: false,
    image: "assets/projects/school-system.png",
    gallery: [
      "assets/projects/school-system.png",
      "assets/projects/school-system.svg"
    ],
    overview: "A comprehensive School Management System developed using Java and Maven in IntelliJ IDEA. The software automates core educational operations including student records, teacher allocations, course registration, timetable scheduling, attendance tracking, and academic reporting.",
    problem: "Educational institutions struggle with fragmented spreadsheets for student records, attendance, and exam marks, creating data inconsistency and high administrative overhead.",
    solution: "Architected an Object-Oriented Java desktop system with relational database persistence (JDBC), domain encapsulation, and modular controllers for students, faculty, and examinations.",
    features: [
      "Complete student information lifecycle management",
      "Teacher subject assignments & department tracking",
      "Course catalog, semester credits, and timetable organization",
      "Daily and session-based student attendance records",
      "Consolidated grade card calculation and exportable reporting"
    ],
    technologies: ["Java (JDK)", "Maven", "IntelliJ IDEA", "OOP Architecture", "JDBC / Relational DB"],
    githubUrl: "https://github.com/caintcreation/school-management-system",
    liveUrl: null,
    embeddable: false,
    previewType: "modal"
  },
  {
    id: "gig-marketplace",
    title: "CAINT Earn Hub / Task Directory",
    tagline: "Directory & Application Platform for Verified Digital Tasks",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    status: "Production Codebase",
    statusClass: "badge-primary",
    featured: false,
    image: "assets/projects/gig-marketplace.png",
    gallery: [
      "assets/projects/gig-marketplace.png",
      "assets/projects/gig-marketplace.svg"
    ],
    overview: "A curated digital task directory and application platform designed for Kenyan online workers, freelancers, and students. Features verified gig opportunities, application tracking, administrative task publishing, and user workflow guidance.",
    problem: "Kenyan digital workers often encounter scam earning platforms or spend hours searching for legitimate online work channels.",
    solution: "Engineered a centralized PHP/MySQL platform providing hand-tested task listings, platform status verifications, step-by-step application guidance, and administrative verification dashboards.",
    features: [
      "Verified digital task repository categorized by skill requirements",
      "User application and status tracking pipeline",
      "Admin portal for task creation, update, and platform monitoring",
      "Dedicated user support channel integration via WhatsApp and Email"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Admin Dashboard"],
    githubUrl: "https://github.com/caintcreation/Gig_makrtplace_webapplication",
    liveUrl: null,
    embeddable: false,
    previewType: "modal"
  },
  {
    id: "coffee-website",
    title: "Aroma Roast Café & Restaurant",
    tagline: "Artisan Coffee Shop & Dining Interactive Web Experience",
    category: "frontend",
    categoryLabel: "Frontend & Portals",
    status: "Completed Project",
    statusClass: "badge-success",
    featured: false,
    image: "assets/projects/coffee-hero.png",
    gallery: [
      "assets/projects/coffee-hero.png",
      "assets/projects/coffee-shop.svg"
    ],
    overview: "A responsive café and dining website built with HTML, CSS, and modern JavaScript. The site showcases the artisan coffee roast collection, seasonal menus, customer testimonials, photo galleries, and reservation inquiry forms.",
    problem: "Local cafés frequently lose catering and table reservation inquiries due to lack of an engaging, responsive digital presence.",
    solution: "Crafted a visually appetizing, high-performance web interface featuring touch-enabled Swiper carousels, responsive image galleries, and smooth navigation.",
    features: [
      "Interactive coffee roast and pastry menu showcase",
      "Dynamic testimonial carousel powered by Swiper.js",
      "Mobile slide-out drawer navigation with smooth transitions",
      "Table reservation and event inquiry contact channels"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Swiper.js", "Responsive Layouts"],
    githubUrl: "https://github.com/caintcreation/coffee-website",
    liveUrl: null,
    embeddable: false,
    previewType: "modal"
  },
  {
    id: "paperwebsite",
    title: "EduPapers – Academic Revision Portal",
    tagline: "University Past Papers, Notes & Revision Material Repository",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    status: "Completed Platform",
    statusClass: "badge-primary",
    featured: false,
    image: "assets/projects/edupapers.png",
    gallery: [
      "assets/projects/edupapers.png",
      "assets/projects/edupapers.svg"
    ],
    overview: "EduPapers is a specialized academic document repository built for university students to share, search, and download revision past papers, study summaries, and lecture notes organized by academic department.",
    problem: "University students frequently scramble for previous semester examination papers and revision notes scattered across unorganized chat groups.",
    solution: "Developed a database-driven PHP portal featuring authenticated document uploads, file integrity verification, search by course code, and administrative moderation before documents appear in public search.",
    features: [
      "Course code and department classification search",
      "Secure document upload and PDF preview engine",
      "Administrator moderation and approval queue",
      "User authentication and contributor profile management"
    ],
    technologies: ["PHP", "MySQL", "Authentication", "File Upload Processing", "CSS3"],
    githubUrl: "https://github.com/caintcreation/paperwebsite",
    liveUrl: null,
    embeddable: false,
    previewType: "modal"
  },
  {
    id: "opengl-simulations",
    title: "3D Computer Graphics & Algorithm Engine",
    tagline: "OpenGL, FreeGLUT & C++ Algorithmic Simulations",
    category: "desktop",
    categoryLabel: "Desktop & Systems",
    status: "Algorithmic Research",
    statusClass: "badge-success",
    featured: false,
    image: "assets/projects/opengl-graphics.png",
    gallery: [
      "assets/projects/opengl-graphics.png",
      "assets/projects/opengl-graphics.svg"
    ],
    overview: "A technical C++ and OpenGL (FreeGLUT) visualization suite demonstrating advanced computer graphics algorithms: Subpixel Area Subdivision (anti-aliasing concept), Catmull's Object Precision geometric clipping, and A-buffer style transparency simulations across multiple simultaneous viewports.",
    problem: "Understanding complex hidden-surface removal and subpixel anti-aliasing requires visual execution rather than abstract mathematical formulation.",
    solution: "Engineered a low-level C++ rendering program utilizing FreeGLUT viewports to display real-time geometric operations, analytical clipping planes, and order-independent alpha transparency.",
    features: [
      "Multi-viewport simultaneous rendering in a single window",
      "Catmull's object precision analytical polygon clipping",
      "Subpixel area subdivision anti-aliasing simulation",
      "PROXMAN custom ascending array sorting implementation"
    ],
    technologies: ["C++", "OpenGL", "FreeGLUT", "Data Structures & Algorithms", "Linear Algebra"],
    githubUrl: "https://github.com/caintcreation/OPENGLCODE",
    liveUrl: null,
    embeddable: false,
    previewType: "modal"
  }
];

function getFeaturedProjects() {
  return PORTFOLIO_PROJECTS.filter(p => p.featured);
}

function getProjectById(id) {
  return PORTFOLIO_PROJECTS.find(p => p.id === id);
}

function getProjectsByCategory(category) {
  if (!category || category === 'all') return PORTFOLIO_PROJECTS;
  return PORTFOLIO_PROJECTS.filter(p => p.category === category);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PORTFOLIO_PROJECTS, getFeaturedProjects, getProjectById, getProjectsByCategory };
}
