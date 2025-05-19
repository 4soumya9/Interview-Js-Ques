// 16. Write logic to get unique objects from below array ?
//  I/P [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name:
// "111111"}];
//  O/P [{name: "sai"},{name:"Nang"}{name: "111111"}

//ques1:
const input = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];

// ques2:
const input2 = [
  { name: "sai", age: 25 },
  { name: "sai", age: 30 },
  { name: "sai", age: 25 }, // duplicate
  { name: "Nang", age: 25 },
];
const getUnique = (arr) => {
  const seen = new Set();
  const unique = arr.filter((item) => {
    // const key = `${item.name}`;
    const key = `${item.name} - ${item.age}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
  console.log(unique);
};

const res = getUnique(input2);
