//Write a function called countUniqueValues, which accepts a SORTED
//array, and counts the unique values in the array. There can be negative
//values but it will always be sorted.

function countUniqueValues(arr) {
  if(!arr.length) return 0;
  let left = 0;
  let right = 1;
  let counter = 1;
  while(right < arr.length) {
    if(arr[left] === arr[right]) {
      right ++;
    } else {
      left = right;
      right += 1;
      counter += 1;
    }
  }
  return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 2])) //2
console.log(countUniqueValues([1, 2, 2, 2, 4, 6, 6, 8])) //5
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) //7
console.log(countUniqueValues([])) //0
