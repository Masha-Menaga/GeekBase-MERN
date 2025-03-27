const { default: mongoose } = require("mongoose");

//create Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is Required"],
        unique: true,
        minlength: [5, "Use Atleast 5 Characters"],
        maxlength: [15, "Username atmost 15 characters allowed"],
        match: [/^[0-9A-Za-z]{5,15}$/, "user name is only alphanumeric Values"]
    },
    email: {
        type: String,
        required: [true, "email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: [8, "Password atleast have 8 Characters"],
        maxlength: [16, "Password atmost 16 charcters"],
        match: [/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password atleast contain 1 uppercase,lowercase,symbol,numeric value"]
    },
    age: {
        type: Number,
        min: [18, "age atleast 18"],
        validate: {
            validator: Number.isInteger,
            message: " Age must not contain decimal values"
        }
    },
    role: {
        type: String,
        default: "Student"
    }
},
    { timestamps: true }
)

//creating Model
const User = mongoose.model("studentuser", userSchema) //collection create

//use Old collection


// export default User;

module.exports = {
    User
}