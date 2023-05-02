const GetIncomeRouter = require('express').Router();
const incomeModel = require('../../models/IncomeModel')

GetIncomeRouter.post('/get', async(req,res,next)=>{
    const {userId} = req.body;

    await incomeModel.find({userId}).then((responce)=>{
        res.status(200).send({
            success:true,
            message:"Income Detail Fetched Successfully!!!",
            data:responce
        })
    }).catch((err)=>{
        res.status(401).send({
            success:false,
            message:"User Not Found!!!",
            error:err
        })
    })
})

module.exports = GetIncomeRouter