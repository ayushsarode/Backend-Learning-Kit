const User = require("../models/model")

handleGetUsers = async (req, res) => {
    try {
        // Fetch user data from the database
        const userData = await User.find();

        // Send the user data as response
        res.send(userData);
    } catch (error) {
        // Handle errors
        console.error("Error fetching users:", error);
        res.status(500).send("Internal Server Error");
    }
}

handleGetUserById = async (req, res) => {
    try {
        const _id = req.params.id;

        const studentData = await User.findById(_id);

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
}

handleCreateUser = async (req, res) => {
    try {
        const user = new User(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
        console.log(user);
    } catch (error) {
        res.status(400).send(error)
    }
}

handleUpdateUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await User.findByIdAndUpdate(_id, req.body);
        res.send(updateStudent);
    } catch (error) {
        res.status(404).send(error);
    }
}

handleDeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteStudent = await User.findByIdAndDelete(id);

        res.send(deleteStudent)
        console.log("User Deleted Succesfully");
    } catch (error) {
        res.status(404).send(error)
        console.log(error.message);
    }
}

module.exports = {
    handleGetUsers,
    handleGetUserById,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser
}