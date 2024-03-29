const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/AnimeWatchList").then(() => {
    console.log('MongoDB connected');
})

app.get('/users', (req, res) => {
    res.send("Handling POST req With Mongo DB")

})

app.post('/user', (req, res) => {
    console.log(req.body);
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})