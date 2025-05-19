// factorial of number

const fact = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * fact(num - 1);
  }
};

const fact1 = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

const res = 5;
console.log(fact1(res));
