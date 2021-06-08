// Given a string s, find the length of the longest substring 
// without repeating characters.

function findLongestSubstring(str) {
  if(!str.length) return 0;
  let map = new Map();
  let start = 0;
  let end = 0;
  let max = 0;
  while(end < str.length) {
      if(!map.has(str[end])) {
          map.set(str[end], end);
          end += 1;
          max = Math.max(max, map.size);
      } else {
          map.delete(str[start]);
          start += 1;
      }
  }
  return max;
}

