const translations = {
    uk: {
        title: "Geometry Block 2.3",
        android_header: "Для Android",
        android_desc: "Версія 2.3 (.apk файл)",
        pc_header: "Для PC (Windows)",
        pc_desc: "Версія 2.3",
        download_btn: "Скачати",
    },
    en: {
        title: "Geometry Block 2.3",
        android_header: "For Android",
        android_desc: "Version 2.3 (.apk file)",
        pc_header: "For PC (Windows)",
        pc_desc: "Version 2.3",
        download_btn: "Download",
    },
    ru: {
        title: "Geometry Block 2.3",
        android_header: "Для Android",
        android_desc: "Версия 2.3 (.apk файл)",
        pc_header: "Для PC (Windows)",
        pc_desc: "Версия 2.3",
        download_btn: "Скачать",
    }
};

const langButtons = document.querySelectorAll('.lang-btn');
const translatableElements = document.querySelectorAll('.translate');

function changeLanguage(lang) {
    // Перекладаємо всі елементи
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // Оновлюємо активну кнопку
    langButtons.forEach(button => {
        button.classList.remove('active');
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        }
    });
}

// Додаємо обробник подій для кожної кнопки
langButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const lang = event.target.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Встановлюємо мову за замовчуванням при завантаженні сторінки
changeLanguage('uk');