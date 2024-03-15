const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/StudentData").then(() => {
    console.log("Connected to MongoDB succesfully")
}).catch((err) => {
    console.log(err);
})



const student = mongoose.Schema({
    name: String,
    RollNum: Number,
    FeesPaid: Boolean,

})

const Student = mongoose.model("Student", student)


const Adder = async () => {
    const CreateStud = new Student({
        name: "Ayush",
        RollNum: 13,
        FeesPaid: true
    })
    await CreateStud.save();
}
Adder()

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
