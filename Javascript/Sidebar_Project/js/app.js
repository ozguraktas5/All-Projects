const btnBars = document.querySelector(".bars");
const closeBars = document.querySelector(".sidebar .sidebar-left-up .btn-close");
const sideBars = document.querySelector(".sidebar");

btnBars.addEventListener("click", () => {
    sideBars.classList.toggle("show-sidebar")
});

closeBars.addEventListener("click", () => {
    sideBars.classList.remove("show-sidebar")
});