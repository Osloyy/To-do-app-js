

let tasks = [];


function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push(taskText);

        const li = document.createElement("li");

        const taskTextNode = document.createElement("span");
        taskTextNode.innerText = taskText;

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.onclick = function() {
            removeTask(taskText);
        };

        li.appendChild(taskTextNode);
        li.appendChild(removeButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(taskText) {
    tasks = tasks.filter(task => task !== taskText);
    const taskList = document.getElementById("task-list");
    const items = Array.from(taskList.getElementsByTagName("li"));

    items.forEach(item => {
        const taskNode = item.querySelector("span");

        if (taskNode.innerText.trim() === taskText.trim()) {
            item.remove();
        }
    });
}
