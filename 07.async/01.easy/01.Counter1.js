// create a counter

function Counter(value) {
  let i = 0;
  let interval = setInterval(() => {
    console.log(i);
    i++;
    if (i > value) {
      clearInterval(interval);
    }
  }, 1000);
}

Counter(30);
