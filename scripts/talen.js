document.addEventListener('DOMContentLoaded', function () {
    const taalLi = document.querySelector('.taal');
    const taalLink = taalLi.querySelector('a'); 
    const dropdown = taalLi.querySelector('.dropdown');


    taalLink.addEventListener("click", (e) => {
        e.preventDefault(); 
        dropdown.classList.toggle("toonDropdown");
        taalLi.classList.toggle("toonDropdown");
    });


    document.addEventListener('click', function(e) {
        if (!taalLi.contains(e.target)) {
            dropdown.classList.remove("toonDropdown");
            taalLi.classList.remove("toonDropdown");
        }
    });
});
