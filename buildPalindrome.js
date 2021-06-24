// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
// Note: A palindrome is a string that reads the same left-to-right and right-to-left.
// Example
// For st = "abcdc", the output should be buildPalindrome(st) = "abcdcba".
// Input/Output
// [execution time limit] 4 seconds (js)
// [input] string st
// A string consisting of lowercase latin letters.
// Guaranteed constraints: 3 ≤ st.length ≤ 10.
// [output] string

function buildPalindrome(str) {
  let i = 0;
  let temp;
  while(str !== str.split('').reverse().join('')) { //abc !== cba | abca !==acba
    temp = str.split(''); //['a', 'b', 'c'] | ['a', 'b', 'c', 'a']
    temp.splice(str.length - i, 0, str[i]); // ['a', 'b', 'c', 'a'] | ['a', 'b', 'c', 'b', 'a']
    str = temp.join(''); //abca | abcba
    i ++; //1 | 2
  }
  return str //abca
}

console.log(buildPalindrome('abc'));
//abca
//abcba