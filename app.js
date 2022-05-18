const toDoInput = document.getElementById("todo-input");
const toDoBtn = document.getElementById("todo-btn");
const toDoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");

const todoItems = document.querySelectorAll(".todo-item");
const editBtns = document.querySelectorAll(".edit");
const completeBtns = document.querySelectorAll(".completed");
const undoBtns = document.querySelectorAll(".undo");
const deleteBtns = document.querySelectorAll(".deleted");

toDoBtn.addEventListener("click", addToList);

toDoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addToList();
  }
});

completeBtns.forEach((complete) => {
  complete.addEventListener("click", addToComplete);
});

undoBtns.forEach((undo) => {
  undo.addEventListener("click", undoFn);
});

deleteBtns.forEach((del) => {
  del.addEventListener("click", () => {
    del.parentElement.remove();
  });
});

// utilities function
let i = 1;
function addToList() {
  if (toDoInput.value) {
    if (toDoList.lastElementChild) {
      let number = toDoList.lastElementChild.querySelector(".number").innerText;
      i = Number(number) + 1;
    }
    toDoList.innerHTML += `<li class="todo-item">
    <span class="number">${i < 10 ? "0" + i++ : i++}</span>
    <div class="todo-text">${toDoInput.value}</div>
    <span class="completed" title="complete"><i class="fa-solid fa-check"></i></span>
    </li>`;
  }

  let item = toDoList.lastChild;

  let completeBtn = item.querySelector(".completed");
  completeBtn.addEventListener("click", addToComplete);
}

let k = 1;
function addToComplete() {
  let parent = this.parentElement;
  let text = parent.querySelector(".todo-text").innerText;

  if (completedList.lastElementChild) {
    let number =
      completedList.lastElementChild.querySelector(".number").innerText;
    k = Number(number) + 1;
  }
  completedList.innerHTML += `<li class="completed-item">
  <span class="number">${k < 10 ? "0" + k++ : k++}</span>
  <div class="completed-text">${text}</div>
  <span class="undo" title="undo"><i class="fas fa-hand-point-up"></i></span>
  </li>`;

  let item = completedList.lastChild;

  let undoBtn = item.querySelector(".undo");
  undoBtn.addEventListener("click", undoFn);
  parent.remove();
}

function undoFn() {
  let parent = this.parentElement;
  let text = this.previousElementSibling.innerText;
  toDoList.innerHTML += `<li class="todo-item">
    <span class="number">01</span>
    <div class="todo-text">${text}</div>
    <span class="completed" title="complete"><i class="fa-solid fa-check"></i></span>
    </li>`;

  let item = toDoList.lastChild;

  let completeBtn = item.querySelector(".completed");
  completeBtn.addEventListener("click", addToComplete);

  parent.remove();
}

// editBtns.forEach((edit) => {
//   edit.addEventListener("click", function () {
//     edit.previousElementSibling.setAttribute("contenteditable", "true");
//     edit.previousElementSibling.className += " editable-text";
//   });
// });

// window.addEventListener("click", (e) => {
//   if (e.target.parentElement != edit.parentElement) {
//     edit.previousElementSibling.setAttribute("contenteditable", "false");
//     edit.previousElementSibling.className = "todo-text";
//   }
// });
