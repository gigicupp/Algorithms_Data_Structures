// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = str.length - 1;
  while(left <= right) {
      if(str[left] === str[right]) {
          left ++;
          right --;
      } else {
          return false;
      }
  }
  return true;
}

console.log(isPalindrome('abcd'))
console.log(isPalindrome('aba'))
console.log(isPalindrome('a'))