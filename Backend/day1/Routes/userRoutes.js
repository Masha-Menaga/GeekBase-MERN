const Router = require("express");
const { getAllStudentUser, getStudentById, createStudentUser, updateStudentUser, deleteStudentUser } = require("../Controller/UserController");

const userRoutes = Router();

userRoutes.get("/", getAllStudentUser)
userRoutes.get("/:id", getStudentById)
userRoutes.post("/", createStudentUser)
userRoutes.put("/:id", updateStudentUser)
userRoutes.delete("/", deleteStudentUser)










module.exports = userRoutes;

