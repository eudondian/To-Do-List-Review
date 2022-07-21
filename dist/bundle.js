/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n\r\nconst tasks = [\r\n    {\r\n        description: '',\r\n        completed: '',\r\n        index: ''\r\n    },\r\n    {\r\n        description: '',\r\n        completed: '',\r\n        index: ''\r\n    },\r\n    {\r\n        description: '',\r\n        completed: '',\r\n        index: ''\r\n    }\r\n]\r\n\r\nconst todoInput = document.querySelector('.todo-input')\r\nconst todoButton = document.querySelector('.todo-button')\r\nconst todoList = document.querySelector('#todo-list')\r\nconst clearButtonDiv = document.querySelector('.clear-button')\r\nconst addBtn = document.querySelector('.add-button')\r\nconst todoUI = document.querySelector('#todo-list')\r\nconst addTodoItem = document.querySelector('.add-todo')\r\n\r\n\r\n   const addTodo = ((e)=>{\r\n        e.preventDefault()\r\n\r\n        const todoDiv = document.createElement('div')\r\n        todoDiv.classList.add('todo')\r\n\r\n        const newTodo = document.createElement('li')\r\n        newTodo.innerText ='hey'\r\n        newTodo.classList.add('todo-item')\r\n\r\n        todoDiv.appendChild(newTodo)\r\n\r\n        // addTask Button\r\n        const completedButton = document.createElement('button')\r\n\r\n        completedButton.innerHTML = '<i class=\"uil uil-check-square\"></i>'\r\n        completedButton.classList.add('complete-btn')\r\n        todoDiv.appendChild(completedButton)\r\n\r\n        // deleteCompleted Button\r\n        const trashButton = document.createElement('button')\r\n\r\n        trashButton.innerHTML = '<small>Clear All Completed</small>'\r\n        trashButton.classList.add('trash-btn')\r\n        clearButtonDiv.appendChild(trashButton)\r\n\r\n        // Populate the List\r\n        todoList.appendChild(todoDiv)\r\n    })\r\n\r\n\r\n\r\ntodoButton.addEventListener('click', addTodo)\r\n\r\n\r\naddBtn.addEventListener('click', function(e){\r\n    e.preventDefault()\r\n    const todoFormItem = document.querySelector('.todo-container')\r\n    let para = document.createElement('p')\r\n    let removeBtn = document.querySelector('.remove-button')\r\n    // removeBtn.classList.add('remove-button')\r\n\r\n    para.classList.add('para')\r\n    para.innerText = addTodoItem.value\r\n    // removeBtn.innerHTML = '<i class=\"uil uil-minus-circle\"></i>'\r\n    const removeButton = document.createElement('button')\r\n\r\n        removeButton.innerHTML = '<i class=\"uil uil-minus-circle\"></i>'\r\n        removeButton.classList.add('trash-btn')\r\n        todoFormItem.appendChild(removeButton)\r\n\r\n\r\n\r\n  \r\n    todoFormItem.appendChild(para)\r\n    removeBtn.style.display = 'block'\r\n    \r\n   \r\n    addTodoItem.value = ''\r\n\r\n\r\n//     const removeBtn = document.querySelector('.remove-button')\r\n//    removeBtn.innerHTML = '<i class=\"uil uil-minus-circle\"></i>'\r\n   \r\n})\n\n//# sourceURL=webpack://awesome-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;