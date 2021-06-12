function substringSearch(long, short) {
  let counter = 0;
  for(let i = 0; i < long.length; i ++) {
    for(let j = 0; j < short.length; j ++) {
      //look forward
      if(short[j] !== long[i + j]) {
             //0           0 + 0
             //1           0 + 1
        break;
      }
      //if at the end of the short string
      if(j === short.length - 1) {
        //increase the counter
        counter ++;
      }
    }
  }
  return counter;
}

console.log(substringSearch('laurie loled', 'lol'))


  