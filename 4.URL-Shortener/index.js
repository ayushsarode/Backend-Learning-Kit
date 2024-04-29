const express = require("express")
const {connectToMongoDB} = require('./connection')

const app = express()
const PORT = process.env.PORT || 8000;

const urlRoute = require("./routes/routes")

connectToMongoDB('mongodb://localhost:27017/url-shortener').then(() => {
    console.log('MongoDB Successfully Connected');
})



app.use(express.json());

app.use ("/url",urlRoute);

app.listen(PORT, () => {
    console.log(`${PORT} is listening...`);
})