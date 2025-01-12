const prompt = require("prompt-sync")();

function fibonacciChecker() {
  const number = parseInt(prompt("Enter a number to check: "));

  function checkFibonacci(num) {
    let firstNumber = 0;
    let secondNumber = 1;

    while (secondNumber < num) {
      let temp = secondNumber;
      secondNumber = firstNumber + secondNumber;
      firstNumber = temp;
    }

    return secondNumber === num || num === 0;
  }

  const result = checkFibonacci(number);
  console.log(
    `${number} ${
      result ? "belongs" : "does not belong"
    } to the Fibonacci sequence`
  );
  return result;
}

if (require.main === module) {
  fibonacciChecker();
} else {
  module.exports = fibonacciChecker;
}
