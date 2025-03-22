/**
 * Achievements section functionality
 */
function initAchievementsSection() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    const expandButtons = document.querySelectorAll('.expand-btn');
    const videoPreviewers = document.querySelectorAll('.video-preview');
    const videoModal = document.querySelector('.video-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalVideo = document.querySelector('.video-modal video');
    
    // Animate achievement cards as they enter viewport
    function animateAchievementCards() {
        achievementCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add('animated');
                }, index * 150); // Staggered animation
            }
        });
    }
    
    window.addEventListener('scroll', animateAchievementCards);
    setTimeout(animateAchievementCards, 300); // Initial check after content loads
    
    // Handle expand/collapse for achievement details
    expandButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent bubbling
            
            const targetId = this.getAttribute('data-target');
            const targetDetails = document.getElementById(targetId);
            
            if (targetDetails.classList.contains('active')) {
                targetDetails.classList.remove('active');
                this.classList.remove('active');
            } else {
                // Close any open details first
                document.querySelectorAll('.achievement-details.active').forEach(detail => {
                    if (detail.id !== targetId) {
                        detail.classList.remove('active');
                        document.querySelector(`[data-target="${detail.id}"]`).classList.remove('active');
                    }
                });
                
                // Open this detail
                targetDetails.classList.add('active');
                this.classList.add('active');
            }
        });
    });
    
    // Allow clicking anywhere on header to toggle details
    document.querySelectorAll('.achievement-header').forEach(header => {
        header.addEventListener('click', function() {
            const expandBtn = this.querySelector('.expand-btn');
            if (expandBtn) {
                expandBtn.click();
            }
        });
    });
    
    // Handle video preview clicks
    videoPreviewers.forEach(preview => {
        preview.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            if (videoSrc && modalVideo) {
                modalVideo.querySelector('source').src = videoSrc;
                modalVideo.load(); // Reload video with new source
                
                videoModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });
    
    // Handle modal close button
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            videoModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
            
            if (modalVideo) {
                modalVideo.pause(); // Stop video playback
            }
        });
    }
    
    // Close modal by clicking outside the video
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal.click();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal.click();
        }
    });
    
    // Add subtle animations for visual interest
    function addSubtleAnimations() {
        // Occasional badge pulse
        const badges = document.querySelectorAll('.achievement-badge');
        badges.forEach(badge => {
            setInterval(() => {
                badge.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    badge.style.transform = 'scale(1)';
                }, 300);
            }, Math.random() * 7000 + 5000); // Random interval
        });
        
        // Highlight a random card occasionally
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * achievementCards.length);
            const randomCard = achievementCards[randomIndex];
            
            if (randomCard) {
                const content = randomCard.querySelector('.achievement-content');
                if (content) {
                    content.style.boxShadow = '0 5px 15px rgba(0, 116, 255, 0.3)';
                    content.style.borderColor = 'var(--primary-color)';
                    
                    setTimeout(() => {
                        content.style.boxShadow = '';
                        content.style.borderColor = '';
                    }, 2000);
                }
            }
        }, 8000); // Every 8 seconds
    }
    
    setTimeout(addSubtleAnimations, 2000);
}