const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");
const txt1 = document.querySelector(".text1");
const txt2 = document.querySelector(".text2");
const txt3 = document.querySelector(".text3");

btn1.addEventListener("click", () => {
    txt1.classList.add("active");
    txt2.classList.remove("active");
    txt3.classList.remove("active");
    btn1.classList.add("aliceblue");
    btn2.classList.remove("aliceblue");
    btn3.classList.remove("aliceblue");
})

btn2.addEventListener("click", () => {
    txt2.classList.add("active");
    txt1.classList.remove("active");
    txt3.classList.remove("active");
    btn1.classList.remove("aliceblue");
    btn2.classList.add("aliceblue");
    btn3.classList.remove("aliceblue");
})

btn3.addEventListener("click", () => {
    txt3.classList.add("active");
    txt1.classList.remove("active");
    txt2.classList.remove("active");
    btn1.classList.remove("aliceblue");
    btn2.classList.remove("aliceblue");
    btn3.classList.add("aliceblue");
})