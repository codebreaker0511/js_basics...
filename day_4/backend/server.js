const http = require("http");

const server = http.createServer((req,res) => {
    const {url , method} = req; 
    if(url == '/api/health'){
        res.end("WELCOME TAO")
    }
    else if(url == '/'){
        res.end("This is the home page");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404: Route Not Found");
    }
})

server.listen(3000, () => {
    console.log("Server is starting")
})