function addTodo() {
   event.preventDefault();

  console.log("is button clicked?");

  const taskInput = document.querySelector("#taskInput").value;
  console.log(taskInput);

  const newListItems = document.createElement("li");
  console.log(newListItems);

  newListItems.textContent = taskInput;
}

const taskButton = document.querySelector("#taskButton");
console.log(taskButton);

taskButton.addEventListener("click", addTodo);