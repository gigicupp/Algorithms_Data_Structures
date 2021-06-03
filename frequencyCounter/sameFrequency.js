// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  let num1Str = num1.toString();
  let num2Str = num2.toString();
  if(num1Str.length !== num2Str.length) return false;

  let obj1 = {};
  let obj2 = {};
  for(let char of num1Str) {
    obj1[char] ? obj1[char] += 1 : obj1[char] = 1;
  }
  for(let char of num2Str) {
    obj2[char] ? obj2[char] += 1 : obj2[char] = 1;
  }

  for(let keys in obj1) {
    if(obj1[keys] !== obj2[keys]) return false;
  }
  return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false