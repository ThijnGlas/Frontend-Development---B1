// wacht tot de website is geladen voordat de code word geladen
document.addEventListener('DOMContentLoaded', function () {

  // selecteert de variabele
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");
  const header = document.querySelector("header");

  // toggled het menu zodat het open is
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("toonMenu");
    menuButton.classList.toggle("open");
    header.classList.toggle("menuOpen");
  });
});