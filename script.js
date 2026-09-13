document.addEventListener("DOMContentLoaded", () => {
    const stage = document.querySelector(".stage");
    const openBtn = document.getElementById("openBtn");
    const speechBubbles = document.querySelectorAll(".speech-bubble");
    const adventureBtn = document.getElementById("adventureBtn");
    const adventureSection = document.getElementById("adventureSection");
    
    // Audio elements
    const bgMusic = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");
    const arcticMusic = document.getElementById("arcticMusic");
    const jungleMusic = document.getElementById("jungleMusic");
    const fairyMusic = document.getElementById("fairyMusic");
    const pandoraMusic = document.getElementById("pandoraMusic");

    if (bgMusic) bgMusic.volume = 0.5;
    if (arcticMusic) arcticMusic.volume = 0.5;
    if (jungleMusic) jungleMusic.volume = 0.5;
    if (fairyMusic) fairyMusic.volume = 0.5;
    if (pandoraMusic) pandoraMusic.volume = 0.5;

    // Open Curtains Trigger
    openBtn.addEventListener("click", () => {
        stage.classList.add("open");
        openBtn.style.opacity = "0";
        setTimeout(() => {
            openBtn.style.display = "none";
        }, 500);

        setTimeout(() => {
            speechBubbles.forEach(bubble => bubble.classList.add("show"));
            if (adventureBtn) {
                adventureBtn.classList.add("show");
            }
        }, 800);

        bgMusic.play().catch(error => {
            console.log("Audio autoplay was prevented:", error);
        });
    });

    // Floating Music Button Toggle
    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.classList.remove("muted");
            musicBtn.textContent = "🎵";
        } else {
            bgMusic.pause();
            musicBtn.classList.add("muted");
            musicBtn.textContent = "🔇";
        }
    });

    // Reveal Section 2 Menu
    if (adventureBtn) {
        adventureBtn.addEventListener("click", () => {
            adventureSection.classList.add("active");
            adventureSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// Theme Selector & Music Manager
function openTheme(themeKey) {
    const bgMusic = document.getElementById("bgMusic");
    const arcticMusic = document.getElementById("arcticMusic");
    const jungleMusic = document.getElementById("jungleMusic");
    const fairyMusic = document.getElementById("fairyMusic");
    const pandoraMusic = document.getElementById("pandoraMusic");

    if (bgMusic) bgMusic.pause();
    if (arcticMusic) arcticMusic.pause();
    if (jungleMusic) jungleMusic.pause();
    if (fairyMusic) fairyMusic.pause();
    if (pandoraMusic) pandoraMusic.pause();

    if (themeKey === 'arctic') {
        if (arcticMusic) { arcticMusic.currentTime = 0; arcticMusic.play().catch(e => {}); }
        document.getElementById("arcticView").classList.add("active");
    } 
    else if (themeKey === 'dino') {
        if (jungleMusic) { jungleMusic.currentTime = 0; jungleMusic.play().catch(e => {}); }
        document.getElementById("jungleView").classList.add("active");
    }
    else if (themeKey === 'fairy') { // Opens Date Night
        if (fairyMusic) { fairyMusic.currentTime = 0; fairyMusic.play().catch(e => {}); }
        document.getElementById("dateNightView").classList.add("active");
    }
    else if (themeKey === 'pandora') { // Opens Razones por las cuales te Amo
        if (pandoraMusic) { pandoraMusic.currentTime = 0; pandoraMusic.play().catch(e => {}); }
        document.getElementById("reasonsView").classList.add("active");
    }
}

// Close Functions
function closeArcticView() {
    document.getElementById("arcticView").classList.remove("active");
    stopAllThematicAudio();
}

function closeJungleView() {
    document.getElementById("jungleView").classList.remove("active");
    stopAllThematicAudio();
}

function closeDateNightView() {
    document.getElementById("dateNightView").classList.remove("active");
    stopAllThematicAudio();
}

function closeReasonsView() {
    document.getElementById("reasonsView").classList.remove("active");
    stopAllThematicAudio();
}

function stopAllThematicAudio() {
    const bgMusic = document.getElementById("bgMusic");
    const arcticMusic = document.getElementById("arcticMusic");
    const jungleMusic = document.getElementById("jungleMusic");
    const fairyMusic = document.getElementById("fairyMusic");
    const pandoraMusic = document.getElementById("pandoraMusic");

    if (arcticMusic) arcticMusic.pause();
    if (jungleMusic) jungleMusic.pause();
    if (fairyMusic) fairyMusic.pause();
    if (pandoraMusic) pandoraMusic.pause();

    if (bgMusic) {
        bgMusic.play().catch(e => {});
    }
}
function openFullscreenPhoto() {
    const lightbox = document.getElementById("photoLightbox");
    if (lightbox) {
        lightbox.classList.add("active");
    }
}

// Close Fullscreen Lightbox
function closeFullscreenPhoto() {
    const lightbox = document.getElementById("photoLightbox");
    if (lightbox) {
        lightbox.classList.remove("active");
    }
}