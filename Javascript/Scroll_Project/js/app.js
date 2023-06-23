const navEl = document.querySelector(".navbar");
var scrollTimer;

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navEl.classList.add("fixed-nav");
    navEl.classList.remove("navbar");
  } else {
    navEl.classList.add("navbar");
    navEl.classList.remove("fixed-nav");
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      navEl.classList.remove("fixed-nav");
    }, 50);
  }
});
