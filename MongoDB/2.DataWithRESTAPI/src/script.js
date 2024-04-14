const express = require('express');
require("./DB/connection")
const StudentModel = require('./models/students')


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
// after sending data if it shows undefined, to recognize the incoming we have to use express.json() method. it is a middleware

app.get("/students", async (req, res) => {
    try {
        // Fetch student data from the database
        const studentData = await StudentModel.find();

        // Format student data into <li> elements
        const studentListItems = studentData.map(student => `<li>${student.name}</li><li>${student.email}</li> <br>`).join('');

        // Send the formatted list as HTML
        res.send(`<ul>${studentListItems}</ul>`);
    } catch (error) {
        res.send(error);
    }
});

// app.post('/students'), (req, res) => {
//     console.log(req.body);
//     const user = new StudentModel(req.body)
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// }

//the above code is using promises like .then and .catch better way is to use async await

app.post("/students", async (req, res) => {
    try {
        const user = new StudentModel(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
        console.log(user);
    } catch (error) {
        res.status(400).send(error)
    }
})





app.listen(port, () => {
    console.log(`PORT ${port} is running `);
})