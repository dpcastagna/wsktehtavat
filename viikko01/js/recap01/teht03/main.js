'use strict';

const sideA = parseFloat(prompt('Give triangle side a: '));
const sideB = parseFloat(prompt('Give triangle side b: '));
const sideC = parseFloat(prompt('Give triangle side c: '));

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
  document.querySelector('#target').innerHTML =
    "You didn't give correct numbers!";
} else if (
  (sideA === sideB && sideA !== sideC) ||
  (sideA !== sideB && sideA === sideC) ||
  (sideC === sideB && sideA !== sideC)
) {
  document.querySelector('#target').innerHTML =
    'A triangle with side lengths ' +
    sideA +
    ', ' +
    sideB +
    ' and ' +
    sideC +
    ' is an isosceles triangle.';
} else if (sideA === sideB && sideA === sideC) {
  document.querySelector('#target').innerHTML =
    'A triangle with side lengths ' +
    sideA +
    ', ' +
    sideB +
    ' and ' +
    sideC +
    ' is an equilateral triangle.';
} else if (sideA !== sideB && sideA !== sideC) {
  document.querySelector('#target').innerHTML =
    'A triangle with side lengths ' +
    sideA +
    ', ' +
    sideB +
    ' and ' +
    sideC +
    ' is a scalene triangle.';
}
