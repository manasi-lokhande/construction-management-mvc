const proModel = require("../models/projectModel");
const userModel = require("../models/userModel");
const bcryptjs = require('bcryptjs');

const registerForm =(req,resp)=>{
    resp.render("register")
}

const loginForm =(req,resp)=>{
    resp.render("login")
}

const register = async (req,resp)=>{
    try {
        const {username,password}=req.body
        const hashpassword = await bcryptjs.hash(password,10)
        await userModel.create({username,password:hashpassword})
        resp.redirect("/login")
    } catch (error) {
        console.log(error);
    }
}

const login = async (req,resp)=>{
    try {
        const {username,password}=req.body
        const user = await userModel.findOne({username})
        if (!user) {
            resp.json("user does not exist")
        } else if(await bcryptjs.compare(password,user.password)){
            req.session.userData = user.username
            resp.redirect("/dashboard")
        }
    } catch (error) {
        console.log(error);
    }
}

const dashboard = async (req,resp)=>{
    try {
        const data = await proModel.find()
        resp.render("dashboard",{uname:req.session.userData,data})
    } catch (error) {
        console.log(error);
    }
}

const logout = (req,resp)=>{
    req.session.destroy(()=>{
        resp.redirect("/login")
    })
}

module.exports = {registerForm,loginForm,register,login,dashboard,logout}