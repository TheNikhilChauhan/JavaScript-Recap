//1. write a program that prints all the even numbers in an array

let nums = [1, 5, 6, 7, 3, 34, 51, 67, 42];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log("Even numbers ", nums[i]);
  }
  /* else {
    console.log("Odd Numbers ", nums[i]);
  } */
}
