const GetExtenditureRouter = require('express').Router();
const ExpenditureModel = require('../../Models/Expenditure')

GetExtenditureRouter.post('/get', async(req, res, next)=>{
    const {userId}= req.body;

    await ExpenditureModel.find({userId}).then((responce)=>{
        res.status(200).send({
            success:true,
            message:"Expence Data Fetched Successfully",
            data:responce
        })
    }).catch((err)=>{
        res.status(402).send({
            success:false,
            message:"User Not Found",
            error:err
        })
    })
})

module.exports = GetExtenditureRouter;