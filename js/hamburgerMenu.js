document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburgerMenu');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });
});
