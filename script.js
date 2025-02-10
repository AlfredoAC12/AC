document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playButton = document.getElementById("playPause");
    const playIcon = document.getElementById("playIcon");

    playButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playIcon.src = "Arctic-Monkeys-Logo.png"; // Asegúrate de que el archivo existe en la misma carpeta
        } else {
            audio.pause();
            playIcon.src = "Arctic-Monkeys-Logo.png";
        }
    });

    // Cambiar el icono si el audio se detiene solo (cuando termina)
    audio.addEventListener("ended", () => {
        playIcon.src = "Arctic-Monkeys-Logo.png";
    });
});
