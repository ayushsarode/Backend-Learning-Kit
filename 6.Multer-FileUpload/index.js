const PORT = 8001;
const express = require('express')
const path = require('path');
const multer = require("multer")


const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json());

app.get("/", (req,res) => {
    return res.render("homepage")
})

app.listen(PORT, ()=> {
console.log(`Server started at http://localhost:${PORT}`);
})