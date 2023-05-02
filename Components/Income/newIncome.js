const IncomeRouter = require('express').Router()
const { createToken } = require('../../Common/auth');
const incomeModel = require('../../models/IncomeModel')
const userModel = require('../../models/UserModel')

IncomeRouter.post('/new', async(req, res, next)=>{
    const { userId, detail , amount } = req.body;
    
 await userModel.findOne({_id:userId}).then(async()=>{
    const userIncome = new incomeModel({
        userId,
        detail,
        amount
    })
    let token = await createToken({
        userId : userIncome.userId,
        id:userIncome._id
    })

    userIncome.save().then((responce)=>{
        res.status(200).send({
            success:true,
            message:"Income Updated Successfully",
            data:responce,
            token
        })
    })
 }).catch((err)=>{
    res.status(401).send({
        success:false,
        message:"User Not Found",
        error:err
    })
 })

      

})

module.exports = IncomeRouter