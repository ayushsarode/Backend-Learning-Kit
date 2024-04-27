const mongoose = require('mongoose');
const validator = require('validator');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        unique: [true, "Email id already present"],
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: String,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', StudentSchema);

module.exports = User;
