document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leadForm');
    const messageBox = document.getElementById('formMessage');
    const phoneInput = form.phone;
    IMask(phoneInput, {
        mask: '+{7} (000) 000-00-00'
    });
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const phone = form.phone.value.trim();

        if (!name || !phone) {
            showMessage("Пожалуйста, заполните все поля", "error");
            return;
        }

        if (!isValidPhone(phone)) {
            showMessage("Введите корректный номер телефона", "error");
            return;
        }

        try {
            const response = await fetch("https://api-domain.com/api/Lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, phone })
            });

            if (!response.ok) throw new Error("Ошибка при отправке формы");

            showMessage("Заявка успешно отправлена!", "success");
            form.reset();
        } catch (error) {
            showMessage("Ошибка! Повторите позже", "error");
            console.error(error);
        }
    });

    function showMessage(text, type) {
        messageBox.textContent = text;
        messageBox.className = `form-message ${type}`;
    }

    function isValidPhone(phone) {
        const cleaned = phone.replace(/\D/g, '');
        return /^(\+7|7|8)?\d{10}$/.test(cleaned);
    }
});
