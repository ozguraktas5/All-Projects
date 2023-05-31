const links = document.querySelector(".links")
const barButton = document.querySelector(".bars");

barButton.addEventListener("click", () => {
    links.classList.toggle("show-links");
});