// wacht tot de website is geladen voordat de code word geladen
document.addEventListener('DOMContentLoaded', function () {

    // selecteert de variabele
    const taalLi = document.querySelector('.taal');
    const taalLink = taalLi.querySelector('a');
    const dropdown = taalLi.querySelector('.dropdown');

    // als er opgeklikt word komt de taal dropdown geopend 
    taalLink.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("toonDropdown");
        taalLi.classList.toggle("toonDropdown");
    });

    // luistert naar click in het hele document en wanneer het buiten het taal li gedeelte is gaat hij weer dicht
    document.addEventListener('click', function (e) {
        if (!taalLi.contains(e.target)) {
            dropdown.classList.remove("toonDropdown");
            taalLi.classList.remove("toonDropdown");
        }
    });
});
