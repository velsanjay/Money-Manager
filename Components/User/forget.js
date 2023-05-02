const ForgetRouter = require('express').Router()
const { hashPassword } = require('../../Common/auth');
const userModel = require('../../Models/UserModel')

ForgetRouter.patch('/forget',async(req,res,next)=>{
    const { email , password } = req.body;

    const user = await userModel.findOne({email}).then().catch((err)=>{
        res.status(401).send({
            success:false,
            message:"User Not Found!!!",
            error:err
        })
    })

    if(user){
        let hashedPassword = await hashPassword(password)
        user.password = hashedPassword
        user.save().then((responce)=>{
            res.status(200).send({
                success:true,
                message:"Password Changed Successfully!!! ",
                data:responce
            })  
        })
    }else{
        res.status(401).send({
            success:false,
            message:"User Not Found!!!"
        })
    }
})

module.exports = ForgetRouter;