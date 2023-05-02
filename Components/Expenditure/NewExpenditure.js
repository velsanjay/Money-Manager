const NewExpenditure = require('express').Router();
const { createToken } = require('../../Common/auth');
const ExpenditureModel = require('../../Models/Expenditure');
const userModel = require('../../Models/UserModel')

NewExpenditure.post('/new', async(req, res, next)=>{
    const { userId , catogorie, amount , detail } = req.body;

    await userModel.findOne({_id:userId}).then(async()=>{
        const userExpence = new ExpenditureModel({
            userId,
            detail,
            amount,
            catogorie
        })
        let token = await createToken({
            userId : userExpence.userId,
            id:userExpence._id
        })
    
        userExpence.save().then((responce)=>{
            res.status(200).send({
                success:true,
                message:"Expence Updated Successfully",
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

module.exports = NewExpenditure