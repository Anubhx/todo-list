const taskInput = document.querySelector("#task");
const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const deleteAllBtn = document.createElement("button");
deleteAllBtn.textContent = "Delete All";
deleteAllBtn.style.marginLeft = "10px";

addTaskBtn.parentNode.insertBefore(deleteAllBtn, addTaskBtn.nextSibling);

addTaskBtn.addEventListener("mouseover", function() {
  addTaskBtn.style.backgroundColor = "lightgray";
});

addTaskBtn.addEventListener("mouseout", function() {
  addTaskBtn.style.backgroundColor = "";
});

deleteAllBtn.addEventListener("mouseover", function() {
  deleteAllBtn.style.backgroundColor = "lightgray";
});

deleteAllBtn.addEventListener("mouseout", function() {
  deleteAllBtn.style.backgroundColor = "";
});

addTaskBtn.addEventListener("click", function(e) {
  e.preventDefault();
  if (!taskInput.value) return;
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskInput.value}</span>
    <button>Delete</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
  const span = li.querySelector("span");
  span.addEventListener("click", function() {
    span.classList.toggle("completed");
  });
  const deleteBtn = li.querySelector("button");
  deleteBtn.addEventListener("click", function() {
    li.remove();
  });
});

deleteAllBtn.addEventListener("click", function() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});
