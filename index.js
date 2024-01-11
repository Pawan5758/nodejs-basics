const http = require("http");
const greeting = require("./library");

http
  .createServer((req, res) => {
    greeting.getHello();
    greeting.getNamaste("pawan");
    res.writeHead(200, { "content-type": "text/html" });
    test.write("hello world");
  })
  .listen(8000);
console.log("server is running");
