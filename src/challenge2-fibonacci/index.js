const prompt = require("prompt-sync")();

function verifyFibonacci(num) {
  let firstNumber = 0;
  let secondNumber = 1;

  while (secondNumber < num) {
    let temp = secondNumber;
    secondNumber = firstNumber + secondNumber;
    firstNumber = temp;
  }

  return secondNumber === num || num === 0;
}

const number = parseInt(prompt("Digite um número:"));
if (verifyFibonacci(number)) {
  console.log(`${number} pertence à sequência de Fibonacci`);
} else {
  console.log(`${number} NÃO pertence à sequência de Fibonacci`);
}
