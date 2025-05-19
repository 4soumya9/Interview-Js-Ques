//Find the max count of consecutive 1ʼs in an array

function findConsecutive(arr) {
  let count = 0;
  let maxCount = 0;
  for (let num of arr) {
    if (num === 1) {
        count += 1;
      maxCount = Math.max(count, maxCount);
     
    } else {
      count = 0;
    }
  }
  return maxCount;
}

const res = findConsecutive([1, 1, 9, 1, 9, 19, 7, 1, 1, 1,1,1, 2, 5, 1]);
console.log(res);
