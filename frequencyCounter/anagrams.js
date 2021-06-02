//Given 2 strings, write a function to determine if the 2nd string
//is the anagram of the first.


//input: strings
//output: boolean
//edge: if both strings are empty, return true
//constraints: solve O(n)

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;
  let counter1 = {};
  let counter2 = {};

  for(let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }

  for(let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }
  
  for(let keys in counter1) {
    if(!counter2[keys]) return false;
    if(counter1[keys] !== counter2[keys]) return false;
  }
  return true;
}

console.log(isAnagram('apple', 'police'))
console.log(isAnagram('qwerty', 'qeywrt'))
console.log(isAnagram('rat', 'car'))
console.log(isAnagram('', ''))