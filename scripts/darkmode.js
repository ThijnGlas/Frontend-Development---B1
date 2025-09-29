// wacht tot de website is geladen voordat de code word geladen
document.addEventListener('DOMContentLoaded', function () {

    // roept variabele aan
    const button = document.getElementById('lightmode');
    const buttonText = button.querySelector('p');

    // als de website theme dark is word de tekst button aangepast
    function updateButtonText() {
        if (document.documentElement.classList.contains('dark-mode')) {
            buttonText.textContent = 'lightmode';
        } else {
            buttonText.textContent = 'darkmode';
        }
    }

    // haalt opgeslagen thema uit de localstorage 
    const savedMode = localStorage.getItem('theme');

    // controleert of er een opgeslagen thema is
    if (savedMode) {
        document.documentElement.classList.add(savedMode);
    }
    // als er geen opgeslagen thema is controleert hij de systeem voorkeuren
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.add('light-mode');
    }

    // zorgt ervoor dat de tekst word geupdate
    updateButtonText();

    // zorgt ervoor dat wanneer je op de knop klikt het thema word aangepast
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
