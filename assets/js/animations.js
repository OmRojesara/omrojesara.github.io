(function() {
    // We want the premium reveal animations to happen exactly once per section.
    // We'll observe class mutations on articles.
    const articles = document.querySelectorAll('#main article');

    if (!articles.length) return;

    // MutationObserver to watch for class="active"
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                const article = mutation.target;
                
                // If it becomes active and hasn't revealed yet
                if (article.classList.contains('active') && !article.classList.contains('has-revealed')) {
                    
                    // Wait for the animation to finish (max ~800ms) + small buffer
                    // Then add the 'has-revealed' class so it never repeats the entrance animation.
                    // This ensures the article content remains visible if closed and reopened,
                    // without restaggering the child elements again.
                    setTimeout(() => {
                        article.classList.add('has-revealed');
                    }, 1000); 
                }
            }
        });
    });

    articles.forEach(article => {
        observer.observe(article, { attributes: true });
    });

})();
