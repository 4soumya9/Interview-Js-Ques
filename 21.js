// 24. Given an array, return an array where the each value is the
// product of the next two items: E.g.  [3, 4, 5] -> [20,15,12]

function productOfNextTwo(arr) {
  let result = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let a = arr[(i + 1) % n];
    let b = arr[(i + 2) % n];
    result.push(a * b);
  }
  return result;
}
const inputArray = [3, 4, 5];
const outputArray = productOfNextTwo(inputArray);
console.log(outputArray);
