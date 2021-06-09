// function collectOddValues(arr) {
//   let odds = [];
//   function helper(inputArr) {
//     if(inputArr.length === 0) {
//       return;
//     }
//     if(inputArr[0] % 2 === 1) {
//       odds.push(inputArr[0])
//     }
//     helper(inputArr.slice(1));
//   }
//   helper(arr)
//   return odds;
// }

function collectOddValues(arr) {
  let newArr = [];
  if(arr.length === 0) return newArr;
  if(arr[0] % 2 === 1) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1,2,3,4,5]))