// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)


// function areThereDuplicates(...args) {
//   let obj = {};
//   for(let arg of args) {
//     if(obj[arg]) {
//       return true;
//     }
//     obj[arg] = 1;
//   }
//   return false;
// }

function areThereDuplicates(...args) {
  let sorted = args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while(next < sorted.length) {
    if(sorted[start] === sorted[next]) {
      return true;
    }
    start ++;
    next ++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
