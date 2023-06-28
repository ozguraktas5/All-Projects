const navEl = document.querySelector(".navbar");
let aElements = document.querySelectorAll("li a");
let topLinkEl = document.querySelector(".footer .top-link");
let scrollTimer;



window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navEl.classList.add("fixed-nav");
    navEl.classList.remove("navbar");
    topLinkEl.classList.add("show-link");
    for (let i = 0; i < aElements.length; i++) {
      aElements[i].classList.add("dark-text");
}
    
  } else {
    navEl.classList.add("navbar");
    navEl.classList.remove("fixed-nav");
    topLinkEl.classList.remove("show-link");
    for (let i = 0; i < aElements.length; i++) {
      aElements[i].classList.remove("dark-text");
}
    
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      navEl.classList.remove("fixed-nav");
    }, 50);
  }
});
