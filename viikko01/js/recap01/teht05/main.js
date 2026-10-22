'use strict';

const num = parseInt(prompt('Give a positive integer: '));
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}

document.querySelector('#target').innerHTML =
  'Sum of numbers from 1 to ' + num + ' is: ' + sum;
