/**
 * CAINT CREATION - PORTFOLIO INTERACTION ENGINE
 * Powered with Interactive Live Preview Modals, Scroll Animations, and Responsive Viewports
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initTheme();
  initNavigation();
  initProjects();
  initModal();
  initFaqAccordion();
  initContactForm();
  initBackToTop();
  initScrollReveal();
  updateCopyrightYear();
});

/* --------------------------------------------------------------------------
   SCROLL PROGRESS BAR
   -------------------------------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   SCROLL REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    'section, .project-card, .service-card, .skill-category-card, .timeline-item, .contact-item'
  );

  revealElements.forEach(el => {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   THEME TOGGLE
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  if (!themeToggleBtn) return;

  const themeIcon = themeToggleBtn.querySelector('i');
  const savedTheme = localStorage.getItem('caint-theme') || 'dark-mode';
  
  body.className = savedTheme;
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    const newTheme = isDark ? 'light-mode' : 'dark-mode';
    
    body.className = newTheme;
    localStorage.setItem('caint-theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(mode) {
    if (!themeIcon) return;
    if (mode === 'light-mode') {
      themeIcon.className = 'fas fa-moon';
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      themeIcon.className = 'fas fa-sun';
      themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
    }
  }
}

/* --------------------------------------------------------------------------
   NAVIGATION & MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navBackdrop = document.getElementById('nav-backdrop');

  // Navbar scroll style
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // Mobile menu toggle
  if (hamburger && navLinks) {
    function openMenu() {
      navLinks.classList.add('active');
      if (navBackdrop) navBackdrop.classList.add('active');
      document.body.classList.add('no-scroll');
      hamburger.setAttribute('aria-expanded', 'true');
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    }

    function closeMenu() {
      navLinks.classList.remove('active');
      if (navBackdrop) navBackdrop.classList.remove('active');
      document.body.classList.remove('no-scroll');
      hamburger.setAttribute('aria-expanded', 'false');
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }

    hamburger.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMenu);
    }

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  const navLinksItems = document.querySelectorAll('.nav-link');

  if (sections.length > 0 && navLinksItems.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      let currentSectionId = '';

      sections.forEach(sec => {
        const top = sec.offsetTop - 130;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinksItems.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentSectionId}` || href === `index.html#${currentSectionId}`) {
            link.classList.add('active');
          } else if (href && href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    }, { passive: true });
  }
}

/* --------------------------------------------------------------------------
   PROJECTS RENDERING & FILTERING
   -------------------------------------------------------------------------- */
function initProjects() {
  const featuredContainer = document.getElementById('featured-projects-grid');
  const allProjectsContainer = document.getElementById('all-projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('project-search');

  if (typeof PORTFOLIO_PROJECTS === 'undefined') return;

  // Render on homepage (Featured)
  if (featuredContainer) {
    const featuredList = PORTFOLIO_PROJECTS.filter(p => p.featured);
    featuredContainer.innerHTML = featuredList.map(createProjectCardHtml).join('');
    bindProjectCardActions(featuredContainer);
  }

  // Render on dedicated projects page
  if (allProjectsContainer) {
    renderProjectList(PORTFOLIO_PROJECTS);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        applyFilters();
      });
    }

    function applyFilters() {
      const activeBtn = document.querySelector('.filter-btn.active');
      const category = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
      const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

      let filtered = PORTFOLIO_PROJECTS;

      if (category && category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
      }

      if (query) {
        filtered = filtered.filter(p => {
          const inTitle = p.title.toLowerCase().includes(query);
          const inTagline = p.tagline.toLowerCase().includes(query);
          const inOverview = p.overview.toLowerCase().includes(query);
          const inTech = p.technologies.some(t => t.toLowerCase().includes(query));
          return inTitle || inTagline || inOverview || inTech;
        });
      }

      renderProjectList(filtered);
    }

    function renderProjectList(list) {
      if (list.length === 0) {
        allProjectsContainer.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
            <i class="fas fa-search" style="font-size: 3rem; color: var(--accent-primary); margin-bottom: 16px;"></i>
            <h3 style="margin-bottom: 8px;">No projects found</h3>
            <p style="color: var(--text-secondary);">Try clearing your search query or selecting a different category filter.</p>
          </div>
        `;
        return;
      }
      allProjectsContainer.innerHTML = list.map(createProjectCardHtml).join('');
      bindProjectCardActions(allProjectsContainer);
    }
  }
}

function createProjectCardHtml(p) {
  const liveBadge = p.liveUrl 
    ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Open Live Site" aria-label="Open Live Site"><i class="fas fa-external-link-alt"></i></a>`
    : '';

  const techBadges = p.technologies.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('');

  return `
    <article class="project-card" data-id="${p.id}" data-category="${p.category}">
      <div class="project-thumb-wrapper">
        <img src="${p.image}" alt="${p.title} Preview" class="project-thumb" loading="lazy">
        <div class="project-thumb-overlay">
          <span class="badge ${p.statusClass}">● ${p.status}</span>
          ${p.liveUrl ? '<span class="badge badge-live"><i class="fas fa-bolt"></i> Live View</span>' : ''}
        </div>
      </div>
      <div class="project-body">
        <div class="project-meta-top">
          <span class="project-category">${p.categoryLabel}</span>
        </div>
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-tagline">${p.tagline}</p>
        <div class="project-tech-tags">
          ${techBadges}
        </div>
        <div class="project-card-actions">
          <button class="btn btn-sm btn-primary preview-trigger-btn" data-project-id="${p.id}">
            <i class="fas fa-expand"></i> Preview &amp; Details
          </button>
          <div class="project-links">
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="View Source Code on GitHub" aria-label="GitHub Repository">
              <i class="fab fa-github"></i>
            </a>
            ${liveBadge}
          </div>
        </div>
      </div>
    </article>
  `;
}

function bindProjectCardActions(container) {
  if (!container) return;
  const buttons = container.querySelectorAll('.preview-trigger-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });
}

/* --------------------------------------------------------------------------
   INTERACTIVE PROJECT PREVIEW MODAL (LIVE VIEW + SCREENSHOTS + SPECS)
   -------------------------------------------------------------------------- */
let activeModalProject = null;
let currentPreviewMode = 'live'; // 'live' or 'screenshots'

function initModal() {
  const backdrop = document.getElementById('project-modal');
  if (!backdrop) return;

  const closeBtn = document.getElementById('modal-close-btn');

  function closeModal() {
    backdrop.classList.remove('active');
    document.body.classList.remove('no-scroll');
    // Clear iframe to prevent background audio or memory load
    const iframe = document.getElementById('modal-live-iframe');
    if (iframe) iframe.src = 'about:blank';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Modal mode tabs (Live View vs Screenshots vs Details)
  const tabLive = document.getElementById('modal-tab-live');
  const tabScreens = document.getElementById('modal-tab-screenshots');
  const tabDetails = document.getElementById('modal-tab-details');

  const liveStage = document.getElementById('modal-live-stage');
  const screenStage = document.getElementById('modal-screen-stage');
  const detailsStage = document.getElementById('modal-details-stage');

  function setMode(mode) {
    currentPreviewMode = mode;
    [tabLive, tabScreens, tabDetails].forEach(t => t && t.classList.remove('active'));
    [liveStage, screenStage, detailsStage].forEach(s => s && (s.style.display = 'none'));

    if (mode === 'live' && tabLive && liveStage) {
      tabLive.classList.add('active');
      liveStage.style.display = 'block';
    } else if (mode === 'screenshots' && tabScreens && screenStage) {
      tabScreens.classList.add('active');
      screenStage.style.display = 'block';
    } else if (mode === 'details' && tabDetails && detailsStage) {
      tabDetails.classList.add('active');
      detailsStage.style.display = 'block';
    }
  }

  if (tabLive) tabLive.addEventListener('click', () => setMode('live'));
  if (tabScreens) tabScreens.addEventListener('click', () => setMode('screenshots'));
  if (tabDetails) tabDetails.addEventListener('click', () => setMode('details'));

  // Device switcher buttons (Desktop / Tablet / Mobile)
  const deviceBtns = document.querySelectorAll('.device-btn');
  const liveIframe = document.getElementById('modal-live-iframe');

  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const dev = btn.getAttribute('data-device');
      if (liveIframe) {
        liveIframe.classList.remove('tablet-view', 'mobile-view');
        if (dev === 'tablet') liveIframe.classList.add('tablet-view');
        if (dev === 'mobile') liveIframe.classList.add('mobile-view');
      }
    });
  });
}

function openProjectModal(projectId) {
  const backdrop = document.getElementById('project-modal');
  if (!backdrop || typeof PORTFOLIO_PROJECTS === 'undefined') return;

  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  activeModalProject = project;

  // Header Elements
  const titleEl = document.getElementById('modal-title');
  const badgeEl = document.getElementById('modal-badge');
  const urlPill = document.getElementById('modal-url-pill');

  if (titleEl) titleEl.textContent = project.title;
  if (badgeEl) {
    badgeEl.textContent = project.status;
    badgeEl.className = `badge ${project.statusClass}`;
  }

  // Tabs
  const tabLive = document.getElementById('modal-tab-live');
  const tabScreens = document.getElementById('modal-tab-screenshots');
  const tabDetails = document.getElementById('modal-tab-details');

  const liveStage = document.getElementById('modal-live-stage');
  const screenStage = document.getElementById('modal-screen-stage');
  const detailsStage = document.getElementById('modal-details-stage');
  const liveIframe = document.getElementById('modal-live-iframe');
  const fallbackNotice = document.getElementById('modal-iframe-fallback');

  // Configure Live Preview
  if (project.liveUrl) {
    if (tabLive) {
      tabLive.style.display = 'inline-flex';
      tabLive.click();
    }
    if (urlPill) {
      urlPill.innerHTML = `🔒 ${project.liveUrl}`;
    }

    if (project.embeddable && liveIframe) {
      liveIframe.style.display = 'block';
      if (fallbackNotice) fallbackNotice.style.display = 'none';
      liveIframe.src = project.liveUrl;
    } else {
      // Free subdomain hosting blocks iframe embedding via X-Frame-Options
      // So provide sleek live preview card with direct 1-click launch
      if (liveIframe) liveIframe.style.display = 'none';
      if (fallbackNotice) {
        fallbackNotice.style.display = 'flex';
        const noticeLink = document.getElementById('modal-fallback-link');
        if (noticeLink) noticeLink.href = project.liveUrl;
      }
    }
  } else {
    // No live URL; default to Screenshot Showcase
    if (tabLive) tabLive.style.display = 'none';
    if (tabScreens) tabScreens.click();
  }

  // Configure Screenshot Showcase
  const mainImgEl = document.getElementById('modal-main-img');
  const galleryEl = document.getElementById('modal-gallery-thumbs');

  if (mainImgEl) {
    mainImgEl.src = project.image;
    mainImgEl.alt = `${project.title} Interface`;
  }

  if (galleryEl) {
    if (project.gallery && project.gallery.length > 1) {
      galleryEl.style.display = 'flex';
      galleryEl.innerHTML = project.gallery.map((imgUrl, i) => `
        <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-img="${imgUrl}">
          <img src="${imgUrl}" alt="Screenshot ${i + 1}">
        </div>
      `).join('');

      galleryEl.querySelectorAll('.gallery-thumb').forEach(th => {
        th.addEventListener('click', () => {
          galleryEl.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
          th.classList.add('active');
          if (mainImgEl) mainImgEl.src = th.getAttribute('data-img');
        });
      });
    } else {
      galleryEl.style.display = 'none';
    }
  }

  // Configure Details Block
  const overviewEl = document.getElementById('modal-overview');
  const problemEl = document.getElementById('modal-problem');
  const solutionEl = document.getElementById('modal-solution');
  const featuresEl = document.getElementById('modal-features');
  const techTagsEl = document.getElementById('modal-tech-tags');
  const githubLinkEl = document.getElementById('modal-github-link');
  const liveLinkEl = document.getElementById('modal-live-link');

  if (overviewEl) overviewEl.textContent = project.overview;
  if (problemEl) problemEl.textContent = project.problem;
  if (solutionEl) solutionEl.textContent = project.solution;

  if (featuresEl) {
    featuresEl.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
  }

  if (techTagsEl) {
    techTagsEl.innerHTML = project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');
  }

  if (githubLinkEl) {
    githubLinkEl.href = project.githubUrl;
  }

  if (liveLinkEl) {
    if (project.liveUrl) {
      liveLinkEl.style.display = 'inline-flex';
      liveLinkEl.href = project.liveUrl;
    } else {
      liveLinkEl.style.display = 'none';
    }
  }

  backdrop.classList.add('active');
  document.body.classList.add('no-scroll');
}

/* --------------------------------------------------------------------------
   FAQ ACCORDION
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerEl = item.querySelector('.faq-answer');

    if (questionBtn && answerEl) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherAns = otherItem.querySelector('.faq-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        if (isOpen) {
          item.classList.remove('active');
          answerEl.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answerEl.style.maxHeight = answerEl.scrollHeight + 'px';
        }
      });
    }
  });
}

/* --------------------------------------------------------------------------
   CONTACT FORM HANDLER
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('portfolio-contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting Inquiry...';
    submitBtn.disabled = true;

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    let actionUrl = contactForm.action;
    if (actionUrl.includes('formsubmit.co/') && !actionUrl.includes('/ajax/')) {
      actionUrl = actionUrl.replace('formsubmit.co/', 'formsubmit.co/ajax/');
    }

    fetch(actionUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error(`Server returned status: ${res.status}`);
    })
    .then(() => {
      contactForm.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(0, 210, 255, 0.15); color: #00d2ff; display: inline-flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 20px;">
            <i class="fas fa-check"></i>
          </div>
          <h3 style="margin-bottom: 12px; font-size: 1.5rem;">Inquiry Received!</h3>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 24px auto;">
            Thank you for contacting Caint Creation. I have received your project details and will review them and respond within 24 hours.
          </p>
          <a href="index.html" class="btn btn-outline">Return to Home</a>
        </div>
      `;
    })
    .catch(err => {
      console.error('Contact Form Submission Error:', err);
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      alert('Unable to submit your message via the automated form right now. Please email directly at maduvwe88@gmail.com or reach out via WhatsApp at +254 714 772 901.');
    });
  });
}

/* --------------------------------------------------------------------------
   BACK TO TOP
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function updateCopyrightYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
