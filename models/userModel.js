const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        minlength:3,
        required:true
    },
    password:{
        type:String,
        minlength:3,
        required:true
    }
})

const userModel= mongoose.model("user",userSchema)

module.exports = userModel