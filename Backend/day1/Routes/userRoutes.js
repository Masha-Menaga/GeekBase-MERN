const Router = require("express");
const { getAllStudentUser, getStudentById, createStudentUser, updateStudentUser, deleteStudentUser } = require("../Controller/UserController");

const userRoutes = Router();

userRoutes.get("/studentuser", getAllStudentUser)
userRoutes.get("studentuser/:id", getStudentById)
userRoutes.post("/studentuser/", createStudentUser)
userRoutes.put("/studentuser/:id", updateStudentUser)
userRoutes.delete("/studentuser", deleteStudentUser)










module.exports = userRoutes;

