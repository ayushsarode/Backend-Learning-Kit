const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students-api").then(() => {
    console.log("MongoDB Connected successfully");
}).catch((err) => {
    console.log(err);
})