// Reverse Character String
// Input : s = ["h", "e" ,"l" ,"l" ,"o"]

// Output : ["o", "l", "l", "e", "h"]

function revCharArray(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

const s = ["h", "e", "l", "l", "o"];
revCharArray(s);
// console.log(revCharArray(s));
console.log(s);
