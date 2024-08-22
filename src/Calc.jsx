function add(a, b) {
  let sum = a + b;
  return sum;
}

function subtract(a, b) {
  let difference = a - b;
  return difference;
}

function multiply(a, b) {
  let product = a * b;
  return product;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  let quotient = a / b;
  return quotient;
}

export { add, subtract, multiply, divide };
