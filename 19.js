//22. Implement a javascript function that flattens a nested array
//into a single-dimensional array
// const nestedArray = [1, [2, [3, 4], [7,5]], 6];
//  const flattenedArray = flattenArray(nestedArray);
//  console.log(flattenedArray);
// // Output: [1, 2, 3, 4, 5, 6]

function flattenArray(arr) {
  const stack = [...arr];
  let result = [];
  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.unshift(next);
    }
  }
  return result;
}

const nestedArray = [1, [2, [3, 4], [7, 5]], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
