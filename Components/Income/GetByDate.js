const IncomeDateRouter = require('express').Router();
const incomeModel = require('../../models/IncomeModel');

IncomeDateRouter.post('/date', async(req, res, next)=>{
    const {userId , date } = req.body;

    await incomeModel.find({userId,date}).then((responce)=>{
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

module.exports = IncomeDateRouter
