const GetUser = require('express').Router()
const UserModels = require('../../models/UserModel')

GetUser.post('/',async(req, res, next)=>{
    const {userId}= req.body

    await UserModels.findOne({_id:userId}).then((responce)=>{
        res.status(200).send({
            message:"User Detail Fetched",
            data:responce
        })
    }).catch((error)=>{
        res.status(401).send({
            message:"User Not found",
            error
        })
    })

})

module.exports = GetUser
