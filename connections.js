const mongoose=require("mongoose")

async function Connect(url){
    return await mongoose.connect(url)
}

module.exports=Connect