const EditIncomRoute = require('express').Router()
const { validate } = require('../../Common/auth')
const incomeModel = require('../../models/IncomeModel')

EditIncomRoute.patch('/edit',validate, async(req,res,next)=>{
    const {_id,detail,amount} = req.body;

   let user = await incomeModel.findOne({_id}).then(()=>{

    }).catch((err)=>{
        res.status(401).send({
            success:false,
            message:"User Not Found"
        })
    })

    user.detail=detail
    user.amount = amount
    await user.save().then((respone)=>{
        res.status(200).send({
            success:true,
            message:"Data Updated Successfully!!!",
            data:respone
        })
    })
})

module.exports = EditIncomRoute