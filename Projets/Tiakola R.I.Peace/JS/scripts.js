const menuHamburger = document.getElementById('menuHamburger');

menuHamburger.addEventListener('click', function() {
    const menuHamburgerChilds = document.querySelectorAll('.hamburger');
    const navbarMenu = document.querySelector('header ul');

    menuHamburger.classList.add('active')
    menuHamburgerChilds.forEach(function(child) {
        child.classList.toggle('hamburger-active');
    })

    if(menuHamburger.classList.contains('active')) {
        navbarMenu.classList.toggle('menu-active')
    }
});




const bioButton = document.getElementById('readMoreBtn')

bioButton.addEventListener('click', function() {
    const bioCard = document.getElementById('bioCard')
    const bioText = document.getElementById('bioText')

    bioCard.classList.toggle('carte-active')
    bioText.classList.toggle('active')
})




document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('.musique audio');
    const endTime = document.querySelector('.end-time');
    const imageContainer = document.querySelector('.music-card .image-container');

    if (audio && imageContainer) {
        audio.addEventListener('play', () => imageContainer.classList.add('playing'));
        audio.addEventListener('pause', () => imageContainer.classList.remove('playing'));
        audio.addEventListener('ended', () => imageContainer.classList.remove('playing'));
    } else {
        console.error('Audio or image container element not found.');
    }

    audio.addEventListener('loadedmetadata', function() {
        const duration = audio.duration;
        endTime.textContent = formatTime(duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});





document.addEventListener('DOMContentLoaded', function() {
    const audios = document.querySelectorAll('audio');

    audios.forEach(audio => {
        audio.addEventListener('play', function() {
            audios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });
});
