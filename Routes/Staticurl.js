const express=require("express")
const Url=require("../Models/url")
const router=express.Router()

router.get('/',async (req,res) => {
    console.log("The user is:",req.user)
    if(!req.user) return res.redirect("/users/login")
    const a=req.user._id;
    const allUsers=await Url.find({createdBy: a})
    return res.render('home',{
        urls:allUsers,
    })
})


module.exports=router