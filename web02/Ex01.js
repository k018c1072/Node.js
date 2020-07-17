const port = 3000;
const http = require("http");
const httpstatus = require("http-status-codes");

const routeMap = {
  "/ishida": "<h1>ISHIDA</h1>",
  "/susu": "<h1>MAGO</h1>",
  "/hello": "<h1>Hello world!<h1>",
};

function connect(request, response) {
  response.writeHead(httpstatus.OK, {
    "Content-Type": "text/html",
  });
  let msg = routeMap[request.url];
  if (!msg) {
    msg = "<h1>HELLO2!</h1>";
  }
  response.end(msg);
}

const server = http.createServer(connect);
server.listen(port);
