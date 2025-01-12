# Fibonacci Sequence Challenge

## Description

This challenge implements a function to verify if a given number belongs to the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, where each subsequent number is the sum of the previous two numbers (0, 1, 1, 2, 3, 5, 8, 13, 21, 34...).

## Implementation

```javascript
function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;

  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  return b === numero || numero === 0;
}
```
