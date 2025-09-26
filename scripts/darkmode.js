document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('lightmode');
    const buttonText = button.querySelector('p');

    function updateButtonText() {
        if (document.documentElement.classList.contains('dark-mode')) {
            buttonText.textContent = 'lightmode';
        } else {
            buttonText.textContent = 'darkmode';
        }
    }


    const savedMode = localStorage.getItem('theme');

    if (savedMode) {
        document.documentElement.classList.add(savedMode);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.add('light-mode');
    }

    updateButtonText();

    button.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark-mode')) {
            document.documentElement.classList.remove('dark-mode');
            document.documentElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.documentElement.classList.remove('light-mode');
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
        updateButtonText();
    });
});
