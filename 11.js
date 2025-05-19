//Find the smallest word in a given sentence

function small(str) {
  const wordArray = str.split(" ");
  let smallest = wordArray[0];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length < smallest.length) {
      smallest = wordArray[i];
    }
  }
  return smallest;
}

let res = small("Hi Iam Saikrishna Iam amm UIhhhhhhhhhhhhhhhhhhhhhhh Developer n");
console.log(res);
