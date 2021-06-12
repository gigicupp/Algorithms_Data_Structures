function bubbleSort(arr) {
  //start loop i 
  for(let i = 0; i < arr.length; i ++) {
    //start inner loop j
    for(let j = 0; j < arr.length; j ++) {
      //if arr[i] > arr[j + 1], swap those values;
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp
      }
    } 
  }
  return arr;
}

console.log(bubbleSort([1,5,3,9,2]));