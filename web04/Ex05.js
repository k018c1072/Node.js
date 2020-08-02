const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static("data"));
app.post("/form.html", (request, response) => {
  console.log(request.query);
  response.end("POSTED.");
});
app.listen(3000);
