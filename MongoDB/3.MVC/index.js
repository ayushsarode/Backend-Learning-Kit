const express = require('express');
const userRouter =  require("./routes/user")
const {connectMongoDb} = require( "./connection")

const app = express();
const port = process.env.PORT || 3000;

connectMongoDb("mongodb://localhost:27017/students-api")

app.use(express.json())
// after sending data if it shows undefined, to recognize the incoming we have to use express.json() method. it is a middleware


//Routes
app.use("/user", userRouter)

app.listen(port, () => {
    console.log(`PORT ${port} is running `);
})