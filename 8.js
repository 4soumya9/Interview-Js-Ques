//Longest  word in a sentence

const findLongestWord = (str) => {
  const wordArray = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord.length) {
      longestWord = wordArray[i];
    }
  }
  console.log(longestWord);
};

findLongestWord("Hi Iam Saikrishna Iam a UIhhhhhhhhhhhhhhhhhhhhhhh Developer");
