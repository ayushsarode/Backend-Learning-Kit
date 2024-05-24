import express from 'express';

const app = express();
const port = 8080;

// GET method
app.get("/", (req, res) => {
    // console.log(req);
    res.send('<h1>Hello, World! This is Home Page</h1>');
})

//  an "endpoint" refers to a specific route in your web application that the server can respond to.

// ADDING ENDPOINT 

// endpoint is "/contact" here
app.get("/contact", (req, res) => {
    // console.log(req);
    res.send("<h1>This is Contact Page</h1>");
})

// server initialization
app.listen(port, () => {
    console.log(`${port} port wokring`);
})



