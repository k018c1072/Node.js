const port = 3000;
const http = require("http");
const httpstatus = require("http-status-codes");

const connect = function (request, response) {
  response.statuscode = httpstatus.OK;
  response.setHeader("Content-Tyepe", "text/html");
  console.log(request.url);
  var msg = "<h1>Okabe Yuki</h1>";
  response.end(msg);
};

const server = http.createServer(connect);
server.listen(port);
