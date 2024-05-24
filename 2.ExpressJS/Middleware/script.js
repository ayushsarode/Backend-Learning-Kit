import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    console.log(__dirname, "index.html");
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", (req, res) => {
    console.log(req.body);
})

app.get("/submit", (req, res) => {
    res.send("Submitted");
})

app.listen(port, () => {
    console.log(`${port} port listening`);
})




