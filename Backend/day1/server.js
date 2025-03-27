const express = require("express") // import express
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const { getAllStudentUser } = require("./Controller/UserController");
const userRoutes = require("./Routes/userRoutes");
const { ErrorHandlers } = require("./Middleware/ErrorHandlers");
const morgan = require("morgan");

const server = express();

dotenv.config()

server.use(morgan("dev"));
server.use(express.json()) //  Pass Req body JSON data

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

server.use("/studentuser", userRoutes)
server.use(ErrorHandlers)
