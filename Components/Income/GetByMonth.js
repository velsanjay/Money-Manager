const IncomeMonthRouter = require('express').Router();
const incomeModel = require('../../models/IncomeModel');

IncomeMonthRouter.post('/month', async(req, res, next)=>{
    const {userId , month } = req.body;
const detail =[null,'January','February','March', 'April','May','June','July','Augest','September','October','November','December']

    await incomeModel.find({userId,month}).then((responce)=>{
            res.status(200).send({
                success:true,
                message:`Your ${detail[month]} month data is Feiched!!!`,
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

module.exports = IncomeMonthRouter
