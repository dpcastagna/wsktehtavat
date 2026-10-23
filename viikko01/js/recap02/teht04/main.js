'use strict';

function sortArray(arr) {
  let newArr = [];
  for (let n of arr) {
    newArr.push(n);
  }
  newArr.sort((a, b) => a - b);
  return newArr;
}

let nums = [3123, 32, 1, 5555, 0, 999, 100];

let sortedNums = sortArray(nums);

console.log('Original array: ' + nums + ' Sorted array: ' + sortedNums);
