const mongoose = require("mongoose");

async function connectMongoDb(url) {
    return mongoose.connec(url)
}

module.exports = {
    connectMongoDb
}