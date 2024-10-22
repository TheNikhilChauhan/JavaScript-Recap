//2. write a program to print the biggest number in an array

let arr = [4, 7, 24, 86, 34, 64, 34, 88, 354, 89];
let maxValue = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxValue) {
    maxValue = arr[i];
  }
}

console.log("The maximum value in the array is ", maxValue);
