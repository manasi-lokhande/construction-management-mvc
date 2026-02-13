const express = require("express")
const projectModel = require("../models/projectModel")
const { addProject, fetchById, updateProject, deleteProject } = require("../controllers/projectController")
const checkAuth = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/dashboard", checkAuth, async (req, resp) => {
    const data = await projectModel.find()
    resp.render("dashboard", { data })
})

router.get("/addProject", checkAuth, (req, resp) => {
    resp.render("addProject")
})

router.post("/addProject", checkAuth, addProject)

router.get("/edit/:id", checkAuth, fetchById)

router.patch("/edit/:id", checkAuth, updateProject)

router.delete("/delete/:id", checkAuth, deleteProject)

module.exports = router
