const { User } = require("../Models/User");

async function getAllStudentUser(req, res) {
    try {
        const users = await User.find()
        res.status(200).json({
            message: "Sucess",

            users,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAllStudentUser
}