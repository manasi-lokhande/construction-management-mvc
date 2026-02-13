const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "projects",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        min: 1,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const expenseModel = mongoose.model("expenses", expenseSchema)

module.exports = expenseModel
