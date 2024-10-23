//create a counter in JS
function Counter(n) {
  for (let i = n; i >= 0; i--) {
    setTimeout(() => {
      console.log("Countdown: ", i);
    }, (n - i) * 1000);
  }
}

Counter(30);
