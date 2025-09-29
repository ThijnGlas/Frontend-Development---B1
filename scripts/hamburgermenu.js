document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");
    const header = document.querySelector("header");

    menuButton.addEventListener("click", () => {
      menu.classList.toggle("toonMenu");
      menuButton.classList.toggle("open");
      header.classList.toggle("menuOpen");
    });
});