//String is a palindrome or not

const checkPalindrome1 = (str) => {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return "Not palindrome";
    }
  }
  return "palindrome";
};

const checkPalindrome = (str) => {
  const rev = str.split("").reverse().join("");
  return str === rev ? "Palindrome" : " Not";
};

console.log(checkPalindrome("madam1"));
