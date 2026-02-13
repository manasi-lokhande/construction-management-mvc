const projectModel = require("../models/projectModel")

const addProject = async (req, resp) => {
    try {
        const { pname, location, budget, status } = req.body

        await projectModel.create({pname,location,budget,status})
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error)
    }
}

const fetchById = async (req, resp) => {
    try {
        const pdata = await projectModel.findById(req.params.id)
        resp.render("edit", { pdata })
    } catch (error) {
        console.log(error)
    }
}

const updateProject = async (req, resp) => {
    try {
        await projectModel.findByIdAndUpdate(req.params.id, req.body)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error)
    }
}

const deleteProject = async (req, resp) => {
    try {
        await projectModel.findByIdAndDelete(req.params.id)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addProject,
    fetchById,
    updateProject,
    deleteProject
}
