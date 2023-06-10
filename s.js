// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const percentageLabel = document.getElementById('percentageLabel');

// Initialize completed task count
let completedCount = 0;

// Function to mark a task as completed
function markAsCompleted(event) {
  const taskItem = event.target;

  // Toggle the completed class on the task item
  taskItem.classList.toggle('completed');

  // Update the percentage
  updatePercentage();
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();

  // Update the percentage
  updatePercentage();
}

// Function to update the completion percentage
function updatePercentage() {
  const totalTasks = taskList.children.length;
  const completedTasks = taskList.getElementsByClassName('completed').length;
  const percentage = (completedTasks / totalTasks) * 100;
  percentageLabel.textContent = `Completed: ${Math.round(percentage)}%`;

  // Display message based on percentage
  if (percentage < 50) {
    percentageLabel.textContent += " - Progress is progress, no matter how small. Keep moving forward and celebrate each step towards your goals";
  } else if (percentage >= 51 && percentage <= 70) {
    percentageLabel.textContent += " - Persistence paves the way to progress. Keep going, you're close.";
  } else if (percentage >= 71 && percentage <= 90) {
    percentageLabel.textContent += " - Your determination fuels greatness. Embrace the journey, triumph awaits you";
  } else if (percentage === 100) {
    percentageLabel.textContent += " - You've reached the summit of success. Congratulations on your mastery!";
  } else {
    percentageLabel.textContent += " - Achievement unlocked! Your dedication and hard work shine brightly.";
  }
}

// Function to edit a task
function editTask(event) {
  const taskItem = event.target;
  const taskNameSpan = taskItem.querySelector('.task-name');

  // Create an input field and set its value to the task name
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.value = taskNameSpan.textContent;

  // Replace the task name with the input field
  taskItem.replaceChild(editInput, taskNameSpan);

  // Focus on the input field
  editInput.focus();

  // Event listener for when the user finishes editing the task
  editInput.addEventListener('blur', function() {
    // Get the new task name from the input field
    const newTaskName = editInput.value;

    // Create a new span element to hold the task name
    const newTaskNameSpan = document.createElement('span');
    newTaskNameSpan.classList.add('task-name');
    newTaskNameSpan.textContent = newTaskName;

    // Replace the input field with the new task name
    taskItem.replaceChild(newTaskNameSpan, editInput);
  });
}

// Function to add a new task
function addTask() {
  const task = taskInput.value;

  if (task !== '') {
    const li = document.createElement('li');
    li.classList.add('task-item'); // Add a class to the task item

    const taskNameSpan = document.createElement('span');
    taskNameSpan.classList.add('task-name');
    taskNameSpan.textContent = task;
    li.appendChild(taskNameSpan); // Add task name to task item

    const editBtn = document.createElement('span');
    editBtn.innerHTML = '&#9998;'; // Pencil symbol
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', editTask); // Add event listener to edit button
    li.appendChild(editBtn); // Add edit button to task item

    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '&#128465;'; // Trash symbol
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask); // Add event listener to delete button
    li.appendChild(deleteBtn); // Add delete button to task item

    taskList.appendChild(li);
    taskInput.value = '';

    li.addEventListener('click', markAsCompleted); // Add event listener to the task item
  }
}

// Add event listener to the button
addTaskBtn.addEventListener('click', addTask);
// Function to edit a task
function editTask(event) {
  const taskItem = event.target.parentElement;
  const taskNameSpan = taskItem.querySelector('.task-name');

  // Create an input field and set its value to the task name
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.value = taskNameSpan.textContent;

  // Replace the task name with the input field
  taskItem.replaceChild(editInput, taskNameSpan);

  // Focus on the input field
  editInput.focus();

  // Event listener for when the user finishes editing the task
  editInput.addEventListener('blur', function() {
    // Get the new task name from the input field
    const newTaskName = editInput.value;

    // Create a new span element to hold the task name
    const newTaskNameSpan = document.createElement('span');
    newTaskNameSpan.classList.add('task-name');
    newTaskNameSpan.textContent = newTaskName;

    // Replace the input field with the new task name
    taskItem.replaceChild(newTaskNameSpan, editInput);
  });
}

