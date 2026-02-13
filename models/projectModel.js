const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    pname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Planning", "In Progress", "Completed"],
        default: "Planning"
    }
})

const projectModel = mongoose.model("projects", projectSchema)

module.exports = projectModel
