const express = require("express");
const app = express();
path = require("path");
app.get("/", (request, response) => response.send("HELLO!"));
app.get("/test", (request, response) =>
  response.sendFile(path.join(__dirname, "test.html"))
);
app.listen(3000);
app.use((request, response) => response.sendStatus(404));
