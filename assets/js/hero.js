(function() {
    // 5. Resume button magnetic hover
    // The resume button is an <a> inside the last <p> of .inner in #header
    const resumeP = document.querySelector('#header .inner p:last-of-type');
    if (!resumeP) return;
    
    const resumeBtn = resumeP.querySelector('a');
    if (!resumeBtn) return;

    // We add a mousemove listener to the window but only apply effect if close to the button
    // Alternatively, just listen on the button itself.
    resumeBtn.addEventListener('mousemove', (e) => {
        const rect = resumeBtn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Gentle pull factor for elegance (not too strong)
        const pullX = x * 0.2;
        const pullY = y * 0.2;
        
        resumeBtn.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.02)`;
        resumeBtn.style.textShadow = '0px 2px 10px rgba(0, 255, 255, 0.3)';
    });

    resumeBtn.addEventListener('mouseleave', () => {
        // Reset smoothly
        resumeBtn.style.transform = 'translate(0px, 0px) scale(1)';
        resumeBtn.style.textShadow = 'none';
    });
})();
