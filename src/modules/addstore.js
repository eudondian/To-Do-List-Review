const todoInput = document.querySelector('.todo-input');
const todoMenu = document.querySelector('.todo-menu');
const refresh = document.querySelector('.demo');

const AddStore = () => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach((task) => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTask = document.createElement('li');
    newTask.innerText = task;
    newTask.classList.add('todo-item');
    todoDiv.appendChild(newTask);
    todoInput.value = '';

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="uil uil-check-circle"></i>';
    completedButton.classList.add('completed-button');
    todoDiv.appendChild(completedButton);

    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="uil uil-trash"></i>';
    removeButton.classList.add('remove-button');
    todoDiv.appendChild(removeButton);

    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="uil uil-edit"></i>';
    editButton.classList.add('edit-button');
    todoDiv.appendChild(editButton);

    todoMenu.appendChild(todoDiv);
  });
};

refresh.addEventListener('click', AddStore);

// eslint-disable-next-line import/prefer-default-export
export { AddStore };
