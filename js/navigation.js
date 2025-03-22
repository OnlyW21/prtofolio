/**
 * Tab navigation functionality
 */
function initTabs() {
    const navItems = document.querySelectorAll('.profile-nav li');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all tabs
            navItems.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            item.classList.add('active');
            
            // Show corresponding content
            const tabId = item.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}