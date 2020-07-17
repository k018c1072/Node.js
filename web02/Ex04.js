const port = 3000;
const http = require("http");
const httpstatus = require("http-status-codes");
const fs = require("fs");

function connect(request, response) {
  switch (request.url) {
    case "/":
    case "/index.html":
      response.writeHead(httpstatus.OK, {
        "Content-Type": "text/html",
      });
      fs.readFile("index.html", (err, data) => {
        if (err) throw err;
        response.write(data);
        response.end();
      });
      break;
    case "/ai.jpg":
      response.writeHead(httpstatus.OK, {
        "Content-Type": "image/jpg",
      });
      fs.readFile("ai.jpg", (err, data) => {
        if (err) throw err;
        response.write(data);
        response.end();
      });
      break;
    case "/test.js":
      response.writeHead(httpstatus.OK, {
        "Content-Type": "text/javascript",
      });
      fs.readFile("test.js", (err, data) => {
        if (err) throw err;
        response.write("<script>" + data + "</script>");
        response.end();
      });
      break;
    default:
      response.end("404 Not Found.");
  }
}

const server = http.createServer(connect);
server.listen(port);