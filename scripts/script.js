// Sample gemstone data
const gemstones = [
    
   /* {
        id: 2,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        image: "images/Collection/Rutile Amethyst 2.jpg",
        description: "Stunning Rutile Amethyst"
    },
    {
        id: 3,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        image: "images/Collection/Rutile Amethyst 4.jpg",
        description: "Premium Rutile Amethyst"
    },
    {
        id: 4,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        image: "images/Collection/Rutile Amethyst.jpg",
        description: "Brilliant Rutile Amethyst with exceptional clarity"
    },
    {
        id: 6,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        image: "images/Collection/Rutile Amethyst 3.jpg",
        description: "Stunning Rutile Amethyst"
    },
    {
        id: 8,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        image: "images/Collection/rutile.jpg",
        description: "Brilliant gemstone with exceptional clarity"
    },
    {
        id: 9,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/Rhodolite.jpg",
        description: "Stunning Pink Purplish Rhodolite"
    },
    {
        id: 11,
        name: "Rutile Amethyst",
        category: "rutile amethyst",
        status: "available",
        image: "images/Collection/rutile new.jpg",
        description: "Premium Rutile Amethyst cut gemstone"
    }, */

    // new collection(Rhodolite)
    {
        id: 12,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/1.webp",
        description: "Discover the allure of this exquisite teardrop Rhodolite gemstone, perfect for adding a touch of elegance to any jewelry piece. Its rich color and unique shape make it a standout choice for custom designs or as a stunning centerpiece in any of your jewelry collection. Dimensions: 8.00x6.00x3.00 (mm) Shape: Tear Drop Color: Purplish Cutter: Tawoma Carats: 1.6"
    },
    {
        id: 13,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/2.webp",
        description: "This exquisite purplish gemstone captures the eye with its vibrant hue and unique cut. Perfect for adding a touch of elegance to any jewelry piece, it embodies luxury and sophistication. Whether set in a ring or pendant, this gem is sure to make a statement. Dimensions:9.00x5.00x2.50(mm) Shape: Kite Color:Purplish Carat:1.12 "
    },
    {
        id: 14,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/3.webp",
        description: "The item is a loose gemstone identified as a RhodoliteThe gemstone exhibits a cushion cut, characterized by its rounded corners and larger facets, which enhance its brilliance. The color is classified as red (r), displaying a vivid hue with strong saturation. Transparency is assessed as transparent, allowing light to pass through without obstruction. The clarity grade is not specified but appears to be free of significant inclusions visible to the naked eye. The polish is excellent, contributing to the overall luster of the gemstone. The symmetry is also excellent, indicating precise cutting and shaping. The composition is primarily Rhodolite with providing the red coloration. No additional materials or settings are present in the image. Dimensions: 07x5.5x3.0(mm). Shape: cushion mixed cut Color: Cutter: tawoma Carats: 0.78"
    },
    {
        id: 15,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/4.webp",
        description: "This exquisite pink gemstone captures the eye with its vibrant hue and brilliant clarity. Perfect for adding a touch of elegance to any jewelry piece, it embodies luxury and sophistication. Whether set in a ring or pendant, this gem is sure to make a statement. Dimensions: 8.00x6.50x4.00(mm). Shape:Rectangular. Color: Purplish Cutter: tawoma Carats: 2.21"
    },
    {
        id: 16,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/5.webp",
        description: "Dimensions: 8.00x6.00x 3.5(mm). Shape: Cushion. Color: Purplish Cutter: tawoma carats:2.25"
    },
    {
        id: 17,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/6.webp",
        description: "Dimensions: 7.00x6.00x4.00(mm). Shape: cushion mixed cut Color: Purplish Cutter: tawoma Carats: 2.42"
    },
    {
        id: 18,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/7.webp",
        description: "Dimensions: 8.00x6.00x 3.5(mm). Shape: Color: Purplish Cutter: tawoma Carats:1.74"
    },
    {
        id: 19,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/8.webp",
        description: "This exquisite hexagonal Rhodolite gemstone radiates a deep, vibrant red hue, capturing the essence of luxury and elegance. Perfect for adding a touch of sophistication to any jewelry piece, this gemstone is a must-have for collectors and enthusiasts alike. Dimensions: 6.5x5.5x3.5(mm) Shape: Hexagonal Color: Purplish Cutter: tawoma Carats: 1.41"
    },
    {
        id: 20,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/9.webp",
        description: "This exquisite hexagonal purplish gemstone captures the eye with its vibrant hue and intricate facets. Perfect for adding a pop of color to any jewelry piece, it radiates elegance and charm. Ideal for collectors and jewelry makers alike, this gemstone is a true statement of luxury. Dimensions: 7.5x6.5x4.0(mm) Shape: Hexagonal cut Color: Purplish Cutter: tawoma Carats: 1.85  "
    },
    {
        id: 21,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/10.webp",
        description: "This exquisite purplish Rhodolite gemstone captures the eye with its vibrant hue and unique hexagonal shape. Perfect for adding a touch of elegance to any jewelry piece, it embodies both beauty and sophistication. Whether set in a ring or pendant, this gemstone is sure to make a statement. Dimensions: 6.5x4.0x1.5(mm) Shape: Hexagonal cut. Color: Purplish Cutter: tawoma Carats: 0.90 "
    },
    {
        id: 22,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/11.webp",
        description: "This exquisite purplish gemstone captures the eye with its vibrant hue and unique cut. Perfect for adding a touch of elegance to any jewelry piece, it radiates charm and sophistication. Ideal for collectors or those looking to create a one-of-a-kind accessory. Dimensions:4.0xx3.5x2.5(mm) Shape: kite Color: Purplish Cutter: tawoma Carats: 0.76"
    },
    {
        id: 23,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/12.webp",
        description: "Dimensions: 8.00x5.5x3.5(mm) Shape: Color:Purplish Cutter: tawoma Carats: 1.37"
    },
    {
        id: 24,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/13.webp",
        description: "Dimensions: 5.5x5.5x3.5(mm) Shape: Kite Color: Purplish Cutter: tawoma Carats: 1.59"
    },
    {
        id: 25,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/14.webp",
        description: "Dimensions: 8.00x5.5x3.5(mm) Shape: Oval Color: Purplish Cutter: tawoma. Carats: 1.06"
    },
    {
        id: 26,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/15.webp",
        description: "Dimensions: 8.8x6.0x3.0(mm). Shape: Oval Color: Purplish Cutter: tawoma Carats: 1.93"
    },
    {
        id: 27,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/16.webp",
        description: "Dimensions: 9.00x6.00x4.00 Shape: Oval Color: Purplish Cutter: tawoma Carats: 2.19"
    },
    {
        id: 28,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/17.webp",
        description: "Dimensions: 7.5x6.5x3.5(mm) Shape: Oval Color: Purplish. Cutter Tawoma Carats: 1.98"
    },
    {
        id: 29,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/18.webp",
        description: "Dimensions: 8.50x6.00x4.00(mm) Shape:Oval Color: Purplish Cutter: Tawoma Carat: 1.98"
    },
    {
        id: 30,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/19.webp",
        description: "Dimensions: 8.00x6.00x3.5(mm). Shape: Oval Color: Purplish Cutter: tawoma Carats: 1.83"
    },
    {
        id: 31,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/20.webp",
        description: "Dimensions: 7.00x5.55x3.5(mm) Shape: Cushion Cut Color: Purplish Cutter: Tawoma Carats: 1.73"
    },
    {
        id: 32,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/21.webp",
        description: "Dimensions: 6.50x5.50x3.00(mm) Shape: Cushion Cut Color: Purplish Cutter: tawoma Carats : 1.47"
    },
    {
        id: 33,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/22.webp",
        description: "Dimensions: 8.00x5.50x3.50(mm). Shape: Cushion Cut Color: Purplish Cutter: tawoma Carats: 2.10"
    },
    {
        id: 34,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/23.webp",
        description: "Dimensions: 6.50x6.50x3.50(mm) Shape: Round Color: Purplish Cutter: tawoma Carats: 1.72"
    },
    {
        id: 35,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/24.webp",
        description: "Dimensions: 5.50x5.50x3.50(mm) Shape: Round Color: Purplish Cutter: tawoma Carats: 1.18"
    },
    {
        id: 36,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/25.webp",
        description: "Dimensions: 6.50x6.50x4.00(mm) Shape: Round Color: Purplish Cutter: tawoma Carats: 1.51"
    },
    {
        id: 37,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/26.webp",
        description: "Dimensions: 7.00x7.00x4.00(mm) Shape: Round Color: Purplish Cutter:tawoma Carats: 1.79"
    },
    {
        id: 38,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/27.webp",
        description: "Dimensions: 6.50x6.50x4.00(mm) Shape: Round Color: Purplish Cutter: tawoma Carats: 1.46"
    },
    {
        id: 39,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/28.webp",
        description: "Dimensions : 6.00x6.00x3.50(mm) Shape: Square Color: Purplish Cutter: tawoma Carats:1.53"
    },
    {
        id: 40,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/29.webp",
        description: "Dimensions: 6.50x6.50x4.00(mm) Shape: Oval Color: Purplish Cutter: tawoma Carats: 1.56"
    },
    {
        id: 41,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/30.webp",
        description: "Dimensions: 6.00x5.50x3.00(mm) Shape: Cushion Cut Color: Purplish Cutter: tawoma Carats: 1.53"
    },
    {
        id: 42,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/31.webp",
        description: "Dimensions: 7.00x7.00x4.00(mm) Shape: Oval Color: Purplish Cutter: tawoma Carats: 2.10"
    },
    {
        id: 43,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/32.webp",
        description: "Dimensions: 7.00x7.00x4.00(mm) Shape: Oval Color: Purplish Cutter: tawoma Carats: 1.83"
    },
    {
        id: 44,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/33.webp",
        description: "Dimensions: 6.50x6.50x3.50(mm) Shape: Oval Color: Purplish Cutter: tawoma Carats:1.40. Remarks: Inclusions, air bubbles and dust particles trapped"
    },
    {
        id: 45,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/34.webp",
        description: "Dimensions: 6.50x6.00x3.00(mm) Shape: Oval Color: Purplish Cutter: tawoma Carats:1.37"
    },
    {
        id: 46,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/35.webp",
        description: "Dimensions: 6.50x6.50x4.00(mm) Shape: Round Color: Purplish Cutter: tawoma Carats: 1.69"
    },
    {
        id: 47,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/36.webp",
        description: "Dimensions: 8.00x6.00x3.50(mm) Shape: Oval Color: Purplish Cutter: tawoma Carats: 1.63"
    },
    {
        id: 48,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/37.webp",
        description: "Dimensions: 5.50x4.00x3.00(mm) Shape: Rectangular Color: Purplish Cutter: tawoma Carats: 0.77"
    },
    {
        id: 49,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/38.webp",
        description: "The item is a loose gemstone, specifically a rectangular-cut Rhodolite.The gemstone exhibits a deep reddish hue, characteristic of high-quality Rhodolite. It displays transparency with minimal inclusions, contributing to its clarity. The cutting style is emerald cut, which enhances the stone's brilliance and depth. The polish is excellent, providing a smooth surface that reflects light effectively. The symmetry of the cut is also excellent, ensuring uniformity in the facets. Overall, this gemstone is suitable for high-end jewelry applications due to its quality and aesthetic appeal. Dimensions: 5.5x4.0x3.0(mm). Cut: rectangular Cutter: tawoma. Carat: 0.78"
    },
    {
        id: 50,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/39.webp",
        description: "Dimensions: 7.00x6.50x4:00(mm) Shape: Color: Purplish Cutter: tawoma Carats: 2.18"
    },
    {
        id: 51,
        name: "Rhodolite",
        category: "rhodolite",
        status: "available",
        image: "images/Collection/new stones/40.webp",
        description: "Dimensions: 8.50x6.00x3.50(mm) Shape: Color: Red Purplish Cutter: tawoma Carats: 1.71"
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
                <p>
                <span class="desc-short">${stone.description.substring(0, 100)}...</span>
                <span class="desc-full" style="display: none;">${stone.description}</span>
                <button class="toggle-btn" data-fulltext="${stone.description.replace(/"/g, '&quot;')}">Read More</button>

                </p>

                <p class="status">Status: ${stone.status}</p>
                <button class="inquiry-btn" data-id="${stone.id}">Inquire Now</button>
            </div>
        </div>
    `).join('');

    // Add event listeners to toggle buttons
    
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const paragraph = this.parentElement;
            const shortDesc = paragraph.querySelector(".desc-short");
            const fullDesc = paragraph.querySelector(".desc-full");

        const isCollapsed = shortDesc.style.display !== "none";

        if (isCollapsed) {
            shortDesc.style.display = "none";
            fullDesc.style.display = "inline";
            this.textContent = "Read Less";
        } else {
            shortDesc.style.display = "inline";
            fullDesc.style.display = "none";
            this.textContent = "Read More";
        }
    });
    
    });
    
        
    
    

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

