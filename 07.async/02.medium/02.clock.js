// create a clock that shows you the current machine time.

/* make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM) */

function Clock() {
  return new Promise((resolve) => {
    setInterval(() => {
      let date = new Date();
      let hour = String(date.getHours()).padStart(2, "o");
      let minutes = String(date.getMinutes()).padStart(2, "o");
      let seconds = String(date.getSeconds()).padStart(2, "o");

      let currentTime = `${hour}: ${minutes}: ${seconds}`;

      //12 hour time
      let period = hour >= 12 ? "PM" : "AM";
      let hour12 = hour % 12;

      let currentTime12 = `${hour12}: ${minutes}: ${seconds} ${period}`;

      console.log(currentTime);
      console.log(currentTime12);
    }, 1000);
  });
}

Clock();
