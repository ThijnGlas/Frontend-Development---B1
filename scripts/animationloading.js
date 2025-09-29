// wacht tot de website is geladen voordat de code word geladen
document.addEventListener('DOMContentLoaded', function () {
    // laad de elementen op die geanimeerd moeten worden
    const elements = document.querySelectorAll('.index main section:nth-child(3) > section > h3, .index main section:nth-child(3) > section > h4, .index main section:nth-child(3) i, .index main section:nth-child(3) article');

    // de observer opties die ik heb aangepast zodat ze pas kijken vanaf een bepaald punt
    const observerOptions = {
        root: null, // root is het viewport
        rootMargin: "0px 0px -85px 0px", // start op de onderkant pas hoger
        threshold: 0.8 // 80% van het element moet in beeld zijn voordat de animatie begint
    };

    // voor elk element doet hij de functie
    function observerCallback(entries, observer) {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // voegt de class loaded toe aan element na een korte vertragings
                setTimeout(() => {
                    entry.target.classList.add('loaded');
                }, i * 100);
                // stopt met observeren na het element geladen is
                observer.unobserve(entry.target);
            }
        });
    }

    // Maak een nieuwe Intersection Observer aan met de functie en opties
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observeert elk geselecteerd element
    elements.forEach((el) => observer.observe(el));
});


// bron: https://codepen.io/daltonw/pen/YzpbWvW?editors=1010