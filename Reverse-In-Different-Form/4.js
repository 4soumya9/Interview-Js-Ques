// Ques: Reverse a word
// i/p: Hello
// o/p: olleH

function reversed(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

const input = "hello";
console.log(reversed(input));
