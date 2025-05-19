document.addEventListener('DOMContentLoaded', () => {
    const scrollButtons = document.querySelectorAll('.scroll-to-trial');
    const target = document.querySelector('#trial');

    if (!target) return;

    scrollButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
