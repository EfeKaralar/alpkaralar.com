/**
 * Main JavaScript file for Alp Efe Karalar's personal website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile navigation toggle (if you add a hamburger menu later)
    // const navToggle = document.querySelector('.nav-toggle');
    // const navMenu = document.querySelector('nav ul');
    
    // if (navToggle) {
    //     navToggle.addEventListener('click', function() {
    //         navMenu.classList.toggle('show');
    //     });
    // }
    
    // Form submission (to replace with actual form handling logic)
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // If you're not using a service like Formspree, uncomment this to prevent default submission
            // e.preventDefault();
            
            // Form validation can be added here
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const messageField = document.getElementById('message');
            
            let isValid = true;
            
            if (!nameField.value.trim()) {
                isValid = false;
                // Add error handling
            }
            
            if (!emailField.value.trim() || !isValidEmail(emailField.value)) {
                isValid = false;
                // Add error handling
            }
            
            if (!messageField.value.trim()) {
                isValid = false;
                // Add error handling
            }
            
            // If form is valid and you're handling submission manually:
            // if (isValid) {
            //     // Handle form submission (AJAX, etc.)
            //     console.log('Form submitted!');
            // }
        });
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add active class to nav items on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav ul li a').forEach(navItem => {
                    navItem.classList.remove('active');
                    if (navItem.getAttribute('href') === '#' + sectionId) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    });
});
