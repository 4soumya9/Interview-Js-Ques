// Find the 2nd largest element from a given array ?
// [100,20,112,22]
function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  if (secondLargest === -Infinity) {
    return " No second";
  }
  return secondLargest;
}
const array = [10, 5, 20, 8, 12];
console.log(findSecondLargest(array));
