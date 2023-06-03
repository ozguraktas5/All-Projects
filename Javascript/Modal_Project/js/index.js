const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const mdlTransparent = document.querySelector(".modal-transparent");
const mdlContent = document.querySelector(".modal-content");

btnOpen.addEventListener("click", () => {
    mdlTransparent.classList.add("modal-visible");
    mdlContent.classList.add("modal-visible");
    
});

btnClose.addEventListener("click", () => {
    mdlTransparent.classList.remove("modal-visible");
    mdlContent.classList.remove("modal-visible");
})