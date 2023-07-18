const submitButton = document.getElementById("button-addon2");
const inputValue = document.querySelector(".form-control");
const textValue = document.querySelector(".text-value");
const clearItems = document.querySelector(".clear-items");
const icons = document.querySelector(".icons");
const editButton = document.querySelector(".edit");
const removeButton = document.querySelector(".remove");

submitButton.addEventListener("click", () => {
  let inputText = inputValue.value;

  let newDiv = `
        <div class="text-button">
          <div class="text-value">${inputText}</div>
          <div class="icons">
            <button><i class="fa-regular fa-pen-to-square"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
    `;

  let text = document.querySelector(".text");
  text.innerHTML += newDiv;

  document.querySelector(".form-control").value = "";
});

clearItems.addEventListener("click", () => {
  let text = document.querySelector(".text");
  text.innerHTML = "";
});

editButton.addEventListener("click", () => {

});

removeButton.addEventListener("click", () => {
    
});
