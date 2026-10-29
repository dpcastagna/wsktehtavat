'use strict';

// array for todo list
let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const target = document.getElementsByTagName('ul')[0];
const newInput = document.querySelector('input');

for (const todo of todoList) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  li.setAttribute('id', `${todo.id}`);
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${todo.id}`);
  input.setAttribute('onclick', `clickedDone(${todo.id})`);
  if (todo.completed) {
    input.setAttribute('checked', '');
  }

  const label = document.createElement('label');
  label.setAttribute('for', `todo-${todo.id}`);
  label.innerHTML = todo.task;

  const delButton = document.createElement('button');
  delButton.setAttribute('onclick', `clickedDelete(${todo.id})`);
  delButton.textContent = 'X';

  li.append(input);
  li.append(label);
  li.append(delButton);

  target.append(li);

  // const html = `<li id="${todo.id}">
  //               <input type="checkbox" id="todo-${todo.id}" onclick="clickedDone(${todo.id})" ${todo.completed ? 'checked' : ''}>
  //               <label for="todo-${todo.id}">${todo.task}</label><button onclick="clickedDelete(${todo.id})">X</button>
  //               </li>`;
  // target.insertAdjacentHTML('beforeend', html);
}

function clickedDone(id) {
  todoList.map((todo) => {
    return todo.id === id
      ? (todo.completed = !todo.completed)
      : (todo.completed = todo.completed);
  });

  console.log(todoList);
}

function clickedDelete(id) {
  target.removeChild(document.getElementById(id));
  todoList = todoList.filter((todo) => {
    return todo.id !== id;
  });

  console.log(todoList);
}

const dialog = document.getElementsByTagName('dialog')[0];
dialog.setAttribute('id', 'modal');
const addButton = document.getElementsByClassName('add-btn')[0];
addButton.setAttribute('command', 'show-modal');
addButton.setAttribute('commandfor', 'modal');

const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTodo = {
    id: todoList.length + 1,
    task: newInput.value,
    completed: false,
  };
  todoList.push(newTodo);

  const li = document.createElement('li');
  const input = document.createElement('input');
  li.setAttribute('id', `${todoList.length}`);
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${todoList.length}`);
  input.setAttribute('onclick', `clickedDone(${todoList.length})`);

  const label = document.createElement('label');
  label.setAttribute('for', `todo-${todoList.length}`);
  label.innerHTML = newInput.value;

  const delButton = document.createElement('button');
  delButton.setAttribute('onclick', `clickedDelete(${todoList.length})`);
  delButton.textContent = 'X';

  li.append(input);
  li.append(label);
  li.append(delButton);

  target.append(li);

  console.log(todoList);

  newInput.value = '';
  dialog.close();
});
