const { User } = require("../Models/User");

async function getAllStudentUser(req, res, next) {
    try {
        const users = await User.find()
        res.status(200).json({
            message: "Sucess",
            users,
        })
    } catch (err) {
        next(err)
    }
}

/find By Id/
async function getStudentById(req, res, next) {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({
            message: "Success",
            user,
        })

    } catch (err) {
        next(err)
    }
}

// create User

async function createStudentUser(req, res, next) {
    // const { name, email, password, age } = req.body;
    try {
        // const IsUserExist = await User.findOne(req.body)
        // if (!IsUserExist) {
        const user = await User.create(req.body)
        return res.status(201).json({
            message: "Success",
            user,

        })
        // } 
        // else {
        // return res.status(409).json({
        // message: "User already Exists"
        // })
        // }
    } catch (err) {
        next(err)
    }
}

// Update student User

async function updateStudentUser(req, res, next) {
    const { name, email, password } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json({
            message: "Success",
            user,
        })
    } catch (err) {
        next(err)

    }
}

// Delete Student User

async function deleteStudentUser(req, res) {
    const { name, email, password } = req.body;
    try {
        const IsUserExist = await User.findOne(req.body)
        if (IsUserExist) {
            const user = await User.deleteOne(req.body)
            return res.status(200).json({
                message: "Success",
                user,
            })
        } else {
            return res.status(404).json({ message: "User Not Found" })
        }
    } catch (err) {

        next(err)

    }
}


module.exports = {
    getAllStudentUser, getStudentById, createStudentUser, updateStudentUser, deleteStudentUser
}