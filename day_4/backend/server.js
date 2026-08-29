// const http = require('http') // this requires common js module..
//  
// const server = http.createServer((req,res) => {
//     const {url , method} = req; 
//     if(url == '/api/health'){
//         res.end("WELCOME TAO")
//     }
//     else if(url == '/'){
//         res.end("This is the home page");
//     }
//     else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("404: Route Not Found");
//     }
// })

// server.listen(3000, () => {
//     console.log("Server is starting")
// })


import express from 'express'; // This requires ESModules..

const app = express();


app.get('/',(req,res) => {
    res.send('Hello to my home page server');
})

app.get('/api/health', (req,res) => {
    res.send("everything's alright")
})


app.post('/login', )


app.listen(3000, ()=>{
    console.log("SERVER is starting on express be ready")
})