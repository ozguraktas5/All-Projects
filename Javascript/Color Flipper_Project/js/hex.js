hex_colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];

const color = document.querySelector(".color");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += hex_colors[getRandomNumber()];
    }

    document.body.style.backgroundColor = hex;
    color.innerText = hex;

})



const getRandomNumber = () => {
    return Math.floor(Math.random() * hex_colors.length);
}