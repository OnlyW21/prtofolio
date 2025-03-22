/**
 * Theme toggle functionality
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Update icon
        const themeIcon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        const themeIcon = themeToggle.querySelector('i');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}