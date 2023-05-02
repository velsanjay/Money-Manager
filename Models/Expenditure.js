const mongoose = require('mongoose')

const ExpenditureModel = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    catogorie:{
        type:String,
        require:true
    },
    detail:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        require:true
    },
    createdAt:{
        type:Date,
        default:new Date
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

module.exports = mongoose.model("expenditure",ExpenditureModel)