const express = require("express")
const session = require("express-session")
const override = require("method-override")
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRouter")
const projectRoutes = require("./routes/projectRouter")
const expenseRoutes = require("./routes/expenseRoute")
const { connectDB } = require("./config/db")
connectDB()
const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false
}))

app.use(override("_method"))

app.use("/", authRoutes)
app.use("/", projectRoutes)
app.use("/", expenseRoutes)

app.listen(5000, () => {
    console.log("Server running on 4000")
})
