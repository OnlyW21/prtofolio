


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const navItems = document.querySelectorAll('.profile-nav li');
const tabContents = document.querySelectorAll('.tab-content');
const tweetActions = document.querySelectorAll('.tweet-action');


function initAnimations() {
    
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

   
    animateElements();
    
    
    window.addEventListener('scroll', animateElements);
}


function initThemeToggle() {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
       
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

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        const themeIcon = themeToggle.querySelector('i');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

function initTabs() {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            item.classList.add('active');
           
            const tabId = item.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

function initTweetInteractions() {
    tweetActions.forEach(action => {
        action.addEventListener('click', function() {
            const countSpan = this.querySelector('span');
            
            if (this.querySelector('i').classList.contains('fa-heart')) {
                const heartIcon = this.querySelector('i');
                
                if (heartIcon.classList.contains('far')) {
                    heartIcon.classList.remove('far');
                    heartIcon.classList.add('fas');
                    heartIcon.style.color = '#e0245e';
                    
                    if (countSpan) {
                        let count = parseInt(countSpan.textContent);
                        countSpan.textContent = count + 1;
                    }
                } else {
                    heartIcon.classList.remove('fas');
                    heartIcon.classList.add('far');
                    heartIcon.style.color = '';
                    
                    if (countSpan) {
                        let count = parseInt(countSpan.textContent);
                        countSpan.textContent = count - 1;
                    }
                }
            }
            
            // If this is a retweet action
            if (this.querySelector('i').classList.contains('fa-retweet')) {
                const retweetIcon = this.querySelector('i');
                
                if (retweetIcon.style.color !== 'rgb(23, 191, 99)') {
                    retweetIcon.style.color = '#17bf63';
                    
                    if (countSpan) {
                        let count = parseInt(countSpan.textContent);
                        countSpan.textContent = count + 1;
                    }
                } else {
                    retweetIcon.style.color = '';
                    
                    if (countSpan) {
                        let count = parseInt(countSpan.textContent);
                        countSpan.textContent = count - 1;
                    }
                }
            }
        });
    });
}


function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    
    const checkSkillsInView = () => {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (barPosition < windowHeight - 50) {
                const width = bar.style.width;
                bar.style.animation = 'skillProgress 1.5s ease forwards';
            }
        });
    };
    
    
    checkSkillsInView();
    
    
    window.addEventListener('scroll', checkSkillsInView);
}

function initPortfolioHover() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.portfolio-image img').style.transform = 'scale(1.1)';
            this.querySelector('.portfolio-overlay').style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.portfolio-image img').style.transform = '';
            this.querySelector('.portfolio-overlay').style.opacity = '0';
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initThemeToggle();
    initTabs();
    initTweetInteractions();
    initSkillBars();
    initPortfolioHover();
   
    setTimeout(() => {
        document.querySelectorAll('.tweet').forEach(tweet => {
            tweet.style.animation = 'fadeInUp 0.6s ease forwards';
        });
    }, 300);
});

// Initialize enhanced skills section
function initEnhancedSkills() {
    // Set animation order variables for staggered entrance
    const skillsCategories = document.querySelectorAll('.skills-category');
    
    skillsCategories.forEach(category => {
        const buttons = category.querySelectorAll('.skills-button');
        buttons.forEach((button, index) => {
            button.style.setProperty('--i', index);
        });
    });
    
    // Add tooltip and hover effects on mobile
    const skillsButtons = document.querySelectorAll('.skills-button');
    
    skillsButtons.forEach(button => {
        // For mobile - show proficiency level on tap
        button.addEventListener('touchstart', function() {
            // First remove active class from all buttons
            skillsButtons.forEach(btn => btn.classList.remove('touch-active'));
            
            // Add active class to current button
            this.classList.add('touch-active');
        });
      
    });
}

// Add to your existing DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
    // Your existing code
    
    // Initialize the enhanced skills section
    initEnhancedSkills();
});

// Initialize enhanced projects section
function initProjectsSection() {
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add hover effect and interaction to project cards
    projectCards.forEach(card => {
        // Create an interactive experience with random movement
        card.addEventListener('mouseenter', function() {
            const cardMedia = this.querySelector('.project-media');
            const image = this.querySelector('.project-image');
            
            // Add a slight 3D tilt effect based on mouse position
            this.addEventListener('mousemove', function(e) {
                const x = e.offsetX;
                const y = e.offsetY;
                const width = this.offsetWidth;
                const height = this.offsetHeight;
                
                // Calculate rotation based on mouse position
                const rotateX = (y - height / 2) / 20;
                const rotateY = (width / 2 - x) / 20;
                
                // Apply transform
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
                
                // Make image follow slightly
                if (image) {
                    image.style.transform = `scale(1.05) translateX(${(x - width / 2) / 40}px) translateY(${(y - height / 2) / 40}px)`;
                }
            });
        });
        
        // Reset card position when mouse leaves
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            const image = this.querySelector('.project-image');
            if (image) {
                image.style.transform = '';
            }
            
            // Remove mousemove event listener
            this.removeEventListener('mousemove', () => {});
        });
        
        // Add click animation for mobile devices
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Create a badge highlight effect
    const badges = document.querySelectorAll('.project-badge');
    badges.forEach(badge => {
        // Add random slight movements to badges
        setInterval(() => {
            const randomX = Math.random() * 3 - 1.5;
            const randomY = Math.random() * 3 - 1.5;
            badge.style.transform = `translate(${randomX}px, ${randomY}px)`;
            setTimeout(() => {
                badge.style.transform = '';
            }, 500);
        }, Math.random() * 5000 + 3000); // Random interval between 3-8 seconds
    });
    
    // Animate project tags on scroll
    const projectTags = document.querySelectorAll('.project-tag');
    let animatedTags = new Set();
    
    function animateTagsOnScroll() {
        projectTags.forEach(tag => {
            if (!animatedTags.has(tag)) {
                const tagPosition = tag.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (tagPosition < screenPosition) {
                    tag.style.animation = 'fadeInUp 0.5s ease backwards';
                    tag.style.animationDelay = `${Math.random() * 0.5}s`;
                    animatedTags.add(tag);
                }
            }
        });
    }
    
    // Check tags on scroll
    window.addEventListener('scroll', animateTagsOnScroll);
    
    // Initial check for visible tags
    animateTagsOnScroll();
}

// Add to your DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
    // Your existing initialization code
    
    // Initialize the projects section
    initProjectsSection();
});


// Initialize achievements section with controlled animations
function initAchievementsSection() {
    // Select all achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    const expandButtons = document.querySelectorAll('.expand-btn');
    const videoPreviewers = document.querySelectorAll('.video-preview');
    const videoModal = document.querySelector('.video-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalVideo = document.querySelector('.video-modal video');
    
    // Animate cards on scroll with controlled timing
    function animateAchievementCards() {
        achievementCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (cardPosition < screenPosition) {
                // Add animated class with staggered delay
                setTimeout(() => {
                    card.classList.add('animated');
                }, index * 150); // 150ms delay between each card
            }
        });
    }
    
    // Check if cards are in view on scroll
    window.addEventListener('scroll', animateAchievementCards);
    
    // Initial check for visible cards
    setTimeout(animateAchievementCards, 300);
    
    // Toggle achievement details on expand button click
    expandButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the click from propagating to the header
            
            const targetId = this.getAttribute('data-target');
            const targetDetails = document.getElementById(targetId);
            
            // Toggle active class for the details section
            if (targetDetails.classList.contains('active')) {
                targetDetails.classList.remove('active');
                this.classList.remove('active');
            } else {
                // Close all other open details first
                document.querySelectorAll('.achievement-details.active').forEach(detail => {
                    if (detail.id !== targetId) {
                        detail.classList.remove('active');
                        document.querySelector(`[data-target="${detail.id}"]`).classList.remove('active');
                    }
                });
                
                // Open the clicked details
                targetDetails.classList.add('active');
                this.classList.add('active');
            }
        });
    });
    
    // Also toggle details when clicking on the header
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
                // Set the video source
                modalVideo.querySelector('source').src = videoSrc;
                modalVideo.load(); // Reload the video with the new source
                
                // Show the modal with animation
                videoModal.classList.add('active');
                
                // Prevent body scrolling
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal on click
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            videoModal.classList.remove('active');
            
            // Re-enable body scrolling
            document.body.style.overflow = '';
            
            // Pause the video
            if (modalVideo) {
                modalVideo.pause();
            }
        });
    }
    
    // Close modal on background click
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal.click();
            }
        });
    }
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal.click();
        }
    });
    
    // Add some controlled subtle animations to elements
    function addSubtleAnimations() {
        // Gently animate badges
        const badges = document.querySelectorAll('.achievement-badge');
        badges.forEach(badge => {
            // Add a subtle pulse every so often
            setInterval(() => {
                badge.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    badge.style.transform = 'scale(1)';
                }, 300);
            }, Math.random() * 7000 + 5000); // Random interval between 5-12 seconds
        });
        
        // Occasionally highlight a random card to draw attention
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
    
    // Initialize subtle animations after a delay
    setTimeout(addSubtleAnimations, 2000);
}

// Add to your DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
    // Your existing initialization code
    
    // Initialize the achievements section
    initAchievementsSection();
});