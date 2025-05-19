//Write a JavaScript function that takes an array of numbers
//and returns a new array with only the even numbers.

function findEvenNumber(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

const unsorted = [5, 8, 7, 3, 6, 7, 8, 88, 88];
const res = findEvenNumber(unsorted);
console.log(res);
