/**
 * Main JavaScript file - initializes all modules
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    if (typeof initThemeToggle === 'function') initThemeToggle();
    if (typeof initTabs === 'function') initTabs();
    if (typeof initAnimations === 'function') initAnimations();
    if (typeof initTweetInteractions === 'function') initTweetInteractions();
    if (typeof initEnhancedSkills === 'function') initEnhancedSkills();
    if (typeof initProjectsSection === 'function') initProjectsSection();
    if (typeof initAchievementsSection === 'function') initAchievementsSection();
    if (typeof initNewPortfolioAnimations === 'function') initNewPortfolioAnimations();
});