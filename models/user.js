const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: false,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    ip_address:{
        type:String,
        unique: true
    },
    gender:{
        type:String,
    },
})

const User = mongoose.model("user", userSchema)


module.exports = User