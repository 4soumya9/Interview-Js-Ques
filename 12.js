//Write a function sumOfThirds(arr), which takes an
//array arr as an argument. This function should return a sum of
//every third number in the array, starting from the first one

function sumOfThirds(arr) {
    let sum=0;
  if (arr.length < 3) {
    return arr;
  }
  for (let i = 0; i < arr.length; i = i + 3) {
    sum += arr[i];
  }
  return sum;
}

const unsorted = [5, 8, 7, 3, 6, 7, 8, 3, 88, 100, 88];
console.log(sumOfThirds(unsorted));
