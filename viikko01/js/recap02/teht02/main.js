'use strict';

let numbers = [];
for (let i = 1; i < 6; i++) {
  numbers.push(parseInt(prompt('Give number ' + i + ': ')));
}

const target = document.querySelector('#target');
const numList = document.createElement('p');
numList.textContent = 'Numbers array: ' + numbers;
target.append(numList);

const findNum = parseInt(prompt('Give a number to find: '));
const findResult = document.createElement('p');
if (numbers.includes(findNum)) {
  findResult.textContent = 'Numbers array includes the number: ' + findNum;
  target.append(findResult);
} else {
  findResult.textContent = 'Numbers array includes the number: ' + findNum;
  target.append(findResult);
}

numbers.pop();
const updatedList = document.createElement('p');
updatedList.textContent = 'Updated array: ' + numbers;
target.append(updatedList);

numbers.sort((a, b) => a - b);
const sortedList = document.createElement('p');
sortedList.textContent = 'Sorted array: ' + numbers;
target.append(sortedList);
