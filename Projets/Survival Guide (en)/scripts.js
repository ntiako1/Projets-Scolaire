// Scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('introVideo');
    const videoContainer = document.getElementById('videoContainer')

    // Lorsque la vidéo est prête à être lue
    video.addEventListener('canplay', function() {
        // Lancer la vidéo automatiquement
        video.play();

        // Mettre en pause la vidéo après 1min (60000 millisecondes)
        setTimeout(function() {
            video.pause();
        }, 69000);

        // Masquer la vidéo après 1min & 1s secondes (61000 millisecondes)
        setTimeout(function() {
            videoContainer.style.display = 'none';
        }, 69000); // Modifier le délai selon tes besoins
    });

    // Lorsque la vidéo se termine
    video.addEventListener('ended', function() {
        // Cacher la vidéo
        videoContainer.style.display = 'none';

        // Afficher le contenu principal
        document.querySelector('.content').style.display = 'block';
    });
});
