let count = 0;

const number = document.getElementById("number");
const btnsAll = document.querySelectorAll("#btn");

btnsAll.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(e.target.innerText == "INCREASE"){
            count+=1;
            number.textContent = count;
        }
        else if(e.target.innerText == "DECREASE"){
            count-=1;
            number.textContent = count;
        }
        else{
            count = 0
            number.innerText = count;
        }
        if(count > 0){
            number.style.color = "green";
        }
        if(count < 0){
            number.style.color = "red";
        }
        if(count == 0){
            number.style.color = "black";
        }
    });
});

