const prompt = require("prompt-sync")();

function reverseString(text) {
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  return reversedText;
}

function reverseStringArray(text) {
  return Array.from(text).reduce((acc, char) => char + acc, "");
}

const text = prompt("Enter a text:");
console.log(`Reversed text: ${reverseString(text)}`);
