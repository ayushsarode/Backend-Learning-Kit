const express = require('express');
const router = express.Router();
const URL = require('../models/url');

router.get("/", async (req, res) => {
    try {
        const allUrls = await URL.find({});
        return res.render("home", {
            urls: allUrls,
        });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
