/**
 * Skills section functionality
 */
function initEnhancedSkills() {
    // Set animation delays for skill buttons
    const skillsCategories = document.querySelectorAll('.skills-category');
    
    skillsCategories.forEach(category => {
        const buttons = category.querySelectorAll('.skills-button');
        buttons.forEach((button, index) => {
            button.style.setProperty('--i', index);
        });
    });
    
    // Handle touch interactions for mobile devices
    const skillsButtons = document.querySelectorAll('.skills-button');
    
    skillsButtons.forEach(button => {
        button.addEventListener('touchstart', function() {
            // Remove active class from all buttons
            skillsButtons.forEach(btn => btn.classList.remove('touch-active'));
            
            // Add active class to this button
            this.classList.add('touch-active');
        });
    });
}