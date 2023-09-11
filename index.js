// JavaScript to toggle between dark and light themes
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    const themeStyleIcon = document.getElementById('theme-toggle-icon');

    themeToggle.addEventListener('click', () => {
        if (themeStyle.getAttribute('href') === 'light-theme.css') {
            themeStyle.setAttribute('href', 'dark-theme.css');
            themeStyleIcon.setAttribute('src', 'sun-icon.svg');
        } else {
            themeStyle.setAttribute('href', 'light-theme.css');
            themeStyleIcon.setAttribute('src', 'moon-icon.svg');
        }
    });
});
