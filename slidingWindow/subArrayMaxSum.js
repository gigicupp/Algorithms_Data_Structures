//Write a function which accepts an array of integers and number called n.
//The function should calculate the max sum of n consecutive elements in the array.


//O(n^2)
// function maxSubarraySum(arr, num) {
//   if(num > arr.length) return null;
//   let max = -Infinity;
//   //loop until there are n number of items left in the array
//   for(let i = 0; i < arr.length - num + 1; i ++) {
//     let temp = 0;
//     //increment temp n times
//     for(let j = 0; j < num; j ++) {
//       temp += arr[i + j];
//     }
//     if(temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

//O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  //sum the first n subarray
  for(let i = 0; i < num; i ++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  //loop through the rest of the array
  for(let i = num; i < arr.length; i++) {
    //add the current num at i but minus the num at i - num
    tempSum = tempSum + arr[i] - arr[i - num];
    //maxSum will be bigger of the max and temp sum
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

let array = [2, 6, 9, 2, 1, 8, 5, 6, 3]
console.log(maxSubarraySum(array, 3)) //19