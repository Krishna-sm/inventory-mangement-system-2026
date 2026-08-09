const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lower:true
    },
    password:{
        type:String
    }
},{
    timestamps:true
})

const userModel = mongoose.model("user",userSchema)

module.exports= userModel