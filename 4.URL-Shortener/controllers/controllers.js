const shortid  = require('shortid')
const URL = require("../models/url");

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(404).json({ error: 'url is required' })
    const shortID = shortid();
    await URL.create(
        {
            shortId: shortID,
            redirectURL: body.url,
            visitHistory: [],
        }
    );
    return res.json({ id: shortID })
    res.send("hiii")
}

module.exports = {
    handleGenerateShortUrl
};