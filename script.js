const inputTask = document.getElementById("input-task");
const listContainer = document.getElementById("list-container")

// Function to add tasks 
function addTask(){

    const task = inputTask.value.trim();
        if(!task){
            alert("Please Enter a Task");
            return;
        }
    

    const newList = document.createElement("li");

    newList.innerHTML = `
    <label> 
        <input type="checkbox">
        <span>${task}</span>
    </label>
    <span class="edit-button">Edit</span>
    <span class="delete-button">Delete</span>
    `;

    listContainer.appendChild(newList);
    inputTask.value="";


    const checkbox = newList.querySelector("input");
    const editButton = newList.querySelector(".edit-button");
    const taskSpan = newList.querySelector("span");
    const deleteButton = newList.querySelector(".delete-button");
    
    
    checkbox.addEventListener("click", checked);
    
    // Function to complete tasks using a checkbox 
    function checked(){
        newList.classList.toggle("completed", checkbox.checked);
        updateCounters();
    }
    
    
    editButton.addEventListener("click", edit);
    
    // Function to edit tasks 

    function edit(){
        const edit = prompt("Edit Task:", taskSpan.textContent);
        if(edit !==null){
            taskSpan.textContent = edit;
            newList.classList.remove("completed");
            updateCounters();
        }
        
    }

    deleteButton.addEventListener("click", removeTask);
    
    //Function to remove tasks
    function removeTask(){
        const remove = confirm("Are you sure to delete this task?");
        if(remove){
            newList.remove(newList);
            updateCounters();
        }
        
    }


    const completedCounters = document.getElementById("completed-counter");
    const unCompletedCounters = document.getElementById("uncompleted-counter");

    // Function to update counters

    function updateCounters(){
        const completedTasks = document.querySelectorAll(".completed").length;
        const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

        completedCounters.textContent = completedTasks;
        unCompletedCounters.textContent = uncompletedTasks;
    }
    updateCounters();

}

