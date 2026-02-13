const express = require("express")
const { addExpense, getProjectExpenses, deleteExpense } = require("../controllers/ExpenseController.js")
const checkAuth = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/addExpense", checkAuth, addExpense)

router.get("/expenses/:id", checkAuth, getProjectExpenses)

router.delete("/deleteExpense/:id", checkAuth, deleteExpense)

module.exports = router
