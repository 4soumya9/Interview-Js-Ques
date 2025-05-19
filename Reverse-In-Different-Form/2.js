// Ques: 21. Write a javascript function that reverses the order of words
// in a sentence without using the built-in reverse() method.

function reversedSen(str) {
  //   const words = str.split(" ");
  const words = str
    .trim()
    .split(" ")
    .filter((word) => word !== "");
  const stack = [];
  let result = "";

  for (let word of words) {
    stack.push(word);
  }
  while (stack.length > 0) {
    result += stack.pop();
    if (stack.length > 0) { //space between two words
      result += " ";
    }
  }
  return result;
}

const input = "  i like   this program very much  ";
console.log(reversedSen(input));
