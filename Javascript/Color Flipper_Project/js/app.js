const colors = ["red", "yellow", "green", "blue", "magenta", "gray", "brown", "aqua"];


const color = document.querySelector(".color");
const button = document.getElementById("button");

button.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];

});

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}


