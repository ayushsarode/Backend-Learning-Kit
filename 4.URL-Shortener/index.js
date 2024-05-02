const express = require("express")
const { connectToMongoDB } = require('./connection')
const URL = require("./models/url")

const app = express()
const PORT = process.env.PORT || 8000;

const urlRoute = require("./routes/routes")

connectToMongoDB('mongodb://localhost:27017/url-shortener').then(() => {
    console.log('MongoDB Successfully Connected');
})



app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    });
    res.redirect(entry.redirectURL)
})

app.listen(PORT, () => {
    console.log(`${PORT} is listening...`);
})