function insertionSort(arr){
  for(var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j --) {
      arr[j+1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2,1,9,76,4]));
// i  j    [2,1,9,76,4]
// 1  0    [2,2,9,76,4] => [1,2,9,76,4]
// 2  1    [1,2,9,76,4] => [1,2,9,76,4]
// 3  2    [1,2,9,76,4] => [1,2,9,76,4]
// 4  3    [1,2,9,76,4] => [1,2,9,4,76] 
