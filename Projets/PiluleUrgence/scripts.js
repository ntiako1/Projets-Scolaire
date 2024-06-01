document.addEventListener('DOMContentLoaded', (event) => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('header nav ul');

    window.addEventListener('scroll', () => {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling Down
            navbar.classList.remove('scrolled-up');
            navbar.classList.add('scrolled-down');
        } else {
            // Scrolling Up
            navbar.classList.remove('scrolled-down');
            navbar.classList.add('scrolled-up');
        }

        lastScrollTop = currentScrollTop;
    });
});
