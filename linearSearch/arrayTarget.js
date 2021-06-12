// function linear(arr, target) {
//   for(let i = 0; i < arr.length; i ++) {
//     if(arr[i] === target) return i;
//   }
//   return -1;
// }

const linear = (arr, target) => {
  return arr.forEach((n, i) => {
    if(n === target) {
      return i;
    }
  })
}

console.log(linear([1,4,7,3,2], 8))
console.log(linear([1,4,7,3,2], 7))