import express from 'express';

const app = express();
const PORT = 8080;

function logger(req, res, next) {
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next()
}

// The next() function is necessary to pass control to the next middleware or route handler in Express.js, ensuring the continuation of the request-response cycle.

app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.listen(PORT, () => {
    console.log(`${PORT} Port is running...`);
})