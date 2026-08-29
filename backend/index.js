import express from "express";

const app = express(); 

app.get('/', (req, res) => {
    res.send("Hello this is the root folder")
})


app.get('/api/health', (req, res) => {
    res.send("Server is fine and running");
})

const PORT = 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
})