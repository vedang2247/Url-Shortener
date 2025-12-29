const express=require("express")
const {HandleUserSignup,HandleUserLogin} =require("../Controllers/user")
const router=express.Router()
const url=require("../Models/url")
const { restrictTo } = require("../Middleware/user")
router.get('/',restrictTo, async(req,res) => {
    const users=url.find({})
    return res.render("home",{
        urls: users
    })
})
router.post("/signup",HandleUserSignup)
router.get('/login',(req,res) => {
    res.render("login")
})
router.get("/signup",(req,res) => {
    res.render("signup")
})

router.post('/login',HandleUserLogin)
module.exports=router