(function() {
    // 1. Inject DOM Elements
    const bgElement = document.getElementById('bg');
    if (!bgElement) return;

    const container = document.createElement('div');
    container.id = 'premium-bg-container';

    // Blobs
    const blob1 = document.createElement('div');
    blob1.className = 'bg-blob bg-blob-1';
    const blob2 = document.createElement('div');
    blob2.className = 'bg-blob bg-blob-2';
    const blob3 = document.createElement('div');
    blob3.className = 'bg-blob bg-blob-3';

    // SVG Abstract Curves
    const svgContainer = document.createElement('div');
    svgContainer.className = 'bg-svg-container';
    svgContainer.innerHTML = `
        <svg class="bg-curves" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path class="curve curve-1" d="M-10,50 Q25,20 50,50 T110,50" fill="none" />
            <path class="curve curve-2" d="M-10,70 Q30,100 60,60 T110,30" fill="none" />
            <path class="curve curve-3" d="M-10,30 Q40,-10 70,40 T110,80" fill="none" />
        </svg>
    `;

    // SVG Noise Filter
    const noiseFilter = document.createElement('div');
    noiseFilter.className = 'bg-noise';

    // Vignette
    const vignette = document.createElement('div');
    vignette.className = 'bg-vignette';

    container.appendChild(blob1);
    container.appendChild(blob2);
    container.appendChild(blob3);
    container.appendChild(svgContainer);
    container.appendChild(vignette);
    container.appendChild(noiseFilter);

    bgElement.appendChild(container);

})();
