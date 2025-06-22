const form = document.querySelector(".task-form");
const input = document.querySelector("#new-task");
const btn = document.querySelector(".btn");
const addList = document.querySelector(".list");
const deleteBtn = document.querySelector(".btn-reset");
const itemList = document.querySelectorAll(".item-list");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const toDo = input.value.trim();

  if (toDo === "") {
    return alert("Заповніть поле");
  }

  const li = document.createElement("li");
  li.className = "item-list";

  const textSpan = document.createElement("span");
  textSpan.textContent = toDo;

  const check = document.createElement("input");
  check.type = "checkbox";
  check.className = "done-task";
  check.name = "task";

  const delBtn = document.createElement("button");
  delBtn.type = "reset";
  delBtn.className = "btn-item";
  delBtn.textContent = "Видалити";

  const div = document.createElement("div");
  div.className = "box-div";
  div.append(check);
  div.append(delBtn);

  check.addEventListener("change", () => {
    if (check.checked) {
      textSpan.style.textDecoration = "line-through";
      textSpan.style.opacity = "0.6";
    } else {
      textSpan.style.textDecoration = "none";
      textSpan.style.opacity = "1";
    }
  });

  li.append(textSpan);
  li.append(div);

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  addList.append(li);
  form.reset();
});

deleteBtn.addEventListener("click", (ev) => {
  console.log(ev.target);
  addList.innerHTML = "";
});
