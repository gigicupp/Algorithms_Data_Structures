//Write a function called sumZero which accepts a sorted
//array of integers. The function should find the first
//pair where the sum is zero. Return an array that includes both
//values that sum to zero or undefined if a pair doesn't exist



//naive approach - O(n^2)
function sumZero(array) {
  let result;
  for(let i = 0; i < array.length; i ++) {
    for(let j = i + 1; j < array.length; j ++) {
      if(array[i] + array[j] === 0) {
        result = [array[i], array[j]];
        break;
      }
    }
    break;
  }
  return result;
}

console.log(sumZero([3, 2, 1, 0, -3]));
console.log(sumZero([3, 2, -4, 0]));
console.log(sumZero([1, 2, 3]));