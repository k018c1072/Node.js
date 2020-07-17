const port = 3000;
const http = require("http");
const httpstatus = require("http-status-codes");

function connect(request, response) {
  response.statuscode = httpstatus.OK;
  response.setHeader("Content-Tyepe", "text/html");
  var msg = "<h1>Okabe Yuki</h1>";
  response.end(msg);
}

const server = http.createServer(connect);
server.listen(port);
