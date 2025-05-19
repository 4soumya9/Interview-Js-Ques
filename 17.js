//. Write a JavaScript program to find the largest element in a
// nested array.

function findLargest(arr) {
  let max = -Infinity;
  function findMax(subArr) {
    for (let item of subArr) {
      if (Array.isArray(item)) {
        findMax(item);
      } else {
        max = Math.max(item, max);
      }
    }
  }
  findMax(arr);
  return max;
}

const array = [
  [3, 4, 5822],
  [709, 8, 9, [10, 11]],
  [111, 2],
];
console.log("Largest element:", findLargest(array));
