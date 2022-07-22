// eslint-disable-next-line import/extensions
import { AddStore } from './modules/addstore.js';
import {
  addToLocalStorage,
  removeFromLocalStorage,
  // eslint-disable-next-line import/extensions
} from './modules/storesave.js';
import './styles/style.css';

const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoMenu = document.querySelector('.todo-menu');
const filterTasks = document.querySelector('.filter-tasks');
const clearButton = document.querySelector('.clear-button');
const newTask = document.createElement('li');

document.addEventListener('DOMContentLoaded', AddStore);

filterTasks.addEventListener('click', (e) => {
  const tasks = document.querySelectorAll('.todo');
  tasks.forEach((task) => {
    switch (e.target.value) {
      case 'all':
        task.style.display = 'flex';
        break;
      case 'completed':
        if (task.classList.contains('completed')) {
          task.style.display = 'flex';
        } else {
          task.style.display = 'none';
        }

      // eslint-disable-next-line no-fallthrough
      default:
    }
  });
});

clearButton.addEventListener('click', () => {
  const tasks = document.querySelectorAll('.todo');
  tasks.forEach((task) => {
    if (task.classList.contains('completed')) {
      task.style.display = 'none';
      removeFromLocalStorage(task);
      task.remove();
    }
  });
});

// Function to Add Tasks
addButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // Create New li
  const newTask = document.createElement('li');
  newTask.innerText = todoInput.value;

  newTask.classList.add('todo-item');

  // Add the new li to todoDiv
  todoDiv.appendChild(newTask);
  addToLocalStorage(todoInput.value);

  // Clear Todo Input after adding Tasks
  todoInput.value = '';

  // Button to handle completed Tasks
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="uil uil-check-circle"></i>';
  completedButton.classList.add('completed-button');
  todoDiv.appendChild(completedButton);

  // Button to Remove Tasks
  const removeButton = document.createElement('button');
  removeButton.innerHTML = '<i class="uil uil-trash"></i>';
  removeButton.classList.add('remove-button');

  // Add Remove button to Todo Div
  todoDiv.appendChild(removeButton);

  // Button to Edit Tasks
  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.innerHTML = '<i class="uil uil-edit"></i>';
  todoDiv.appendChild(editButton);

  // Add todoDiv to todoMenu
  todoMenu.appendChild(todoDiv);
});

// Delete Tasks
todoMenu.addEventListener('click', (e) => {
  const task = e.target;

  if (task.classList[0] === 'remove-button') {
    const todo = task.parentElement;
    removeFromLocalStorage(todo);
    todo.remove();
  }

  if (task.classList[0] === 'completed-button') {
    const todo = task.parentElement;
    todo.classList.toggle('completed');
  }

  if (task.classList[0] === 'edit-button') {
    addButton.innerHTML = '<i class="uil uil-save"></i>';
    todoInput.focus();
    addButton.addEventListener('click', () => {
      const edited = task.value;
      newTask.innerText = todoInput.value;
      // eslint-disable-next-line no-undef
      todoDiv.appendChild(edited);
    });
  }
});
