const SignUpRouter = require('express').Router();
const { hashPassword } = require('../../Common/auth');
const userModel =require('../../models/UserModel')

SignUpRouter.post('/signup', async(req, res, next)=>{
    const { name, email, password,confirmPassword}=req.body;

    const user =await userModel.findOne({email:email})

    if(!user){
    const newUser = new userModel({
        name,
        email,
        password
    })
    if(newUser.password==confirmPassword){ 
        let hashedPassword = await hashPassword(password)
        newUser.password = hashedPassword
    newUser.save().then((responce)=>{
        res.status(200).json({
            success:true,
            message:"User Created Successfullly!!!",
            data:responce
        })
    }).catch((err)=>{
        res.status(401).json({
            success:false,
            message:"User Created Failed!!!",
            error:err
        })
    })
}else{
    res.status(401).json({
        success:false,
        message:"Password are Not Same!!!"
    })
}
}else{
    res.status(401).json({
        success:false,
        message:"User Already Exist!!!"
    })
}

})

module.exports = SignUpRouter