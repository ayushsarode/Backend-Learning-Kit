
const validator = require('validator')

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
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: String,
        unique: true,
        min: 10,
        max: 10
    }
})


const StudentModel = mongoose.model('Student', StudentSchema);

module.exports = User