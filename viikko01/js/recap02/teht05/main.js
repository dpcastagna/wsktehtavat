'use strict';

function sortArray(numbers, order) {
  let newArr = [];
  for (let n of numbers) {
    newArr.push(n);
  }
  if (order === 'asc') {
    newArr.sort((a, b) => a - b);
  } else if (order === 'desc') {
    newArr.sort((a, b) => b - a);
  }
  return newArr;
}

let nums = [3123, 32, 1, 5555, 0, 999, 100];

console.log(sortArray(nums, 'asc'));
console.log(sortArray(nums, 'desc'));
