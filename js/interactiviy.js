/**
 * Tweet interaction functionality
 */
function initTweetInteractions() {
    const tweetActions = document.querySelectorAll('.tweet-action');
    
    tweetActions.forEach(action => {
        action.addEventListener('click', function() {
            const countSpan = this.querySelector('span');
            
            // Handle like/heart action
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
            
            // Handle retweet action
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