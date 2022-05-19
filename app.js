const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-btn");
const todoList = document.getElementById("todo-list");
const completeList = document.getElementById("completed-list");

let editBtns = todoList.querySelectorAll(".edit");
let checkBtns = todoList.querySelectorAll(".complete");
let undoBtns = completeList.querySelectorAll(".undo");
let deleteBtns = completeList.querySelectorAll(".delete");

addBtn.addEventListener("click", addToList);

todoInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    addToList();
  }
});

editBtns.forEach((btn) => {
  btn.addEventListener("click", editText);
});

checkBtns.forEach((btn) => {
  btn.addEventListener("click", addToComplete);
});

undoBtns.forEach((btn) => {
  btn.addEventListener("click", undoFn);
});

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", deleteFn);
});

function addToList() {
  if (todoInput.value) {
    createElem(todoList, todoInput.value, "edit", "complete", "pencil", "check");
    todoInput.value = "";
    bindBtns();
  }

}

function editText() {
  let parent = this.parentElement;
  let icon = this.firstElementChild;
  let textElem = parent.querySelector(".text");
  if (textElem.innerText) {
    icon.className == "fa-solid fa-pencil"
      ? (icon.className = "fa-solid fa-floppy-disk")
      : (icon.className = "fa-solid fa-pencil");

    textElem.classList.toggle("editable");
    textElem.toggleAttribute("contenteditable");
  }
}

function addToComplete() {
  let parent = this.parentElement;
  let text = parent.querySelector(".text").innerText;

  if (text) {
    createElem(completeList, text, "undo", "delete", "hand-point-up", "trash");
    bindBtns();
    parent.remove();
  }
}

function undoFn() {
  let parent = this.parentElement;
  let text = parent.querySelector(".text").innerText;

  createElem(todoList, text, "edit", "complete", "pencil", "check");
  bindBtns();

  parent.remove();
}

function deleteFn() {
  let parent = this.parentElement;
  parent.remove();
}

function createElem(parent, text, btnOne, btnTwo, firstIcon, secondIcon) {
  let li = document.createElement("li");
  let div = document.createElement("div");

  let spanOne = document.createElement("span");
  let spanTwo = document.createElement("span");

  let iconOne = document.createElement("i");
  let iconTwo = document.createElement("i");

  li.classList = "item";

  div.classList = "text";
  div.innerText = `${text}`;
  li.appendChild(div);

  spanOne.classList = `${btnOne}`;
  spanOne.setAttribute("title", `${btnOne}`);
  iconOne.classList = `fa-solid fa-${firstIcon}`;
  spanOne.appendChild(iconOne);
  li.appendChild(spanOne);

  spanTwo.classList = `${btnTwo}`;
  spanTwo.setAttribute("title", `${btnTwo}`);
  iconTwo.classList = `fa-solid fa-${secondIcon}`;
  spanTwo.appendChild(iconTwo);
  li.appendChild(spanTwo);

  parent.appendChild(li);
}

function bindBtns() {
  let editBtns = todoList.querySelectorAll(".edit");
  editBtns.forEach((btn) => {
    btn.addEventListener("click", editText);
  });

  let checkBtns = todoList.querySelectorAll(".complete");
  checkBtns.forEach((btn) => {
    btn.addEventListener("click", addToComplete);
  });

  let undoBtns = completeList.querySelectorAll(".undo");
  undoBtns.forEach((btn) => {
    btn.addEventListener("click", undoFn);
  });

  let deleteBtns = completeList.querySelectorAll(".delete");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", deleteFn);
  });
}
