const port = 3000;
const http = require("http");
const httpstatus = require("http-status-codes");
const fs = require("fs");
const routeMap = require("./routeMap");
const typeMap = require("./typeMap");
function connect(request, response) {
  if (!routeMap.a[request.url]) {
    response.end(httpstatus.NOT_FOUND + ": Not Found.");
  } else {
    response.writeHead(httpstatus.OK, typeMap.a[request.url]);
    fs.readFile(routeMap.a[request.url], (err, data) => {
      if (err) throw err;
      else {
        response.write(data);
        response.end();
      }
    });
  }
}

const server = http.createServer(connect);
server.listen(port);
