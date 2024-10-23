// calculate the time it takes between a setTimeout call and the inner function actually running

let startTime = Date.now();

setTimeout(() => {
  let endTime = Date.now();
  let timeDifference = endTime - startTime;
  console.log(
    `Time difference between the start and end of the function is ${timeDifference} miliseconds`
  );
}, 1000);
