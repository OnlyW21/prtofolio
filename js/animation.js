/**
 * Common animations functionality
 */
function initAnimations() {
    // Initialize animations for elements when they enter viewport
    const animateElements = () => {
        const elements = document.querySelectorAll('.portfolio-item, .skill-item, .contact-item, .tweet');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    };

    // Run once on load
    animateElements();
    
    // Run on scroll
    window.addEventListener('scroll', animateElements);
    
    // Animate tweets with slight delay
    setTimeout(() => {
        document.querySelectorAll('.tweet').forEach(tweet => {
            tweet.style.animation = 'fadeInUp 0.6s ease forwards';
        });
    }, 300);
}