//Write a JavaScript function that returns the Fibonacci
//sequence up to a given number of terms.

function fib(numterms) {
  if (numterms <= 0) {
    return [];
  } else if (numterms === 1) {
    return [0];
  }

  const sequence = [0, 1];
  for (let i = 2; i < numterms; i++) {
    const nextFib = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextFib);
  }
  return sequence;
}

const numterms = 10;
const fibSeries = fib(numterms);
console.log(fibSeries);
