const prompt = require("prompt-sync")();

function stringReverser() {
  const text = prompt("Enter text to reverse: ");

  function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  const result = reverseString(text);
  console.log(`Original text: ${text}`);
  console.log(`Reversed text: ${result}`);
  return result;
}

if (require.main === module) {
  stringReverser();
} else {
  module.exports = stringReverser;
}
