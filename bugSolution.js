function myFunc(a, b) {
  // Explicit type checking using typeof
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    console.error('Both inputs must be numbers');
    return NaN; // or handle the error appropriately
  }
}

console.log(myFunc(1, 2)); // Output: 3
console.log(myFunc(1, '2')); // Output: Error message and NaN