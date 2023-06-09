const myMenuEl = document.querySelector(".my-menu");
const yemekEl = document.querySelectorAll(".yemek");

myMenuEl.addEventListener("click", (e) => {
    if(e.target.classList.contains("product")){
        myMenuEl.querySelector(".text-success").classList.remove("text-success");
        e.target.classList.add("text-success")

        const list_item = e.target.getAttribute("data-menu");
        /* console.log(list_item) */
        yemekEl.forEach((item) => {
            if(list_item == "all" || item.classList.contains(list_item)){
                item.classList.remove("d-none")
            }
            else{
                item.classList.add("d-none");
            }
        });
    }

});



