'use strict';

const grade = parseInt(prompt('Give your grade(0-100): '));

if (isNaN(grade) || grade < 0 || grade > 100) {
  document.querySelector('#target').innerHTML =
    "You didn't give a number or it was under 0 or over 100!";
} else if (grade < 40) {
  document.querySelector('#target').innerHTML = 'Your grade is 0.';
} else if (grade < 52) {
  document.querySelector('#target').innerHTML = 'Your grade is 1.';
} else if (grade < 64) {
  document.querySelector('#target').innerHTML = 'Your grade is 2.';
} else if (grade < 76) {
  document.querySelector('#target').innerHTML = 'Your grade is 3.';
} else if (grade < 88) {
  document.querySelector('#target').innerHTML = 'Your grade is 4.';
} else {
  document.querySelector('#target').innerHTML = 'Your grade is 5.';
}
