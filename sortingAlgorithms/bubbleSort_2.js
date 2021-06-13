function bubbleSort(arr) {
  let noSwap;
  for(let i = arr.length; i > 0; i --) {
    noSwap = true;
    for(let j = 0; j < i - 1; j ++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if(noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([43,23,42,10]));
//because bubble sort brings the highest number to the back
//no don't have to do the comparison once those numbers are sorted
//so if the outer loop starts from the back
//the inner loop only runs for the unsorted part
