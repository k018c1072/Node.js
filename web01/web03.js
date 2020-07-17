const port = 3000;
const http = require("http");
const httpstatus = require("http-status-codes");

const connect = function (request, response) {
  response.statuscode = httpstatus.OK;
  response.setHeader("Content-Tyepe", "text/html");
  console.log(request.url);
  var msg = "<body><img src = 'ra-men.jpg' ></body>";
  response.end(msg);
};

const server = http.createServer(connect);
server.listen(port);
