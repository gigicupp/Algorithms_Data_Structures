//get the number the at given place from the back
//if getDigit(2345, 2) it would be 3
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

//get the max number of digits the array has
//if digitCount([-2, 100, 837]) it would be 3
function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//get the most digit the array contains
function mostDigit(arr) {
  let maxDigits = 0;
  for(let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  var maxDigitCount = mostDigit(arr);
  for(var k = 0; k < maxDigitCount; k ++) {
    var digitBuckets = Array.from({length: 10}, () => []);
    for(var i = 0; i < arr.length; i ++) {
      var bucketIndex = getDigit(arr[i],k);
      digitBuckets[bucketIndex].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

console.log(radixSort([90, 999, -1, 4, 8888, 0]))