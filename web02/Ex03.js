const port = 3000;
const http = require("http");
const httpstatus = require("http-status-codes");
const fs = require("fs");

function connect(request, response) {
  if (request.url == "/" || request.url == "/index.html") {
    response.writeHead(httpstatus.OK, {
      "Content-Type": "text/html",
    });
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      response.write(data);
      response.end();
    });
  } else response.end(httpstatus.NOT_FOUND);
}

const server = http.createServer(connect);
server.listen(port);
