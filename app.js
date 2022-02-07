let soundeffect = new Audio("/sound/maus.mp3");
document.addEventListener("click", () => {
    soundeffect.cloneNode().play();
});