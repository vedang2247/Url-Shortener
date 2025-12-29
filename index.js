const express=require("express")
const mongoose=require("mongoose")
const path=require("path")
const app=express()
const router=require("./Routes/url")
const port=8000
const Url=require("./Models/url")
const user=require('./Models/user')
const Connect=require("./connections")
const staticRouter=require("./Routes/Staticurl")
const UserRouter=require("./Routes/user")
const adminRouter=require("./Routes/admin")
const cookieParser = require("cookie-parser")
const {restrictTo,checkforAuthentication} = require("./Middleware/user")
require("dotenv").config();
//MongoDB Connect
Connect("mongodb://127.0.0.1:27017/url-shortener")
    .then(() => {
        console.log("MongoDB Connected!!")
    })
    .catch((err) => {
        console.log("Error Occured: ",err)
    })

//Middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())

//SSR
app.set("view engine","ejs")
app.set('views',path.resolve("./views"))

//Router

app.get("/url/:id",async (req,res) => {
    const shortId=req.params.id;
    try{
        const result=await Url.findOneAndUpdate({shortId},{
            $push: {
                visitHistory: {
                    timestamp:Date.now()
                }
            },
        })
        if (!result) {
        return res.status(404).json({ error: "Short URL not found" });
    }
        res.redirect(result.redirectUrl)
    }
    catch(err){
        res.json({ err: "No such Url Found!!"})
    }

})
app.use(checkforAuthentication)
app.use('/url',restrictTo(["NORMAL","ADMIN"]),router)
app.use('/',staticRouter)
app.use('/users',UserRouter)
app.use('/admin',restrictTo(["ADMIN"]),adminRouter);
app.listen(port,() => console.log("Server Started!!"))