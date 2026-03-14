document.addEventListener('DOMContentLoaded', () => {
    // Navigation elements
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const header = document.querySelector('.header');

    // Set Active Link based on current URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Mobile Menu Toggle logic
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Sticky header state on scroll
    if (header) {
        const handleHeaderScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleHeaderScroll);
        handleHeaderScroll(); // Initial check
    }

    // Reservation Form Submission handling
    const reservationForm = document.querySelector('.contact-form form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your reservation request! We will contact you shortly to confirm.');
            reservationForm.reset();
        });
    }

    // Scroll Reveal Animations using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section-title, .menu-item, .about-image, .contact-content');
    animatedElements.forEach(el => observer.observe(el));
});
