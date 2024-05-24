import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 8080;

let userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
        userIsAuthorised = true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/check", (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/secretFile.html");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(PORT, () => {
    console.log(`${PORT} Port is running`);
});
