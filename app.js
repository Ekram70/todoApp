const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-btn");
const todoList = document.getElementById("todo-list");
const completeList = document.getElementById("completed-list");

let checkBtns = document.querySelectorAll(".completed");
let undoBtns = document.querySelectorAll(".undo");
let deleteBtns = document.querySelectorAll(".deleted");

addBtn.addEventListener("click", addToList);

checkBtns.forEach((btn) => {
  btn.addEventListener("click", addToComplete);
});

undoBtns.forEach((btn) => {
  btn.addEventListener("click", undoFn);
});

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", deleteFn);
});

let todoNum = 1;
function addToList() {
  if (todoList.lastElementChild) {
    let num = todoList.lastElementChild.firstElementChild.innerText;
    todoNum = 1 + Number(num);
  }

  if (todoInput.value) {
    todoList.innerHTML += `
    <li class="todo-item">
      <span class="number">${todoNum < 10 ? "0" + todoNum++ : todoNum++}</span>
      <div class="todo-text">${todoInput.value}</div>
      <span class="edit" title="edit">
        <i class="fa-solid fa-pencil"></i>
      </span>
      <span class="completed" title="complete">
        <i class="fa-solid fa-check"></i>
      </span>
    </li>
    `;
  }

  let checkBtns = document.querySelectorAll(".completed");
  checkBtns.forEach((btn) => {
    btn.addEventListener("click", addToComplete);
  });
}

let completeNum = 1;
function addToComplete() {
  if (completeList.lastElementChild) {
    let num = completeList.lastElementChild.firstElementChild.innerText;
    completeNum = 1 + Number(num);
  }

  let parent = this.parentElement;
  let text = parent.querySelector(".todo-text").innerText;

  completeList.innerHTML += `
  <li class="completed-item">
    <span class="number">
    ${completeNum < 10 ? "0" + completeNum++ : completeNum++}
    </span>
    <div class="completed-text">${text}</div>
    <span class="undo" title="undo">
      <i class="fas fa-hand-point-up"></i>
    </span>
    <span class="deleted" title="delete">
      <i class="fas fa-trash"></i>
    </span>
  </li>
  `;

  let undoBtns = document.querySelectorAll(".undo");
  undoBtns.forEach((btn) => {
    btn.addEventListener("click", undoFn);
  });

  let deleteBtns = document.querySelectorAll(".deleted");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", deleteFn);
  });

  parent.remove();
}

let undoNum = 1;
function undoFn() {
  if (todoList.lastElementChild) {
    let num = todoList.lastElementChild.firstElementChild.innerText;
    undoNum = 1 + Number(num);
  }

  let parent = this.parentElement;
  let text = parent.querySelector(".completed-text").innerText;

  todoList.innerHTML += `
  <li class="todo-item">
    <span class="number">${undoNum < 10 ? "0" + undoNum++ : undoNum++}</span>
    <div class="todo-text">${text}</div>
    <span class="edit" title="edit">
      <i class="fa-solid fa-pencil"></i>
    </span>
    <span class="completed" title="complete">
      <i class="fa-solid fa-check"></i>
    </span>
  </li>
  `;

  let checkBtns = document.querySelectorAll(".completed");
  checkBtns.forEach((btn) => {
    btn.addEventListener("click", addToComplete);
  });

  parent.remove();
}

function deleteFn() {
  let parent = this.parentElement;

  parent.remove();
}
