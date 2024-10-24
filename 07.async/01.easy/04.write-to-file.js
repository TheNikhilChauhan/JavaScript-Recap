const fs = require("fs");

function writeToFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("file.txt", "utf-8", (err, data) => {
      let result = data + " Hey there, this line is concatinated!";
      fs.writeFile("file.txt", result, (err) => {
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
    let result = await writeToFile();
    console.log(result);
  } catch (error) {
    console.log(`Error in the file ${error}`);
  }
}

GetFunction();
