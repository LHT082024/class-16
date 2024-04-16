
//sjekker om knappen er trykket og caller verdien i tekst elemnetet.

//function: erklærer en funksjon i koden. 
//addTodo: dette er hva vi har kalt funksjonen.
function addTodo() {
  
  //event: en hendelse.
  //preventDefault: stopper en defult event fra å skje. 
   event.preventDefault();

   //console: caller til java konsolen.
   //log: caller til loggen. 
  console.log("is button clicked?");


  //const er en erklæring av en variabel. 
  //taskInput er et variabel navn.
  // = å ærklere en verdi som skal lagre
  //doucment referer til HTML dokumentet
  //querySelector() henter noe fra HTML
  //#taskInput ID til html elmentet vi hentet
  //.value henter inneholdet til html elemnetet
  const taskInput = document.querySelector("#taskInput").value;
  console.log(taskInput);


  //const: en erklæring av en variabel.
  //newListItems: er et variabel navn.
  //document: referer til HTML dokumentet.
  //createElement: larger et nytt html element.
  //li referer til hvilket type html elment vi vil createElement skal lage.
  const newListItems = document.createElement("li");
  console.log(newListItems);

  //newListItems: referer til en variabel. 
  //textContent: en variabel som referer til teksten i et html element.
  //taskInput referer til en ID I html.
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
//#taskbutton er ID navnet til elementet vi henter fra HTML
//; betyr at kodelinjen er stoppet. 
const taskButton = document.querySelector("#taskButton");
console.log(taskButton);

taskButton.addEventListener("click", addTodo);