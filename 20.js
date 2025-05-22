// 23. Write a function which converts string input into an object
// / stringToObject("a.b.c", "someValue");
//  output → {a: {b: {c: "someValue"}}}

function convert(str, finalValue) {
  const keys = str.split(".");
  const result = {};
  let current = result;
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    current[key] = i === keys.length - 1 ? finalValue : {};
    current = current[key];
  }
  return result;
}

const op = convert("a.b.c", "someValue");
console.log(op);
