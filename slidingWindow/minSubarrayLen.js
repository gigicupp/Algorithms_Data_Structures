//Write a function called minSubArrayLen which accepts 2 parameters - an array of
// positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Examples:
// minSubArrayLen([2,3,1,2,4,3], 7) //2
// minSubArrayLen([2,1,6,5,4], 9) //2
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) //1
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) //0

function minSubArrayLen(arr, sum) {
  debugger;
  let start = 0;
  let end = 0;
  let total = 0;
  let minLen = Infinity;
  while(start < arr.length) {
    if(total < sum && end < arr.length) {
      total += arr[end];
      end ++;
    } else if(total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start ++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

let test1 = minSubArrayLen([2,3,1,2,4,3], 7) //2
let test2 = minSubArrayLen([2,1,6,5,4], 9) //2
let test3 = minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) //1
let test4 = minSubArrayLen([1,4,16,22,5,7,8,9,10],95) //0

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);