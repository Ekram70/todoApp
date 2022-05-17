const toDoInput = document.getElementById("todo-input");
const toDoBtn = document.getElementById("todo-btn");
const toDoList = document.getElementById("todo-list");

const editBtns = document.querySelectorAll(".edit");

toDoBtn.addEventListener("click", addToList);
toDoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addToList();
  }
});
let i = 1;

function addToList() {
  if (toDoInput.value) {
    toDoList.innerHTML += `<li class="todo-item">
    <span class="number">${i < 10 ? "0" + i++ : i++}</span>${
      toDoInput.value
    }<span class="edit" title="edit"><i class="fa-solid fa-pencil"></i> </span
    ><span class="completed" title="complete"><i class="fa-solid fa-check"></i> </span>
  </li>`;
  }
}

editBtns.forEach((edit) => {
  edit.addEventListener("click", function () {
    edit.previousElementSibling.setAttribute("contenteditable", "true");
    edit.previousElementSibling.className += " editable-text";
  });
});

window.addEventListener("click", (e) => {
  editBtns.forEach((edit) => {
    if (e.target != edit.previousElementSibling) {
    edit.previousElementSibling.setAttribute("contenteditable", "false");
    edit.previousElementSibling.className = "todo-text";
    }
  });
  // if (e.target != edit.previousElementSibling) {
  //   edit.previousElementSibling.setAttribute("contenteditable", "false");
  //   edit.previousElementSibling.className = "todo-text";
  // }
});
