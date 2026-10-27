'use strict';
// array for todo list
const todoList = [
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

for (const todo of todoList) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `todo-${todo.id}`);
  if (todo.completed) {
    input.setAttribute('checked', '');
  }

  const label = document.createElement('label');
  label.setAttribute('for', `todo-${todo.id}`);
  label.innerHTML = todo.task;

  li.append(input);
  li.append(label);

  target.append(li);
}
