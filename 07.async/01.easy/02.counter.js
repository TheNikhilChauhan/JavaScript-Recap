// without using setInterval, try to code a Counter.

function Counter(value) {
  for (let i = 0; i <= value; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

Counter(30);
