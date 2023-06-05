const cardsAll = document.querySelectorAll(".card");
const cardDownAll = document.querySelectorAll(".card .card-down")
const btnPlus = document.querySelectorAll(".click");
const btnClickPlus = document.querySelectorAll(".click-plus");
const btnClickMinus = document.querySelectorAll(".click-minus");

for (let i = 0; i < cardsAll.length; i++) {
    btnPlus[i].addEventListener("click", () => {
        btnClickPlus[i].classList.toggle("none")
        btnClickPlus[i].classList.remove("click-plus")
        
        cardDownAll[i].classList.toggle("show");
        cardDownAll[i].classList.toggle("card-down");
    })
}
 
