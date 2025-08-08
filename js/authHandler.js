document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const loginForm = document.getElementById('loginForm');
    const userProfile = document.getElementById('userProfile');
    const userIcon = document.querySelector('.user-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    });

    modalOverlay.addEventListener('click', () => {
        loginModal.classList.remove('active');
        document.body.style.overflow = ''; 
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        loginModal.classList.remove('active');
        document.body.style.overflow = '';
        
        loginBtn.style.display = 'none';
        userProfile.style.display = 'block';
    });

    userIcon.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
        if (!userIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});