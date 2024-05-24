const mongoose = require("mongoose");

async function connectMongoDb(url) {
    try {
        console.log("MongoDB connected");
        return mongoose.connect(url)
        
    } catch (error) {
     console.log(error);   
    }
    
}

module.exports = {
    connectMongoDb
}