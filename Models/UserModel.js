const mongoose =require('mongoose')

const userModel= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Object,
        default:new Date
    }
})

module.exports =mongoose.model('users',userModel)