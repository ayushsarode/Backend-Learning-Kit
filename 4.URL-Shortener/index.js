const express = require("express");
const path = require("path")
const { connectToMongoDB } = require('./connection')
const URL = require("./models/url")

const app = express()
const PORT = process.env.PORT || 8000;

const urlRoute = require("./routes/routes")

connectToMongoDB('mongodb://localhost:27017/url-shortener').then(() => {
    console.log('MongoDB Successfully Connected');
})

//ejs 
app.set('view engine', "ejs");
app.set('views', path.resolve("./views"))

app.use(express.json());

app.use("/url", urlRoute);

app.get("/test", async(req,res) => {
    const allUrls  = await URL.find({});
    return res.render('home',
        {
            urls:allUrls,
            
        },
        
    );
});

app.get("/:shortId", async (req, res) => {
    try {
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

        if (entry && entry.redirectURL) {
            res.redirect(entry.redirectURL);
        } else {
            // Handle the case when entry is null or redirectURL is not available
            res.status(404).send("URL Not Found");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`${PORT} is listening...`);
})