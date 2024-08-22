const http = require('http');

const server = http.createServer((req, res) => {
    console.log("headers", req.headers);
    console.log("method", req.method);
    console.log("url", req.url);
    const user = {
        name:"John",
        hobby:"skiing",
        age: 30
    }
    res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(user))
})

server.listen(8000);