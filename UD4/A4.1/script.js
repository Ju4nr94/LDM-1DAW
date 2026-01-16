const audio = document.getElementById("player");
const btnPlayPause = document.getElementById("pause");
const btnBefore = document.getElementById("before");
const btnAfter = document.getElementById("after");
const progressBar = document.querySelector(".progress-bar");

// SVGs para alternar
const iconPlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="M11.596 8.697l-6.363 3.692c-.52.302-1.233-.043-1.233-.696V4.308c0-.653.713-.998 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.392z"/>
</svg>
`;

const iconPause = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
</svg>
`;

// PLAY / PAUSE
btnPlayPause.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        btnPlayPause.innerHTML = iconPause;
    } else {
        audio.pause();
        btnPlayPause.innerHTML = iconPlay;
    }
});

// RETROCEDER 5s
btnBefore.addEventListener("click", () => {
    audio.currentTime -= 5;
});

// AVANZAR 5s
btnAfter.addEventListener("click", () => {
    audio.currentTime += 5;
});

// BARRA DE PROGRESO
audio.addEventListener("timeupdate", () => {
    const porcentaje = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = porcentaje + "%";
});
