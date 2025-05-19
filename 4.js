//Remove Duplicate

const removeDup = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

// Method-2

function removeDup2(arr) {
  const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
  return uniqueArr;
}

const unsorted = [5, 8, 7, 3, 6, 7, 8,3, 88, 100,88];
const res = removeDup2(unsorted);
console.log(res);
