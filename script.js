
const toDoTask = [];

//sjekker om knappen er trykket og caller verdien i tekst elemnetet.
function addTodo() {
   event.preventDefault();

  console.log("is button clicked?");



  const taskInput = document.querySelector("#taskInput").value;
  console.log(taskInput);

  toDoTask.push(taskInput);
  console.log(toDoTask);

  for (
    let index = 0;
    index < toDoTask.length;
    index = index + 1
) {

  const newTodoTask = toDoTask[index]


  const newListItems = document.createElement("li");
  console.log(newListItems);


  newListItems.textContent = taskInput;
 }

}



const taskButton = document.querySelector("#taskButton");
console.log(taskButton);

taskButton.addEventListener("click", addTodo); 

