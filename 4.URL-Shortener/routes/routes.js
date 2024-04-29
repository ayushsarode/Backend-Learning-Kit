const express = require('express')
const { handleGenerateShortUrl } = require("../controllers/controllers")
const router = express.Router()


router.post('/', handleGenerateShortUrl)

module.exports = router