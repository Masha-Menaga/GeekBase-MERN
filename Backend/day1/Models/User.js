const { default: mongoose } = require("mongoose");

//create Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: { type: String },
    password: { type: String }
},
    { timestamp: true }
)

//creating Model
const User = mongoose.model("studentuser", userSchema) //collection create

//use Old collection


// export default User;

module.exports = {
    User
}