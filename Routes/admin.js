const express=require("express")
const users=require("../Models/user")
const router=express.Router()

router.post('/users/:id',async (req,res) => {
    const id=req.params.id;
    await users.findByIdAndDelete(id);
    const allUsers=await users.find({})
    res.redirect('/admin/users')
})

router.get('/users', async (req,res) => {
    const us=await users.find({})
    res.render("admin",{
        users:us
    })
})

module.exports=router;