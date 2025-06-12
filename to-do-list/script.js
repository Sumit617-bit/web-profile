document.getElementById("addTaskBtn").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim(); // Assigning taskText correctly

    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    // Toggle 'done' class on click
    span.addEventListener("click", function () {
        span.classList.toggle("done");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.border = "none";
    deleteBtn.style.cursor = "pointer";

    // Remove the task on delete button click
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Append elements
    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = ""; // Clear input after adding
});
