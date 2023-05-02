const IncomeYearRouter = require('express').Router();
const incomeModel = require('../../models/IncomeModel');

IncomeYearRouter.post('/year', async(req, res, next)=>{
    const {userId , year } = req.body;

    await incomeModel.find({userId,year}).then((responce)=>{
            res.status(200).send({
                success:true,
                message:`Your data is Feiched!!!`,
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

module.exports = IncomeYearRouter
