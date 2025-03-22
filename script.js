


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


function initEnhancedSkills() {
    
    const skillsCategories = document.querySelectorAll('.skills-category');
    
    skillsCategories.forEach(category => {
        const buttons = category.querySelectorAll('.skills-button');
        buttons.forEach((button, index) => {
            button.style.setProperty('--i', index);
        });
    });
    
   
    const skillsButtons = document.querySelectorAll('.skills-button');
    
    skillsButtons.forEach(button => {
        
        button.addEventListener('touchstart', function() {
            
            skillsButtons.forEach(btn => btn.classList.remove('touch-active'));
            
            
            this.classList.add('touch-active');
        });
      
    });
}


document.addEventListener('DOMContentLoaded', function() {
  
    initEnhancedSkills();
});


function initProjectsSection() {
    const projectCards = document.querySelectorAll('.project-card');
    
   
    projectCards.forEach(card => {
        
        card.addEventListener('mouseenter', function() {
            const cardMedia = this.querySelector('.project-media');
            const image = this.querySelector('.project-image');
            
            
            this.addEventListener('mousemove', function(e) {
                const x = e.offsetX;
                const y = e.offsetY;
                const width = this.offsetWidth;
                const height = this.offsetHeight;
                
                
                const rotateX = (y - height / 2) / 20;
                const rotateY = (width / 2 - x) / 20;
                
               
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
                
                
                if (image) {
                    image.style.transform = `scale(1.05) translateX(${(x - width / 2) / 40}px) translateY(${(y - height / 2) / 40}px)`;
                }
            });
        });
        
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            const image = this.querySelector('.project-image');
            if (image) {
                image.style.transform = '';
            }
            
           
            this.removeEventListener('mousemove', () => {});
        });
        
       
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    
    const badges = document.querySelectorAll('.project-badge');
    badges.forEach(badge => {
        
        setInterval(() => {
            const randomX = Math.random() * 3 - 1.5;
            const randomY = Math.random() * 3 - 1.5;
            badge.style.transform = `translate(${randomX}px, ${randomY}px)`;
            setTimeout(() => {
                badge.style.transform = '';
            }, 500);
        }, Math.random() * 5000 + 3000); // Random interval between 3-8 seconds
    });
    
    
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
    

    window.addEventListener('scroll', animateTagsOnScroll);
    
    animateTagsOnScroll();
}

document.addEventListener('DOMContentLoaded', function() {
   
    initProjectsSection();
});


function initAchievementsSection() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    const expandButtons = document.querySelectorAll('.expand-btn');
    const videoPreviewers = document.querySelectorAll('.video-preview');
    const videoModal = document.querySelector('.video-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalVideo = document.querySelector('.video-modal video');
    
    function animateAchievementCards() {
        achievementCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.classList.add('animated');
                }, index * 150); 
            }
        });
    }
    
    window.addEventListener('scroll', animateAchievementCards);
    
    setTimeout(animateAchievementCards, 300);
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); 
            
            const targetId = this.getAttribute('data-target');
            const targetDetails = document.getElementById(targetId);
            
            if (targetDetails.classList.contains('active')) {
                targetDetails.classList.remove('active');
                this.classList.remove('active');
            } else {
                document.querySelectorAll('.achievement-details.active').forEach(detail => {
                    if (detail.id !== targetId) {
                        detail.classList.remove('active');
                        document.querySelector(`[data-target="${detail.id}"]`).classList.remove('active');
                    }
                });
                
                targetDetails.classList.add('active');
                this.classList.add('active');
            }
        });
    });
    
    document.querySelectorAll('.achievement-header').forEach(header => {
        header.addEventListener('click', function() {
            const expandBtn = this.querySelector('.expand-btn');
            if (expandBtn) {
                expandBtn.click();
            }
        });
    });
    
    videoPreviewers.forEach(preview => {
        preview.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            if (videoSrc && modalVideo) {
                modalVideo.querySelector('source').src = videoSrc;
                modalVideo.load(); 
                
                videoModal.classList.add('active');
                
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            videoModal.classList.remove('active');
            
            document.body.style.overflow = '';
            
            if (modalVideo) {
                modalVideo.pause();
            }
        });
    }
    
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal.click();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal.click();
        }
    });
    
    function addSubtleAnimations() {
        const badges = document.querySelectorAll('.achievement-badge');
        badges.forEach(badge => {
            setInterval(() => {
                badge.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    badge.style.transform = 'scale(1)';
                }, 300);
            }, Math.random() * 7000 + 5000); 
        });
        
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
        }, 8000); 
    }
    
    setTimeout(addSubtleAnimations, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    
    initAchievementsSection();
});


document.addEventListener('DOMContentLoaded', function() {
    initNewPortfolioAnimations();
  });
  
  function initNewPortfolioAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const distX = (mouseX - centerX) / centerX;
        const distY = (mouseY - centerY) / centerY;
        
        const rotation = 10;
        const tiltY = distX * rotation;
        const tiltX = -distY * rotation;
        
        this.style.transform = `translateY(-15px) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`;
        
        
        const shadowX = -tiltY * 1.5;
        const shadowY = -tiltX * 1.5;
        this.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.15)`;
        
        const image = this.querySelector('.project-image');
        if (image) {
          const parallaxIntensity = 15;
          const moveX = -distX * parallaxIntensity;
          const moveY = -distY * parallaxIntensity;
          image.style.transform = `scale(1.15) translate(${moveX}px, ${moveY}px) rotate(2deg)`;
        }
       
        const content = this.querySelector('.project-content');
        if (content) {
          content.style.transform = `perspective(1200px) rotateX(${-tiltX/2}deg)`;
        }
      });
     
      card.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(-10px) scale(0.98)';
        this.style.transition = 'transform 0.2s';
      });
      
      card.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-15px) scale(1)';
        this.style.transition = 'transform 0.2s';
        
        setTimeout(() => {
          this.style.transition = 'transform 0.4s, box-shadow 0.4s, border-color 0.4s';
        }, 200);
      });
     
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
        this.style.transition = 'transform 0.5s, box-shadow 0.5s, border-color 0.4s';
        
        const image = this.querySelector('.project-image');
        if (image) {
          image.style.transform = '';
          image.style.transition = 'transform 0.5s';
        }
        
        const content = this.querySelector('.project-content');
        if (content) {
          content.style.transform = '';
        }
      });
    });
   
    const actionButtons = document.querySelectorAll('.project-action-btn');
    actionButtons.forEach(btn => {
      btn.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
        
        const icon = this.querySelector('i');
        if (icon) {
          icon.style.animation = 'iconPop 0.5s forwards';
        }
      });
      
      btn.addEventListener('mouseout', function() {
        this.style.transform = '';
        
        const icon = this.querySelector('i');
        if (icon) {
          icon.style.animation = '';
        }
      });
     
      btn.addEventListener('mousedown', function(e) {
        e.stopPropagation();
        
        this.style.transform = 'translateY(-2px) scale(0.95)';
      });
      
      btn.addEventListener('mouseup', function(e) {
        e.stopPropagation();
        
        this.style.transform = 'translateY(-5px) scale(1.05)';
      
        setTimeout(() => {
          if (!this.matches(':hover')) {
            this.style.transform = '';
          }
        }, 200);
      });
    });
    
    function revealOnScroll() {
      const portfolio = document.getElementById('portfolio');
      if (portfolio && isElementInViewport(portfolio)) {
        portfolio.classList.add('revealed');
        
        projectCards.forEach((card, index) => {
          setTimeout(() => {
            card.style.visibility = 'visible';
          }, index * 200);
        });
      }
    }
    
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75
      );
    }
   
    window.addEventListener('scroll', revealOnScroll);
    
    revealOnScroll();
    
    const navItems = document.querySelectorAll('.profile-nav li');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        if (tabId === 'portfolio') {
          setTimeout(revealOnScroll, 100);
        }
      });
    });
  }