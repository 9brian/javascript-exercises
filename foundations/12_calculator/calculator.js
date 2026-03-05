const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(list) {

  let sum = 0;
	for(let i = 0; i < list.length; i++){
    sum += list[i];
  }

  return sum;
};

const multiply = function(list) {
  let product = 1;
	for(let i = 0; i < list.length; i++){
    product *= list[i];
  }

  return product;
};

const power = function(base, exp) {

  let finalAnswer = 1;

  for (let i = 0; i < exp; i++){
    finalAnswer = finalAnswer * base;
  }

  return finalAnswer;
	
};

const factorial = function(number) {
	
  let ans = 1;

  for(let i = number; i > 1; i--){
    ans = ans * i;
  }

  return ans;
};

// 1. `add()`: take two numbers and return their sum
// 2. `subtract()`: take two numbers and return the result after subtracting the second from the first
// 3. `sum()`: take an array of numbers and add all the numbers together
// 4. `multiply()`: take an array of numbers and multiply all the numbers together
// 5. `power()`: take two numbers (base and exponent) and return the result of raising the base to that exponent
// 6. `factorial()`: given a single number, find its [factorial](https://en.wikipedia.org/wiki/Factorial)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
