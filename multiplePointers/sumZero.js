//Write a function called sumZero which accepts a SORTED!!!!!
//array of integers. The function should find the first
//pair where the sum is zero. Return an array that includes both
//values that sum to zero or undefined if a pair doesn't exist



//naive approach - O(n^2)
// function sumZero(array) {
//   let result;
//   for(let i = 0; i < array.length; i ++) {
//     for(let j = i + 1; j < array.length; j ++) {
//       if(array[i] + array[j] === 0) {
//         result = [array[i], array[j]];
//         break;
//       }
//     }
//     break;
//   }
//   return result;
// }


//O(n)
function sumZero(array) {
  //create 2 pointers left & right
  let left = 0;
  let right = array.length - 1;

  while(left < right) {
    let sum = array[left] + array[right];
    if(sum === 0) return [array[left], array[right]];
    //if sum is positive, move the right pointer to the left
    if(sum > 0) {
      right -= 1;
    } 
    //if sum is negative, move the left pointer to the right
    if(sum < 0) {
      left += 1;
    }
  }
}

console.log(sumZero([3, 2, 1, 0, -3]));
console.log(sumZero([3, 2, -4, 0]));
console.log(sumZero([1, 2, 3]));