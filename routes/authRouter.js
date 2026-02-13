const checkAuth = require("../middleware/authMiddleware");
const express = require('express');
const { registerForm, register, loginForm, login, dashboard, logout } = require('../controllers/userController.js');

const router = express.Router()

router.get("/register",registerForm)
router.post("/register",register)
router.get("/login",loginForm)
router.post("/login",login)
router.get("/dashboard", checkAuth,dashboard);
router.get("/logout",logout)

module.exports=router
