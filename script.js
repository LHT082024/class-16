//erklærer en array hvor vi kan lagre taskene til todolisten
const toDoTask = [];

//erklærer funksjonen "addTodo" som vi caller på når vi legger til en task til todo listen
function addTodo() {
   event.preventDefault();

// adder html id "taskInput" og dens verdi til javascript
  const taskInput = document.querySelector("#taskInput").value;

  //adder tasken til todolisten 
  toDoTask.push(taskInput);
  console.log(toDoTask);

// adder html id "taskListContainer" til javascript
  const taskListContainer =document.querySelector("#taskListContainer");
  console.log(taskListContainer);

  //passer på at taskListContainer blir restet skikkelig før vi adder en ny task til listen våres
  taskListContainer.textContent = "";

  //starter en "for" loop som repiterer når en todotask blir lagt til
  for (
    let index = 0;
    index < toDoTask.length;
    index = index + 1
) {


  const newTodoTask = toDoTask[index]


  const newListItems = document.createElement("li");
  console.log(newListItems);

  newListItems.classList.add("taskListItem");

  newListItems.textContent = newTodoTask;

  //lager en ny knapp for å slette tasks
  const deleteButton = document.createElement("button");
  console.log(deleteButton);

  //setter teksten på knappen til "delete todo"
  deleteButton.textContent = "Delete todo";
   //legger til en css klasse kalt "delete button"
  deleteButton.classList.add("deleteButton")

  //sjekker om "deletebutton" blir trykt 
  deleteButton.addEventListener("click", function (){
    console.log("click?")

    //fjerner deletebutton når "deletebutton" blir trykt
    newListItems.remove();
    deleteButton.remove();

    //fjerner tasken når deletebutton er trykt
    toDoTask.splice(index, 1);
  })


  //adder den nylagte tasken til "TaskListContainer"
  taskListContainer.appendChild(newListItems);

  //adder delete button til tasken
  newListItems.appendChild(deleteButton);
 }

}


//legger til html ID "taskbutton" til javascript
const taskButton = document.querySelector("#taskButton");
console.log(taskButton);

//sjekker om taskbutton e trykket
taskButton.addEventListener("click", addTodo); 

