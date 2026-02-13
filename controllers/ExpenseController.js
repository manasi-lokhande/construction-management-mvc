const expenseModel = require("../models/Expense")

// Add Expense
const addExpense = async (req, resp) => {
    try {
        const { projectId, title, amount } = req.body

        await expenseModel.create({
            projectId,
            title,
            amount
        })

        resp.redirect("/dashboard")

    } catch (error) {
        console.log(error)
    }
}


// Get All Expenses of a Project
const getProjectExpenses = async (req, resp) => {
    try {
        const expenses = await expenseModel.find({
            projectId: req.params.id
        })

        resp.render("expenses", { expenses })

    } catch (error) {
        console.log(error)
    }
}


// Delete Expense
const deleteExpense = async (req, resp) => {
    try {
        await expenseModel.findByIdAndDelete(req.params.id)

        resp.redirect("/dashboard")

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    addExpense,
    getProjectExpenses,
    deleteExpense
}
