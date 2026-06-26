(function() {
    // Select all articles inside the main container
    const articles = document.querySelectorAll('#main article');

    if (!articles.length) return;

    // Track mouse movement across the document to update cursor position variables for hover lighting
    document.addEventListener('mousemove', (e) => {
        articles.forEach(article => {
            // Only calculate if article is visible (active) or close to it, for performance
            // In HTML5 UP Dimension, the active article has the class .active
            if (article.classList.contains('active')) {
                const rect = article.getBoundingClientRect();
                
                // Calculate cursor position relative to the article
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Update CSS custom properties for the radial gradient center
                article.style.setProperty('--mouse-x', `${x}px`);
                article.style.setProperty('--mouse-y', `${y}px`);
            }
        });
    });

})();
