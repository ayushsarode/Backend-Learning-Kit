const express = require('express');
const router = express.Router();
const { handleGetUsers, handleGetUserById, handleCreateUser, handleUpdateUser, handleDeleteUser } = require("../controllers/controllers")

router.use(express.json())
// after sending data if it shows undefined, to recognize the incoming we have to use express.json() method. it is a middleware 


router.route("/").get(handleGetUsers).post(handleCreateUser)


router.route("/:id").get(handleGetUserById).patch(handleUpdateUser).delete(handleDeleteUser)

module.exports = router