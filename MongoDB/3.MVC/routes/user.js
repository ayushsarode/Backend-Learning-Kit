const express = require('express');
const router = express.Router();

 app.use(express.json())
 // after sending data if it shows undefined, to recognize the incoming we have to use express.json() method. it is a middleware 

 router.get("/", async (req, res) => {
    try {
        // Fetch student data from the database
        const studentsData = await StudentModel.find();

        // Format student data into <li> elements
        // const studentListItems = studentData.map(student => `<li>${student.name}</li><li>${student.email}</li> <br>`).join('');

        // Send the formatted list as HTML
        // res.send(`<ul>${studentListItems}</ul>`);
        res.send(studentsData)
    } catch (error) {
        res.send(error);
    }
});



//getting data dynamacally by id
router.get("/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const studentData = await StudentModel.findById(_id);

        console.log(studentData);

        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (error) {
        // Handle errors here
        console.error(error);
        res.status(500).send('Internal Server Error');
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

router.post("/", async (req, res) => {
    try {
        const user = new StudentModel(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
        console.log(user);
    } catch (error) {
        res.status(400).send(error)
    }
})


//update user 
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await StudentModel.findByIdAndUpdate(_id, req.body);
        res.send(updateStudent);
    } catch (error) {
        res.status(404).send(error);
    }
})


// delete by id
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteStudent = await StudentModel.findByIdAndDelete(id);

        res.send(deleteStudent)
        console.log("User Deleted Succesfully");
    } catch (error) {
        res.status(404).send(error)
        console.log(error.message);
    }
})

module.exports = router