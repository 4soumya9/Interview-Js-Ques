//Write a JavaScript program to find the maximum number in
//an array.

function findMax(arr) {
  let max = arr[0];
  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      max = arr[i];
    }
  }
  return max;
}

const unsorted = [5, 8, 7, 3, 6, 7, 8, 3, 88, 100, 88];
console.log(findMax(unsorted));
