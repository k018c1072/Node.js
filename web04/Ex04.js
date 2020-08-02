const express = require("express");
const app = express();
app.get("/:abc", (request, response) =>
  response.send(console.log(request.params))
);
app.listen(3000);
