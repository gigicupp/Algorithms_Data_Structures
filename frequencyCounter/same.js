//write a funciton called same, which accepts 2 arrays.
//the function should return true if every value in the array has
//it's corresponding value squared in the 2nd array.
//the frequency of the values must be the same

//same([1,2,3], [1,4,9]) true
//same([1,2,3], [1,9]) false
////same([1,2,1], [4,4,1]) false (must be same frequency)


//naive solution - nested array
//O(n^2)

// function same(arr1, arr2) {
//   if(arr1.length !== arr2.length) return false;
//   for(let i = 0; i < arr1.length; i ++) {
//     let index = arr2.indexOf(arr1[i] ** 2);
//     if(index === -1) {
//       return false;
//     }
//     arr2.splice(index, 1);
//   }
//   return true;
// }

//O(n)
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  let counter1 = {};
  let counter2 = {};

  for(let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }

  for(let val of arr1) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for(let key in counter1) {
    if(!counter2[counter1[key] ** 2]) {
      return false;
    }
    if(counter2[counter1[key] ** 2] !== counter1[key]) {
      return false;
    }
  }
  return true;
}





console.log(same([1,2,3], [1,4,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));