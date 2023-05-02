const SignInRouter = require('express').Router()
const { hashCompare } = require('../../Common/auth');
const userModel = require('../../models/UserModel')

SignInRouter.post('/signin', async (req, res, next) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email })

    if (user) {
        if (await hashCompare(password,user.password)) {
            res.status(200).send({
                success: true,
                message: "SignIn Successfully!!!",
                data: user
            })
        } else {
            res.status(402).send({
                success: false,
                message: "Invalid Password!!!"
            })
        }
    } else {
        res.status(403).send({
            success: false,
            message: "User Not Found"
        })
    }
})

module.exports = SignInRouter