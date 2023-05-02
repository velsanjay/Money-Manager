const mongoose = require('mongoose')

const incomeModel = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    detail:{
        type:String,
        default:"Salary credit"
    },
    amount:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default: new Date
    },
    month:{
        type:Number,
        default:((new Date).getMonth()+1)
    },
    year:{
        type:Number,
        default:(new Date).getFullYear()
    },
    date:{
        type:Number,
        default:(new Date).getDate()
    },
    updatedAt:{
        type:Date,
        default:null
    }
})

module.exports = mongoose.model('income',incomeModel)