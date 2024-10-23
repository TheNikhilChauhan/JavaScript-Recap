function sum(a, b, fnToCall) {
  let result = a + b;
  return fnToCall(result);
}

//2. write another function that displays this result in a pretty format

function display(data) {
  return `The sum is: ${data}`;
}

function displayPassive(data) {
  return `The result of the sum is: ${data}`;
}

console.log(sum(10, 20, display));
// console.log(sum(10, 20, displayPassive));

/********************************** */

function calculateArithmetic(a, b, cb) {
  const ans = cb(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

const value = calculateArithmetic(10, 20, sum);
const value2 = calculateArithmetic(10, 20, sub);
console.log(value);
console.log(value2);
