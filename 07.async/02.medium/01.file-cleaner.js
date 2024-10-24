// Read a file, remove all the extra spaces and write it back to the same file.

/* For example, if the file input was

hello     world    my    name   is       Harvey

After the program runs, the output should be

hello world my name is Harvey */

const fs = require("fs");

function removeExtraSpace() {
  return new Promise((resolve, reject) => {
    fs.readFile("file2.txt", "utf-8", (err, data) => {
      let result = data.replace(/\s+/g, " ");
      fs.writeFile("file2.txt", result, (err) => {
        if (err) {
          reject();
        } else {
          resolve(result);
        }
      });
    });
  });
}

async function GetFunction() {
  try {
    let result = await removeExtraSpace();
    console.log(result);
  } catch (error) {
    console.log(`Error in the file ${error}`);
  }
}

GetFunction();
