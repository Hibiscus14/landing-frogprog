document.addEventListener('DOMContentLoaded', () => {
    const userProfile = document.getElementById('userProfile');
    const userIcon = document.querySelector('.user-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const userDataForm = document.getElementById('userDataForm');
    const userNameElement = document.getElementById('userName');
    const userIdElement = document.getElementById('userId');
    
    const userData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: ',
        userId: 'id123456789',
        userName: 'Имя пользователя'
    };
    
    function populateUserData() {
        document.getElementById('firstName').value = userData.firstName || '';
        document.getElementById('lastName').value = userData.lastName || '';
        document.getElementById('email').value = userData.email || '';
        document.getElementById('phone').value = userData.phone || '';
        
        userNameElement.textContent = userData.userName || 'Имя пользователя';
        userIdElement.textContent = userData.userId || 'id000000000';
    }
    
    populateUserData();
    
    userIcon.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    document.addEventListener('click', (e) => {
        if (!userIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
    
    userDataForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };
        
        console.log('Отправка данных на сервер:', formData);
        
        userData.firstName = formData.firstName;
        userData.lastName = formData.lastName;
        userData.email = formData.email;
        userData.phone = formData.phone;
        
        alert('Данные успешно сохранены!');
    });
    
    const avatarUploadBtn = document.getElementById('avatarUploadBtn');
    if (avatarUploadBtn) {
        avatarUploadBtn.addEventListener('click', () => {
            alert('Функция загрузки аватара будет доступна в ближайшее время');
        });
    }
});