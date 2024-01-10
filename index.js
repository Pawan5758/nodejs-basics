const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    test.write("hello world");
  })
  .listen(8000);
console.log("server is running");
