const inputTask = document.getElementById("input-task");
const listContainer = document.getElementById("list-container")

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

}

