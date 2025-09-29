// wacht tot de website is geladen voordat de code word geladen
document.addEventListener('DOMContentLoaded', function () {

  // selecteert de variabele
  const lunchBtn = document.getElementById("lunchBtn");
  const avondBtn = document.getElementById("avondBtn");
  const lunchMenu = document.querySelector(".lunch");
  const avondMenu = document.querySelector(".avond");

  // standaard word het avond menu getoond
  avondMenu.classList.add("active");

  // als lunch knop word aangeklikt krijgt die knop en menu een active en word het andere menu getoond
  lunchBtn.addEventListener("click", () => {
    lunchMenu.classList.add("active");
    avondMenu.classList.remove("active");

    lunchBtn.classList.add("active");
    avondBtn.classList.remove("active");
  });

  // als avond knop word aangeklikt krijgt die knop en menu een active en word het andere menu getoond
  avondBtn.addEventListener("click", () => {
    avondMenu.classList.add("active");
    lunchMenu.classList.remove("active");

    avondBtn.classList.add("active");
    lunchBtn.classList.remove("active");
  });

})