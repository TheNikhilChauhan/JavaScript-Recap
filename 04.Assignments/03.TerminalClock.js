function clearTerminal() {
  process.stdout.write("\x1b");
}

function TerminalClock() {
  let time = new Date();

  const hours = String(time.getHours()).padStart(3, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const CurrentTime = `${hours}: ${minutes}: ${seconds}`;

  clearTerminal();

  console.log(CurrentTime);
}

setInterval(TerminalClock, 1000);
