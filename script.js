
//sjekker om knappen er trykket og caller verdien i tekst elemnetet.

//
function addTodo() {
   event.preventDefault();

  console.log("is button clicked?");

  const taskInput = document.querySelector("#taskInput").value;
  console.log(taskInput);

  //createElement larger et nytt html element.
  const newListItems = document.createElement("li");
  console.log(newListItems);

  //
  newListItems.textContent = taskInput;

//henter ul elmentet
  const taskList = document.querySelector("#taskList");
  console.log(taskList);

  taskList.appendChild(newListItems);
}

//const er en erklæring av en variabel. 
//taskButton er et variabel navn.
// = å ærklere en verdi som skal lagre
//doucment referer til HTML dokumentet
//querySelector() henter noe fra HTML
//; betyr at kodelinjen er stoppet. 
const taskButton = document.querySelector("#taskButton");
console.log(taskButton);

taskButton.addEventListener("click", addTodo);