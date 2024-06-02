document.querySelector('.menu-mobile').addEventListener('click', () => {
    document.querySelector('.menu-mobile-dropdown').classList.toggle('show');
});
document.querySelectorAll('.menu-mobile-dropdown a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-mobile-dropdown').classList.remove('show');
    });
});

