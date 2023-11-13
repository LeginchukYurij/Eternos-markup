let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".main-navigation ");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");

    if (menu) {
      menu.classList.toggle("active");
    }
  });
}

