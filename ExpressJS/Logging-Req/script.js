import express from 'express';
import morgan from 'morgan';


// MORGAN: HTTP request logger middleware for node.js

const app = express();
const port = 3000;

// app.use(morgan("combined"));

app.use(morgan("tiny"));


// combined: gives Standard Apache combined log output.
// dev: Concise output colored by response status for development use.
// many more, prefer => Concise output colored by response status for development use.

app.get("/", (req, res) => {
    res.send("Helloo world")
})

app.listen(port, () => {
    console.log(`${port} port is running...`);
})