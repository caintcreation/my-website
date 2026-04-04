/**
 * Typing Effect
 */
const typedTextElement = document.getElementById('typed-text');
const titles = ['Web Developer', 'Full Stack Web Developer'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000;

function type() {
    const currentTitle = titles[titleIndex];
    if (isDeleting) {
        typedTextElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? erasingDelay : typingDelay;

    if (!isDeleting && charIndex === currentTitle.length) {
        delay = newTextDelay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        delay = 500;
    }

    setTimeout(type, delay);
}
// Start typing effect
type();

/**
 * Theme Toggle (Light/Dark Mode)
 */
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggleBtn.querySelector('i');

// Check local storage for theme
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
    body.className = savedTheme;
    updateThemeIcon(savedTheme);
}

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.className = 'light-mode';
        localStorage.setItem('portfolio-theme', 'light-mode');
        updateThemeIcon('light-mode');
    } else {
        body.className = 'dark-mode';
        localStorage.setItem('portfolio-theme', 'dark-mode');
        updateThemeIcon('dark-mode');
    }
    // Update particles colors
    initCanvas();
});

function updateThemeIcon(mode) {
    if (mode === 'light-mode') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

/**
 * Active Nav Link on Scroll
 */
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-link');

function handleNavScroll() {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Skills Filtering
 */
const filterChips = document.querySelectorAll('.chip');
const skillCards = document.querySelectorAll('.skill-card');
const progressFills = document.querySelectorAll('.progress-fill');

// Initialize widths in dataset and set to 0 for animation
progressFills.forEach(fill => {
    if (!fill.dataset.width) {
        fill.dataset.width = fill.style.width;
        fill.style.width = '0px';
    }
});

function filterSkills(filterValue) {
    skillCards.forEach(card => {
        if (filterValue === 'all') {
            card.style.display = 'block';
        } else if (card.classList.contains(filterValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Reset progress fills when filtered so they animate again correctly
    progressFills.forEach(fill => {
        const card = fill.closest('.skill-card');
        if (card && card.style.display === 'block') {
            fill.style.width = '0px';
        }
    });

    setTimeout(animateProgressBars, 50);
}

// Initialize all skills to display
filterSkills('all');

filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        // Remove active class from all chips
        filterChips.forEach(c => c.classList.remove('active'));
        // Add active class to clicked chip
        chip.classList.add('active');
        // Filter elements
        const filterValue = chip.getAttribute('data-filter');
        filterSkills(filterValue);
    });
});

/**
 * Particles Background Animation Customization
 */
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particlesArray;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        
        let colorModeCheck = body.classList.contains('light-mode');
        // Add glow only in dark mode or lighter glow in light
        if (!colorModeCheck) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
    }
    
    update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
        
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function initCanvas() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 15000;
    if (numberOfParticles > 150) numberOfParticles = 150;
    let isLight = document.body.classList.contains('light-mode');
    
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 0.5;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = isLight ? 'rgba(124, 58, 237, 0.4)' : 'rgba(139, 92, 246, 0.5)'; // Adjust for light mode
        
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animateCanvas() {
    requestAnimationFrame(animateCanvas);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
}

let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        initCanvas();
    }, 200);
});

initCanvas();
animateCanvas();

/**
 * Navbar Scroll Effect
 */
const navbar = document.querySelector('.navbar');
function handleNavbarStyle() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

/**
 * Mobile Navigation Toggle
 */
const hamburger = document.getElementById('hamburger');
const navLinksUl = document.getElementById('nav-links');
const navBackdrop = document.getElementById('nav-backdrop');

function closeMenu() {
    navLinksUl.classList.remove('active');
    navBackdrop.classList.remove('active');
    document.body.classList.remove('no-scroll');
    hamburger.setAttribute('aria-expanded', 'false');
    const icon = hamburger.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

function openMenu() {
    navLinksUl.classList.add('active');
    navBackdrop.classList.add('active');
    document.body.classList.add('no-scroll');
    hamburger.setAttribute('aria-expanded', 'true');
    const icon = hamburger.querySelector('i');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
}

hamburger.addEventListener('click', () => {
    if (navLinksUl.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

navBackdrop.addEventListener('click', closeMenu);

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

/**
 * Scroll Reveal Animation Framework
 */
// Cache reveals
const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade');

function revealElements() {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            if (!reveal.classList.contains('reveal-active')) {
                reveal.classList.add('reveal-active');
                if (reveal.classList.contains('skills-grid')) {
                    animateProgressBars();
                }
            }
        }
    });
}

// Throttle scroll events globally
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            handleNavScroll();
            handleNavbarStyle();
            revealElements();
            isScrolling = false;
        });
        isScrolling = true;
    }
});
setTimeout(revealElements, 100);

/**
 * Dynamic Skill Bars 
 */
function animateProgressBars() {
    const fills = document.querySelectorAll('.skill-card[style*="display: block"] .progress-fill');
    fills.forEach(fill => {
        if (fill.style.width === '0px' || fill.style.width === '0%') {
            fill.style.width = fill.dataset.width;
        }
    });
}

/**
 * Form Submission Handling (AJAX)
 */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn') || contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        let actionUrl = contactForm.action;
        if (!actionUrl.includes('/ajax/')) {
            actionUrl = actionUrl.replace('formsubmit.co/', 'formsubmit.co/ajax/');
        }

        // Use Fetch to Send JSON to FormSubmit AJAX endpoint
        fetch(actionUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok. Status: ' + response.status);
        })
        .then(data => {
            // Replace form content with success message
            const successHtml = `
                <div class="success-message" style="text-align: center; padding: 2rem 0; animation: fade-in 0.5s ease-in;">
                    <i class="fas fa-check-circle" style="font-size: 4rem; color: #10b981; margin-bottom: 1rem;"></i>
                    <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Message Sent Successfully!</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 2rem;">Thank you for reaching out. I have received your message and will get back to you shortly.</p>
                    <button onclick="location.reload()" class="btn btn-outline" style="margin-top: 1rem;">Send Another Message</button>
                    <style>
                        @keyframes fade-in {
                            from { opacity: 0; transform: translateY(10px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                    </style>
                </div>
            `;
            
            // Replaces the form elements but keeps the container
            contactForm.innerHTML = successHtml;
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            submitBtn.textContent = 'Failed to send. Try again';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            
            alert('There was a problem sending your message. Please try again or use my email directly.');
        });
    });
}
