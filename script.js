document.getElementById("addTaskButton").addEventListener("click", () => {
    const textInput = document.getElementById("taskInput")
    const task = textInput.value;
    if (task) {
        addTask(task)
        textInput.value = "";
    }
})
let isRunning;
function addTask(task){
    const addTaskContent = document.getElementById("taskList")
    const addTaskList = document.createElement("li")
    const buttonDiv = document.createElement("div")

    const inputValue = document.createElement("div")
    inputValue.textContent = task.substring(0, 30)
    addTaskList.appendChild(inputValue)

    const completeButton = document.createElement("button")
    completeButton.textContent = "complete"
    completeButton.addEventListener("click", () => {
        isRunning = !isRunning
        if(isRunning){
        completeButton.textContent = "completed"
        }else{
            completeButton.textContent = "complete"
        }
    })
    buttonDiv.appendChild(completeButton)

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "delete"
    deleteButton.addEventListener("click", () => {
        addTaskContent.removeChild(addTaskList)
    })
    buttonDiv.appendChild(deleteButton)

    addTaskList.appendChild(buttonDiv)

    addTaskContent.appendChild(addTaskList)

}
