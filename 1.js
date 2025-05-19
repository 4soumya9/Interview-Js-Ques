const findDuplicate = (arr) => {
  const dup = arr.filter((index, item) => arr.indexOf(item) !== index);
  const ress = [...new Set(dup)];
  return ress;
};

const unsorted = [5, 8, 7, 3, 6, 7, 8, 88, 88];
const res = findDuplicate(unsorted);
console.log(res);
