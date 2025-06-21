const form = document.querySelector(".task-form");
const input = document.querySelector("#new-task");
const btn = document.querySelector(".btn");
const addList = document.querySelector(".list");
const deleteBtn = document.querySelector(".btn-reset");
const itemList = document.querySelectorAll(".item-list");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const toDo = input.value.trim();
  const li = document.createElement("li");
  li.className = "item-list";
  const check = document.createElement("input");
  const delBtn = document.createElement("button");
  delBtn.type = "reset";
  delBtn.className = "btn-item";
  delBtn.textContent = "Видалити";
  check.type = "checkbox";
  check.className = "done-task";
  check.name = "task";
  if (toDo !== "") {
    li.append(toDo + " ");
    li.append(check);
    li.append(delBtn);
  } else return alert("Заповніть поле");
  delBtn.addEventListener("click", () => {
    li.remove();
  });
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
  addList.append(li);
  form.reset();
});
