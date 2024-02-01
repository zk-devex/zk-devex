// app.js

let tasks = [];

function addTask() {
  const newTaskInput = document.getElementById('newTask');
  const taskText = newTaskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    newTaskInput.value = '';
    displayTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
      <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(listItem);
  });
}

displayTasks();
