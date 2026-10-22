'use strict';

const x1 = prompt('Give point 1 x: ');
const y1 = prompt('Give point 1 y: ');
const x2 = prompt('Give point 2 x: ');
const y2 = prompt('Give point 2 y: ');
const answer = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
document.querySelector('#target').innerHTML =
  'The distance between points 1 and 2 is: ' + answer;
