// Sample gemstone data
const gemstones = [
    {
        id: 1,
        name: "Red Garnet",
        category: "red garnet",
        status: "available",
        dimensions: "9.0. x 5 x 5.5 (mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Malawi",
        image: "images/Collection/Red Garnet 3.jpg",
        description: "Beautiful red garnet with excellent clarity"
    },
    {
        id: 2,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        dimensions: "24.00 x 9.00 (mm)",
        weight: "4.1",
        cut: "Rough (Natural)",
        Origin: "Kafukule, Mzimba, Malawi",
        image: "images/Collection/Rutile Amethyst 2.jpg",
        description: "Stunning Rutile Amethyst"
    },
    {
        id: 3,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        dimensions: "29.90 x 21.90 (mm)",
        weight: "8.32",
        cut: "Rough (Natural)",
        Origin: "Kafukule, Mzimba, Malawi",
        image: "images/Collection/Rutile Amethyst 4.jpg",
        description: "Premium Rutile Amethyst"
    },
    {
        id: 4,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "Available",
        dimensions: "25.50 x 12.00 (mm)",
        weight: "26.48",
        cut: "Rough (Natural)",
        Origin: "Kafukule, Mzimba, Malawi",
        image: "images/Collection/Rutile Amethyst.jpg",
        description: "Brilliant Rutile Amethyst with exceptional clarity"
    },
    {
        id: 5,
        name: "Red Garnet",
        category: "red garnet",
        status: "available",
        dimensions: "10.50 x 10.50 x 6.50(mm)",
        weight: "N/A",
        cut: "Hexagonal",
        Origin: "Nanthenje,Malawi",
        image: "images/Collection/Stunning Red Garnet.jpg",
        description: "Exquisite Red Garnet"
    },
    {
        id: 6,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        dimensions: "41.00 x 20.00 (mm)",
        weight: "28.45",
        cut: "Rough (Natural)",
        Origin: "Kafukule, Mzimba, Malawi",
        image: "images/Collection/Rutile Amethyst 3.jpg",
        description: "Stunning Rutile Amethyst"
    },
    {
        id: 7,
        name: "Red Garnet",
        category: "red garnet",
        status: "available",
        dimensions: "11.00 x 11.00 X 6.00 (mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Nanthenje, Malawi",
        image: "images/Collection/Stunning Red Garnet 2.jpg",
        description: "Exquisite Red Garnet"
    },
    {
        id: 8,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        dimensions: "29.00 x 8.50 (mm)",
        weight: "5.94",
        cut: "Rough (Natural)",
        Origin: "Kafukule, Mzimba, Malawi",
        image: "images/Collection/rutile.jpg",
        description: "Brilliant gemstone with exceptional clarity"
    },
    {
        id: 9,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "9.5 x 5.5 X 4.0 (mm)",
        weight: "N/A",
        cut: "Rectangular",
        Origin: "Malawi",
        image: "images/Collection/Rhodolite.jpg",
        description: "Stunning Pink Purplish Rhodolite"
    },
    {
        id: 10,
        name: "Red Garnet",
        category: "red garnet",
        status: "available",
        dimensions: "7.5 x 6.5 x 5.0 (mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Malawi",
        image: "images/Collection/IMG-20250214-WA0012.jpg",
        description: "Stunning Red Garnet"
    },
    {
        id: 11,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        dimensions: "21.50 x 9.50 (mm)",
        weight: "5.30",
        cut: "Rough (Natural)",
        Origin: "Kafukule, Mzimba, Malawi",
        image: "images/Collection/rutile new.jpg",
        description: "Premium Rutile Amethyst cut gemstone"
    },

    // new collection(Rhodolite)
    {
        id: 12,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.00 x 6.00 x 3.00(mm)",
        weight: "N/A",
        cut: "Tear Drop",
        Origin: "Malawi",
        image: "images/Collection/new stones/1.webp",
        description: "Stunning purplish Rhodolite"
    },
    {
        id: 13,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "9.00 x 5.00 x 2.50 (mm)",
        weight: "N/A",
        cut: "Kite",
        Origin: "Malawi",
        image: "images/Collection/new stones/2.webp",
        description: "Purplish Rhodolite"
    },
    {
        id: 14,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "7.00 x 5.5 x 3.0 (mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Malawi",
        image: "images/Collection/new stones/3.webp",
        description: "Rounded corners with large facets"
    },
    {
        id: 15,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.00 x 6.50 x 4.00(mm)",
        weight: "N/A",
        cut: "Rectangular",
        Origin: "Malawi",
        image: "images/Collection/new stones/4.webp",
        description: "Exquisite Pink gemstone"
    },
    {
        id: 16,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.00 x 6.00 x 3.50 (mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Malawi",
        image: "images/Collection/new stones/5.webp",
        description: "Stunning Rhodolite"
    },
    {
        id: 17,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "7.00x6.00x4.00(mm)",
        weight: "N/A",
        cut: "Cushion mixed Cut",
        Origin: "Malawi",
        image: "images/Collection/new stones/6.webp",
        description: "Premium Rhodolite cut gemstone"
    },
    {
        id: 18,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.00 x 6.00 x 3.50 (mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Malawi",
        image: "images/Collection/new stones/7.webp",
        description: "Stunning Rhodolite"
    },
    {
        id: 19,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.50 x 5.50 x 3.00 (mm)",
        weight: "N/A",
        cut: "Rough (Natural)",
        Origin: "Malawi",
        image: "images/Collection/new stones/8.webp",
        description: "Premium Rhodolite cut gemstone"
    },
    {
        id: 20,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "7.50 x 6.50 x 4.00 (mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Malawi",
        image: "images/Collection/new stones/9.webp",
        description: "Stunning Rhodolite"
    },
    {
        id: 21,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.5x4.0x1.5(mm)",
        weight: "N/A",
        cut: "Hexagonal",
        Origin: "Malawi",
        image: "images/Collection/new stones/10.webp",
        description: "Premium Rhodolite cut gemstone"
    },
    {
        id: 22,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "4.0 x 3.5 x 2.5 (mm)",
        weight: "N/A",
        cut: "Kite",
        Origin: "Malawi",
        image: "images/Collection/new stones/11.webp",
        description: "Stunning Kite cut Rhodolite"
    },
    {
        id: 23,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.00 x 5.50 x 3.50 (mm)",
        weight: "N/A",
        cut: "Rough (Natural)",
        Origin: "Malawi",
        image: "images/Collection/new stones/12.webp",
        description: "Premium Rhodolite cut gemstone"
    },
    {
        id: 24,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "5.5x5.5x3.5(mm)",
        weight: "N/A",
        cut: "Kite",
        Origin: "Malawi",
        image: "images/Collection/new stones/13.webp",
        description: "Stunning Kite cut Rhodolite"
    },
    {
        id: 25,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.00x5.5x3.5(mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/14.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 26,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.8x6.0x3.0(mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/15.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 27,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "9.00x6.00x4.00 (mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/16.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 28,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "7.5x6.5x3.5 (mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/17.webp",
        description: "Stunning Purplish Oval cut Rhodolite"
    },
    {
        id: 29,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.50x6.00x4.00(mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/18.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 30,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.00x6.00x3.5 (mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/19.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 31,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "7.00x5.55x3.5(mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Malawi",
        image: "images/Collection/new stones/20.webp",
        description: "Stunning Cushion cut Rhodolite"
    },
    {
        id: 32,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.50x5.50x3.00 (mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Malawi",
        image: "images/Collection/new stones/21.webp",
        description: "Stunning Cushion cut Rhodolite"
    },
    {
        id: 33,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.50x6.50x3.50(mm)",
        weight: "N/A",
        cut: "Round",
        Origin: "Malawi",
        image: "images/Collection/new stones/22.webp",
        description: "Stunning Round cut Rhodolite"
    },
    {
        id: 34,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "5.50x5.50x3.50 (mm)",
        weight: "N/A",
        cut: "Round",
        Origin: "Malawi",
        image: "images/Collection/new stones/23.webp",
        description: "Stunning Round cut Rhodolite"
    },
    {
        id: 35,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.50x6.50x4.00 (mm)",
        weight: "N/A",
        cut: "Round",
        Origin: "Malawi",
        image: "images/Collection/new stones/24.webp",
        description: "Stunning Round cut Rhodolite"
    },
    {
        id: 36,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.00x6.00x3.50 (mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Malawi",
        image: "images/Collection/new stones/25.webp",
        description: "Stunning Cushion cut Rhodolite"
    },
    {
        id: 37,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.50x6.50x4.00 (mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Kafukule, Mzimba, Malawi",
        image: "images/Collection/new stones/26.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 38,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.00x5.50x3.00(mm)",
        weight: "N/A",
        cut: "Square",
        Origin: "Malawi",
        image: "images/Collection/new stones/27.webp",
        description: "Stunning Square cut Rhodolite"
    },
    {
        id: 39,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "7.00x7.00x4.00(mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/28.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 40,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "7.00x7.00x4.00 (mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/29.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 41,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.50x6.50x3.50(mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/30.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 42,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.50x6.00x3.00(mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/31.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 43,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "6.50x6.50x4.00(mm)",
        weight: "N/A",
        cut: "Round",
        Origin: "Malawi",
        image: "images/Collection/new stones/32.webp",
        description: "Stunning Round cut Rhodolite"
    },
    {
        id: 44,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "7.5 x 6.5 x 5.0 (mm)",
        weight: "N/A",
        cut: "Round",
        Origin: "Malawi",
        image: "images/Collection/new stones/33.webp",
        description: "Stunning Round cut Rhodolite"
    },
    {
        id: 45,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.00x6.00x3.50 (mm)",
        weight: "N/A",
        cut: "Oval",
        Origin: "Malawi",
        image: "images/Collection/new stones/34.webp",
        description: "Stunning Oval cut Rhodolite"
    },
    {
        id: 46,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "5.50x4.00x3.00(mm)",
        weight: "N/A",
        cut: "Rectangular",
        Origin: "Malawi",
        image: "images/Collection/new stones/35.webp",
        description: "Stunning Rectangular cut Rhodolite"
    },
    {
        id: 47,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "21.50 x 9.50 (mm)",
        weight: "N/A",
        cut: "Rough (Natural)",
        Origin: "Malawi",
        image: "images/Collection/new stones/36.webp",
        description: "Premium Rhodolite cut gemstone"
    },
    {
        id: 48,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "5.5x4.0x3.0(mm)",
        weight: "N/A",
        cut: "Rectangular",
        Origin: "Malawi",
        image: "images/Collection/new stones/37.webp",
        description: "Stunning Rectangular cut Rhodolite"
    },
    {
        id: 49,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "5.5 x 4.0 x 3.0 (mm)",
        weight: "N/A",
        cut: "Rectangular",
        Origin: "Malawi",
        image: "images/Collection/new stones/38.webp",
        description: "Rectangular Cut Rhodolite gemstone"
    },
    {
        id: 50,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "7.00 x 6.50 x 4.00 (mm)",
        weight: "N/A",
        cut: "Cushion",
        Origin: "Malawi",
        image: "images/Collection/new stones/39.webp",
        description: "Stunning Purplish Rhodolite"
    },
    {
        id: 51,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        dimensions: "8.50x6.00 x 3.50(mm)",
        weight: "N/A",
        cut: "Rough (Natural)",
        Origin: "Malawi",
        image: "images/Collection/new stones/40.webp",
        description: "Red Purplish Rhodolite"
    },
    
]

// DOM Elements
const gemstoneGrid = document.querySelector('.gemstone-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayGemstones('all');
    setupFilters();
    setupSmoothScroll();
    initScrollAnimations();
    handleScrollAnimations();
    initMobileNav();
    initMobileDropdowns();
    initializeYouTubeSection();
});

// Display gemstones
function displayGemstones(category) {
    console.log(`Filtering gemstones for category: ${category}`);
    const filteredGemstones = category === 'all' 
        ? gemstones 
        : gemstones.filter(stone => stone.category === category);

    console.log(`Number of gemstones found: ${filteredGemstones.length}`);

    gemstoneGrid.innerHTML = filteredGemstones.map(stone => `
        <div class="gemstone-card">
            <img src="${stone.image}" alt="${stone.name}">
            <div class="gemstone-info">
                <h3>${stone.name}</h3>
                <p> Dimensions: ${stone.dimensions}</p>
                <p>Weight: ${stone.weight ? stone.weight + ' Grams' : 'N/A'}</p>
                <p> Cut: ${stone.cut}</p>
                <p>Origin: ${stone.Origin}</p>
                <p>${stone.description}</p>
                <p class="status">Status: ${stone.status}</p>
                <button class="inquiry-btn" data-id="${stone.id}">Inquire Now</button>
            </div>
        </div>
    `).join('');

    // Add event listeners to inquiry buttons
    document.querySelectorAll('.inquiry-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const stone = gemstones.find(s => s.id === parseInt(btn.dataset.id));
            scrollToContact(stone);
        });
    });
}

// Setup filter buttons
function setupFilters() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter gemstones
            displayGemstones(btn.dataset.filter);
        });
    });
}

// Scroll to contact section with gemstone info
function scrollToContact(stone) {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill message with gemstone inquiry
    const messageField = document.getElementById('message');
    if (messageField) {
        messageField.value = `I am interested in the ${stone.name} which states that it is ${stone.status}. Please provide more information.`;
    }
}

// Setup smooth scrolling for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Animation Function
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animation, .team-member, .expertise-box, .partnership-box');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Element comes into view (top or bottom)
        if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
            element.classList.add('active');
        }
    });
}

// Add scroll animation class to elements
function initScrollAnimations() {
    const animatedElements = [
        '.about-content',
        '.team-member',
        '.expertise-box',
        '.partnership-box',
        '.contact-container'
    ];

    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if (!element.classList.contains('scroll-animation')) {
                element.classList.add('scroll-animation');
            }
        });
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    // Initial check for elements in view
    handleScrollAnimations();
    
    // Add scroll event listener with throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScrollAnimations();
                ticking = false;
            });
            ticking = true;
        }
    });
});

// Mobile Navigation
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (!hamburger || !navLinks) return;

    // Create overlay
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('nav-overlay');
        document.body.appendChild(overlay);
    }

    function toggleMenu(event) {
        if (event) event.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking overlay
    overlay.addEventListener('click', toggleMenu);

    // Handle dropdown menus
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        if (!link) return;

        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });
                
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Prevent clicks within the menu from closing it
    navLinks.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            e.stopPropagation();
        }
    });
}

// Handle mobile dropdowns
function initMobileDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown && other.classList.contains('active')) {
                        other.classList.remove('active');
                    }
                });
                
                dropdown.classList.toggle('active');
            }
        });
    });
}

// YouTube Section
function initializeYouTubeSection() {
    const container = document.getElementById('youtube-section');
    if (!container) return;

    // Default video ID - replace with your actual video ID
    const defaultVideoId = 'YOUR_VIDEO_ID';
    
    container.innerHTML = `
        <div class="youtube-container">
            <h2>Watch Our Latest Videos</h2>
            <div class="video-wrapper">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/${defaultVideoId}"
                    title="PL Treasures Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
}

// Header functionality
function initializeHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    // Handle scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Handle dropdown toggles
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.dropdown-toggle');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    // Close other dropdowns
                    dropdowns.forEach(other => {
                        if (other !== dropdown) {
                            other.classList.remove('active');
                        }
                    });
                    
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Prevent clicks within the menu from closing it
    nav.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            e.stopPropagation();
        }
    });
}

// Initialize all sections when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
    handleScrollAnimations();
    initializeYouTubeSection();
});

// Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Mobile dropdowns
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.dropdown-toggle');
        
        if (link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    // Close other dropdowns
                    dropdowns.forEach(other => {
                        if (other !== dropdown && other.classList.contains('active')) {
                            other.classList.remove('active');
                        }
                    });
                    
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const isClickInside = navMenu.contains(e.target) || menuToggle.contains(e.target);
            
            if (!isClickInside && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
                
                // Close all dropdowns
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
            
            // Close all dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
            
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav') && navMenu.classList.contains('active')) {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu when window is resized beyond mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

