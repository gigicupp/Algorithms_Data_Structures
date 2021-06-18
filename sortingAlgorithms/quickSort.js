function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for(let i = start + 1; i < arr.length; i ++) {
    if(pivot > arr[i]) {
      swapIdx += 1;
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx;
}

function swap(array, i, j){
  let temp = array [i];
  array[i] = array[j];
  array[j] = temp;
}

// console.log(pivot([4,8,2,1,5,7,6,3]));
// [4,8,2,1,5,7,6,3]
// [4,2,8,1,5,7,6,3]
// [4,2,1,8,5,7,6,3]
// [4,2,1,8,5,7,6,3]
// [4,2,1,3,5,7,6,8]

function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));