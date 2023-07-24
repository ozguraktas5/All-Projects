const submitButton = document.getElementById("button-addon2");
const inputValue = document.querySelector(".form-control");
const textValue = document.querySelector(".text-value");
const clearItems = document.querySelector(".clear-items");
const icons = document.querySelector(".icons");
const editButton = document.querySelector(".edit");
const removeButton = document.querySelector(".remove");
const textButton = document.querySelector(".text-button");




// boş bir array oluşturduk
let todos = [];

// veriler ekrandan kaybolmasın diye localStorage kullanıyoruz
function loadTodosFromLocalStorage() {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
  }
} 

// yeni todo eklemek icin kullanilacak fonksiyon
function addTodo() {
  const newTodoInput = document.querySelector(".form-control");
  const todoText =  newTodoInput.value.trim();

  if (todoText === "") {
    alert("Todo cannot be empty!");
    return;
  }

  // yeni todo'yu todos array'ine ekliyoruz
  todos.push({ text: todoText});

  // ekrandaki listeyi güncelleriz
  renderTodoList();

  // input alanini temizleriz
  newTodoInput.value = "";

  // localStorage'a verileri kaydediyoruz
  saveTodosToLocalStorage();
}

// belirli bir todo'yu silmek için 
function removeTodo(index) {
  todos.splice(index, 1);
  renderTodoList();
  saveTodosToLocalStorage();
}

// LocalStorage'a verileri kaydetmek için kullanilan fonksiyon
function saveTodosToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos))
}

function editTodo(index) {
  const editedText = prompt("Edit the todo", todos[index].text);
  if (editedText !== null) {
    todos[index].text = editedText;
    renderTodoList();
  }
}

// todo listesini ekrana yazdirmak icin kullanilacak fonksiyon
function renderTodoList() {
  const todoList = document.querySelector(".text");
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const listItem = document.createElement("div");
    listItem.classList.add("text-button");

    // todo metnini listeye ekliyoruz
    listItem.textContent = todo.text;

    const icons = document.createElement("div");
    icons.classList.add("icons");

    // edit dugmesini liste ogesine ekliyoruz
    const editButton = document.createElement("button");
    editButton.classList.add("edit")
    editButton.addEventListener("click", () => editTodo(index))

    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-regular", "fa-pen-to-square");

    // remove dügmesini liste ogesine ekliyoruz
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove")
    removeButton.addEventListener("click", () => removeTodo(index));

    const removeIcon = document.createElement("i");
    removeIcon.classList.add("fa-solid", "fa-trash");

    // liste ogesini todo listesine ekliyoruz
    listItem.appendChild(removeButton)
    listItem.appendChild(editButton)
    listItem.appendChild(icons)
    todoList.appendChild(listItem)
    editButton.appendChild(editIcon);
    removeButton.appendChild(removeIcon);
    icons.appendChild(editButton);
    icons.appendChild(removeButton)
  })
}

function clearTodos() {
  todos = [];
  
  renderTodoList();
  saveTodosToLocalStorage();

  if (todos.length === 0) {
    const text = document.querySelector(".text");
    text.innerHTML = "<div style='text-align: center; font-size: 1.2rem; letter-spacing: 2px; '>Empty</div>"
    
  }

}

// sayfa acildiginda localStorage'den verileri yukluyoruz
loadTodosFromLocalStorage();

// todo listesini ekrana yazdiriyoruz
renderTodoList();












