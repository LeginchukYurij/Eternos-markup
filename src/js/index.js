let vh = window.innerHeight * 0.01;

function setVhProperty() {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  const headerHeight = document.querySelector("header").offsetHeight;
  document.documentElement.style.setProperty("--headerH", `${headerHeight}px`);
}

setVhProperty();

window.addEventListener("resize", () => {
  setVhProperty();
});

import "./import/modules";
import "./import/components";