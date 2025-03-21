const express = require("express") // import express
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const { getAllStudentUser } = require("./Controller/UserController");

const server = express();
dotenv.config()


server.listen(process.env.PORT, () => {
    console.log("Server is running");
})

// mongoose.connect(process.env.MONGODB_URL)
//     .then(() => { console.log("Connected to DB") })
//     .catch((err) => { console.log("Error: Not Connected to DB") })

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to DB")
    }
    catch (error) {
        console.log("Error: Not COnnected to DB : ", error.message)
    }
}
DBConnection();

server.get("/", (req, res) => {
    res.status(200).json({ message: "Successfully response gained" })
})

server.get("/studentuser", getAllStudentUser)