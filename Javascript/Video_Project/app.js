const button = document.querySelector(".switch-button");
const video = document.querySelector(".myvideo")

button.addEventListener("click", () => {
    if (!button.classList.contains("slide")){
        button.classList.add("slide")
        video.pause()
    }
    else{
        button.classList.remove("slide")
        video.play()
    }
})

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
});