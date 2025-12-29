const { nanoid } = require('nanoid');
const Url=require("../Models/url")
async function handleGenerateShortURL(req,res){
    const body=req.body;
    if(!body.oldUrl){
        return res.status(400).send("Send Redirect Url")
    }
    const existingEntry = await Url.findOne({ redirectUrl: body.oldUrl });
    if (existingEntry) {
        return res.render("home", {
            id: existingEntry.shortId, 
        });
    }
    const oldUrl=body.oldUrl
    const short=nanoid(8);
    const result=await Url.create({
        shortId:short,
        redirectUrl:oldUrl,
        visitHistory: [],
        createdBy: req.user._id
    })
    console.log("User Created: ",result)
    return res.render('home',{
        id: short
    })
}

async function handleAnalytics(req,res){
    const id=req.params.id;
    try{
        const us=await Url.findOne({
            shortId:id
        })
        res.status(200).json({
            "Clicks" : us.visitHistory.length,
            "Analytics" : us.visitHistory
        })
    }
    catch(err){
        res.status(400).json({error : "Url Not Found!!"})
    }
    
}
module.exports={
    handleGenerateShortURL,
    handleAnalytics
}