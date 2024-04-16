
//sjekker om knappen er trykket og caller verdien i tekst elemnetet.
function addTodo() {
   event.preventDefault();

  console.log("is button clicked?");

  const taskInput = document.querySelector("#taskInput").value;
  console.log(taskInput);

  const newListItems = document.createElement("li");
  console.log(newListItems);

  newListItems.textContent = taskInput;

//henter ul elmentet
  const taskList = document.querySelector("#taskList");
  console.log(taskList);

  newListItems.appendChild(taskList);
}

const taskButton = document.querySelector("#taskButton");
console.log(taskButton);

taskButton.addEventListener("click", addTodo);