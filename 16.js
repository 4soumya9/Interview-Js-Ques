//Bubble Sort

const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const arr = [4, 5, 52, 1, 0, 100, 33, 3];
// console.log(bubbleSort(arr));
let res = bubbleSort(arr);
console.log(res);
