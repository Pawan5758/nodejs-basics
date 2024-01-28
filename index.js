const http = require("http");
const greeting = require("./library");
const mathOperation = require("./math ");
const uppercase = require("to-upper");

http
  .createServer((req, res) => {
    greeting.getHello();
    const result = uppercase("Hello pawan");
    mathOperation.multiplication(`${2}${3}`);
    greeting.getNamaste("pawan");
    res.writeHead(200, { "content-type": "text/html" });
    test.write("hello world");
  })
  .listen(8000);
console.log("server is running");