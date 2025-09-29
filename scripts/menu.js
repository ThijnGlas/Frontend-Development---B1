document.addEventListener('DOMContentLoaded', function () {

    const lunchBtn = document.getElementById("lunchBtn");
    const avondBtn = document.getElementById("avondBtn");
    const lunchMenu = document.querySelector(".lunch");
    const avondMenu = document.querySelector(".avond");
    
    avondMenu.classList.add("active");

    lunchBtn.addEventListener("click", () => {
      lunchMenu.classList.add("active");
      avondMenu.classList.remove("active");
    
      lunchBtn.classList.add("active");
      avondBtn.classList.remove("active");
    });
    
    avondBtn.addEventListener("click", () => {
      avondMenu.classList.add("active");
      lunchMenu.classList.remove("active");
    
      avondBtn.classList.add("active");
      lunchBtn.classList.remove("active");
    });

})