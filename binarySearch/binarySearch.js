//accepts sorted array and a value
// function binarySearch(arr, num) {
//   //create left and right pointer
//   let left = 0
//   let right = arr.length - 1;
//   //while left < right
//   while (left <= right) {
//     //create middle pointer
//     let mid = Math.floor((left + right) / 2);
//     //check if the middle value is === target
//     if (arr[mid] === num) {
//       //return index
//       return mid;
//       //if middle > target
//     } else if (arr[mid] > num) {
//       //change the right pointer
//       right = mid - 1;
//       //if middle < target
//     } else if (arr[mid] < num) {
//       //change the left pointer
//       left = mid + 1;
//     }
//   }
//   //return -1
//   return -1;
// }


function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while(arr[mid] !== num && left <= right) {
    if(arr[mid] > num) right = mid - 1; 
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === num ? mid : -1;
}

console.log(binarySearch([1,2,3,4,5], 2)) //1
console.log(binarySearch([1,2,3,4,5], 3)) //2
console.log(binarySearch([1,2,3,4,5], 5)) //4
console.log(binarySearch([1,2,3,4,5], 6)) //-1