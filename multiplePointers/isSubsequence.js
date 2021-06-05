// Write a function called isSubsequence which takes in two strings 
// and checks whether the characters in the first string form a 
// subsequence of the characters in the second string. In other words, 
// the function should check whether the characters in the 
// first string appear somewhere in the second string, 
// without their order changing.

// Examples:

function isSubsequence(sub, str) {
  if(sub.length > str.length) return false;
  let pointer = 0;
  for(let i = 0; i < str.length; i ++) {
    if(str[i] === sub[pointer]) {
      pointer += 1;
    }
  }
  if(pointer === sub.length) {
    return true;
  } else {
    return false;
  }
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)