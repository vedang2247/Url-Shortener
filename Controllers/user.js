const user=require("../Models/user")
const {setUser,getUser}=require("../Service/auth")
async function HandleUserSignup(req,res){
    const {username, email, password} = req.body
     user.create({
        name: username,
        email: email,
        password: password
     })
     return res.redirect("/users/login")
}

async function HandleUserLogin(req,res){
    const { email, password } = req.body
    const us = await user.findOne({ email,password})
    console.log(us)
    if(!us){
        return res.render('login',{
            error: "Wrong email or Password"
        })
    }
    const token=setUser(us);
    res.cookie("token",token);
    return res.redirect("/")
}
module.exports= {
    HandleUserSignup,
    HandleUserLogin
}