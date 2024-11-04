import fs from "fs";
import express from "express";
import path from "path";

const app = express();

app.get("/file", function (req, res) {
  fs.readdir(path.join(__dirname, "./file/"), (err, file) => {
    if (err) {
      return res.status(500).json({ error: "Failed to retrieve the files" });
    }

    res.json(file);
  });
});

app.get("/file/:filename", function (req, res) {
  const filepath = path.join(__dirname, "./file/", req.params.filename);

  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.send(data);
  });
});

app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});

app.listen(2000, () => {
  console.log("the app is running on port 2000");
});
export default app;
