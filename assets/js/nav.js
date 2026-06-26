(function() {
    const navMenu = document.querySelector('#header nav ul');
    if (!navMenu) return;

    // 1. Sliding active indicator (Glass pill)
    const indicator = document.createElement('div');
    indicator.className = 'nav-indicator';
    navMenu.appendChild(indicator);

    const navLinks = navMenu.querySelectorAll('li a');

    function updateIndicator(el) {
        // Find relative position inside the ul
        const li = el.parentElement;
        const navRect = navMenu.getBoundingClientRect();
        const liRect = li.getBoundingClientRect();
        
        const left = liRect.left - navRect.left;
        const top = liRect.top - navRect.top;
        const width = liRect.width;
        const height = liRect.height;
        
        indicator.style.transform = `translate(${left}px, ${top}px)`;
        indicator.style.width = `${width}px`;
        indicator.style.height = `${height}px`;
    }

    navLinks.forEach(link => {
        // Track hover and focus for the slider
        link.addEventListener('mouseenter', () => updateIndicator(link));
        link.addEventListener('focus', () => updateIndicator(link));

        // 2. Ripple click animation
        link.addEventListener('mousedown', function(e) {
            // Remove existing ripples
            const existingRipples = link.querySelectorAll('.nav-ripple');
            existingRipples.forEach(r => r.remove());

            const ripple = document.createElement('span');
            ripple.className = 'nav-ripple';
            
            const rect = link.getBoundingClientRect();
            // Calculate size based on max dimension for full coverage
            const diameter = Math.max(rect.width, rect.height);
            const radius = diameter / 2;
            
            // Calculate exact click position inside the element
            const x = e.clientX - rect.left - radius;
            const y = e.clientY - rect.top - radius;
            
            ripple.style.width = `${diameter}px`;
            ripple.style.height = `${diameter}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            link.appendChild(ripple);

            // Clean up ripple after animation (600ms)
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });

        // 3. Page transition indicator
        link.addEventListener('click', () => {
            triggerPageTransition();
        });
    });

    // Handle close button clicks to also trigger transition
    document.addEventListener('click', (e) => {
        if (e.target.closest('.close')) {
            triggerPageTransition();
        }
    });

    // Create Page Transition Bar
    const transitionBar = document.createElement('div');
    transitionBar.className = 'page-transition-bar';
    document.body.appendChild(transitionBar);

    function triggerPageTransition() {
        // Reset classes
        transitionBar.classList.remove('complete');
        transitionBar.classList.add('loading');
        
        // SASS transitions usually take ~300ms. We fake a quick loading state.
        setTimeout(() => {
            transitionBar.classList.remove('loading');
            transitionBar.classList.add('complete');
            
            // Hide after complete
            setTimeout(() => {
                transitionBar.classList.remove('complete');
            }, 300);
        }, 300);
    }
})();
