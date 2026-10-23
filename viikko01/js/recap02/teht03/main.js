'use strict';

const target = document.querySelector('#target');
let numbers = [];

let play = true;

while (play) {
  const num = prompt("Enter a number (or 'done' to finish):");
  if (num === 'done') {
    play = false;
  } else if (Number.isNaN(num)) {
    continue;
  } else {
    numbers.push(parseInt(num));
  }
}

let text = 'Even numbers: ';

for (let n of numbers) {
  if (n % 2 === 0) {
    text += n + ', ';
  }
}

if (text[text.length - 2] === ',') {
  text = text.slice(0, -2);
}
target.textContent = text;

alert('Program has ended.');
