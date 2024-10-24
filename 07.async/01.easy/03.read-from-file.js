const fs = require("fs");

function readFromFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("file.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function GetFunction() {
  try {
    let result = await readFromFile();
    console.log(result);
  } catch (error) {
    console.log(`Error reading file ${error}`);
  }
}

GetFunction();
