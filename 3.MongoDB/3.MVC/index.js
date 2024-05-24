const express = require('express');
const userRouter = require("./routes/routes")
const { connectMongoDb } = require("./connection")

const app = express();
const PORT = process.env.PORT || 3000;

connectMongoDb("mongodb://localhost:27017/students-api")

// app.use(express.json())
// after sending data if it shows undefined, to recognize the incoming we have to use express.json() method. it is a middleware

//Routes
app.use("/users", userRouter)

app.listen(PORT, () => {
    console.log(`PORT ${PORT} is running `);
})