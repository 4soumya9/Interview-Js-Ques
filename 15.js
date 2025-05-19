//Given 2 arrays that are sorted [0,3,4,31] and [4,6,30].
//Merge them and sort [0,3,4,4,6,30,31]

const sortedData = (arr1, arr2) => {
  let i = 1;
  let j = 1;

  let array1 = arr1[0];
  let array2 = arr2[0];
  let merged = [];
  while (array1 || array2) {
    if (array2 === undefined || array1 < array2) {
      merged.push(array1);
      array1 = arr1[i];
      i++;
    } else {
      merged.push(array2);
      array2 = arr2[j];
      j++;
    }
  }
  console.log(merged);
};

sortedData([0,3,4,31],[4,6,30]);
